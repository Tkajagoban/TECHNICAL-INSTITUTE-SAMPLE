import ScrollReveal from '../components/ScrollReveal';

const instructors = [
  {
    avatar: 'MK',
    name: 'Mohamed Kaja',
    role: 'Founder & Lead Instructor',
    exp: '20 Years',
    specialty: 'Chip-Level Repair',
    bio: 'Pioneer of professional mobile repair training in Sri Lanka. Trained over 5,000 technicians personally. Expert in advanced BGA repairs and motherboard diagnostics.',
    color: '#1563d3',
  },
  {
    avatar: 'PK',
    name: 'Pradeep Kulasekara',
    role: 'Senior Hardware Instructor',
    exp: '14 Years',
    specialty: 'Hardware Repair',
    bio: 'Former service center manager with deep expertise in iPhone and Samsung hardware repair. Specialises in micro-soldering and advanced component diagnosis.',
    color: '#7c3aed',
  },
  {
    avatar: 'NR',
    name: 'Nirosha Rajapaksa',
    role: 'Software & Flashing Trainer',
    exp: '10 Years',
    specialty: 'Software Repair',
    bio: 'Software repair specialist with mastery in Android and iOS flashing tools. Expert in IMEI repair, FRP bypass, and data recovery techniques.',
    color: '#0891b2',
  },
  {
    avatar: 'FS',
    name: 'Faisal Saleem',
    role: 'CCTV & Networking Trainer',
    exp: '9 Years',
    specialty: 'Networking & CCTV',
    bio: 'Certified networking professional and CCTV installation expert. Brings practical field experience from large-scale security installations across Sri Lanka.',
    color: '#059669',
  },
  {
    avatar: 'DW',
    name: 'Dilrukshi Wijesinghe',
    role: 'Student Support Coordinator',
    exp: '7 Years',
    specialty: 'Career Placement',
    bio: 'Manages student welfare, certification processes, and maintains our network of industry partnerships to ensure graduates find quality employment.',
    color: '#d97706',
  },
  {
    avatar: 'RJ',
    name: 'Roshan Jayawardena',
    role: 'Laptop Repair Instructor',
    exp: '11 Years',
    specialty: 'Laptop Repair',
    bio: 'Laptop repair expert with certification from leading brands. Has repaired over 3,000 laptops professionally and brings that real-world experience into every class.',
    color: '#dc2626',
  },
];

const partners = [
  { name: 'Samsung Sri Lanka', type: 'Authorized Partner', icon: '📱' },
  { name: 'Apple Reseller Network', type: 'Certified Partner', icon: '🍎' },
  { name: 'Huawei Service Center', type: 'Training Partner', icon: '📲' },
  { name: 'Dialog Axiata', type: 'Industry Partner', icon: '📡' },
  { name: 'Sri Lanka TVET Authority', type: 'Certification Body', icon: '🏛️' },
  { name: 'Mobitel', type: 'Employment Partner', icon: '📶' },
  { name: 'Etisalat Lanka', type: 'Employment Partner', icon: '📞' },
  { name: 'Tech Sri Lanka', type: 'Community Partner', icon: '💻' },
];

export default function Team() {
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
          <div className="section-tag">Meet the Experts</div>
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
            OUR INSTRUCTORS &<br />
            <span style={{ color: '#3b82f6' }}>INDUSTRY PARTNERS</span>
          </h1>
          <div className="accent-bar accent-bar-center" />
          <p style={{ color: '#7a9bc0', fontSize: '18px', maxWidth: '620px', margin: '0 auto', lineHeight: 1.75 }}>
            Our certified instructors and nationwide partner network ensure our students master contemporary skills and
            enjoy direct pathways to industry employment.
          </p>
        </ScrollReveal>
      </section>

      {/* Team */}
      <section style={{ padding: 'clamp(64px, 8vw, 100px) 24px', backgroundColor: '#050c1a' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <div className="section-tag">Master Faculty</div>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(34px, 5vw, 54px)',
                  color: 'white',
                  marginBottom: '12px',
                }}
              >
                OUR CERTIFIED INSTRUCTORS
              </h2>
              <div className="accent-bar accent-bar-center" />
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '28px',
            }}
          >
            {instructors.map((m, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={(i % 3) * 100}>
                <div
                  className="premium-card"
                  style={{
                    padding: '32px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '22px' }}>
                    <div
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        backgroundColor: m.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        fontWeight: 900,
                        fontFamily: 'Barlow Condensed, sans-serif',
                        color: 'white',
                        flexShrink: 0,
                        border: `3px solid rgba(255,255,255,0.2)`,
                        boxShadow: `0 8px 24px ${m.color}55`,
                      }}
                    >
                      {m.avatar}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: 'Barlow Condensed, sans-serif',
                          fontWeight: 800,
                          fontSize: '22px',
                          color: 'white',
                          marginBottom: '4px',
                        }}
                      >
                        {m.name}
                      </h3>
                      <p style={{ color: m.color, fontSize: '13px', fontWeight: 600 }}>{m.role}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '18px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: '50px',
                        backgroundColor: `${m.color}22`,
                        color: m.color,
                        fontSize: '12px',
                        fontWeight: 700,
                        border: `1px solid ${m.color}44`,
                      }}
                    >
                      {m.specialty}
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
                      {m.exp} Exp.
                    </span>
                  </div>
                  <p style={{ color: '#7a9bc0', fontSize: '14px', lineHeight: 1.75, flex: 1 }}>{m.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section style={{ padding: 'clamp(64px, 8vw, 100px) 24px', backgroundColor: '#070f1e' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <div className="section-tag">Our Network</div>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(34px, 5vw, 54px)',
                  color: 'white',
                  marginBottom: '16px',
                }}
              >
                INDUSTRY & EMPLOYMENT PARTNERS
              </h2>
              <div className="accent-bar accent-bar-center" />
              <p style={{ color: '#7a9bc0', fontSize: '16px', maxWidth: '580px', margin: '0 auto' }}>
                We've established strong formal partnerships with leading national telecommunication & service networks
                to ensure graduate placements.
              </p>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {partners.map((p, i) => (
              <ScrollReveal key={i} animation="zoom-in" delay={(i % 4) * 80}>
                <div
                  className="premium-card"
                  style={{
                    padding: '24px',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(21,99,211,0.18)',
                      border: '1px solid rgba(59,130,246,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      flexShrink: 0,
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'white', fontSize: '16px', marginBottom: '4px' }}>
                      {p.name}
                    </div>
                    <div style={{ fontSize: '12px', color: '#7a9bc0', fontWeight: 500 }}>{p.type}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join team */}
      <section
        style={{
          padding: '72px 24px',
          backgroundColor: '#0d1f3c',
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <ScrollReveal animation="zoom-in">
          <div className="section-tag" style={{ marginBottom: '16px' }}>Careers</div>
          <h2
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(34px, 5vw, 52px)',
              color: 'white',
              marginBottom: '14px',
            }}
          >
            BECOME AN INSTRUCTOR
          </h2>
          <p style={{ color: '#7a9bc0', fontSize: '16px', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.75 }}>
            Are you an experienced technician with a passion for teaching and shaping future talent? We are always
            welcoming experienced professionals to join our academic team.
          </p>
          <a
            href="mailto:careers@kajatech.lk"
            className="btn-blue"
            style={{ display: 'inline-flex', textDecoration: 'none', padding: '16px 36px', fontSize: '16px' }}
          >
            Send Your Resume → careers@kajatech.lk
          </a>
        </ScrollReveal>
      </section>
    </main>
  );
}
