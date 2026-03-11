'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/login', label: 'Login / Signup' },
];

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav style={{
      display: 'none', // hidden on mobile, shown on desktop via style tag below
      width: '100%',
      background: '#0e0e0e',
      position: 'sticky',
      top: 0,
      zIndex: 200,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 40px',
      boxSizing: 'border-box',
    }} className="desktop-nav">
      {/* Logo */}
      <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 7 }}>
        <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
          <path d="M2 2H10C16.627 2 22 7.373 22 14C22 19.523 17.523 24 12 24H2V2Z" fill="url(#dLogoGrad)" />
          <defs>
            <linearGradient id="dLogoGrad" x1="2" y1="2" x2="22" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f97316" />
              <stop offset="1" stopColor="#e8356d" />
            </linearGradient>
          </defs>
        </svg>
        <span style={{ fontFamily: 'Nacelle, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff', letterSpacing: '-0.01em' }}>
          xpressdm<sup style={{ fontSize: 9, verticalAlign: 'super' }}>™</sup>
        </span>
      </Link>

      {/* Center: pill nav */}
      <div style={{
        display: 'flex', alignItems: 'center',
        background: 'rgba(255,255,255,0.07)',
        borderRadius: 40, padding: '5px 8px',
        gap: 2,
      }}>
        {navLinks.map(link => {
          const active = pathname === link.href || (link.href === '/pricing' && pathname.startsWith('/pricing'));
          return (
            <Link key={link.href} href={link.href} style={{
              padding: '9px 22px', borderRadius: 30,
              fontFamily: 'Nacelle, sans-serif',
              fontSize: 14, fontWeight: active ? 600 : 400,
              color: active ? '#fff' : 'rgba(255,255,255,0.55)',
              textDecoration: 'none',
              background: active ? 'rgba(255,255,255,0.13)' : 'transparent',
              transition: 'all 0.18s',
              whiteSpace: 'nowrap',
            }}>
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Right: CTA */}
      <Link href="/signup" style={{
        padding: '11px 24px', borderRadius: 28,
        background: 'linear-gradient(90deg, #f97316, #e8356d)',
        color: '#fff', fontFamily: 'Nacelle, sans-serif',
        fontWeight: 700, fontSize: 14, textDecoration: 'none',
        boxShadow: '0 4px 20px rgba(233,53,109,0.3)',
        whiteSpace: 'nowrap',
      }}>
        Start Free Trial
      </Link>
    </nav>
  );
}
