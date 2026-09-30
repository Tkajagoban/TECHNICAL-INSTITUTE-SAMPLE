import type { Page } from '../App';
import ScrollReveal from '../components/ScrollReveal';

interface Props {
  navigate: (page: Page) => void;
}

const milestones = [
  {
    year: '2006',
    title: 'Founded',
    desc: 'Kaja Technical Institute was established in Colombo with a mission to provide quality mobile repair training.',
  },
  {
    year: '2010',
    title: 'First 1,000 Students',
    desc: "We reached the milestone of 1,000 trained graduates, establishing ourselves as Sri Lanka's premier technical training center.",
  },
  {
    year: '2015',
    title: 'Advanced Lab Opened',
    desc: 'Inaugurated a state-of-the-art chip-level repair lab equipped with the latest BGA rework stations and diagnostic tools.',
  },
  {
    year: '2020',
    title: 'Online Learning',
    desc: 'Launched hybrid online-offline courses, making quality training accessible to students across the island.',
  },
  {
    year: '2024',
    title: '5,000+ Graduates',
    desc: 'Surpassed 5,000 trained graduates with placement partners across leading service centers in Sri Lanka and internationally.',
  },
];

const values = [
  {
    icon: '🎯',
    title: 'Practical Focus',
    desc: 'Every course is built around hands-on learning with real devices and professional equipment.',
  },
  {
    icon: '🌟',
    title: 'Excellence',
    desc: 'We maintain the highest standards in curriculum design, instructor quality, and student outcomes.',
  },
  {
    icon: '🤝',
    title: 'Industry Connect',
    desc: 'Strong relationships with service centers ensure our graduates have direct pathways to employment.',
  },
  {
    icon: '📈',
    title: 'Continuous Growth',
    desc: 'We regularly update our curriculum to match the latest mobile technology developments.',
  },
  {
    icon: '🏅',
    title: 'Recognition',
    desc: 'Our certifications are recognized by leading mobile brands and service organizations across Asia.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    desc: 'From chip-level repair to software flashing, we cover cutting-edge techniques used in the industry today.',
  },
];

const team = [
  { name: 'Mohamed Kaja', role: 'Founder & CEO', exp: '20+ Years', avatar: 'MK' },
  { name: 'Pradeep Kulasekara', role: 'Head Instructor', exp: '14 Years', avatar: 'PK' },
  { name: 'Nirosha Rajapaksa', role: 'Software Specialist', exp: '10 Years', avatar: 'NR' },
];

