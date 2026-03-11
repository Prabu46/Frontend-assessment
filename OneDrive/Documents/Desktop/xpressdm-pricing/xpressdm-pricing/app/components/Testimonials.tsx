'use client';

const testimonials = [
  {
    name: 'Sarah K.',
    role: 'Influencer · 45K followers',
    text: 'XpressDM tripled my response rate in just 2 weeks. The AI replies feel completely natural.',
    avatar: 'SK',
    color: '#7C3AED',
  },
  {
    name: 'Marcus D.',
    role: 'Agency Owner',
    text: 'Managing DMs for 12 clients used to be a nightmare. Now it takes 20 minutes a day.',
    avatar: 'MD',
    color: '#A855F7',
  },
  {
    name: 'Priya S.',
    role: 'E-commerce Founder',
    text: 'The automation sequences converted 3x more leads from Instagram than our old manual method.',
    avatar: 'PS',
    color: '#6D28D9',
  },
];

export default function Testimonials() {
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
        Loved by creators
      </h2>
      <p
        style={{
          fontFamily: 'Nacelle, sans-serif',
          fontSize: 13,
          color: '#6B5F88',
          marginBottom: 20,
        }}
      >
        Join 50,000+ professionals using XpressDM
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              padding: '18px',
              borderRadius: 16,
              border: '1px solid rgba(124,58,237,0.15)',
              background: '#1A1030',
            }}
          >
            {/* Stars */}
            <div style={{ display: 'flex', gap: 3, marginBottom: 10 }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="#F59E0B">
                  <path d="M6 0l1.5 3.5L11 4 8.5 6.5l.5 4L6 9l-3 1.5.5-4L1 4l3.5-.5L6 0z" />
                </svg>
              ))}
            </div>

            <p
              style={{
                fontFamily: 'Nacelle, sans-serif',
                fontSize: 13,
                color: '#E2D9F3',
                lineHeight: 1.6,
                marginBottom: 14,
                fontWeight: 300,
                fontStyle: 'italic',
              }}
            >
              &ldquo;{t.text}&rdquo;
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 10,
                  background: t.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Nacelle, sans-serif',
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#fff',
                }}
              >
                {t.avatar}
              </div>
              <div>
                <div style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 13, fontWeight: 600, color: '#fff' }}>
                  {t.name}
                </div>
                <div style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 11, color: '#6B5F88' }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
