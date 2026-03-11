'use client';

interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: () => void;
}

export default function PricingToggle({ isAnnual, onToggle }: PricingToggleProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        padding: '4px 0',
      }}
    >
      <span
        style={{
          fontFamily: 'Nacelle, sans-serif',
          fontSize: 14,
          fontWeight: isAnnual ? 400 : 600,
          color: isAnnual ? '#6B5F88' : '#fff',
          transition: 'color 0.2s',
        }}
      >
        Monthly
      </span>

      {/* Toggle */}
      <div
        className={`toggle-track ${isAnnual ? 'active' : ''}`}
        onClick={onToggle}
        role="switch"
        aria-checked={isAnnual}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onToggle()}
      >
        <div className="toggle-thumb" />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span
          style={{
            fontFamily: 'Nacelle, sans-serif',
            fontSize: 14,
            fontWeight: isAnnual ? 600 : 400,
            color: isAnnual ? '#fff' : '#6B5F88',
            transition: 'color 0.2s',
          }}
        >
          Annual
        </span>
        <span
          style={{
            padding: '3px 8px',
            borderRadius: 20,
            fontSize: 10,
            fontWeight: 700,
            fontFamily: 'Nacelle, sans-serif',
            background: 'rgba(245,158,11,0.15)',
            color: '#FCD34D',
            border: '1px solid rgba(245,158,11,0.3)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          Save 20%
        </span>
      </div>
    </div>
  );
}
