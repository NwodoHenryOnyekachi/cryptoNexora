// import { Link, useNavigate } from 'react-router-dom';
// import { AreaChart, Area, ResponsiveContainer } from 'recharts';
// import { generateChartData } from '../data/crypto';
// import { useAuthModal } from '../context/AuthModalContext';
// import { useAuth } from '../context/AuthContext';
// import Reveal from '../components/Reveal';

// const miniChart = generateChartData(14, 67000, 0.04);

// const stats = [
//   { value: '$2.8B+', label: 'Assets Tracked' },
//   { value: '180K+', label: 'Users' },
//   { value: '99.99%', label: 'Platform Uptime' },
//   { value: '120+', label: 'Assets' },
// ];

// const features = [
//   { title: 'Real-time Portfolio Intelligence', desc: 'Live updates across all your digital assets with unified performance analytics and intelligent alerts.', icon: '◈', big: true },
//   { title: 'Institutional-grade Security', desc: 'Multi-sig wallets, 2FA, device management, and real-time transaction monitoring protect every interaction.', icon: '⬡' },
//   { title: 'Cross-asset Trading', desc: 'Execute trades across 120+ assets with deep liquidity, transparent fees, and instant settlement.', icon: '⇄' },
//   { title: 'Tax & Reporting Tools', desc: 'Automated cost-basis tracking, realized/unrealized gain reports, and exportable transaction history.', icon: '≡' },
//   { title: 'Smart Alerts', desc: 'Price movement triggers, unusual activity detection, and portfolio milestone notifications.', icon: '∿' },
//   { title: 'API Access', desc: 'Full REST and WebSocket API for developers building on top of NEXORA infrastructure.', icon: '⊙' },
// ];

// export default function Landing() {
//   const { openModal } = useAuthModal();
//   const { isLoggedIn } = useAuth();
//   const navigate = useNavigate();

//   const handleDeposit = () => {
//     if (isLoggedIn) navigate('/wallet');
//     else openModal('login', '/wallet');
//   };
//   return (
//     <div style={{ background: '#050505', minHeight: '100vh', overflow: 'hidden' }}>
//       {/* Hero */}
//       <section style={{ position: 'relative', padding: '0 0 60px' }}>
//         {/* Ambient orbs + grid */}
//         <div className="orb drift" style={{ width: 460, height: 460, top: -140, left: '4%', background: 'rgba(139,92,246,0.32)' }} />
//         <div className="orb drift" style={{ width: 380, height: 380, top: -60, right: '2%', background: 'rgba(59,107,255,0.28)', animationDelay: '2s' }} />
//         <div className="orb pulse-glow" style={{ width: 260, height: 260, top: 340, left: '46%', background: 'rgba(34,229,229,0.18)' }} />
//         <div className="noise-grid" style={{ position: 'absolute', inset: '0 0 auto 0', height: 620, zIndex: 0 }} />

