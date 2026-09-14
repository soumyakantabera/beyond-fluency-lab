import { useEffect, useRef, useState } from 'react';
import { countryOptions } from '@/lib/country-options';
import { COUNTRY_PREFERENCE_KEY, normalizeCountry } from '@/lib/countries';
import { LabIcon } from './lab-icon';

export function CountrySelector() {
  const [country, setCountry] = useState('');
  const [mode, setMode] = useState<'loading'|'automatic'|'manual'|'unknown'>('loading');
  const [saved, setSaved] = useState(true);
  const manual = useRef<string|null>(null);
  const refresh = useRef<()=>void>(()=>{});
  useEffect(() => {
    let disposed = false;
    let pending: AbortController | undefined;
    try { manual.current = normalizeCountry(localStorage.getItem(COUNTRY_PREFERENCE_KEY)); } catch {}
    if (manual.current) { setCountry(manual.current); setMode('manual'); }
    const detect = async () => {
      if (manual.current || disposed) return;
      pending?.abort();
      const controller = new AbortController(); pending = controller;
      const timer = setTimeout(()=>controller.abort(), 6000);
      setMode('loading');
      try {
        const response = await fetch('/api/visitor-country', {cache:'no-store',signal:controller.signal});
        if (!response.ok) throw new Error('Country unavailable');
        const data = await response.json();
        if (disposed || manual.current || pending !== controller) return;
        const code = normalizeCountry(data.country);
        setCountry(code || ''); setMode(code ? 'automatic' : 'unknown');
      } catch {
        if (!disposed && !manual.current && pending === controller) { setCountry(''); setMode('unknown'); }
      } finally { clearTimeout(timer); }
    };
    refresh.current = () => { void detect(); };
    const visible = () => { if (document.visibilityState === 'visible') void detect(); };
    void detect();
    window.addEventListener('online', detect);
    document.addEventListener('visibilitychange', visible);
    return () => { disposed=true; pending?.abort(); window.removeEventListener('online',detect); document.removeEventListener('visibilitychange',visible); };
  }, []);
  function choose(value: string) {
    const code = normalizeCountry(value);
    if (!code) return;
    manual.current=code; setCountry(code); setMode('manual');
    try {localStorage.setItem(COUNTRY_PREFERENCE_KEY,code);setSaved(true);} catch {setSaved(false);}
  }
  function automatic() {
    manual.current=null;
    try {localStorage.removeItem(COUNTRY_PREFERENCE_KEY);setSaved(true);} catch {setSaved(false);}
    refresh.current();
  }
  return <section className="country-preference" aria-label="Country preference">
    <div className="country-control"><label htmlFor="visitor-country"><LabIcon name="globe" size={20}/> Country / region</label>
      <select id="visitor-country" value={country} onChange={e=>choose(e.target.value)} aria-describedby="country-status">
        <option value="" disabled>{mode==='loading'?'Detecting country…':'Select your country'}</option>
        {countryOptions.map(c=><option key={c.code} value={c.code}>{c.name}</option>)}
      </select>
    </div>
    <div className="country-help"><p id="country-status" role="status">{mode==='loading'?'Checking your network location…':mode==='manual'?(saved?'Your selection is saved on this browser.':'Selected for this visit; browser storage is unavailable.'):mode==='automatic'?'Detected from your network. You can change it.':'We couldn’t detect your country. Please choose it above.'}</p>
      <button type="button" onClick={automatic} disabled={mode==='loading'}>{mode==='manual'?'Use automatic detection':'Detect again'}</button>
    </div>
  </section>;
}
