'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'Can I switch plans at any time?',
    a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.',
  },
  {
    q: 'Is there a free trial for paid plans?',
    a: 'All paid plans come with a 14-day free trial. No credit card required to start.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and select regional payment methods.',
  },
  {
    q: 'How does the DM automation work?',
    a: 'XpressDM connects to your social accounts and lets you create automated sequences, scheduled messages, and smart replies based on triggers you define.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. We use bank-grade 256-bit encryption and never sell your data. All data is stored on SOC 2 compliant servers.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

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
        Frequently Asked Questions
      </h2>
      <p
        style={{
          fontFamily: 'Nacelle, sans-serif',
          fontSize: 13,
          color: '#6B5F88',
          marginBottom: 20,
        }}
      >
        Everything you need to know
      </p>

      {faqs.map((faq, i) => (
        <div key={i} className="faq-item">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              padding: '16px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              fontFamily: 'Nacelle, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              color: '#fff',
              background: 'transparent',
              border: 'none',
              textAlign: 'left',
            }}
          >
            <span style={{ flex: 1, paddingRight: 12 }}>{faq.q}</span>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: 8,
                background: open === i ? 'rgba(124,58,237,0.3)' : 'rgba(124,58,237,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'background 0.2s, transform 0.2s',
                transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1V9M1 5H9" stroke="#A855F7" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
          </button>

          {open === i && (
            <div
              style={{
                padding: '0 20px 16px',
                fontFamily: 'Nacelle, sans-serif',
                fontSize: 13,
                color: '#B4A8D4',
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
