import { useState } from 'react';
import type { Page } from '../App';
import ScrollReveal from '../components/ScrollReveal';

interface Props {
  navigate: (page: Page) => void;
}

const categories = ['All', 'Hardware', 'Software', 'Networking', 'Advanced'];

const courses = [
  {
    icon: '📱',
    category: 'Hardware',
    title: 'Mobile Phone Repair — Basic',
    duration: '3 Months',
    level: 'Beginner',
    sessions: '3 days/week',
    fee: 'LKR 35,000',
    color: '#1563d3',
    features: ['Screen & LCD replacement', 'Battery & charging repairs', 'Buttons & ports fixing', 'Water damage treatment', 'Basic soldering', 'Component identification'],
    desc: 'The perfect starting point for anyone wanting to enter the mobile repair industry. Learn the fundamentals with real devices.',
  },
  {
    icon: '🔧',
    category: 'Hardware',
    title: 'Advanced Hardware Repair',
    duration: '4 Months',
    level: 'Advanced',
    sessions: '4 days/week',
    fee: 'LKR 55,000',
    color: '#7c3aed',
    features: ['Motherboard-level diagnostics', 'BGA chip replacement', 'Micro-soldering', 'Power IC repair', 'Camera & sensor repair', 'Professional lab tools'],
    desc: 'Master chip-level repair and component-level diagnosis. For technicians who want to work on the most complex repairs.',
  },
  {
    icon: '💻',
    category: 'Software',
    title: 'Software & Flashing Course',
    duration: '2 Months',
    level: 'Intermediate',
    sessions: '3 days/week',
    fee: 'LKR 28,000',
    color: '#0891b2',
    features: ['Firmware flashing (Android/iOS)', 'IMEI repair & unlock', 'FRP & Google account bypass', 'Pattern & PIN removal', 'Baseband repair', 'iCloud activation'],
    desc: 'Learn all major software repair techniques for Android and iOS devices using professional tools and software.',
  },
  {
    icon: '🔒',
    category: 'Software',
    title: 'Phone Unlock & IMEI Course',
    duration: '1 Month',
    level: 'Beginner',
    sessions: '2 days/week',
    fee: 'LKR 15,000',
    color: '#059669',
    features: ['Network unlock methods', 'IMEI repair tools', 'Sim card issues', 'Software tools mastery', 'Remote unlock services', 'Business setup guidance'],
    desc: 'Specialised course focused on phone unlocking, IMEI services, and building a profitable side business.',
  },
  {
    icon: '📡',
    category: 'Networking',
    title: 'CCTV & Networking Installation',
    duration: '2 Months',
    level: 'Beginner',
    sessions: '3 days/week',
    fee: 'LKR 32,000',
    color: '#d97706',
    features: ['CCTV camera setup', 'DVR/NVR configuration', 'Network cable crimping', 'Wi-Fi router setup', 'IP camera programming', 'Remote access setup'],
    desc: 'Expand your services to CCTV and networking installation — a high-demand skill with strong earning potential.',
  },
  {
    icon: '🖥️',
    category: 'Hardware',
    title: 'Laptop Repair Course',
    duration: '3 Months',
    level: 'Intermediate',
    sessions: '3 days/week',
    fee: 'LKR 42,000',
    color: '#dc2626',
    features: ['Laptop disassembly & assembly', 'Screen & keyboard replacement', 'Motherboard repair basics', 'RAM & storage upgrades', 'Thermal paste & cooling', 'Power jack repair'],
    desc: 'Learn to diagnose and repair laptops from all major brands — a growing market with excellent revenue potential.',
  },
  {
    icon: '🔬',
    category: 'Advanced',
    title: 'Chip-Level BGA Repair',
    duration: '2 Months',
    level: 'Expert',
    sessions: '4 days/week',
    fee: 'LKR 48,000',
    color: '#be185d',
    features: ['BGA reballing techniques', 'Infrared rework stations', 'Component sourcing', 'Schematic reading', 'Hot air rework', 'Ultra-fine soldering'],
    desc: 'The most advanced technical course — master BGA chip repair and command premium rates in the repair industry.',
  },
  {
    icon: '⚡',
    category: 'Advanced',
    title: 'Complete Technician Package',
    duration: '6 Months',
    level: 'All Levels',
    sessions: 'Daily',
    fee: 'LKR 95,000',
    color: '#1563d3',
    features: ['All hardware modules', 'All software modules', 'CCTV & networking basics', 'Business setup guidance', 'Job placement assistance', 'Lifetime alumni support'],
    desc: 'Our most comprehensive program — everything you need to become a fully certified, job-ready mobile repair professional.',
    featured: true,
  },
];

