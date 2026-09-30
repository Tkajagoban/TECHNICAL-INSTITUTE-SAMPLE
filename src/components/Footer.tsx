import type { Page } from '../App';
import ScrollReveal from './ScrollReveal';

interface Props {
  navigate: (page: Page) => void;
}

const links: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about' },
  { label: 'Courses', page: 'courses' },
  { label: 'Repair & Tools', page: 'repair' },
  { label: 'Team & Partners', page: 'team' },
  { label: 'Contact / Enroll', page: 'contact' },
];

const courses = [
  'Mobile Phone Repair (Basic)',
  'Advanced Hardware Repair',
  'Software & Flashing Course',
  'CCTV & Networking',
  'Laptop Repair Course',
  'Chip-Level Repair',
];

export default function Footer({ navigate }: Props) {
  return (
    <footer style={{ backgroundColor: '#030912', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '64px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        <ScrollReveal animation="fade-up">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '48px',
              paddingBottom: '48px',
            }}
          >
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    border: '2px solid #1563d3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: 900,
                    color: '#1563d3',
                    fontFamily: 'Barlow Condensed, sans-serif',
                  }}
                >
                  KT
                </div>
                <div>
                  <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '19px', letterSpacing: '0.06em', lineHeight: 1 }}>
                    KAJA
                  </div>
                  <div style={{ fontSize: '9px', letterSpacing: '0.18em', color: '#7a9bc0', fontWeight: 500, lineHeight: 1.5 }}>
                    TECHNICAL INSTITUTE
                  </div>
                </div>
              </div>
              <p style={{ color: '#7a9bc0', fontSize: '14px', lineHeight: 1.7, maxWidth: '260px', marginBottom: '20px' }}>
                Sri Lanka's leading professional mobile phone technical training institute. Empowering students since 2006.
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                {['📘', '📷', '🎬', '▶️'].map((icon, i) => (
                  <div
                    key={i}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(21,99,211,0.3)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.06)')}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  letterSpacing: '0.1em',
                  color: '#1563d3',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                }}
              >
                Quick Links
              </h4>
              {links.map(link => (
                <button
                  key={link.page}
                  onClick={() => navigate(link.page)}
                  style={{
                    display: 'block',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#7a9bc0',
                    fontSize: '14px',
                    padding: '6px 0',
                    textAlign: 'left',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#fff')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#7a9bc0')}
                >
                  → {link.label}
                </button>
              ))}
            </div>

            {/* Courses */}
            <div>
              <h4
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  letterSpacing: '0.1em',
                  color: '#1563d3',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                }}
              >
                Our Courses
              </h4>
              {courses.map(c => (
                <button
                  key={c}
                  onClick={() => navigate('courses')}
                  style={{
                    display: 'block',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#7a9bc0',
                    fontSize: '14px',
                    padding: '6px 0',
                    textAlign: 'left',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#fff')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#7a9bc0')}
                >
                  → {c}
                </button>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  letterSpacing: '0.1em',
                  color: '#1563d3',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                }}
              >
                Contact Us
              </h4>
              {[
                { icon: '📍', text: 'No. 45, Tech Street, Colombo 07, Sri Lanka' },
                { icon: '📞', text: '+94 70 000 0000' },
                { icon: '✉️', text: 'info@kajatech.lk' },
                { icon: '🕐', text: 'Mon–Sat: 8:30 AM – 6:00 PM' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '14px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '15px', marginTop: '1px', flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ color: '#7a9bc0', fontSize: '14px', lineHeight: 1.5 }}>{item.text}</span>
                </div>
              ))}
              <a
                href="https://wa.me/94700000000"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '8px',
                  padding: '10px 20px',
                  borderRadius: '50px',
                  backgroundColor: '#25D366',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(37,211,102,0.3)',
                }}
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            padding: '20px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ color: '#4a6a88', fontSize: '13px' }}>
            © {new Date().getFullYear()} Kaja Technical Institute. All rights reserved.
          </p>
          <p style={{ color: '#4a6a88', fontSize: '13px' }}>Designed with ❤️ in Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
