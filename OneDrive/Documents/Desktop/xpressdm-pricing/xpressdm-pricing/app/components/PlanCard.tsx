'use client';
import Link from 'next/link';

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  badge?: string;
  badgeType?: 'popular' | 'best';
  featured?: boolean;
  features: PlanFeature[];
  ctaLabel: string;
  ctaVariant: 'primary' | 'outline';
}

interface PlanCardProps {
  plan: Plan;
  isAnnual: boolean;
  delay?: number;
}

function CheckIcon({ included }: { included: boolean }) {
  if (included) {
    return (
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: '50%',
          background: 'rgba(124,58,237,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="#A855F7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  return (
    <div
      style={{
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: 'rgba(107,95,136,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M1 1L7 7M7 1L1 7" stroke="#6B5F88" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function PlanCard({ plan, isAnnual, delay = 0 }: PlanCardProps) {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const period = isAnnual ? '/mo, billed annually' : '/month';

  return (
    <div
      className={`plan-card animate-in ${plan.featured ? 'featured' : ''}`}
      style={{ animationDelay: `${delay}ms`, marginBottom: 16 }}
    >
      {/* Glow blob for featured */}
      {plan.featured && (
        <div
          style={{
            position: 'absolute',
            top: -40,
            right: -40,
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div>
          <h3
            style={{
              fontFamily: 'Nacelle, sans-serif',
              fontSize: 20,
              fontWeight: 700,
              color: '#fff',
              marginBottom: 4,
            }}
          >
            {plan.name}
          </h3>
          <p
            style={{
              fontFamily: 'Nacelle, sans-serif',
              fontSize: 12,
              color: '#B4A8D4',
              fontWeight: 300,
            }}
          >
            {plan.tagline}
          </p>
        </div>

        {plan.badge && (
          <span
            style={{
              padding: '4px 10px',
              borderRadius: 20,
              fontSize: 10,
              fontWeight: 700,
              fontFamily: 'Nacelle, sans-serif',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              ...(plan.badgeType === 'popular'
                ? {
                    background: 'rgba(124,58,237,0.2)',
                    color: '#C084FC',
                    border: '1px solid rgba(124,58,237,0.4)',
                  }
                : {
                    background: 'rgba(245,158,11,0.15)',
                    color: '#FCD34D',
                    border: '1px solid rgba(245,158,11,0.3)',
                  }),
            }}
          >
            {plan.badge}
          </span>
        )}
      </div>

      {/* Price */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
          <span
            style={{
              fontFamily: 'Nacelle, sans-serif',
              fontSize: 13,
              fontWeight: 400,
              color: '#B4A8D4',
              marginRight: 2,
            }}
          >
            $
          </span>
          <span
            style={{
              fontFamily: 'Nacelle, sans-serif',
              fontSize: 42,
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            {price === 0 ? 'Free' : price}
          </span>
        </div>
        {price > 0 && (
          <p
            style={{
              fontFamily: 'Nacelle, sans-serif',
              fontSize: 12,
              color: '#6B5F88',
              marginTop: 4,
            }}
          >
            {period}
          </p>
        )}
        {price === 0 && (
          <p
            style={{
              fontFamily: 'Nacelle, sans-serif',
              fontSize: 12,
              color: '#6B5F88',
              marginTop: 4,
            }}
          >
            Forever free
          </p>
        )}
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.2), transparent)',
          marginBottom: 16,
        }}
      />

      {/* Features */}
      <div style={{ marginBottom: 20 }}>
        {plan.features.map((f, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              padding: '6px 0',
            }}
          >
            <CheckIcon included={f.included} />
            <span
              style={{
                fontFamily: 'Nacelle, sans-serif',
                fontSize: 13,
                color: f.included ? '#E2D9F3' : '#6B5F88',
                lineHeight: 1.5,
                fontWeight: f.included ? 400 : 300,
              }}
            >
              {f.text}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={plan.monthlyPrice === 0 ? '/signup' : `/checkout?plan=${plan.id}&billing=${isAnnual ? 'annual' : 'monthly'}`}
        className={plan.ctaVariant === 'primary' ? 'btn-primary' : 'btn-outline'}
      >
        {plan.ctaLabel}
      </Link>
    </div>
  );
}
