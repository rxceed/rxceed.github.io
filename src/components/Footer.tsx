import { profile } from "../contents/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        padding: "28px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Copyright */}
        <div
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.05em",
            color: "var(--color-primary-dim)",
          }}
        >
          © {year} RISANG.DEV // SYSTEM_READY
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
          {[
            { label: "GitHub", href: profile.github },
            { label: "LinkedIn", href: profile.linkedin },
            { label: "Email", href: `mailto:${profile.email}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "12px",
                letterSpacing: "0.05em",
                color: "var(--color-muted)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary-dim)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Version */}
        <div
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "11px",
            color: "var(--color-muted)",
            opacity: 0.5,
            letterSpacing: "0.04em",
          }}
        >
          Built with React + Bun // v1.0.0
        </div>
      </div>
    </footer>
  );
}
