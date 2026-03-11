import Link from 'next/link';

export default function Page() {
  return (
    <div style={{ padding: '40px 24px', textAlign: 'center', paddingBottom: 120 }}>
      <div style={{
        width: 64, height: 64, borderRadius: 20, background: 'linear-gradient(135deg, #f97316, #e8356d)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
        boxShadow: '0 0 24px rgba(233,53,109,0.4)'
      }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="10" stroke="white" strokeWidth="2"/>
          <path d="M14 10v4l3 3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <h1 style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 24, fontWeight: 800, color: '#fff', marginBottom: 10 }}>
        Coming Soon
      </h1>
      <p style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.4)', marginBottom: 32 }}>
        This page is under construction.
      </p>
      <Link href="/pricing" style={{
        display: 'inline-block', padding: '12px 28px', borderRadius: 24,
        background: 'linear-gradient(90deg, #f97316, #e8356d)',
        color: '#fff', fontFamily: 'Nacelle, sans-serif', fontWeight: 600, fontSize: 14,
        textDecoration: 'none'
      }}>← Back to Pricing</Link>
    </div>
  );
}
