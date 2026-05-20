import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY!);
  try {
    const { type, phone, work, name, time } = await req.json();

    await resend.emails.send({
      from: 'MarblePro Website <onboarding@resend.dev>',
      to: 'marbleprodxb@gmail.com',
      subject: `New Enquiry — ${type}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px;background:#f9f6f1;border-radius:12px;">
          <h2 style="margin:0 0 24px;font-size:22px;color:#1a1208;">New Enquiry — MarblePro Website</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #e8e0d0;color:#666;width:110px;">Type</td><td style="padding:10px 0;border-bottom:1px solid #e8e0d0;font-weight:600;color:#1a1208;">${type}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e8e0d0;color:#666;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e8e0d0;font-weight:600;color:#1a1208;">${phone}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e8e0d0;color:#666;">Work</td><td style="padding:10px 0;border-bottom:1px solid #e8e0d0;color:#1a1208;">${work || '—'}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e8e0d0;color:#666;">Name</td><td style="padding:10px 0;border-bottom:1px solid #e8e0d0;color:#1a1208;">${name || '—'}</td></tr>
            <tr><td style="padding:10px 0;color:#666;">Time</td><td style="padding:10px 0;color:#1a1208;">${time}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
