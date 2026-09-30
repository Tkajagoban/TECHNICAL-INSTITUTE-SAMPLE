import ScrollReveal from '../components/ScrollReveal';

const tools = [
  { icon: '🔬', name: 'Trinocular Microscope', category: 'Inspection', desc: 'Stereo microscope with 45x magnification for precision micro-soldering and component inspection.' },
  { icon: '♨️', name: 'BGA Rework Station', category: 'Soldering', desc: 'Professional infrared/hot air BGA rework system for chip reballing and motherboard repair.' },
  { icon: '🔌', name: 'DC Power Supply', category: 'Diagnosis', desc: 'Adjustable DC power supply for safely powering phone motherboards during fault diagnosis.' },
  { icon: '📏', name: 'Multimeter & Oscilloscope', category: 'Diagnosis', desc: 'Digital multimeter and oscilloscope for measuring voltage, current, and signal integrity.' },
  { icon: '🖥️', name: 'NAND Flash Programmer', category: 'Software', desc: 'Professional programmer for reading, writing, and recovering NAND flash memory chips.' },
  { icon: '📡', name: 'JTAG / ISP Box', category: 'Software', desc: 'Advanced debugging and flashing tool for direct JTAG interface on Android and feature phones.' },
  { icon: '🔦', name: 'UV Curing Lamp', category: 'Assembly', desc: 'UV light for curing optical adhesive (OCA) when reassembling LCD screen assemblies.' },
  { icon: '🧲', name: 'Hot Air Rework Station', category: 'Soldering', desc: '3-in-1 hot air, soldering iron, and preheating station for surface mount component work.' },
  { icon: '🔧', name: 'Precision Screwdriver Set', category: 'Assembly', desc: 'Complete set of Phillips, Pentalobe, Torx, and Tri-point screwdrivers for all brands.' },
  { icon: '💎', name: 'LCD Separator Machine', category: 'Assembly', desc: 'Vacuum and heating separator for safely separating cracked glass from LCD assemblies.' },
  { icon: '🏗️', name: 'Ultrasonic Cleaner', category: 'Cleaning', desc: 'High-frequency ultrasonic cleaner for removing corrosion and flux from phone motherboards.' },
  { icon: '🧪', name: 'Tinning Alloy & Flux', category: 'Soldering', desc: 'Professional soldering consumables including low-melt solder, flux paste, and cleaning supplies.' },
];

const services = [
  { icon: '📱', title: 'Screen Replacement', desc: 'All brands — Samsung, iPhone, Huawei, Oppo, Vivo, Xiaomi. Genuine and compatible options.' },
  { icon: '🔋', title: 'Battery Replacement', desc: 'OEM-grade batteries with capacity testing for all popular smartphone models.' },
  { icon: '💾', title: 'Data Recovery', desc: 'Recover lost data from water-damaged, boot-looped, or chip-damaged devices.' },
  { icon: '🔓', title: 'Phone Unlocking', desc: 'Network unlock, FRP bypass, and iCloud activation for all major brands.' },
  { icon: '⚙️', title: 'Motherboard Repair', desc: 'Chip-level and component-level motherboard repairs for phones and tablets.' },
  { icon: '🌐', title: 'Software Flashing', desc: 'Firmware updates, OS re-installation, and IMEI repair services.' },
];

export default function RepairTools() {
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
          <div className="section-tag">Professional Equipment</div>
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
            LAB TOOLS &<br />
            <span style={{ color: '#3b82f6' }}>REPAIR SERVICES</span>
          </h1>
          <div className="accent-bar accent-bar-center" />
          <p style={{ color: '#7a9bc0', fontSize: '18px', maxWidth: '620px', margin: '0 auto', lineHeight: 1.75 }}>
            We train our students using the same professional-grade tools and equipment found in leading mobile service
            centers and warranty repair labs worldwide.
          </p>
        </ScrollReveal>
      </section>

      {/* Tools Grid */}
      <section style={{ padding: 'clamp(64px, 8vw, 100px) 24px', backgroundColor: '#050c1a' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <div className="section-tag">Hands-on Laboratory</div>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(34px, 5vw, 54px)',
                  color: 'white',
                  marginBottom: '12px',
                }}
              >
                LAB EQUIPMENT & TOOLS
              </h2>
              <div className="accent-bar accent-bar-center" />
              <p style={{ color: '#7a9bc0', fontSize: '16px' }}>
                Industry-standard diagnostic & micro-soldering tools available to every student
              </p>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {tools.map((tool, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={(i % 4) * 80}>
                <div
                  className="premium-card"
                  style={{
                    padding: '28px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ fontSize: '32px' }}>{tool.icon}</span>
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: '50px',
                        backgroundColor: 'rgba(21,99,211,0.18)',
                        border: '1px solid rgba(59,130,246,0.3)',
                        color: '#93c5fd',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {tool.category}
                    </span>
                  </div>
                  <h4
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 800,
                      fontSize: '20px',
                      color: 'white',
                      marginBottom: '8px',
                    }}
                  >
                    {tool.name}
                  </h4>
                  <p style={{ color: '#7a9bc0', fontSize: '14px', lineHeight: 1.7 }}>{tool.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services we offer */}
      <section style={{ padding: 'clamp(64px, 8vw, 100px) 24px', backgroundColor: '#070f1e' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <div className="section-tag">On-Site Services</div>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(34px, 5vw, 54px)',
                  color: 'white',
                  marginBottom: '12px',
                }}
              >
                PROFESSIONAL REPAIR SERVICES
              </h2>
              <div className="accent-bar accent-bar-center" />
              <p style={{ color: '#7a9bc0', fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
                In addition to training, our institute runs a fully equipped commercial repair center handled by expert
                instructors and master technicians.
              </p>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {services.map((s, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={(i % 3) * 100}>
                <div
                  className="premium-card"
                  style={{
                    padding: '30px',
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'flex-start',
                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(21,99,211,0.22)',
                      border: '1px solid rgba(59,130,246,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'Barlow Condensed, sans-serif',
                        fontWeight: 800,
                        fontSize: '22px',
                        color: 'white',
                        marginBottom: '8px',
                      }}
                    >
                      {s.title}
                    </h4>
                    <p style={{ color: '#7a9bc0', fontSize: '14px', lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brands we train on */}
      <section style={{ padding: 'clamp(56px, 7vw, 84px) 24px', backgroundColor: '#050c1a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal animation="fade-up">
            <div className="section-tag" style={{ marginBottom: '16px' }}>Supported Brands</div>
            <h3
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 800,
                fontSize: '28px',
                color: 'white',
                marginBottom: '28px',
              }}
            >
              WE TRAIN AND REPAIR ALL MAJOR SMARTPHONE BRANDS
            </h3>
          </ScrollReveal>

          <ScrollReveal animation="zoom-in" delay={150}>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Samsung', 'Apple iPhone', 'Huawei', 'Oppo', 'Vivo', 'Xiaomi', 'Realme', 'Nokia', 'Sony', 'OnePlus', 'Tecno', 'Infinix'].map((brand, i) => (
                <div
                  key={i}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '10px',
                    backgroundColor: '#0d1f3c',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#94b4cc',
                    fontSize: '14px',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#3b82f6';
                    (e.currentTarget as HTMLElement).style.color = '#fff';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.color = '#94b4cc';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  {brand}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
