import emailjs from '@emailjs/browser';

const SVC  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TPL  = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const TO   = 'marbleprodxb@gmail.com';

export interface EnquiryData {
  type: string;
  phone: string;
  work?: string;
  name?: string;
}

export async function sendEnquiry(data: EnquiryData): Promise<void> {
  const res = await emailjs.send(SVC, TPL, {
    to_email: TO,
    type:     data.type,
    phone:    data.phone,
    work:     data.work || '—',
    name:     data.name || '—',
    time:     new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' }),
  }, { publicKey: KEY });
  if (res.status !== 200) throw new Error(`EmailJS ${res.status}: ${res.text}`);
}
