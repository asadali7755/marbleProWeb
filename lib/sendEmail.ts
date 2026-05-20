export interface EnquiryData {
  type: string;
  phone: string;
  work?: string;
  name?: string;
}

export async function sendEnquiry(data: EnquiryData): Promise<void> {
  const res = await fetch('/api/enquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: data.type,
      phone: data.phone,
      work: data.work || '—',
      name: data.name || '—',
      time: new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' }),
    }),
  });
  if (!res.ok) throw new Error(`Send failed: ${res.status}`);
}
