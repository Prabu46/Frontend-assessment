import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import DesktopNav from './components/DesktopNav';

export const metadata: Metadata = {
  title: 'XpressDM — Pricing',
  description: 'Simple and transparent pricing.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Desktop nav - full width, shown above 768px via CSS */}
        <DesktopNav />
        {/* Mobile layout container */}
        <div className="mobile-wrap">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
