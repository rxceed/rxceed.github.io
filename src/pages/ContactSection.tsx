import { useState } from "react";
import { profile } from "../contents/profile";
import { SectionHeader } from "../components/SectionHeader";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "var(--color-surface-2)",
    border: "1px solid var(--color-border)",
    borderRadius: 0,
    color: "var(--color-text)",
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Geist', sans-serif",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--color-muted)",
    marginBottom: "8px",
  };

  return (
    <section id="contact" style={{ padding: "100px 24px", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          {/* Pulse icon */}
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: "40px",
              color: "var(--color-primary-dim)",
              display: "block",
              marginBottom: "16px",
              animation: "pulse 2s infinite",
            }}
          >
            sensors
          </span>
          <SectionHeader
            label="Contact"
            title="Ready for collaboration?"
            subtitle="Currently open to projects and opportunities in embedded systems, IoT, backend, and AI/ML."
          />
        </div>

        <div className="glass-card" style={{ padding: "40px", borderLeft: "2px solid var(--color-primary-dim)" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "48px", color: "var(--color-primary-dim)", marginBottom: "16px", display: "block" }}
              >
                mark_email_read
              </span>
              <h3
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 600,
                  fontSize: "18px",
                  marginBottom: "8px",
                  color: "white",
                }}
              >
                TRANSMISSION SENT
              </h3>
              <p style={{ color: "var(--color-muted)", fontSize: "14px" }}>
                Your default mail client should have opened. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              id="contact-form"
            >
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
                className="responsive-grid"
              >
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-primary-dim)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-primary-dim)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  id="contact-message"
                  required
                  placeholder="Tell me about your project or just say hi..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-primary-dim)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                />
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{ alignSelf: "flex-start" }}
                id="contact-submit-btn"
              >
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>send</span>
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>

        {/* Direct links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            marginTop: "32px",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "GitHub", href: profile.github, icon: "code" },
            { label: "LinkedIn", href: profile.linkedin, icon: "person" },
          ].map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--color-muted)",
                textDecoration: "none",
                fontSize: "13px",
                fontFamily: "'Geist', sans-serif",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary-dim)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
              id={`contact-${label.toLowerCase()}-link`}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