//         <div className="hero-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 24px 100px', position: 'relative', zIndex: 1 }}>
//           <div>
//             <Reveal variant="up">
//               <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: 100, padding: '6px 14px', marginBottom: 28 }}>
//                 <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22e5e5', display: 'inline-block', boxShadow: '0 0 8px #22e5e5' }} className="pulse-glow" />
//                 <span style={{ fontSize: 13, color: '#c4b5fd', fontWeight: 500 }}>Now in public beta — join 180,000 investors</span>
//               </div>
//             </Reveal>
//             <Reveal variant="up" delay={80}>
//               <h1 className="font-display" style={{ fontSize: 'clamp(40px, 5.6vw, 72px)', fontWeight: 700, lineHeight: 1.04, letterSpacing: '-0.045em', color: '#f4f5f9', margin: '0 0 22px' }}>
//                 Crypto investing,<br />
//                 <span className="gradient-text-web3 glow-cyan-text">made intelligently.</span>
//               </h1>
//             </Reveal>
//             <Reveal variant="up" delay={150}>
//               <p style={{ fontSize: 18, color: '#98a2b8', lineHeight: 1.65, margin: '0 0 36px', maxWidth: 480 }}>
//                 Track, manage, and grow your digital assets from one secure platform built for clarity.
//               </p>
//             </Reveal>
//             <Reveal variant="up" delay={220}>
//               <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
//                 <button onClick={handleDeposit} style={{
//                   padding: '15px 30px', borderRadius: 12, fontWeight: 600, fontSize: 15, border: 'none', cursor: 'pointer',
//                   background: 'linear-gradient(135deg, #3b6bff, #8b5cf6)', color: '#fff',
//                   boxShadow: '0 0 48px rgba(139,92,246,0.4), 0 12px 30px -10px rgba(59,107,255,0.5)',
//                   transition: 'transform 0.25s ease',
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
//                 onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
//                 >Start Investing</button>
//                 <Link to="/markets" style={{
//                   padding: '15px 28px', borderRadius: 12, fontWeight: 500, fontSize: 15, textDecoration: 'none',
//                   color: '#c9cedb', border: '1px solid rgba(255,255,255,0.12)', transition: 'border-color 0.2s, color 0.2s',
//                 }}>Explore Markets →</Link>
//               </div>
//             </Reveal>
//           </div>

//           {/* Dashboard preview */}
//           <Reveal variant="right" delay={200}>
//             <div style={{ position: 'relative' }}>
//               <div style={{
//                 position: 'absolute', inset: -60, background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.22) 0%, transparent 70%)',
//                 pointerEvents: 'none'
//               }} />
//               <div className="glass-premium float-y" style={{
//                 borderRadius: 22,
//                 padding: 24, boxShadow: '0 50px 120px rgba(0,0,0,0.65), 0 0 60px -20px rgba(59,107,255,0.35)', position: 'relative',
//                 animationDuration: '7s',
//               }}>
//                 <div style={{ marginBottom: 20 }}>
//                   <div style={{ fontSize: 12, color: '#4b5064', marginBottom: 4 }}>Total Portfolio Value</div>
//                   <div className="font-display" style={{ fontSize: 32, fontWeight: 700, color: '#f4f5f9', letterSpacing: '-0.03em' }}>$84,250.42</div>
//                   <div style={{ fontSize: 14, color: '#22c55e', fontWeight: 500, marginTop: 2 }}>+$1,284.16 · +1.55% today</div>
//                 </div>

//                 <div style={{ height: 80, marginBottom: 20 }}>
//                   <ResponsiveContainer width="100%" height="100%">
//                     <AreaChart data={miniChart}>
//                       <defs>
//                         <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
//                           <stop offset="0%" stopColor="#22e5e5" stopOpacity={0.35} />
//                           <stop offset="100%" stopColor="#3b6bff" stopOpacity={0} />
//                         </linearGradient>
//                       </defs>
//                       <Area type="monotone" dataKey="price" stroke="#22e5e5" strokeWidth={2} fill="url(#grad)" dot={false} />
//                     </AreaChart>
//                   </ResponsiveContainer>
//                 </div>

