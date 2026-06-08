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
            { label: "GitHub", href: profile.github },
            { label: "LinkedIn", href: profile.linkedin },
          ].map(({ label, href }) => (
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
              {label === "GitHub" ? (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              )}
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
