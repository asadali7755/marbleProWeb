'use client';
import { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { PHONE_DISPLAY, PHONE_TEL, WA_LINK } from './constants';
import { sendEnquiry } from '@/lib/sendEmail';

type ToastVariant = 'success' | 'error';

interface ModalCtxType {
  open: () => void;
  close: () => void;
  showToast: (msg?: string, variant?: ToastVariant) => void;
}
const ModalCtx = createContext<ModalCtxType>({ open: () => {}, close: () => {}, showToast: () => {} });
export function useRequestCall() { return useContext(ModalCtx); }
export function useToast() { return useContext(ModalCtx).showToast; }

export const ENQUIRY_FAILED_MSG = "We couldn't send your request. Please WhatsApp or call us — we reply fast.";

function SuccessToast({ message, variant, onDone }: { message: string; variant: ToastVariant; onDone: () => void }) {
  const isError = variant === 'error';
  useEffect(() => {
    const t = setTimeout(onDone, isError ? 10000 : 5000);
    return () => clearTimeout(t);
  }, [onDone, isError]);
  return (
    <div className={`success-toast${isError ? ' is-error' : ''}`} role={isError ? 'alert' : 'status'}>
      <div className="st-icon">
        {isError ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="7" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        )}
      </div>
      <div className="st-body">
        <span className="st-title">{isError ? 'Not sent' : 'Request sent'}</span>
        <span className="st-msg">
          {message}
          {isError && (
            <>
              {' '}
              <a href={`${WA_LINK}?text=${encodeURIComponent('Hi MarblePro, I need a quote.')}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              {' · '}
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </>
          )}
        </span>
      </div>
      <button className="st-close" onClick={onDone} aria-label="Dismiss">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  );
}

export function RequestCallProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<{ msg: string; variant: ToastVariant } | null>(null);

  const showToast = (msg = "We'll be in touch shortly.", variant: ToastVariant = 'success') => {
    setToast({ msg, variant });
  };

  const value = { open: () => setIsOpen(true), close: () => setIsOpen(false), showToast };

  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    if (isOpen) window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [isOpen]);

  return (
    <ModalCtx.Provider value={value}>
      {children}
      {isOpen && (
        <RequestCallModal
          onClose={value.close}
          onSent={(msg) => { value.close(); showToast(msg); }}
          onFailed={() => showToast(ENQUIRY_FAILED_MSG, 'error')}
        />
      )}
      {toast && <SuccessToast key={toast.msg + toast.variant} message={toast.msg} variant={toast.variant} onDone={() => setToast(null)} />}
    </ModalCtx.Provider>
  );
}

function RequestCallModal({ onClose, onSent, onFailed }: { onClose: () => void; onSent: (msg: string) => void; onFailed: () => void }) {
  const [phone, setPhone] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { inputRef.current?.focus(); }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) { setErr('Phone number is required'); return; }
    setErr('');
    setLoading(true);
    try {
      await sendEnquiry({ type: 'Request a Call', phone });
    } catch {
      // Keep the modal open with the number still filled in, so nothing is lost.
      setLoading(false);
      onFailed();
      return;
    }
    setLoading(false);
    onSent('We got your number! Expect a call back shortly.');
  };

  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <span className="lab">Request a Call</span>
        <h3>Drop your number.<br/>We&apos;ll call you back.</h3>
        <p>One field. No name, no email, no fuss. Free quote on the call.</p>
        <form onSubmit={submit}>
          <input
            ref={inputRef}
            type="tel"
            inputMode="tel"
            placeholder="+971 5X XXX XXXX *"
            value={phone}
            onChange={(e) => { setPhone(e.target.value); setErr(''); }}
            style={err ? { borderColor: '#e53e3e' } : {}}
          />
          {err && <span style={{ color: '#e53e3e', fontSize: 12, marginTop: 4, display: 'block' }}>{err}</span>}
          <button type="submit" className="submit" disabled={loading}>
            {loading ? 'Sending…' : 'Call me back →'}
          </button>
        </form>
        <div className="or">Or reach us instantly</div>
        <div className="alt">
          <a href={`tel:${PHONE_TEL}`}>📞 {PHONE_DISPLAY}</a>
          <a href={`${WA_LINK}?text=${encodeURIComponent("Hi MarblePro, I'd like a quote.")}`} target="_blank" rel="noopener">💬 WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
