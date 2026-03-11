'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';

const planDetails: Record<string, { name: string; monthly: number; annual: number }> = {
  free: { name: 'Free', monthly: 0, annual: 0 },
  pro: { name: 'Pro', monthly: 29, annual: 23 },
  business: { name: 'Business', monthly: 79, annual: 63 },
};

function CheckoutContent() {
  const params = useSearchParams();
  const planId = params.get('plan') || 'pro';
  const billing = params.get('billing') || 'monthly';
  const plan = planDetails[planId] || planDetails.pro;
  const price = billing === 'annual' ? plan.annual : plan.monthly;

  return (
    <div style={{ padding: '32px 20px 100px' }}>
      {/* Back */}
      <Link
        href="/pricing"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          textDecoration: 'none',
          marginBottom: 28,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8L10 4" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 14, color: '#A855F7' }}>Back to Pricing</span>
      </Link>

      <h1
        style={{
          fontFamily: 'Nacelle, sans-serif',
          fontSize: 28,
          fontWeight: 800,
          color: '#fff',
          letterSpacing: '-0.03em',
          marginBottom: 6,
        }}
      >
        Complete Your Order
      </h1>
      <p style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 13, color: '#6B5F88', marginBottom: 28 }}>
        You're one step away from growing faster
      </p>

      {/* Order summary */}
      <div
        style={{
          padding: '20px',
          borderRadius: 16,
          border: '1px solid rgba(124,58,237,0.25)',
          background: 'linear-gradient(145deg, #2D1A5E 0%, #1E1040 100%)',
          marginBottom: 24,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div>
            <div style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 18, fontWeight: 700, color: '#fff' }}>
              XpressDM {plan.name}
            </div>
            <div style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 12, color: '#6B5F88', marginTop: 3 }}>
              {billing === 'annual' ? 'Annual billing' : 'Monthly billing'}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 24, fontWeight: 800, color: '#fff' }}>
              ${price}
            </div>
            <div style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 11, color: '#6B5F88' }}>/mo
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: 'rgba(124,58,237,0.15)', margin: '12px 0' }} />

        {billing === 'annual' && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'Nacelle, sans-serif',
              fontSize: 13,
              color: '#FCD34D',
            }}
          >
            <span>Annual discount (20%)</span>
            <span>-${(planDetails[planId]?.monthly || 29) - price}/mo</span>
          </div>
        )}

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'Nacelle, sans-serif',
            fontSize: 13,
            color: '#B4A8D4',
            marginTop: 8,
          }}
        >
          <span>14-day free trial</span>
          <span style={{ color: '#A855F7' }}>Included ✓</span>
        </div>
      </div>

      {/* Form */}
      <div style={{ marginBottom: 24 }}>
        <label style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 12, color: '#B4A8D4', display: 'block', marginBottom: 8 }}>
          Email address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          style={{
            width: '100%',
            padding: '14px 16px',
            borderRadius: 12,
            border: '1px solid rgba(124,58,237,0.25)',
            background: '#1A1030',
            color: '#fff',
            fontFamily: 'Nacelle, sans-serif',
            fontSize: 14,
            outline: 'none',
            marginBottom: 14,
          }}
        />

        <label style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 12, color: '#B4A8D4', display: 'block', marginBottom: 8 }}>
          Card number
        </label>
        <input
          type="text"
          placeholder="1234 5678 9012 3456"
          style={{
            width: '100%',
            padding: '14px 16px',
            borderRadius: 12,
            border: '1px solid rgba(124,58,237,0.25)',
            background: '#1A1030',
            color: '#fff',
            fontFamily: 'Nacelle, sans-serif',
            fontSize: 14,
            outline: 'none',
            marginBottom: 14,
          }}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <label style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 12, color: '#B4A8D4', display: 'block', marginBottom: 8 }}>
              Expiry
            </label>
            <input
              type="text"
              placeholder="MM / YY"
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: 12,
                border: '1px solid rgba(124,58,237,0.25)',
                background: '#1A1030',
                color: '#fff',
                fontFamily: 'Nacelle, sans-serif',
                fontSize: 14,
                outline: 'none',
              }}
            />
          </div>
          <div>
            <label style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 12, color: '#B4A8D4', display: 'block', marginBottom: 8 }}>
              CVC
            </label>
            <input
              type="text"
              placeholder="123"
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: 12,
                border: '1px solid rgba(124,58,237,0.25)',
                background: '#1A1030',
                color: '#fff',
                fontFamily: 'Nacelle, sans-serif',
                fontSize: 14,
                outline: 'none',
              }}
            />
          </div>
        </div>
      </div>

      <button className="btn-primary" style={{ marginBottom: 16 }}>
        Start 14-Day Free Trial
      </button>

      <p style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 11, color: '#6B5F88', textAlign: 'center', lineHeight: 1.6 }}>
        No charge today. Your trial starts immediately. Cancel anytime before the trial ends.
      </p>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div style={{ padding: 40, color: '#6B5F88', fontFamily: 'Nacelle, sans-serif' }}>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