export default function About({ navigate }: Props) {
  return (
    <main style={{ paddingTop: '70px' }}>
      {/* Page Header */}
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
          <div className="section-tag">Our Story</div>
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
            ABOUT KAJA<br />
            <span style={{ color: '#3b82f6' }}>TECHNICAL INSTITUTE</span>
          </h1>
          <div className="accent-bar accent-bar-center" />
          <p style={{ color: '#7a9bc0', fontSize: '18px', maxWidth: '640px', margin: '0 auto', lineHeight: 1.75 }}>
            Sri Lanka's most trusted technical training institution for mobile phone repair and electronics, empowering
            technicians since 2006.
          </p>
        </ScrollReveal>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: 'clamp(72px, 8vw, 108px) 24px', backgroundColor: '#050c1a' }}>
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          <ScrollReveal animation="fade-left">
            <div
              className="premium-card"
              style={{
                padding: '40px',
                height: '100%',
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🚀</div>
              <div className="section-tag" style={{ marginBottom: '10px' }}>Our Mission</div>
              <h3
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 800,
                  fontSize: '30px',
                  color: 'white',
                  marginBottom: '16px',
                }}
              >
                Empowering Every Technician
              </h3>
              <p style={{ color: '#7a9bc0', fontSize: '15px', lineHeight: 1.8 }}>
                To provide world-class, practical technical education in mobile phone repair and electronics, creating
                confident, skilled professionals who drive Sri Lanka's growing tech service industry forward.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={150}>
            <div
              className="premium-card"
              style={{
                padding: '40px',
                height: '100%',
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🔭</div>
              <div className="section-tag" style={{ marginBottom: '10px' }}>Our Vision</div>
              <h3
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 800,
                  fontSize: '30px',
                  color: 'white',
                  marginBottom: '16px',
                }}
              >
                Asia's Leading Tech Institute
              </h3>
              <p style={{ color: '#7a9bc0', fontSize: '15px', lineHeight: 1.8 }}>
                To become South Asia's most recognized technical training institution, shaping the next generation of
                mobile technology experts who carry our legacy of excellence globally.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: 'clamp(72px, 8vw, 108px) 24px', backgroundColor: '#070f1e' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="section-tag">Our Journey</div>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  color: 'white',
                  marginBottom: '12px',
                }}
              >
                18 YEARS OF MILESTONES
              </h2>
              <div className="accent-bar accent-bar-center" />
            </div>
          </ScrollReveal>

          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div
              style={{
                position: 'absolute',
                left: '60px',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(180deg, #1563d3 0%, rgba(21,99,211,0.2) 100%)',
              }}
            />
            {milestones.map((m, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div
                  style={{
                    display: 'flex',
                    gap: '28px',
                    marginBottom: '40px',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      paddingTop: '6px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 900,
                        fontSize: '15px',
                        color: '#3b82f6',
                        letterSpacing: '0.05em',
                        position: 'relative',
                        zIndex: 1,
                        backgroundColor: '#070f1e',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        border: '1px solid rgba(59,130,246,0.3)',
                      }}
                    >
                      {m.year}
                    </div>
                  </div>
                  <div
                    className="premium-card"
                    style={{
                      flex: 1,
                      padding: '24px 28px',
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 800,
                        fontSize: '22px',
                        color: 'white',
                        marginBottom: '8px',
                      }}
                    >
                      {m.title}
                    </h4>
                    <p style={{ color: '#7a9bc0', fontSize: '15px', lineHeight: 1.7 }}>{m.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: 'clamp(72px, 8vw, 108px) 24px', backgroundColor: '#050c1a' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-tag">What Drives Us</div>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  color: 'white',
                  marginBottom: '12px',
                }}
              >
                OUR CORE VALUES
              </h2>
              <div className="accent-bar accent-bar-center" />
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
            }}
          >
            {values.map((v, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
                <div
                  className="premium-card"
                  style={{
                    padding: '32px 26px',
                    height: '100%',
                  }}
                >
                  <div style={{ fontSize: '36px', marginBottom: '14px' }}>{v.icon}</div>
                  <h3
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 800,
                      fontSize: '22px',
                      color: 'white',
                      marginBottom: '10px',
                    }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ color: '#7a9bc0', fontSize: '14px', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: 'clamp(72px, 8vw, 108px) 24px', backgroundColor: '#070f1e' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-tag">The Experts</div>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  color: 'white',
                  marginBottom: '12px',
                }}
              >
                LEADERSHIP TEAM
              </h2>
              <div className="accent-bar accent-bar-center" />
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', gap: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {team.map((member, i) => (
              <ScrollReveal key={i} animation="zoom-in" delay={i * 120}>
                <div
                  className="premium-card"
                  style={{
                    padding: '36px 28px',
                    textAlign: 'center',
                    width: '260px',
                  }}
                >
                  <div
                    style={{
                      width: '84px',
                      height: '84px',
                      borderRadius: '50%',
                      backgroundColor: '#1563d3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '30px',
                      fontWeight: 900,
                      fontFamily: 'Barlow Condensed, sans-serif',
                      color: 'white',
                      margin: '0 auto 18px',
                      border: '3px solid rgba(59,130,246,0.4)',
                      boxShadow: '0 8px 24px rgba(21,99,211,0.3)',
                    }}
                  >
                    {member.avatar}
                  </div>
                  <h4
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 800,
                      fontSize: '22px',
                      color: 'white',
                      marginBottom: '6px',
                    }}
                  >
                    {member.name}
                  </h4>
                  <p style={{ color: '#3b82f6', fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>
                    {member.role}
                  </p>
                  <span
                    style={{
                      padding: '5px 14px',
                      borderRadius: '50px',
                      backgroundColor: 'rgba(21,99,211,0.18)',
                      border: '1px solid rgba(21,99,211,0.3)',
                      color: '#94b4cc',
                      fontSize: '12px',
                      fontWeight: 600,
                    }}
                  >
                    {member.exp} Experience
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '72px 24px',
          background: 'linear-gradient(135deg, #1563d3 0%, #0d3b82 100%)',
          textAlign: 'center',
        }}
      >
        <ScrollReveal animation="zoom-in">
          <h2
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(38px, 5vw, 60px)',
              color: 'white',
              marginBottom: '16px',
            }}
          >
            JOIN OUR GROWING FAMILY
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '18px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Over 5,000 graduates have transformed their lives with Kaja Technical Institute. You could be next.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('courses')}
              style={{
                padding: '15px 36px',
                borderRadius: '50px',
                backgroundColor: 'white',
                color: '#1563d3',
                fontWeight: 700,
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'}
            >
              Explore Courses →
            </button>
            <button
              onClick={() => navigate('contact')}
              style={{
                padding: '15px 36px',
                borderRadius: '50px',
                backgroundColor: 'transparent',
                color: 'white',
                fontWeight: 700,
                fontSize: '16px',
                border: '2px solid rgba(255,255,255,0.6)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.1)';
                (e.currentTarget as HTMLElement).style.borderColor = 'white';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.6)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              Contact Us →
            </button>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
