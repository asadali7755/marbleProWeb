// Cloudflare Pages Function: POST /api/enquiry
// Emails a website lead through the Resend API. Replaces the Next.js route
// handler, which a static export cannot run. Set RESEND_API_KEY (and
// optionally ENQUIRY_TO / ENQUIRY_FROM) in the Pages project settings.

const ALLOWED_HOSTS = ['marblepro.ae', 'www.marblepro.ae', 'localhost', '127.0.0.1'];

// Best-effort per-isolate throttle: isolates don't share memory, but this
// still stops a single client hammering one warm isolate.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function clean(value, max) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function sameOrigin(request) {
  const origin = request.headers.get('origin');
  if (!origin) return true; // same-origin fetches from some browsers omit it
  try {
    const host = new URL(origin).hostname;
    return ALLOWED_HOSTS.includes(host) || host.endsWith('.pages.dev');
  } catch {
    return false;
  }
}

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export async function onRequestPost({ request, env }) {
  if (!sameOrigin(request)) return json({ ok: false, error: 'forbidden' }, 403);

  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  if (rateLimited(ip)) return json({ ok: false, error: 'too_many_requests' }, 429);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  const type = clean(body.type, 60) || 'Enquiry';
  const phone = clean(body.phone, 30);
  const name = clean(body.name, 80);
  const work = clean(body.work, 1000);
  const time = clean(body.time, 60) || new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' });

  const digits = phone.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) return json({ ok: false, error: 'invalid_phone' }, 400);

  const e = {
    type: escapeHtml(type),
    phone: escapeHtml(phone),
    name: escapeHtml(name || '—'),
    work: escapeHtml(work || '—'),
    time: escapeHtml(time),
  };
  const page = escapeHtml(clean(request.headers.get('referer'), 300) || '—');

  const row = (label, value, bold = false) =>
    `<tr><td style="padding:10px 0;border-bottom:1px solid #e8e0d0;color:#666;width:110px;">${label}</td><td style="padding:10px 0;border-bottom:1px solid #e8e0d0;${bold ? 'font-weight:600;' : ''}color:#1a1208;">${value}</td></tr>`;

  const html = `
    <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px;background:#f9f6f1;border-radius:12px;border-top:4px solid #c4a060;">
      <div style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#9a7a3c;font-weight:700;">marblepro.ae</div>
      <h2 style="margin:0 0 24px;font-size:22px;color:#1a1208;">New ${e.type}</h2>
      <table style="width:100%;border-collapse:collapse;">
        ${row('Name', e.name, true)}
        ${row('Phone', e.phone, true)}
        ${row('Work', e.work)}
        ${row('Type', e.type)}
        ${row('Page', page)}
        <tr><td style="padding:10px 0;color:#666;">Time (Dubai)</td><td style="padding:10px 0;color:#1a1208;">${e.time}</td></tr>
      </table>
    </div>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.ENQUIRY_FROM || 'MarblePro Website <onboarding@resend.dev>',
        to: [env.ENQUIRY_TO || 'marbleprodxb@gmail.com'],
        subject: `[MarblePro] New ${type.replace(/[\r\n]/g, ' ')}`,
        html,
      }),
    });
    if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
    return json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return json({ ok: false, error: 'send_failed' }, 500);
  }
}
