'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/login', label: 'Login / Signup' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* ─────────────────────────────────────────
          MOBILE HEADER  (shown below 768px)
      ───────────────────────────────────────── */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 20px',
        background: 'rgba(26, 10, 30, 0.95)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 200,
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
          {/* D-shaped icon */}
          <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
            <path d="M2 2H10C16.627 2 22 7.373 22 14C22 19.523 17.523 24 12 24H2V2Z"
              fill="url(#logoGrad)" />
            <defs>
              <linearGradient id="logoGrad" x1="2" y1="2" x2="22" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f97316" />
                <stop offset="1" stopColor="#e8356d" />
              </linearGradient>
            </defs>
          </svg>
          <span style={{
            fontFamily: 'Nacelle, sans-serif', fontWeight: 700,
            fontSize: 17, color: '#fff', letterSpacing: '-0.01em',
          }}>
            xpressdm<sup style={{ fontSize: 9, verticalAlign: 'super', color: '#fff' }}>™</sup>
          </span>
        </Link>

        {/* Right: CTA + Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link href="/signup" style={{
            padding: '9px 18px', borderRadius: 24,
            background: 'linear-gradient(90deg, #f97316, #e8356d)',
            color: '#fff', fontFamily: 'Nacelle, sans-serif',
            fontWeight: 600, fontSize: 13, textDecoration: 'none',
            whiteSpace: 'nowrap', display: 'block',
          }}>
            Start Free Trial
          </Link>

          <button onClick={() => setMenuOpen(true)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: 5, padding: '4px 2px',
          }} aria-label="Open menu">
            <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2 }} />
          </button>
        </div>
      </header>

      {/* ─────────────────────────────────────────
          MOBILE MENU OVERLAY
      ───────────────────────────────────────── */}
      {/* Backdrop */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.5)',
            zIndex: 300,
            backdropFilter: 'blur(2px)',
          }}
        />
      )}

      {/* Menu panel */}
      <div style={{
        position: 'fixed',
        top: '50%', left: '50%',
        transform: menuOpen
          ? 'translate(-50%, -50%) scale(1)'
          : 'translate(-50%, -50%) scale(0.92)',
        width: 'calc(100% - 40px)',
        maxWidth: 340,
        background: '#fff',
        borderRadius: 20,
        zIndex: 400,
        padding: '28px 24px 32px',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'auto' : 'none',
        transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease',
        boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
      }}>
        {/* Top row: logo + close */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
          <Link href="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg width="20" height="22" viewBox="0 0 22 24" fill="none">
              <path d="M2 2H10C16.627 2 22 7.373 22 14C22 19.523 17.523 24 12 24H2V2Z" fill="url(#logoGrad2)" />
              <defs>
                <linearGradient id="logoGrad2" x1="2" y1="2" x2="22" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#f97316" />
                  <stop offset="1" stopColor="#e8356d" />
                </linearGradient>
              </defs>
            </svg>
            <span style={{ fontFamily: 'Nacelle, sans-serif', fontWeight: 700, fontSize: 16, color: '#111', letterSpacing: '-0.01em' }}>
              xpressdm<sup style={{ fontSize: 8, verticalAlign: 'super' }}>™</sup>
            </span>
          </Link>
          <button onClick={() => setMenuOpen(false)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: 8,
          }} aria-label="Close menu">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1L17 17M17 1L1 17" stroke="#333" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* CTA button */}
        <div style={{ textAlign: 'center', marginBottom: 10 }}>
          <Link href="/signup" onClick={() => setMenuOpen(false)} style={{
            display: 'inline-block', padding: '12px 36px', borderRadius: 28,
            background: 'linear-gradient(90deg, #f97316, #e8356d)',
            color: '#fff', fontFamily: 'Nacelle, sans-serif',
            fontWeight: 700, fontSize: 15, textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(233, 53, 109, 0.35)',
          }}>
            Start Free Trial
          </Link>
        </div>

        {/* Sign in link */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <Link href="/login" onClick={() => setMenuOpen(false)} style={{
            fontFamily: 'Nacelle, sans-serif', fontSize: 14,
            color: '#555', textDecoration: 'none', fontWeight: 400,
          }}>
            Sign in
          </Link>
        </div>

        {/* Nav items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { href: '/features', label: 'Features' },
            { href: '/pricing', label: 'Pricing' },
            { href: '/use-cases', label: 'Use Cases' },
          ].map((item, i, arr) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '15px 16px',
                borderRadius: 10,
                background: '#fdf6f0',
                marginBottom: i < arr.length - 1 ? 8 : 0,
                textDecoration: 'none',
              }}
            >
              <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 15, color: '#111', fontWeight: 400 }}>
                {item.label}
              </span>
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path d="M1 1L7 7L1 13" stroke="#999" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
