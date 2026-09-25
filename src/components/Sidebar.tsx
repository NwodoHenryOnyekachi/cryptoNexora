import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProfileModal from './ProfileModal';

const navItems = [
  { label: 'Product', path: '/', icon: '◇' },
  { label: 'Overview', path: '/dashboard', icon: '⬡' },
  { label: 'Portfolio', path: '/portfolio', icon: '◈' },
  { label: 'Markets', path: '/markets', icon: '◉' },
  { label: 'Trade', path: '/trade', icon: '⇄' },
  { label: 'Stake', path: '/stake', icon: '✪' },
  { label: 'Wallet', path: '/wallet', icon: '◻' },
  { label: 'Transactions', path: '/transactions', icon: '≡' },
  { label: 'Analytics', path: '/analytics', icon: '∿' },
  { divider: true, label: 'Learn', path: '/learn', icon: '◐' },
  { label: 'Security', path: '/security', icon: '⛨' },
  { label: 'Pricing', path: '/pricing', icon: '◆' },
  { label: 'Settings', path: '/settings', icon: '⊙' },
];

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);
  const showBack = location.pathname !== '/';

  const handleLogout = () => {
    logout();
    onClose();
    navigate('/');
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${mobileOpen ? 'is-open' : ''}`}
        onClick={onClose}
        style={{ position: 'fixed', inset: '64px 0 0 0', background: 'rgba(0,0,0,0.6)', zIndex: 60 }}
      />
      <aside
        className={`sidebar-drawer ${mobileOpen ? 'is-open' : ''}`}
        style={{
          width: 220, background: '#0a0a10',
          borderRight: '1px solid rgba(255,255,255,0.07)',
          display: 'flex', flexDirection: 'column',
          position: 'fixed', top: 64, bottom: 0, left: 0, zIndex: 70,
          overflowY: 'auto',
        }}
      >
        <div className="mobile-only" style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Menu</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              width: 30, height: 30, borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.04)', color: '#94a3b8', cursor: 'pointer', fontSize: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>
        <nav style={{ flex: 1, padding: '16px 12px' }}>
          {navItems.map(({ label, path, icon, divider }) => {
            const active = location.pathname === path || (path !== '/dashboard' && path !== '/' && location.pathname.startsWith(path));
            return (
              <div key={label}>
                {divider && <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '10px 12px' }} />}
                <Link to={path} onClick={onClose} style={{
                  display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px',
                  borderRadius: 8, marginBottom: 2, textDecoration: 'none', fontSize: 14, fontWeight: 500,
                  color: active ? '#f4f5f9' : '#64748b',
                  background: active ? 'linear-gradient(90deg, rgba(59,107,255,0.16), rgba(139,92,246,0.08))' : 'transparent',
                  borderLeft: active ? '2px solid #8b5cf6' : '2px solid transparent',
                  boxShadow: active ? '0 0 20px -8px rgba(139,92,246,0.5)' : 'none',
                  transition: 'all 0.2s'
                }}>
                  <span style={{ fontSize: 15, width: 18, textAlign: 'center' }}>{icon}</span>
                  {label}
                </Link>
              </div>
            );
          })}
        </nav>

        {showBack && (
          <button
            onClick={() => { onClose(); navigate(-1); }}
            style={{
              display: 'flex', alignItems: 'center', gap: 10, margin: '0 12px 4px', padding: '9px 12px',
              borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)',
              color: '#94a3b8', fontSize: 13, fontWeight: 600, cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: 15 }}>←</span> Back
          </button>
        )}

        <div style={{ padding: '14px 20px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <button
            onClick={() => setProfileOpen(true)}
            style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0, background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
          >
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #3b6bff, #8b5cf6 60%, #22e5e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#fff', flexShrink: 0, boxShadow: '0 0 14px rgba(139,92,246,0.4)' }}>{user.name[0]}</div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#f1f5f9', whiteSpace: 'nowrap' }}>{user.name}</div>
              <div style={{ fontSize: 11, color: '#475569' }}>{user.plan}</div>
            </div>
          </button>
          <button
            onClick={handleLogout}
            aria-label="Log out"
            title="Log out"
            style={{
              width: 32, height: 32, borderRadius: 8, flexShrink: 0,
              border: '1px solid rgba(239,68,68,0.25)', background: 'rgba(239,68,68,0.08)',
              color: '#f87171', cursor: 'pointer', fontSize: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ⏻
          </button>
        </div>
      </aside>
      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </>
  );
}
