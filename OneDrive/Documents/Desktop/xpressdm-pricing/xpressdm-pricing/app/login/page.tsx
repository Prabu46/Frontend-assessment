'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <div style={{
      minHeight: 'calc(100vh - 60px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '32px 20px',
      position: 'relative',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(120,40,180,0.35) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        width: '100%', maxWidth: 360, position: 'relative', zIndex: 1,
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 7 }}>
            <svg width="24" height="26" viewBox="0 0 22 24" fill="none">
              <path d="M2 2H10C16.627 2 22 7.373 22 14C22 19.523 17.523 24 12 24H2V2Z" fill="url(#loginLogo)" />
              <defs>
                <linearGradient id="loginLogo" x1="2" y1="2" x2="22" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#f97316" /><stop offset="1" stopColor="#e8356d" />
                </linearGradient>
              </defs>
            </svg>
            <span style={{ fontFamily: 'Nacelle, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff' }}>
              xpressdm<sup style={{ fontSize: 10, verticalAlign: 'super' }}>™</sup>
            </span>
          </Link>
        </div>

        {/* Card */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 20, padding: '32px 28px',
          backdropFilter: 'blur(12px)',
        }}>
          {/* Mode tabs */}
          <div style={{
            display: 'flex', background: 'rgba(255,255,255,0.07)',
            borderRadius: 12, padding: 4, marginBottom: 28, gap: 4,
          }}>
            {(['signin', 'signup'] as const).map(m => (
              <button key={m} onClick={() => setMode(m)} style={{
                flex: 1, padding: '10px', borderRadius: 9, border: 'none',
                fontFamily: 'Nacelle, sans-serif', fontSize: 14,
                fontWeight: mode === m ? 700 : 400, cursor: 'pointer',
                color: mode === m ? '#fff' : 'rgba(255,255,255,0.4)',
                background: mode === m ? 'linear-gradient(90deg, #f97316, #e8356d)' : 'transparent',
                transition: 'all 0.2s',
              }}>
                {m === 'signin' ? 'Sign In' : 'Sign Up'}
              </button>
            ))}
          </div>

          <h2 style={{
            fontFamily: 'Nacelle, sans-serif', fontSize: 22, fontWeight: 800,
            color: '#fff', marginBottom: 6, letterSpacing: '-0.02em',
          }}>
            {mode === 'signin' ? 'Welcome back' : 'Create account'}
          </h2>
          <p style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 24, fontWeight: 300 }}>
            {mode === 'signin' ? 'Sign in to your XpressDM account' : 'Start your free trial today'}
          </p>

          {/* Fields */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {mode === 'signup' && (
              <div>
                <label style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 7 }}>
                  Full Name
                </label>
                <input type="text" value={name} onChange={e => setName(e.target.value)}
                  placeholder="John Doe"
                  style={{
                    width: '100%', padding: '13px 16px', borderRadius: 12,
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#fff', fontFamily: 'Nacelle, sans-serif', fontSize: 14,
                    outline: 'none',
                  }} />
              </div>
            )}

            <div>
              <label style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 7 }}>
                Email Address
              </label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{
                  width: '100%', padding: '13px 16px', borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#fff', fontFamily: 'Nacelle, sans-serif', fontSize: 14,
                  outline: 'none',
                }} />
            </div>

            <div>
              <label style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 7 }}>
                Password
              </label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%', padding: '13px 16px', borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.05)',
                  color: '#fff', fontFamily: 'Nacelle, sans-serif', fontSize: 14,
                  outline: 'none',
                }} />
            </div>
          </div>

          {/* Forgot password */}
          {mode === 'signin' && (
            <div style={{ textAlign: 'right', marginTop: 10 }}>
              <Link href="/forgot-password" style={{
                fontFamily: 'Nacelle, sans-serif', fontSize: 12,
                color: 'rgba(249,115,22,0.8)', textDecoration: 'none',
              }}>
                Forgot password?
              </Link>
            </div>
          )}

          {/* Submit */}
          <button style={{
            width: '100%', marginTop: 24, padding: '14px',
            borderRadius: 30, border: 'none', cursor: 'pointer',
            background: 'linear-gradient(90deg, #f97316, #e8356d)',
            color: '#fff', fontFamily: 'Nacelle, sans-serif',
            fontWeight: 700, fontSize: 15,
            boxShadow: '0 4px 20px rgba(233,53,109,0.3)',
            transition: 'opacity 0.2s',
          }}>
            {mode === 'signin' ? 'Sign In' : 'Create Account'}
          </button>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
            <span style={{ fontFamily: 'Nacelle, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>or continue with</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)' }} />
          </div>

          {/* Google button */}
          <button style={{
            width: '100%', padding: '13px', borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(255,255,255,0.05)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            fontFamily: 'Nacelle, sans-serif', fontWeight: 500, fontSize: 14, color: '#fff',
            transition: 'background 0.2s',
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          {/* Switch mode */}
          <p style={{ textAlign: 'center', marginTop: 20, fontFamily: 'Nacelle, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
            {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
            <button onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')} style={{
              border: 'none', cursor: 'pointer', padding: 0,
              fontFamily: 'Nacelle, sans-serif', fontSize: 13, fontWeight: 600,
              background: 'linear-gradient(90deg, #f97316, #e8356d)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            } as React.CSSProperties}>
              {mode === 'signin' ? 'Sign up free' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