export default function Courses({ navigate }: Props) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? courses : courses.filter(c => c.category === activeCategory);

  return (
    <main style={{ paddingTop: '70px' }}>
      {/* Header */}
      <section
        style={{
          padding: 'clamp(64px, 8vw, 108px) 24px',
          background: 'linear-gradient(to bottom, #0a1628, #050c1a)',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="ambient-glow"
          style={{ top: '10%', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '300px', backgroundColor: '#1563d3' }}
        />
        <ScrollReveal animation="fade-up">
          <div className="section-tag">Enroll Today</div>
          <h1
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(44px, 7vw, 84px)',
              lineHeight: 0.95,
              color: 'white',
              marginBottom: '20px',
            }}
          >
            OUR PROFESSIONAL<br />
            <span style={{ color: '#3b82f6' }}>COURSES & PROGRAMS</span>
          </h1>
          <div className="accent-bar accent-bar-center" />
          <p style={{ color: '#7a9bc0', fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.75 }}>
            Choose from our range of industry-accredited courses. All programs include hands-on lab time, professional
            tools training, and job placement assistance.
          </p>
        </ScrollReveal>
      </section>

      {/* Filter tabs */}
      <div style={{ backgroundColor: '#070f1e', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '0 24px' }}>
        <ScrollReveal animation="fade-up" delay={100}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', gap: '8px', overflowX: 'auto', padding: '8px 0' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '12px 24px',
                  background: activeCategory === cat ? 'rgba(21,99,211,0.2)' : 'transparent',
                  border: activeCategory === cat ? '1px solid rgba(59,130,246,0.5)' : '1px solid transparent',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: activeCategory === cat ? 700 : 500,
                  color: activeCategory === cat ? '#60a5fa' : '#7a9bc0',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={e => {
                  if (activeCategory !== cat) {
                    (e.currentTarget as HTMLElement).style.color = '#fff';
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.05)';
                  }
                }}
                onMouseLeave={e => {
                  if (activeCategory !== cat) {
                    (e.currentTarget as HTMLElement).style.color = '#7a9bc0';
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Courses grid */}
      <section style={{ padding: 'clamp(56px, 7vw, 96px) 24px', backgroundColor: '#050c1a' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '28px' }}>
            {filtered.map((c, i) => (
              <ScrollReveal key={`${activeCategory}-${i}`} animation="fade-up" delay={(i % 3) * 100}>
                <div
                  className="course-card"
                  style={{
                    padding: '32px',
                    outline: (c as any).featured ? `2px solid ${c.color}` : 'none',
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {(c as any).featured && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-13px',
                        right: '24px',
                        backgroundColor: c.color,
                        color: 'white',
                        padding: '4px 16px',
                        borderRadius: '50px',
                        fontSize: '11px',
                        fontWeight: 800,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        boxShadow: `0 4px 14px ${c.color}66`,
                      }}
                    >
                      Best Value & Popular
                    </div>
                  )}
                  <div style={{ fontSize: '38px', marginBottom: '16px' }}>{c.icon}</div>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: '50px',
                        backgroundColor: `${c.color}22`,
                        color: c.color,
                        fontSize: '12px',
                        fontWeight: 700,
                        border: `1px solid ${c.color}44`,
                      }}
                    >
                      {c.category}
                    </span>
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: '50px',
                        backgroundColor: 'rgba(255,255,255,0.07)',
                        color: '#94b4cc',
                        fontSize: '12px',
                        fontWeight: 600,
                      }}
                    >
                      {c.level}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 800,
                      fontSize: '24px',
                      color: 'white',
                      marginBottom: '12px',
                      lineHeight: 1.2,
                    }}
                  >
                    {c.title}
                  </h3>
                  <p style={{ color: '#7a9bc0', fontSize: '14px', lineHeight: 1.7, marginBottom: '22px' }}>{c.desc}</p>

                  {/* Course info */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '10px',
                      marginBottom: '22px',
                    }}
                  >
                    {[
                      { label: 'Duration', val: c.duration },
                      { label: 'Sessions', val: c.sessions },
                      { label: 'Level', val: c.level },
                      { label: 'Course Fee', val: c.fee },
                    ].map((info, j) => (
                      <div
                        key={j}
                        style={{
                          padding: '12px',
                          borderRadius: '10px',
                          backgroundColor: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.05)',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '11px',
                            color: '#7a9bc0',
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            marginBottom: '4px',
                          }}
                        >
                          {info.label}
                        </div>
                        <div style={{ fontSize: '14px', color: 'white', fontWeight: 700 }}>{info.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div style={{ marginBottom: '26px', flex: 1 }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                      Key Skills Covered:
                    </div>
                    {c.features.map((f, j) => (
                      <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '5px 0' }}>
                        <span style={{ color: c.color, fontSize: '14px', fontWeight: 800, flexShrink: 0 }}>✓</span>
                        <span style={{ color: '#94b4cc', fontSize: '13px' }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                    <button
                      onClick={() => navigate('contact')}
                      style={{
                        flex: 1,
                        padding: '13px',
                        borderRadius: '50px',
                        backgroundColor: c.color,
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '14px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        boxShadow: `0 4px 16px ${c.color}55`,
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.opacity = '0.9';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.opacity = '1';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      }}
                    >
                      Enroll in Course →
                    </button>
                    <a
                      href="https://wa.me/94700000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Inquire via WhatsApp"
                      style={{
                        padding: '13px 18px',
                        borderRadius: '50px',
                        backgroundColor: '#25D366',
                        color: 'white',
                        fontSize: '16px',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 14px rgba(37,211,102,0.35)',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#1ebe5a'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#25D366'}
                    >
                      💬
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Note & Bottom CTA */}
      <section style={{ padding: '56px 24px', backgroundColor: '#070f1e', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <ScrollReveal animation="zoom-in">
          <p style={{ color: '#b0c8de', fontSize: '16px', marginBottom: '24px', maxWidth: '700px', margin: '0 auto 24px' }}>
            📋 All course fees include official study materials, lab consumables, full equipment access during training,
            and an accredited certificate upon completion. Flexible installment options available.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/94700000000" target="_blank" rel="noopener noreferrer" className="btn-green">
              💬 Ask Questions on WhatsApp
            </a>
            <button onClick={() => navigate('contact')} className="btn-blue">
              Book a Free Consultation →
            </button>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
