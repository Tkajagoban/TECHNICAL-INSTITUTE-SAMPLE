import { useState, useEffect, useRef } from 'react';
import type { Page } from '../App';
import ScrollReveal, { AnimatedCounter } from '../components/ScrollReveal';

interface Props {
  navigate: (page: Page) => void;
}

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&h=1080&fit=crop&auto=format',
    label: "SRI LANKA'S PROFESSIONAL MOBILE PHONE TECHNICAL TRAINING INSTITUTE",
    title: 'MASTER THE SKILL.\nBUILD YOUR FUTURE.',
    desc: 'Professional Mobile Phone Repairing Training in Sri Lanka — Practical knowledge, experienced instructors and industry-focused technical skills since 2006.',
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop&auto=format',
    label: 'EXPERT-LED TECHNICAL TRAINING PROGRAMS',
    title: 'LEARN FROM THE\nBEST EXPERTS.',
    desc: 'Our certified instructors bring real-world expertise to every session, preparing you for a successful career in mobile technology repair.',
  },
  {
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1920&h=1080&fit=crop&auto=format',
    label: 'STATE-OF-THE-ART REPAIR FACILITIES & LABS',
    title: 'HANDS-ON\nPRACTICAL TRAINING.',
    desc: 'Get hands-on experience with the latest tools and equipment in our modern, fully equipped repair workshops and labs.',
  },
  {
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1920&h=1080&fit=crop&auto=format',
    label: 'CERTIFIED COURSES & INDUSTRY RECOGNITION',
    title: 'CERTIFIED\nPROFESSIONALS.',
    desc: 'Earn industry-recognized certifications and join thousands of successful graduates working across Sri Lanka and beyond.',
  },
];

const stats = [
  { value: 5000, suffix: '+', label: 'Students Trained' },
  { value: 18, suffix: '+', label: 'Years of Excellence' },
  { value: 12, suffix: '', label: 'Courses Available' },
  { value: 96, suffix: '%', label: 'Placement Rate' },
];

const courses = [
  {
    icon: '📱',
    title: 'Mobile Phone Repair (Basic)',
    duration: '3 Months',
    level: 'Beginner',
    desc: 'Master fundamental mobile phone diagnosis, hardware repair, and component replacement techniques.',
    color: '#1563d3',
  },
  {
    icon: '🔧',
    title: 'Advanced Hardware Repair',
    duration: '4 Months',
    level: 'Advanced',
    desc: 'Deep-dive into motherboard repair, component-level soldering, and advanced diagnostic skills.',
    color: '#7c3aed',
  },
  {
    icon: '💻',
    title: 'Software & Flashing',
    duration: '2 Months',
    level: 'Intermediate',
    desc: 'Learn firmware flashing, IMEI repair, FRP bypass, and complete software troubleshooting.',
    color: '#0891b2',
  },
];

const features = [
  { icon: '🏆', title: 'Industry Certified', desc: 'Internationally recognized certificates upon completion.' },
  { icon: '👨‍🏫', title: 'Expert Instructors', desc: 'Learn from seasoned professionals with 10+ years in the field.' },
  { icon: '🔬', title: 'Practical Lab Work', desc: 'Hands-on practice with real devices and professional tools.' },
  { icon: '💼', title: 'Job Placement', desc: '96% of graduates land jobs within 3 months of completing training.' },
];

const testimonials = [
  {
    name: 'Kasun Perera',
    role: 'Mobile Repair Technician',
    city: 'Colombo',
    text: 'Kaja Technical Institute changed my life. I started with zero knowledge and now run my own mobile repair shop. The training was practical and the instructors were incredibly supportive.',
    stars: 5,
  },
  {
    name: 'Nimali Fernando',
    role: 'Service Center Manager',
    city: 'Kandy',
    text: 'The advanced hardware course was exactly what I needed to level up my career. Within 2 months of completing the course, I got promoted to a senior technician role.',
    stars: 5,
  },
  {
    name: 'Ashan Wickramasinghe',
    role: 'Freelance Repair Technician',
    city: 'Galle',
    text: 'Best technical institute in Sri Lanka! The chip-level soldering course opened new doors for me. I now earn triple what I used to in my previous job.',
    stars: 5,
  },
];

