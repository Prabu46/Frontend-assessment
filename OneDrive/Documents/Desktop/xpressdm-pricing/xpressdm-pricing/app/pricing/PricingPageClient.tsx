'use client';
import { useState } from 'react';
import Link from 'next/link';

type BillingCycle = 'monthly' | 'quarterly' | 'annually';

const TABS: { key: BillingCycle; label: string }[] = [
  { key: 'monthly', label: 'Monthly' },
  { key: 'quarterly', label: 'Quarterly' },
  { key: 'annually', label: 'Annually' },
];

// Orange-red gradient check icon (included)
function CheckOn() {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 20, height: 20, borderRadius: '50%',
      background: 'linear-gradient(135deg, #f97316, #e8356d)',
      flexShrink: 0,
    }}>
      <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
        <path d="M1 4.5L4 7.5L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

// Grey check icon (not included / coming soon)
function CheckOff() {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 20, height: 20, borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)',
      flexShrink: 0,
    }}>
      <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
        <path d="M1 4.5L4 7.5L10 1" stroke="#666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

const freeFeatures = [
  { text: 'Unlimited Automations', on: true },
  { text: '1000 DM', on: true },
  { text: '1000 Contact', on: true },
  { text: 'Ask to follow', on: false },
  { text: 'Lead Generation', on: false },
  { text: 'Smart Follow-ups · Coming Soon', on: false },
  { text: 'AI Reply · Coming Soon', on: false },
];

const proFeatures = [
  { text: 'Unlimited Automations', on: true },
  { text: 'Unlimited DMs', on: true },
  { text: 'Unlimited Contacts', on: true },
  { text: 'Ask to Follow', on: true },
  { text: 'Lead Generation', on: true },
  { text: 'Smart Follow-ups · Coming Soon', on: true },
  { text: 'AI Reply · Coming Soon', on: true },
];

const enterpriseFeatures = [
  { text: 'Add multiple Accounts', on: true },
  { text: 'Custom Solutions', on: true },
  { text: 'Early Access New Features', on: true },
  { text: 'Priority Support', on: true },
];

const compareRows = [
  { label: 'Pricing', free: '0', pro: '₹399 (Changes based\non plan duration)' },
  { label: 'Automations', free: 'Unlimited', pro: 'Unlimited' },
  { label: 'DM Sent Limit', free: '1000', pro: 'Unlimited' },
  { label: 'Contacts Limit', free: '1000', pro: 'Unlimited' },
  { label: 'Ask to Follow', free: '✗', pro: '✓' },
  { label: 'Lead Generation', free: '✗', pro: '✓' },
  { label: 'Collect Email', free: '✗', pro: '✓' },
  { label: 'Rerun', free: '✗', pro: '✓' },
  { label: 'Support', free: 'Email', pro: 'Priority' },
];

