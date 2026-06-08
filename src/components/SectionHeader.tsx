interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <p className="section-label" style={{ marginBottom: "12px" }}>{label}</p>
      <h2
        style={{
          fontFamily: "'Geist', 'Inter', sans-serif",
          fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "white",
          marginBottom: "8px",
        }}
      >
        {title}
      </h2>
      <div className="section-accent-line" />
      {subtitle && (
        <p
          style={{
            color: "var(--color-muted)",
            fontSize: "16px",
            lineHeight: 1.6,
            maxWidth: "520px",
            marginTop: "12px",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
