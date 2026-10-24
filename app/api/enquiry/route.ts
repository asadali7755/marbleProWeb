import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Set ENQUIRY_TO in Vercel to change the lead inbox without a code change.
const LEADS_TO = process.env.ENQUIRY_TO || 'marbleprodxb@gmail.com';
// Set ENQUIRY_FROM (e.g. "MarblePro UAE <leads@marblepro.ae>") once the
// domain is verified in Resend. The resend.dev sandbox sender only delivers
// to the Resend account owner and fails SPF/DKIM for the brand.
const LEADS_FROM = process.env.ENQUIRY_FROM || 'MarblePro Website <onboarding@resend.dev>';

const ALLOWED_HOSTS = ['marblepro.ae', 'www.marblepro.ae', 'localhost', '127.0.0.1'];

// Best-effort per-instance throttle: serverless instances don't share memory,
// but this still stops a single client hammering one warm instance.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function sameOrigin(req: NextRequest): boolean {
  const origin = req.headers.get('origin');
  if (!origin) return true; // same-origin fetches from some browsers omit it
  try {
    const host = new URL(origin).hostname;
    return ALLOWED_HOSTS.includes(host) || host.endsWith('.vercel.app');
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  if (!sameOrigin(req)) {
    return NextResponse.json({ ok: false, error: 'forbidden' }, { status: 403 });
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'too_many_requests' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const type = clean(body.type, 60) || 'Enquiry';
  const phone = clean(body.phone, 30);
  const name = clean(body.name, 80);
  const work = clean(body.work, 1000);
  const time = clean(body.time, 60) || new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' });

  const digits = phone.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) {
    return NextResponse.json({ ok: false, error: 'invalid_phone' }, { status: 400 });
  }

  const e = {
    type: escapeHtml(type),
    phone: escapeHtml(phone),
    name: escapeHtml(name || '—'),
    work: escapeHtml(work || '—'),
    time: escapeHtml(time),
  };
  const page = escapeHtml(clean(req.headers.get('referer'), 300) || '—');

  const row = (label: string, value: string, bold = false) =>
    `<tr><td style="padding:10px 0;border-bottom:1px solid #e8e0d0;color:#666;width:110px;">${label}</td><td style="padding:10px 0;border-bottom:1px solid #e8e0d0;${bold ? 'font-weight:600;' : ''}color:#1a1208;">${value}</td></tr>`;

  const resend = new Resend(process.env.RESEND_API_KEY!);
  try {
    const { error } = await resend.emails.send({
      from: LEADS_FROM,
      to: LEADS_TO,
      subject: `[MarblePro] New ${type.replace(/[\r\n]/g, ' ')}`,
      html: `
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
      `,
    });
    // resend.emails.send resolves with { error } instead of throwing on API errors.
    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 500 });
  }
}
