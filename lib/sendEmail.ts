import emailjs from '@emailjs/browser';

const SVC  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TPL  = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export interface EnquiryData {
  type: string;   // e.g. "Quote Request", "Call Back", "Contact Form"
  phone: string;
  work?: string;
  name?: string;
}

export async function sendEnquiry(data: EnquiryData): Promise<void> {
  await emailjs.send(SVC, TPL, {
    type:  data.type,
    phone: data.phone,
    work:  data.work || '—',
    name:  data.name || '—',
    time:  new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' }),
  }, { publicKey: KEY });
}
