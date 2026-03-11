'use client';

const rows = [
  { feature: 'DMs per month', free: '50', pro: '2,000', business: 'Unlimited' },
  { feature: 'Automation sequences', free: '1', pro: '20', business: 'Unlimited' },
  { feature: 'AI smart replies', free: '—', pro: '✓', business: '✓' },
  { feature: 'Analytics dashboard', free: 'Basic', pro: 'Advanced', business: 'Custom' },
  { feature: 'Team members', free: '1', pro: '3', business: 'Unlimited' },
  { feature: 'Priority support', free: '—', pro: 'Email', business: '24/7 Chat' },
  { feature: 'API access', free: '—', pro: '—', business: '✓' },
  { feature: 'Custom branding', free: '—', pro: '—', business: '✓' },
];

export default function ComparisonTable() {
  return (
    <div style={{ padding: '0 20px 32px' }}>
      <h2
        style={{
          fontFamily: 'Nacelle, sans-serif',
          fontSize: 22,
          fontWeight: 700,
          color: '#fff',
          marginBottom: 6,
          letterSpacing: '-0.02em',
        }}
      >
        Compare Plans
      </h2>
      <p
        style={{
          fontFamily: 'Nacelle, sans-serif',
          fontSize: 13,
          color: '#6B5F88',
          marginBottom: 20,
        }}
      >
        See what's included in each tier
      </p>

      <div
        style={{
          borderRadius: 16,
          border: '1px solid rgba(124,58,237,0.15)',
          overflow: 'hidden',
          background: '#1A1030',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 60px 60px 80px',
            padding: '12px 16px',
            background: 'rgba(124,58,237,0.1)',
            borderBottom: '1px solid rgba(124,58,237,0.15)',
          }}
        >
          <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 11, color: '#6B5F88', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Feature</span>
          {['Free', 'Pro', 'Business'].map((h) => (
            <span
              key={h}
              style={{
                fontFamily: 'Nacelle, sans-serif',
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textAlign: 'center',
                color: h === 'Pro' ? '#A855F7' : '#6B5F88',
              }}
            >
              {h}
            </span>
          ))}
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 60px 60px 80px',
              padding: '12px 16px',
              borderBottom: i < rows.length - 1 ? '1px solid rgba(124,58,237,0.08)' : 'none',
              alignItems: 'center',
            }}
          >
            <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 13, color: '#E2D9F3' }}>{row.feature}</span>
            {[row.free, row.pro, row.business].map((val, j) => (
              <span
                key={j}
                style={{
                  fontFamily: 'Nacelle, sans-serif',
                  fontSize: 12,
                  textAlign: 'center',
                  color: val === '—' ? '#3D3358' : j === 1 ? '#C084FC' : '#B4A8D4',
                  fontWeight: j === 1 ? 600 : 400,
                }}
              >
                {val}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
