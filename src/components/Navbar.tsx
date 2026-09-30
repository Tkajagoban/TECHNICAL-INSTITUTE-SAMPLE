import { useState, useEffect } from 'react';
import type { Page } from '../App';

interface Props {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Courses', page: 'courses' },
  { label: 'Repair & Tools', page: 'repair' },
  { label: 'Team & Partners', page: 'team' },
  { label: 'Contact / Enroll', page: 'contact' },
];

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Navbar({ currentPage, navigate }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      backgroundColor: scrolled ? 'rgba(5,12,26,0.97)' : 'rgba(5,12,26,0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      transition: 'background-color 0.3s',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px',
      }}>
        {/* Logo */}
        <button onClick={() => navigate('home')} style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          background: 'none', border: 'none', cursor: 'pointer', color: 'white',
          padding: 0,
        }}>
          <div style={{
            width: '42px', height: '42px',
            borderRadius: '10px',
            border: '2px solid #1563d3',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '16px', fontWeight: 900,
            color: '#1563d3',
            fontFamily: 'Barlow Condensed, sans-serif',
            letterSpacing: '0.03em',
          }}>KT</div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '19px', letterSpacing: '0.06em', lineHeight: 1 }}>KAJA</div>
            <div style={{ fontSize: '9px', letterSpacing: '0.18em', color: '#7a9bc0', fontWeight: 500, lineHeight: 1.5 }}>TECHNICAL INSTITUTE</div>
          </div>
        </button>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="hidden lg:flex">
          {navItems.map(item => (
            <button
              key={item.page}
              onClick={() => navigate(item.page)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: currentPage === item.page ? '#ffffff' : '#94b4cc',
                fontSize: '14px',
                fontWeight: currentPage === item.page ? 600 : 400,
                letterSpacing: '0.02em',
                paddingBottom: '4px',
                borderBottom: currentPage === item.page ? '2px solid #1563d3' : '2px solid transparent',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { if (currentPage !== item.page) (e.currentTarget as HTMLElement).style.color = '#fff'; }}
              onMouseLeave={e => { if (currentPage !== item.page) (e.currentTarget as HTMLElement).style.color = '#94b4cc'; }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }} className="hidden lg:flex">
          <a href="https://wa.me/94700000000" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '9px 18px', borderRadius: '50px',
              backgroundColor: '#25D366', color: 'white',
              fontWeight: 600, fontSize: '14px', textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#1ebe5a'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#25D366'}
          >
            <WaIcon /> WhatsApp
          </a>
          <button onClick={() => navigate('contact')}
            style={{
              padding: '9px 20px', borderRadius: '50px',
              backgroundColor: '#1563d3', color: 'white',
              fontWeight: 600, fontSize: '14px',
              border: 'none', cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#1e6ee0'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#1563d3'}
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', padding: '4px' }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={{
          backgroundColor: '#0a1628',
          padding: '12px 24px 20px',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }} className="lg:hidden">
          {navItems.map((item, i) => (
            <button
              key={item.page}
              onClick={() => { navigate(item.page); setMenuOpen(false); }}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: 'none', border: 'none', cursor: 'pointer',
                color: currentPage === item.page ? '#ffffff' : '#94b4cc',
                fontSize: '16px', padding: '13px 0',
                fontWeight: currentPage === item.page ? 600 : 400,
                borderBottom: i < navItems.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}
            >{item.label}</button>
          ))}
          <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
            <a href="https://wa.me/94700000000" target="_blank" rel="noopener noreferrer"
              style={{
                flex: 1, textAlign: 'center', padding: '12px',
                borderRadius: '50px', backgroundColor: '#25D366',
                color: 'white', fontWeight: 600, textDecoration: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              }}><WaIcon /> WhatsApp</a>
            <button onClick={() => { navigate('contact'); setMenuOpen(false); }}
              style={{
                flex: 1, padding: '12px', borderRadius: '50px',
                backgroundColor: '#1563d3', color: 'white',
                fontWeight: 600, border: 'none', cursor: 'pointer',
              }}>Enroll Now</button>
          </div>
        </div>
      )}
    </nav>
  );
}
