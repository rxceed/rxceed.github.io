import { useState } from "react";
import { profile } from "../contents/profile";
import emailjs from "@emailjs/browser";
import { emailjsConfig, isEmailJsConfigured } from "../contents/emailjs";

interface FormState {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

interface EmailFormProps {
  defaultSubject?: string;
}

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

export function EmailForm({ defaultSubject = "" }: EmailFormProps) {
  const [formState, setFormState] = useState<FormState>({
    from_name: "",
    from_email: "",
    subject: defaultSubject,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const triggerMailtoFallback = () => {
    const emailSubject = encodeURIComponent(formState.subject || `Portfolio Contact from ${formState.from_name}`);
    const body = encodeURIComponent(
      `Name: ${formState.from_name}\nEmail: ${formState.from_email}\n\nMessage:\n${formState.message}`
    );
    window.open(`mailto:${profile.email}?subject=${emailSubject}&body=${body}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (isEmailJsConfigured()) {
      setIsSending(true);
      try {
        const clientTime = new Date().toLocaleString(undefined, {
          dateStyle: "full",
          timeStyle: "long",
        });
        const messageWithTime = `${formState.message}\n\n---\nSent at: ${clientTime} (Sender's Local Time)`;

        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          {
            name: formState.from_name,
            email: formState.from_email,
            title: formState.subject,
            message: messageWithTime,
            client_time: clientTime,
          },
          emailjsConfig.publicKey
        );
        setSubmitted(true);
        setFormState({ from_name: "", from_email: "", subject: defaultSubject, message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } catch (error: any) {
        console.error("Failed to send message via EmailJS:", error);
        setErrorMessage(
          error?.text || "Direct transmission failed. Click below to send via your email client instead."
        );
      } finally {
        setIsSending(false);
      }
    } else {
      triggerMailtoFallback();
      setSubmitted(true);
      setFormState({ from_name: "", from_email: "", subject: defaultSubject, message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  if (submitted) {
    return (
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
          Thank you! Your message has been sent successfully. I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
        className="responsive-grid"
      >
        <div>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            required
            placeholder="Your name"
            value={formState.from_name}
            onChange={(e) => setFormState({ ...formState, from_name: e.target.value })}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-primary-dim)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
          />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={formState.from_email}
            onChange={(e) => setFormState({ ...formState, from_email: e.target.value })}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "var(--color-primary-dim)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
          />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Subject</label>
        <input
          type="text"
          required
          placeholder="Topic or project title"
          value={formState.subject}
          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = "var(--color-primary-dim)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
        />
      </div>
      <div>
        <label style={labelStyle}>Message</label>
        <textarea
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
      {errorMessage && (
        <div
          style={{
            color: "var(--color-text)",
            background: "rgba(192, 0, 36, 0.15)",
            border: "1px solid var(--color-tertiary)",
            padding: "12px 16px",
            fontSize: "13px",
            fontFamily: "'Geist', sans-serif",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="material-symbols-outlined" style={{ color: "var(--color-tertiary)", fontSize: "18px" }}>
              error
            </span>
            {errorMessage}
          </span>
          <button
            type="button"
            onClick={triggerMailtoFallback}
            style={{
              background: "none",
              border: "none",
              color: "var(--color-primary-dim)",
              textDecoration: "underline",
              cursor: "pointer",
              alignSelf: "flex-start",
              fontSize: "12px",
              fontWeight: 600,
              padding: 0,
            }}
          >
            Open Mail Client
          </button>
        </div>
      )}
      <button
        type="submit"
        className="btn-primary"
        style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: "8px" }}
        disabled={isSending}
      >
        <span
          className={`material-symbols-outlined ${isSending ? "animate-spin" : ""}`}
          style={{ fontSize: "18px" }}
        >
          {isSending ? "sync" : "send"}
        </span>
        {isSending ? "SENDING..." : "SEND MESSAGE"}
      </button>
    </form>
  );
}
