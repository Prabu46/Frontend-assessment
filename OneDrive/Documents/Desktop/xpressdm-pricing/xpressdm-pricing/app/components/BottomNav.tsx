'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    href: '/',
    label: 'Home',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 8L10 2L18 8V18H13V13H7V18H2V8Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: '/pricing',
    label: 'Pricing',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="16" height="16" rx="4" strokeWidth="1.5" />
        <path d="M10 6v8M7 8.5h4.5a1.5 1.5 0 010 3H7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: '/features',
    label: 'Features',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="4" strokeWidth="1.5" />
        <path d="M2 18c0-4 3.6-7 8-7s8 3 8 7" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: 390,
        background: 'rgba(15, 10, 30, 0.95)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(124,58,237,0.15)',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '8px 0 20px',
        zIndex: 100,
      }}
    >
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              padding: '4px 12px',
              textDecoration: 'none',
              color: active ? '#A855F7' : '#6B5F88',
              transition: 'color 0.2s',
            }}
          >
            <div
              style={{
                stroke: active ? '#A855F7' : '#6B5F88',
                transition: 'all 0.2s',
                filter: active ? 'drop-shadow(0 0 6px rgba(168,85,247,0.5))' : 'none',
              }}
            >
              {item.icon}
            </div>
            <span
              style={{
                fontFamily: 'Nacelle, sans-serif',
                fontSize: 10,
                fontWeight: active ? 600 : 400,
              }}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
