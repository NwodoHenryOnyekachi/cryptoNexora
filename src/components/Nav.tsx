import { Link, useNavigate } from 'react-router-dom';
import { useAuthModal } from '../context/AuthModalContext';
import { useAuth } from '../context/AuthContext';

interface NavProps {
  onMenuClick: () => void;
}

export default function Nav({ onMenuClick }: NavProps) {
  const { openModal } = useAuthModal();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleDeposit = () => {
    if (isLoggedIn) navigate('/wallet');
    else openModal('login', '/wallet');
  };

  return (
    <nav
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        background: 'rgba(5,5,5,0.72)',
        backdropFilter: 'blur(22px) saturate(160%)',
        WebkitBackdropFilter: 'blur(22px) saturate(160%)',
        position: 'fixed', top: 0, left: 0, right: 0, width: '100%', zIndex: 9999, height: 64,
      }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 16px', height: 64, display: 'flex', alignItems: 'center', gap: 12 }}>
        <button
          onClick={onMenuClick}
          className="mobile-menu-btn"
          aria-label="Open menu"
          style={{
            width: 36, height: 36, borderRadius: 9, border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.03)', color: '#f4f5f9', cursor: 'pointer',
            alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0,
            transition: 'border-color 0.2s, background-color 0.2s',
          }}
        >
          ☰
        </button>

        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 9 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 9,
            background: 'linear-gradient(135deg, #3b6bff, #8b5cf6 60%, #22e5e5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            boxShadow: '0 0 18px rgba(139,92,246,0.55)',
          }}>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: 14 }}>N</span>
          </div>
          <span className="font-display" style={{ color: '#f4f5f9', fontWeight: 700, fontSize: 18, letterSpacing: '-0.03em' }}>NEXORA</span>
        </Link>

        <div className="desktop-only" style={{ alignItems: 'center', gap: 4, marginLeft: 28 }}>
          {[
            { label: 'Markets', to: '/markets' },
            { label: 'Learn', to: '/learn' },
            { label: 'Security', to: '/security' },
            { label: 'Pricing', to: '/pricing' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link-underline"
              style={{ padding: '8px 12px', fontSize: 13.5, fontWeight: 500, color: '#98a2b8', textDecoration: 'none', borderRadius: 8, position: 'relative' }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8, marginLeft: 'auto', alignItems: 'center' }}>
          <button
            onClick={() => openModal('login')}
            aria-label="Sign in"
            title="Sign In"
            style={{
              width: 36, height: 36, borderRadius: 9, display: 'flex',
              color: '#98a2b8', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent',
              cursor: 'pointer', flexShrink: 0, alignItems: 'center', justifyContent: 'center',
              transition: 'border-color 0.2s, color 0.2s, background-color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#f4f5f9'; e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'; e.currentTarget.style.background = 'rgba(139,92,246,0.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#98a2b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'transparent'; }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
              <path d="M4 20c0-3.6 3.6-6.5 8-6.5s8 2.9 8 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          <button onClick={handleDeposit} className="glow-primary" style={{
            padding: '8px 16px', borderRadius: 9, fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer',
            background: 'linear-gradient(135deg, #3b6bff, #8b5cf6)', color: '#fff', whiteSpace: 'nowrap',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}>Deposit</button>
        </div>
      </div>
    </nav>
  );
}