//                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
//                   {[
//                     { sym: 'BTC', price: '$67,842', change: '+1.23%', color: '#f97316' },
//                     { sym: 'ETH', price: '$3,481', change: '-0.87%', color: '#8b5cf6' },
//                     { sym: 'NXR', price: '$4.28', change: '+8.42%', color: '#3b6bff' },
//                     { sym: 'SOL', price: '$182.44', change: '+3.14%', color: '#22c55e' },
//                   ].map(a => (
//                     <div key={a.sym} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 11, padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                       <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//                         <div style={{ width: 22, height: 22, borderRadius: '50%', background: a.color + '30', border: `1px solid ${a.color}50`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                           <span style={{ fontSize: 9, fontWeight: 700, color: a.color }}>{a.sym[0]}</span>
//                         </div>
//                         <span style={{ fontSize: 12, fontWeight: 600, color: '#98a2b8' }}>{a.sym}</span>
//                       </div>
//                       <div style={{ textAlign: 'right' }}>
//                         <div style={{ fontSize: 12, fontWeight: 600, color: '#f4f5f9' }}>{a.price}</div>
//                         <div style={{ fontSize: 11, color: a.change.startsWith('+') ? '#22c55e' : '#ef4444' }}>{a.change}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div style={{ marginTop: 12, padding: '10px 12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 11 }}>
//                   <div style={{ fontSize: 11, color: '#4b5064', marginBottom: 6 }}>Recent Activity</div>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                     <div>
//                       <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 500 }}>Bought BTC</span>
//                       <span style={{ fontSize: 12, color: '#4b5064' }}> · 0.05 BTC</span>
//                     </div>
//                     <span style={{ fontSize: 12, color: '#f4f5f9', fontWeight: 500 }}>$3,392</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* Stats */}
//       <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.015)', position: 'relative' }}>
//         <div style={{ maxWidth: 1280, margin: '0 auto', padding: '52px 24px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 24 }}>
//           <div style={{ fontSize: 13, color: '#4b5064', textAlign: 'center', marginBottom: 16, width: '100%', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Trusted by modern digital investors</div>
//           {stats.map((s, i) => (
//             <Reveal key={s.label} variant="scale" delay={i * 90}>
//               <div style={{ textAlign: 'center' }}>
//                 <div className="font-display gradient-text-web3" style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.04em' }}>{s.value}</div>
//                 <div style={{ fontSize: 14, color: '#64748b', marginTop: 4 }}>{s.label}</div>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* Features */}
//       <section style={{ maxWidth: 1280, margin: '0 auto', padding: '110px 24px', position: 'relative' }}>
//         <div className="orb" style={{ width: 500, height: 500, top: '10%', right: '-10%', background: 'rgba(59,107,255,0.10)' }} />
//         <Reveal variant="up">
//           <div style={{ textAlign: 'center', marginBottom: 64, position: 'relative', zIndex: 1 }}>
//             <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', color: '#f4f5f9', margin: '0 0 16px' }}>
//               Everything your portfolio needs
//             </h2>
//             <p style={{ fontSize: 17, color: '#64748b', maxWidth: 480, margin: '0 auto' }}>
//               Purpose-built tools for the modern digital asset investor — from day one to institutional scale.
//             </p>
//           </div>
//         </Reveal>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))', gap: 20, position: 'relative', zIndex: 1 }}>
//           {features.map((f, i) => (
//             <Reveal key={f.title} variant="up" delay={(i % 3) * 90}>
//               <div
//                 className="card card-hover"
//                 style={{
//                   padding: 28,
//                   gridColumn: f.big ? 'span 2' : undefined,
//                   height: '100%',
//                 }}
//               >
//                 <div style={{ width: 44, height: 44, borderRadius: 11, background: 'linear-gradient(135deg, rgba(59,107,255,0.16), rgba(139,92,246,0.16))', border: '1px solid rgba(139,92,246,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16, color: '#22e5e5' }}>{f.icon}</div>
//                 <h3 style={{ fontSize: 17, fontWeight: 600, color: '#f4f5f9', margin: '0 0 10px', letterSpacing: '-0.02em' }}>{f.title}</h3>
//                 <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
//               </div>
//             </Reveal>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px 130px' }}>
//         <Reveal variant="scale">
//           <div style={{
//             background: 'linear-gradient(135deg, rgba(59,107,255,0.18), rgba(139,92,246,0.14) 55%, rgba(34,229,229,0.1))',
//             border: '1px solid rgba(139,92,246,0.28)', borderRadius: 28, padding: '76px 48px', textAlign: 'center',
//             position: 'relative', overflow: 'hidden',
//           }}>
//             <div className="orb pulse-glow" style={{ width: 320, height: 320, top: -120, left: '50%', transform: 'translateX(-50%)', background: 'rgba(34,229,229,0.22)' }} />
//             <div style={{ position: 'relative', zIndex: 1 }}>
//               <h2 className="font-display" style={{ fontSize: 'clamp(30px, 4.2vw, 50px)', fontWeight: 700, letterSpacing: '-0.04em', color: '#f4f5f9', margin: '0 0 16px' }}>
//                 Your assets. Your future.<br />One intelligent platform.
//               </h2>
//               <p style={{ fontSize: 17, color: '#98a2b8', marginBottom: 36 }}>Join 180,000 investors already on NEXORA.</p>
//               <button onClick={() => openModal('register')} style={{
//                 padding: '17px 38px', borderRadius: 12, fontWeight: 700, fontSize: 16, border: 'none', cursor: 'pointer',
//                 background: 'linear-gradient(135deg, #3b6bff, #8b5cf6)', color: '#fff',
//                 boxShadow: '0 0 60px rgba(139,92,246,0.4)',
//                 transition: 'transform 0.25s ease',
//               }}
//               onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)')}
//               onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
//               >Create Free Account</button>
//             </div>
//           </div>
//         </Reveal>
//       </section>
//     </div>
//   );
// }


