export interface EnquiryData {
  type: string;
  phone: string;
  work?: string;
  name?: string;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function sendEnquiry(data: EnquiryData): Promise<void> {
  const body = JSON.stringify({
    type: data.type,
    phone: data.phone,
    work: data.work || '—',
    name: data.name || '—',
    time: new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' }),
  });

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
      });
      if (res.ok) {
        // Real lead reached the server — fire the GTM/GA4 key event
        // (GA4's automatic form_submit doesn't fire here since these are
        // fetch()-based submits, not native form navigations).
        try {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: 'qualify_lead', lead_type: data.type });
        } catch {}
        return;
      }
      console.error(`sendEnquiry attempt ${attempt} failed: ${res.status}`);
    } catch (e) {
      console.error(`sendEnquiry attempt ${attempt} error:`, e);
    }
    if (attempt < 3) await sleep(1500);
  }
}
