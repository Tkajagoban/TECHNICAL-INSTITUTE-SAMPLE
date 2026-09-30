import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const courses = [
  'Mobile Phone Repair (Basic)',
  'Advanced Hardware Repair',
  'Software & Flashing',
  'Phone Unlock & IMEI',
  'CCTV & Networking',
  'Laptop Repair',
  'Chip-Level BGA Repair',
  'Complete Technician Package',
  'Other / General Inquiry',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    backgroundColor: 'rgba(5, 12, 26, 0.7)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: 'white',
    fontSize: '15px',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    transition: 'border-color 0.25s, box-shadow 0.25s',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 600,
    color: '#94b4cc',
    marginBottom: '8px',
    letterSpacing: '0.04em',
  };

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
          <div className="section-tag">Get In Touch</div>
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
            CONTACT &<br />
            <span style={{ color: '#3b82f6' }}>ENROLLMENT</span>
          </h1>
          <div className="accent-bar accent-bar-center" />
          <p style={{ color: '#7a9bc0', fontSize: '18px', maxWidth: '580px', margin: '0 auto', lineHeight: 1.75 }}>
            Ready to upgrade your technical skills? Fill in the enrollment application or contact our admissions team on
            WhatsApp for immediate assistance.
          </p>
        </ScrollReveal>
      </section>

      <section style={{ padding: 'clamp(64px, 8vw, 100px) 24px', backgroundColor: '#050c1a' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* Contact Info */}
          <ScrollReveal animation="fade-left">
            <div>
              <div className="section-tag">Direct Lines</div>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: '38px',
                  color: 'white',
                  marginBottom: '10px',
                }}
              >
                VISIT OR CALL US
              </h2>
              <div className="accent-bar" />
              <p style={{ color: '#7a9bc0', fontSize: '15px', lineHeight: 1.75, marginBottom: '32px' }}>
                We're open Monday to Saturday. Walk in for a tour of our labs, or contact us anytime to schedule a free
                course counseling session.
              </p>

              {[
                { icon: '📍', label: 'Campus Address', value: 'No. 45, Tech Street, Maradana, Colombo 07, Sri Lanka' },
                { icon: '📞', label: 'Admissions Hotline', value: '+94 70 000 0000' },
                { icon: '✉️', label: 'Email Inquiries', value: 'info@kajatech.lk' },
                { icon: '🕐', label: 'Campus Hours', value: 'Monday – Saturday: 8:30 AM – 6:00 PM\nSunday: Special Workshop Batches' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(21,99,211,0.2)',
                      border: '1px solid rgba(59,130,246,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: '#3b82f6',
                        textTransform: 'uppercase',
                        marginBottom: '4px',
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ color: '#b0c8de', fontSize: '14px', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Actions */}
              <div style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <a
                  href="https://wa.me/94700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green"
                  style={{ textDecoration: 'none', justifyContent: 'center' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp — Fast Response
                </a>
                <a href="tel:+94700000000" className="btn-outline" style={{ textDecoration: 'none', justifyContent: 'center' }}>
                  📞 Call Admissions Now
                </a>
              </div>

              {/* Location preview */}
              <div
                className="premium-card"
                style={{
                  marginTop: '32px',
                  padding: '24px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <div style={{ fontSize: '32px' }}>📍</div>
                <div style={{ fontWeight: 700, color: 'white' }}>Colombo Main Campus</div>
                <p style={{ color: '#7a9bc0', fontSize: '13px' }}>Maradana, Colombo 07 — Easy train & bus access</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#3b82f6', fontSize: '13px', fontWeight: 700, textDecoration: 'none', marginTop: '4px' }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Enrollment Form */}
          <ScrollReveal animation="fade-right" delay={150}>
            <div
              className="premium-card"
              style={{
                padding: '40px',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ fontSize: '64px', marginBottom: '16px' }}>🎉</div>
                  <h3
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 900,
                      fontSize: '34px',
                      color: 'white',
                      marginBottom: '12px',
                    }}
                  >
                    ENROLLMENT REQUEST RECEIVED!
                  </h3>
                  <p style={{ color: '#7a9bc0', fontSize: '16px', lineHeight: 1.75, marginBottom: '28px' }}>
                    Thank you, <strong style={{ color: '#fff' }}>{form.name}</strong>! An academic counselor will
                    contact you within 24 hours to guide you through class timings, batch dates, and enrollment details.
                  </p>
                  <a
                    href="https://wa.me/94700000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-green"
                    style={{ textDecoration: 'none', display: 'inline-flex' }}
                  >
                    💬 Faster? Message on WhatsApp
                  </a>
                </div>
              ) : (
                <>
                  <div className="section-tag" style={{ marginBottom: '10px' }}>Apply Online</div>
                  <h2
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 900,
                      fontSize: '32px',
                      color: 'white',
                      marginBottom: '6px',
                    }}
                  >
                    ENROLLMENT APPLICATION
                  </h2>
                  <p style={{ color: '#7a9bc0', fontSize: '14px', marginBottom: '28px' }}>
                    Fill in your details and reserve your seat for the upcoming intake.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Kasun Perera"
                        value={form.name}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = '#3b82f6';
                          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(59,130,246,0.2)';
                        }}
                        onBlur={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+94 70 000 0000"
                        value={form.phone}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = '#3b82f6';
                          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(59,130,246,0.2)';
                        }}
                        onBlur={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="kasun@example.com"
                        value={form.email}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = '#3b82f6';
                          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(59,130,246,0.2)';
                        }}
                        onBlur={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Course Interested In *</label>
                      <select
                        name="course"
                        required
                        value={form.course}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                        onFocus={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = '#3b82f6';
                          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(59,130,246,0.2)';
                        }}
                        onBlur={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                        }}
                      >
                        <option value="" disabled>
                          Select a course...
                        </option>
                        {courses.map(c => (
                          <option key={c} value={c} style={{ backgroundColor: '#0d1f3c', color: 'white' }}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Questions or Comments (Optional)</label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Tell us about your background or any questions..."
                        value={form.message}
                        onChange={handleChange}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '90px' }}
                        onFocus={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = '#3b82f6';
                          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(59,130,246,0.2)';
                        }}
                        onBlur={e => {
                          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-blue"
                      style={{
                        justifyContent: 'center',
                        padding: '16px',
                        fontSize: '16px',
                        fontWeight: 700,
                        letterSpacing: '0.03em',
                      }}
                    >
                      Submit Enrollment Request →
                    </button>
                    <p style={{ textAlign: 'center', color: '#7a9bc0', fontSize: '12px' }}>
                      🔒 Your information is completely confidential and never shared.
                    </p>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: 'clamp(56px, 7vw, 84px) 24px', backgroundColor: '#070f1e', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <div className="section-tag">Got Questions?</div>
              <h2
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontWeight: 900,
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  color: 'white',
                  marginBottom: '10px',
                }}
              >
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div className="accent-bar accent-bar-center" />
            </div>
          </ScrollReveal>

          {[
            {
              q: 'Do I need any prior electronics experience to enroll?',
              a: 'No prior background is required for our Basic Mobile Phone Repair course. We guide you from basic tools and safety principles up to full phone diagnosis.',
            },
            {
              q: 'Are flexible installment payment plans available?',
              a: 'Yes, we provide flexible installment payment plans across the duration of your training so you can pay smoothly while you learn.',
            },
            {
              q: 'Will I receive an accredited certificate upon completion?',
              a: 'Yes, every graduate who completes course practicals receives a verified certificate recognized by partner service centers across Sri Lanka.',
            },
            {
              q: 'Is job placement assistance provided?',
              a: 'Yes! Our student placement coordinator directly recommends qualified graduates to our network of telecom partners and authorized repair centers.',
            },
            {
              q: 'Can I study on weekends or in evening batches?',
              a: 'Yes, we offer weekday mornings, weekday evenings, as well as full-day Saturday/Sunday batches designed for working individuals.',
            },
          ].map((faq, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
              <div
                className="premium-card"
                style={{
                  padding: '24px 28px',
                  marginBottom: '16px',
                }}
              >
                <h4 style={{ fontWeight: 700, color: 'white', fontSize: '16px', marginBottom: '10px', display: 'flex', gap: '8px' }}>
                  <span style={{ color: '#3b82f6' }}>Q:</span> {faq.q}
                </h4>
                <p style={{ color: '#7a9bc0', fontSize: '14px', lineHeight: 1.75, paddingLeft: '22px' }}>{faq.a}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