import { Link, useNavigate } from 'react-router-dom';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { generateChartData } from '../data/crypto';
import { useAuthModal } from '../context/AuthModalContext';
import { useAuth } from '../context/AuthContext';
import Reveal from '../components/Reveal';

const miniChart = generateChartData(14, 67000, 0.04);

const stats = [
  { value: '$2.8B+', label: 'Assets Tracked' },
  { value: '180K+', label: 'Users' },
  { value: '99.99%', label: 'Platform Uptime' },
  { value: '120+', label: 'Assets' },
];

const features = [
  { title: 'Real-time Portfolio Intelligence', desc: 'Live updates across all your digital assets with unified performance analytics and intelligent alerts.', icon: '◈', big: true },
  { title: 'Institutional-grade Security', desc: 'Multi-sig wallets, 2FA, device management, and real-time transaction monitoring protect every interaction.', icon: '⬡' },
  { title: 'Cross-asset Trading', desc: 'Execute trades across 120+ assets with deep liquidity, transparent fees, and instant settlement.', icon: '⇄' },
  { title: 'Tax & Reporting Tools', desc: 'Automated cost-basis tracking, realized/unrealized gain reports, and exportable transaction history.', icon: '≡' },
  { title: 'Smart Alerts', desc: 'Price movement triggers, unusual activity detection, and portfolio milestone notifications.', icon: '∿' },
  { title: 'API Access', desc: 'Full REST and WebSocket API for developers building on top of NEXORA infrastructure.', icon: '⊙' },
];

