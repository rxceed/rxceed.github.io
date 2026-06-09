import { useState } from "react";
import { skills } from "../contents/skills";
import { SectionHeader } from "../components/SectionHeader";

const categoryIcons: Record<string, string> = {
  "System Programming": "memory",
  "Embedded Systems & IoT": "developer_board",
  "Backend Development": "dns",
  "AI / Machine Learning": "psychology",
  "Robotics": "precision_manufacturing",
};

const categoryAccents: string[] = [
  "var(--color-primary-dim)",
  "var(--color-primary-dim)",
  "var(--color-secondary)",
  "var(--color-secondary)",
  "var(--color-tertiary)",
];

const categoryAccentRgb: string[] = [
  "0, 219, 233",
  "0, 219, 233",
  "208, 91, 255",
  "208, 91, 255",
  "192, 0, 36",
];

interface SkillCardProps {
  category: string;
  items: string[];
  icon: string;
  accent: string;
  accentRgb: string;
  index: number;
}

function SkillCard({ category, items, icon, accent, accentRgb, index }: SkillCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id={`skill-${index}`}
      className="glass-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        cursor: "default",
        borderLeft: `2px solid ${accent}`,
        borderColor: hovered ? `rgba(${accentRgb}, 0.3)` : "var(--color-border)",
        borderLeftColor: accent,
        transform: hovered ? "translateY(-3px)" : "none",
        transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
        boxShadow: hovered
          ? `0 16px 40px rgba(0,0,0,0.4), 0 0 20px rgba(${accentRgb}, 0.07)`
          : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Faint bg ornament icon */}
      <span
        className="material-symbols-outlined"
        style={{
          position: "absolute",
          right: "-8px",
          top: "-8px",
          fontSize: "90px",
          color: `rgba(${accentRgb}, 0.04)`,
          transform: hovered ? "rotate(12deg) scale(1.1)" : "rotate(12deg)",
          pointerEvents: "none",
          transition: "transform 0.3s ease",
        }}
      >
        {icon}
      </span>

      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
        <div style={{ flex: 1 }}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "20px", color: accent, display: "block", marginBottom: "8px" }}
          >
            {icon}
          </span>
          <h3
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              color: "white",
              marginBottom: "6px",
            }}
          >
            {category}
          </h3>
          <span
            className="tag"
            style={{
              fontSize: "10px",
              background: `rgba(${accentRgb}, 0.06)`,
              color: accent,
              borderColor: `rgba(${accentRgb}, 0.2)`,
            }}
          >
            {items.length} SKILLS
          </span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: "var(--color-border)" }} />

      {/* Skill tags */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {items.map((skill) => (
          <span
            key={skill}
            className="tag"
            style={{
              background: `rgba(${accentRgb}, 0.05)`,
              color: accent,
              borderColor: `rgba(${accentRgb}, 0.2)`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "100px 24px", background: "var(--color-surface)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader
          label="Skills"
          title="Technologies I work with"
          subtitle="My technical toolkit, organized by domain of expertise."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {skills.map((group, gi) => (
            <SkillCard
              key={group.category}
              category={group.category}
              items={group.items}
              icon={categoryIcons[group.category] ?? "code"}
              accent={categoryAccents[gi % categoryAccents.length] ?? "var(--color-primary-dim)"}
              accentRgb={categoryAccentRgb[gi % categoryAccentRgb.length] ?? "0, 219, 233"}
              index={gi}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