export default function Home({ navigate }: Props) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = (idx: number) => {
    setCurrent(idx);
  };

  const next = () => goToSlide((current + 1) % slides.length);
  const prev = () => goToSlide((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <main>
      {/* ── Hero / Slideshow ── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '640px', overflow: 'hidden' }}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide${i === current ? ' active' : ''}`}
            style={{ backgroundColor: '#0a1628' }}
          >
            <div
              className="slide-img"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            {/* Gradient overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(5,12,26,0.92) 40%, rgba(5,12,26,0.4) 100%)',
              }}
            />
          </div>
        ))}

        {/* Ambient background glow */}
        <div
          className="ambient-glow"
          style={{
            top: '20%',
            left: '10%',
            width: '400px',
            height: '400px',
            backgroundColor: '#1563d3',
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '70px',
          }}
        >
          <div style={{ maxWidth: '760px' }} key={current} className="hero-text-animate">
            <div className="section-tag">{slides[current].label}</div>
            <h1
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(52px, 8vw, 96px)',
                lineHeight: 0.95,
                letterSpacing: '-0.01em',
                color: '#ffffff',
                whiteSpace: 'pre-line',
                marginBottom: '24px',
                textShadow: '0 6px 30px rgba(0,0,0,0.6)',
              }}
            >
              {slides[current].title}
            </h1>
            <p
              style={{
                fontSize: 'clamp(15px, 1.8vw, 18px)',
                color: '#b0c8de',
                lineHeight: 1.7,
                maxWidth: '600px',
                marginBottom: '36px',
              }}
            >
              {slides[current].desc}
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button onClick={() => navigate('courses')} className="btn-blue">
                Explore Courses →
              </button>
              <a
                href="https://wa.me/94700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Talk to Us on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Slide Controls */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            right: '32px',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <button
            onClick={prev}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
              backdropFilter: 'blur(8px)',
              fontSize: '18px',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#1563d3';
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.12)';
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            }}
          >
            ‹
          </button>

          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              style={{
                width: i === current ? '30px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: i === current ? '#1563d3' : 'rgba(255,255,255,0.35)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          ))}

          <button
            onClick={next}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
              backdropFilter: 'blur(8px)',
              fontSize: '18px',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#1563d3';
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.12)';
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            }}
          >
            ›
          </button>
        </div>
      </section>

      {/* ── Stats Banner with Animated Counters ── */}
      <section
        style={{
          background: 'linear-gradient(90deg, #1563d3 0%, #104fad 100%)',
          padding: '36px 24px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '24px',
          }}
        >
          {stats.map((s, i) => (
            <ScrollReveal key={i} animation="zoom-in" delay={i * 100}>
              <div style={{ textAlign: 'center', padding: '8px' }}>
                <div
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '52px',
                    lineHeight: 1,
                    color: 'white',
                    letterSpacing: '-0.02em',
                  }}
                >
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.82)',
                    letterSpacing: '0.08em',
                    marginTop: '6px',
                    textTransform: 'uppercase',
                  }}
                >
                  {s.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── About Section ── */}
      <section style={{ padding: 'clamp(72px, 8vw, 108px) 24px', backgroundColor: '#050c1a', position: 'relative' }}>
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          <ScrollReveal animation="fade-left">
            <div>
              <div className="section-tag">Who We Are</div>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(38px, 5vw, 60px)',
                  lineHeight: 1.0,
                  color: 'white',
                  marginBottom: '20px',
                }}
              >
                EMPOWERING TECHNICIANS<br />
                <span style={{ color: '#3b82f6' }}>SINCE 2006</span>
              </h2>
              <div className="accent-bar" />
              <p style={{ color: '#7a9bc0', fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
                Kaja Technical Institute is Sri Lanka's most trusted professional training center for mobile phone
                repair and electronics. Founded in 2006, we have trained over 5,000 students from across the country.
              </p>
              <p style={{ color: '#7a9bc0', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
                Our comprehensive programs combine theory with extensive hands-on practice, ensuring our graduates are
                job-ready from day one. We maintain strong partnerships with leading mobile service centers and electronics
                companies.
              </p>
              <button onClick={() => navigate('about')} className="btn-blue">
                Learn More About Us →
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={150}>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '18px',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  boxShadow: '0 28px 70px rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop&auto=format"
                  alt="Students training at Kaja Technical Institute"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div
                className="pulse-badge"
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '-20px',
                  backgroundColor: '#1563d3',
                  borderRadius: '14px',
                  padding: '18px 26px',
                  boxShadow: '0 10px 36px rgba(21,99,211,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontWeight: 900,
                    fontSize: '40px',
                    color: 'white',
                    lineHeight: 1,
                  }}
                >
                  18+
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
                  Years of Excellence
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Featured Courses ── */}
      <section style={{ padding: 'clamp(72px, 8vw, 108px) 24px', backgroundColor: '#070f1e' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-tag">What We Offer</div>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(38px, 5vw, 60px)',
                  lineHeight: 1.0,
                  color: 'white',
                  marginBottom: '16px',
                }}
              >
                POPULAR COURSES
              </h2>
              <div className="accent-bar accent-bar-center" />
              <p style={{ color: '#7a9bc0', fontSize: '16px', maxWidth: '560px', margin: '0 auto' }}>
                Choose from our range of professionally designed courses, each built for real-world results.
              </p>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '28px',
            }}
          >
            {courses.map((c, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 120}>
                <div className="course-card" style={{ padding: '36px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '40px', marginBottom: '18px' }}>{c.icon}</div>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '18px', flexWrap: 'wrap' }}>
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
                      {c.duration}
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
                      marginBottom: '14px',
                      lineHeight: 1.2,
                    }}
                  >
                    {c.title}
                  </h3>
                  <p style={{ color: '#7a9bc0', fontSize: '14px', lineHeight: 1.7, marginBottom: '28px', flex: 1 }}>
                    {c.desc}
                  </p>
                  <button
                    onClick={() => navigate('courses')}
                    style={{
                      background: 'none',
                      border: `1px solid ${c.color}`,
                      color: c.color,
                      padding: '11px 22px',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: 600,
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      width: 'fit-content',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = c.color;
                      (e.currentTarget as HTMLElement).style.color = 'white';
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 16px ${c.color}66`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = c.color;
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    View Course Details →
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={360}>
            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <button onClick={() => navigate('courses')} className="btn-outline">
                View All Available Courses →
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section style={{ padding: 'clamp(72px, 8vw, 108px) 24px', backgroundColor: '#050c1a' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-tag">Our Advantages</div>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(38px, 5vw, 60px)',
                  lineHeight: 1.0,
                  color: 'white',
                  marginBottom: '16px',
                }}
              >
                WHY CHOOSE KAJA?
              </h2>
              <div className="accent-bar accent-bar-center" />
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {features.map((f, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div
                  className="premium-card"
                  style={{
                    padding: '36px 28px',
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <div style={{ fontSize: '44px', marginBottom: '18px' }}>{f.icon}</div>
                  <h3
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 800,
                      fontSize: '22px',
                      color: 'white',
                      marginBottom: '12px',
                    }}
                  >
                    {f.title}
                  </h3>
                  <p style={{ color: '#7a9bc0', fontSize: '14px', lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: 'clamp(72px, 8vw, 108px) 24px', backgroundColor: '#070f1e' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-tag">Student Stories</div>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(38px, 5vw, 60px)',
                  lineHeight: 1.0,
                  color: 'white',
                  marginBottom: '16px',
                }}
              >
                WHAT OUR GRADUATES SAY
              </h2>
              <div className="accent-bar accent-bar-center" />
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '26px',
            }}
          >
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 120}>
                <div
                  className="premium-card"
                  style={{
                    padding: '32px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '18px' }}>
                      {Array.from({ length: t.stars }).map((_, s) => (
                        <span key={s} style={{ color: '#fbbf24', fontSize: '18px' }}>
                          ★
                        </span>
                      ))}
                    </div>
                    <p
                      style={{
                        color: '#b0c8de',
                        fontSize: '15px',
                        lineHeight: 1.75,
                        marginBottom: '24px',
                        fontStyle: 'italic',
                      }}
                    >
                      "{t.text}"
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '16px' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        backgroundColor: '#1563d3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        fontWeight: 800,
                        fontFamily: 'Barlow Condensed, sans-serif',
                        color: 'white',
                        flexShrink: 0,
                        boxShadow: '0 4px 12px rgba(21,99,211,0.4)',
                      }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'white', fontSize: '15px' }}>{t.name}</div>
                      <div style={{ fontSize: '12px', color: '#7a9bc0' }}>
                        {t.role} · {t.city}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        style={{
          padding: 'clamp(72px, 8vw, 108px) 24px',
          background: 'linear-gradient(135deg, #0d1f3c 0%, #1563d3 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '340px',
            height: '340px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.06)',
            filter: 'blur(40px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '8%',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.04)',
            filter: 'blur(30px)',
          }}
        />
        <ScrollReveal animation="zoom-in">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <h2
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(42px, 6vw, 68px)',
                color: 'white',
                lineHeight: 1.0,
                marginBottom: '18px',
              }}
            >
              READY TO START YOUR CAREER?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '18px', lineHeight: 1.7, marginBottom: '36px' }}>
              Enroll today and take the first step toward becoming a certified mobile phone repair technician. Limited
              seats available for the upcoming intake!
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('contact')}
                style={{
                  padding: '16px 38px',
                  borderRadius: '50px',
                  backgroundColor: 'white',
                  color: '#1563d3',
                  fontWeight: 700,
                  fontSize: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 30px rgba(0,0,0,0.35)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.25)';
                }}
              >
                Enroll Now — Free Consultation →
              </button>
              <a
                href="https://wa.me/94700000000"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '16px 36px',
                  borderRadius: '50px',
                  backgroundColor: '#25D366',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '16px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(37,211,102,0.3)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#1ebe5a';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '#25D366';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