export default function Landing() {
  const { openModal } = useAuthModal();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleDeposit = () => {
    if (isLoggedIn) navigate('/wallet');
    else openModal('login', '/wallet');
  };
  return (
    <div style={{ background: '#050505', minHeight: '100vh', overflow: 'clip', width: '100%', maxWidth: '100vw', contain: 'paint' }}>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '0 0 60px', overflow: 'clip', width: '100%', maxWidth: '100vw', contain: 'paint' }}>
        {/* Ambient orbs + grid */}
        <div className="orb drift" style={{ width: 'min(460px, 55vw)', height: 'min(460px, 55vw)', top: -140, left: '4%', background: 'rgba(139,92,246,0.32)' }} />
        <div className="orb drift" style={{ width: 'min(380px, 45vw)', height: 'min(380px, 45vw)', top: -60, right: '2%', background: 'rgba(59,107,255,0.28)', animationDelay: '2s' }} />
        <div className="orb pulse-glow" style={{ width: 'min(260px, 40vw)', height: 'min(260px, 40vw)', top: 340, left: '46%', background: 'rgba(34,229,229,0.18)' }} />
        <div className="noise-grid" style={{ position: 'absolute', inset: '0 0 auto 0', height: 620, zIndex: 0 }} />

        <div className="hero-grid" style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 24px 100px', position: 'relative', zIndex: 1 }}>
          <div>
            <Reveal variant="up">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: 100, padding: '6px 14px', marginBottom: 28 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22e5e5', display: 'inline-block', boxShadow: '0 0 8px #22e5e5' }} className="pulse-glow" />
                <span style={{ fontSize: 13, color: '#c4b5fd', fontWeight: 500 }}>Now in public beta — join 180,000 investors</span>
              </div>
            </Reveal>
            <Reveal variant="up" delay={80}>
              <h1 className="font-display" style={{ fontSize: 'clamp(40px, 5.6vw, 72px)', fontWeight: 700, lineHeight: 1.04, letterSpacing: '-0.045em', color: '#f4f5f9', margin: '0 0 22px' }}>
                Crypto investing,<br />
                <span className="gradient-text-web3 glow-cyan-text">made intelligently.</span>
              </h1>
            </Reveal>
            <Reveal variant="up" delay={150}>
              <p style={{ fontSize: 18, color: '#98a2b8', lineHeight: 1.65, margin: '0 0 36px', maxWidth: 480 }}>
                Track, manage, and grow your digital assets from one secure platform built for clarity.
              </p>
            </Reveal>
            <Reveal variant="up" delay={220}>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button onClick={handleDeposit} style={{
                  padding: '15px 30px', borderRadius: 12, fontWeight: 600, fontSize: 15, border: 'none', cursor: 'pointer',
                  background: 'linear-gradient(135deg, #3b6bff, #8b5cf6)', color: '#fff',
                  boxShadow: '0 0 48px rgba(139,92,246,0.4), 0 12px 30px -10px rgba(59,107,255,0.5)',
                  transition: 'transform 0.25s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >Start Investing</button>
                <Link to="/markets" style={{
                  padding: '15px 28px', borderRadius: 12, fontWeight: 500, fontSize: 15, textDecoration: 'none',
                  color: '#c9cedb', border: '1px solid rgba(255,255,255,0.12)', transition: 'border-color 0.2s, color 0.2s',
                }}>Explore Markets →</Link>
              </div>
            </Reveal>
          </div>

          {/* Dashboard preview */}
          <Reveal variant="right" delay={200}>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: -60, background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.22) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />
              <div className="glass-premium float-y" style={{
                borderRadius: 22,
                padding: 24, boxShadow: '0 50px 120px rgba(0,0,0,0.65), 0 0 60px -20px rgba(59,107,255,0.35)', position: 'relative',
                animationDuration: '7s',
              }}>
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 12, color: '#4b5064', marginBottom: 4 }}>Total Portfolio Value</div>
                  <div className="font-display" style={{ fontSize: 32, fontWeight: 700, color: '#f4f5f9', letterSpacing: '-0.03em' }}>$84,250.42</div>
                  <div style={{ fontSize: 14, color: '#22c55e', fontWeight: 500, marginTop: 2 }}>+$1,284.16 · +1.55% today</div>
                </div>

                <div style={{ height: 80, marginBottom: 20 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={miniChart}>
                      <defs>
                        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#22e5e5" stopOpacity={0.35} />
                          <stop offset="100%" stopColor="#3b6bff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="price" stroke="#22e5e5" strokeWidth={2} fill="url(#grad)" dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                  {[
                    { sym: 'BTC', price: '$67,842', change: '+1.23%', color: '#f97316' },
                    { sym: 'ETH', price: '$3,481', change: '-0.87%', color: '#8b5cf6' },
                    { sym: 'NXR', price: '$4.28', change: '+8.42%', color: '#3b6bff' },
                    { sym: 'SOL', price: '$182.44', change: '+3.14%', color: '#22c55e' },
                  ].map(a => (
                    <div key={a.sym} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 11, padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 22, height: 22, borderRadius: '50%', background: a.color + '30', border: `1px solid ${a.color}50`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontSize: 9, fontWeight: 700, color: a.color }}>{a.sym[0]}</span>
                        </div>
                        <span style={{ fontSize: 12, fontWeight: 600, color: '#98a2b8' }}>{a.sym}</span>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 12, fontWeight: 600, color: '#f4f5f9' }}>{a.price}</div>
                        <div style={{ fontSize: 11, color: a.change.startsWith('+') ? '#22c55e' : '#ef4444' }}>{a.change}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 12, padding: '10px 12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 11 }}>
                  <div style={{ fontSize: 11, color: '#4b5064', marginBottom: 6 }}>Recent Activity</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontSize: 12, color: '#22c55e', fontWeight: 500 }}>Bought BTC</span>
                      <span style={{ fontSize: 12, color: '#4b5064' }}> · 0.05 BTC</span>
                    </div>
                    <span style={{ fontSize: 12, color: '#f4f5f9', fontWeight: 500 }}>$3,392</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.015)', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '52px 24px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 24 }}>
          <div style={{ fontSize: 13, color: '#4b5064', textAlign: 'center', marginBottom: 16, width: '100%', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Trusted by modern digital investors</div>
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="scale" delay={i * 90}>
              <div style={{ textAlign: 'center' }}>
                <div className="font-display gradient-text-web3" style={{ fontSize: 34, fontWeight: 700, letterSpacing: '-0.04em' }}>{s.value}</div>
                <div style={{ fontSize: 14, color: '#64748b', marginTop: 4 }}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '110px 24px', position: 'relative', overflow: 'clip' }}>
        <div className="orb" style={{ width: 'min(500px, 60vw)', height: 'min(500px, 60vw)', top: '10%', right: '-10%', background: 'rgba(59,107,255,0.10)' }} />
        <Reveal variant="up">
          <div style={{ textAlign: 'center', marginBottom: 64, position: 'relative', zIndex: 1 }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 46px)', fontWeight: 700, letterSpacing: '-0.04em', color: '#f4f5f9', margin: '0 0 16px' }}>
              Everything your portfolio needs
            </h2>
            <p style={{ fontSize: 17, color: '#64748b', maxWidth: 480, margin: '0 auto' }}>
              Purpose-built tools for the modern digital asset investor — from day one to institutional scale.
            </p>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))', gap: 20, position: 'relative', zIndex: 1 }}>
          {features.map((f, i) => (
            <Reveal key={f.title} variant="up" delay={(i % 3) * 90}>
              <div
                className="card card-hover"
                style={{
                  padding: 28,
                  gridColumn: f.big ? 'span 2' : undefined,
                  height: '100%',
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 11, background: 'linear-gradient(135deg, rgba(59,107,255,0.16), rgba(139,92,246,0.16))', border: '1px solid rgba(139,92,246,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16, color: '#22e5e5' }}>{f.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: '#f4f5f9', margin: '0 0 10px', letterSpacing: '-0.02em' }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px 130px' }}>
        <Reveal variant="scale">
          <div style={{
            background: 'linear-gradient(135deg, rgba(59,107,255,0.18), rgba(139,92,246,0.14) 55%, rgba(34,229,229,0.1))',
            border: '1px solid rgba(139,92,246,0.28)', borderRadius: 28, padding: '76px 48px', textAlign: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <div className="orb pulse-glow" style={{ width: 'min(320px, 60vw)', height: 'min(320px, 60vw)', top: -120, left: '50%', transform: 'translateX(-50%)', background: 'rgba(34,229,229,0.22)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="font-display" style={{ fontSize: 'clamp(30px, 4.2vw, 50px)', fontWeight: 700, letterSpacing: '-0.04em', color: '#f4f5f9', margin: '0 0 16px' }}>
                Your assets. Your future.<br />One intelligent platform.
              </h2>
              <p style={{ fontSize: 17, color: '#98a2b8', marginBottom: 36 }}>Join 180,000 investors already on NEXORA.</p>
              <button onClick={() => openModal('register')} style={{
                padding: '17px 38px', borderRadius: 12, fontWeight: 700, fontSize: 16, border: 'none', cursor: 'pointer',
                background: 'linear-gradient(135deg, #3b6bff, #8b5cf6)', color: '#fff',
                boxShadow: '0 0 60px rgba(139,92,246,0.4)',
                transition: 'transform 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0) scale(1)')}
              >Create Free Account</button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