export default function PricingPageClient() {
  const [billing, setBilling] = useState<BillingCycle>('monthly');

  // Background radial glows matching the design
  const bgStyle: React.CSSProperties = {
    position: 'relative',
    background: '#1a0a1e',
    paddingBottom: 60,
  };

  return (
    <div style={bgStyle}>
      {/* Purple radial glow top-center */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 340, height: 340,
        background: 'radial-gradient(ellipse at center, rgba(120,40,180,0.45) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      {/* Deep maroon glow bottom */}
      <div style={{
        position: 'absolute', top: 200, left: '50%', transform: 'translateX(-50%)',
        width: 300, height: 300,
        background: 'radial-gradient(ellipse at center, rgba(180,30,80,0.18) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* ── HERO ── */}
        <div style={{ padding: '36px 24px 20px', textAlign: 'center' }}>
          {/* Star pill badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '6px 18px', borderRadius: 30,
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.15)',
            marginBottom: 20,
          }}>
            <span style={{ fontSize: 13 }}>⭐</span>
            <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 13, fontWeight: 500, color: '#fff' }}>
              Pricing
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Nacelle, sans-serif',
            fontSize: 36, fontWeight: 800,
            lineHeight: 1.18, letterSpacing: '-0.02em',
            color: '#fff', marginBottom: 8,
          }}>
            Simple and<br />
            transparent{' '}
            <span style={{
              background: 'linear-gradient(90deg, #f97316, #e8356d)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              pricing.
            </span>
          </h1>

          <p style={{
            fontFamily: 'Nacelle, sans-serif',
            fontSize: 13, fontWeight: 300,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.6, marginBottom: 28,
          }}>
            Simple plans, upfront costs, &amp; zero surprises.<br />
            Pricing made easy &amp; completely transparent.
          </p>

          {/* Billing tabs */}
          <div style={{
            display: 'inline-flex',
            background: 'rgba(255,255,255,0.07)',
            borderRadius: 30, padding: 4, gap: 2,
          }}>
            {TABS.map(tab => (
              <button key={tab.key} onClick={() => setBilling(tab.key)} style={{
                padding: '7px 18px', borderRadius: 26,
                border: 'none', cursor: 'pointer',
                fontFamily: 'Nacelle, sans-serif',
                fontSize: 13, fontWeight: billing === tab.key ? 600 : 400,
                color: billing === tab.key ? '#fff' : 'rgba(255,255,255,0.45)',
                background: billing === tab.key
                  ? 'linear-gradient(90deg, #f97316, #e8356d)'
                  : 'transparent',
                transition: 'all 0.2s',
              }}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── PLAN CARDS ── */}
        <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* FREE CARD */}
          <div style={{
            borderRadius: 18,
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '22px 22px',
          }}>
            <div style={{ marginBottom: 14 }}>
              <h2 style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 3 }}>Free</h2>
              <p style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>
                Good for exploring automation.
              </p>
            </div>
            <div style={{ marginBottom: 18 }}>
              <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 34, fontWeight: 800, color: '#fff' }}>₹0</span>
            </div>
            <Link href="/signup" style={{
              display: 'inline-block', padding: '11px 28px', borderRadius: 10,
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff', fontFamily: 'Nacelle, sans-serif',
              fontWeight: 600, fontSize: 14, textDecoration: 'none',
            }}>
              Get Started
            </Link>

            <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '20px 0' }} />

            <p style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 12 }}>Features :</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {freeFeatures.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  {f.on ? <CheckOn /> : <CheckOff />}
                  <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 13, color: f.on ? '#fff' : 'rgba(255,255,255,0.4)', fontWeight: f.on ? 400 : 300 }}>
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* PRO CARD */}
          <div style={{
            borderRadius: 18,
            background: 'linear-gradient(160deg, #2a0d3e 0%, #1e0a2e 100%)',
            border: '1.5px solid rgba(180,80,220,0.5)',
            padding: '22px 22px',
            position: 'relative',
            boxShadow: '0 0 30px rgba(150,50,200,0.2)',
          }}>
            {/* Header row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
              <div>
                <h2 style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 3 }}>Pro</h2>
                <p style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>
                  Best for growing outreach and engagement.
                </p>
              </div>
              {/* Billing tabs inline (Monthly / Quarterly / Annually) */}
              <div style={{
                display: 'flex', gap: 4,
                background: 'rgba(255,255,255,0.07)',
                borderRadius: 20, padding: '3px 4px',
              }}>
                {TABS.map(tab => (
                  <button key={tab.key} onClick={() => setBilling(tab.key)} style={{
                    padding: '4px 8px', borderRadius: 14, border: 'none', cursor: 'pointer',
                    fontFamily: 'Nacelle, sans-serif', fontSize: 10, fontWeight: billing === tab.key ? 700 : 400,
                    color: billing === tab.key ? '#fff' : 'rgba(255,255,255,0.35)',
                    background: billing === tab.key ? 'linear-gradient(90deg, #f97316, #e8356d)' : 'transparent',
                    transition: 'all 0.2s',
                  }}>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 4 }}>
              <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 34, fontWeight: 800, color: '#fff' }}>₹499</span>
              <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 5 }}>/ month</span>
            </div>
            <p style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.35)', marginBottom: 18 }}>per account</p>

            {/* Most Popular badge */}
            <div style={{ position: 'absolute', top: 22, right: 22 }}>
              <span style={{
                padding: '4px 10px', borderRadius: 20,
                background: 'linear-gradient(90deg, #7c3aed, #a855f7)',
                fontFamily: 'Nacelle, sans-serif', fontSize: 10, fontWeight: 700,
                color: '#fff', letterSpacing: '0.04em',
              }}>Most Popular</span>
            </div>

            <Link href={`/checkout?plan=pro&billing=${billing}`} style={{
              display: 'block', padding: '13px', borderRadius: 30,
              background: 'linear-gradient(90deg, #f97316, #e8356d)',
              color: '#fff', fontFamily: 'Nacelle, sans-serif',
              fontWeight: 700, fontSize: 15, textDecoration: 'none', textAlign: 'center',
            }}>
              Go Pro
            </Link>

            <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '20px 0' }} />

            <p style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 12 }}>Features :</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {proFeatures.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  {f.on ? <CheckOn /> : <CheckOff />}
                  <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 13, color: '#fff', fontWeight: 400 }}>
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ENTERPRISE CARD */}
          <div style={{
            borderRadius: 18,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.09)',
            padding: '22px 22px',
          }}>
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 3 }}>Enterprise</h2>
              <p style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>
                For teams and multi-account management.
              </p>
            </div>

            <Link href="/contact" style={{
              display: 'inline-block', padding: '11px 28px', borderRadius: 10,
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
              color: '#fff', fontFamily: 'Nacelle, sans-serif',
              fontWeight: 600, fontSize: 14, textDecoration: 'none', marginBottom: 20,
            }}>
              Talk to Us
            </Link>

            <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', margin: '0 0 20px' }} />

            <p style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 12 }}>Features :</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {enterpriseFeatures.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckOn />
                  <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 13, color: '#fff', fontWeight: 400 }}>
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FEATURE COMPARISON ── */}
        <div style={{ padding: '40px 16px 0' }}>
          {/* Star pill badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 22px', borderRadius: 30,
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}>
              <span style={{ fontSize: 13 }}>⭐</span>
              <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 13, fontWeight: 600, color: '#fff' }}>
                Feature Comparison
              </span>
            </div>
          </div>

          {/* Table */}
          <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
            {/* Header row */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 80px 120px',
              background: 'rgba(255,255,255,0.04)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              padding: '12px 16px',
            }}>
              <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 13, fontWeight: 600, color: '#fff' }}>
                Compare our plans
              </span>
              <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>
                Free
              </span>
              {/* Pro header with gradient bg */}
              <div style={{
                background: 'linear-gradient(160deg, #3d1060 0%, #2a0a48 100%)',
                borderRadius: '8px 8px 0 0',
                padding: '6px 8px',
                textAlign: 'center',
                margin: '-6px -4px',
              }}>
                <div style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff' }}>Pro</div>
                <div style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.55)', lineHeight: 1.4, marginTop: 2 }}>
                  ₹399 (Changes based<br/>on plan duration)
                </div>
              </div>
            </div>

            {/* Data rows */}
            {compareRows.map((row, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '1fr 80px 120px',
                padding: '13px 16px',
                borderBottom: i < compareRows.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
                alignItems: 'center',
              }}>
                <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
                  {row.label}
                </span>
                <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>
                  {row.free}
                </span>
                <div style={{
                  background: 'rgba(80,20,130,0.25)',
                  borderLeft: '1px solid rgba(180,80,240,0.2)',
                  borderRight: '1px solid rgba(180,80,240,0.2)',
                  padding: '4px 8px',
                  margin: '-4px -4px',
                  textAlign: 'center',
                }}>
                  <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 13, color: '#fff', fontWeight: row.pro === '✓' ? 700 : 400 }}>
                    {row.pro}
                  </span>
                </div>
              </div>
            ))}

            {/* Pro column bottom border */}
            <div style={{ background: 'rgba(80,20,130,0.25)', borderLeft: '1px solid rgba(180,80,240,0.2)', borderRight: '1px solid rgba(180,80,240,0.2)', height: 4, margin: '0 0 0 calc(100% - 120px)', width: 120 }} />
          </div>
        </div>

        {/* Bottom padding */}
        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}
