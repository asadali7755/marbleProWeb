'use client';
import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WA_LINK } from './constants';
import { sendEnquiry } from '@/lib/sendEmail';

interface ModalCtxType { open: () => void; close: () => void; }
const ModalCtx = createContext<ModalCtxType>({ open: () => {}, close: () => {} });
export function useRequestCall() { return useContext(ModalCtx); }

export function RequestCallProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const value = { open: () => setIsOpen(true), close: () => setIsOpen(false) };
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    if (isOpen) window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [isOpen]);
  return (
    <ModalCtx.Provider value={value}>
      {children}
      {isOpen && <RequestCallModal onClose={value.close} />}
    </ModalCtx.Provider>
  );
}

function RequestCallModal({ onClose }: { onClose: () => void }) {
  const [phone, setPhone] = useState('');
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { inputRef.current?.focus(); }, []);
  const [err, setErr] = useState('');
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) { setErr('Phone number is required'); return; }
    setErr('');
    try { await sendEnquiry({ type: 'Request a Call', phone }); } catch {}
    setDone(true);
  };
  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        {!done ? (
          <>
            <span className="lab">Request a Call</span>
            <h3>Drop your number.<br/>We&apos;ll call you back.</h3>
            <p>One field. No name, no email, no fuss. Free quote on the call.</p>
            <form onSubmit={submit}>
              <input ref={inputRef} type="tel" inputMode="tel" placeholder="+971 5X XXX XXXX *" value={phone} onChange={(e) => { setPhone(e.target.value); setErr(''); }} style={err ? { borderColor:'#e53e3e' } : {}} />
              {err && <span style={{ color:'#e53e3e', fontSize:12, marginTop:4, display:'block' }}>{err}</span>}
              <button type="submit" className="submit">Call me back →</button>
            </form>
            <div className="or">Or reach us instantly</div>
            <div className="alt">
              <a href={`tel:${PHONE_TEL}`}>📞 {PHONE_DISPLAY}</a>
              <a href={`${WA_LINK}?text=${encodeURIComponent("Hi MarblePro, I'd like a quote.")}`} target="_blank" rel="noopener">💬 WhatsApp</a>
            </div>
          </>
        ) : (
          <div className="success">
            <div className="tick">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 style={{ textAlign: 'center', margin: '0 0 8px' }}>We got your number!</h3>
            <p style={{ textAlign: 'center', margin: 0, opacity: 0.65 }}>
              We&apos;ll call you back shortly. Can&apos;t wait? Dial us on{' '}
              <a style={{ color: 'var(--gold)' }} href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
