import { useState } from "react";
import { type Project } from "../contents/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      id={`project-${index}`}
      className="glass-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        cursor: "default",
        borderLeft: "2px solid var(--color-primary-dim)",
        borderColor: hovered
          ? "rgba(0, 219, 233, 0.3)"
          : "var(--color-border)",
        borderLeftColor: "var(--color-primary-dim)",
        transform: hovered ? "translateY(-3px)" : "none",
        transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
        boxShadow: hovered
          ? "0 16px 40px rgba(0,0,0,0.4), 0 0 20px rgba(0, 219, 233, 0.07)"
          : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Faint bg icon */}
      <span
        className="material-symbols-outlined"
        style={{
          position: "absolute",
          right: "-8px",
          top: "-8px",
          fontSize: "90px",
          color: "rgba(0, 219, 233, 0.04)",
          transform: hovered ? "rotate(12deg) scale(1.1)" : "rotate(12deg)",
          pointerEvents: "none",
          transition: "transform 0.3s ease",
        }}
      >
        code_blocks
      </span>

      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              color: "white",
              marginBottom: "6px",
            }}
          >
            {project.title}
          </h3>
          <span className="tag" style={{ fontSize: "10px" }}>{project.period}</span>
        </div>
        {project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            title="View source"
            style={{ color: "var(--color-muted)", display: "flex", transition: "color 0.2s", flexShrink: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary-dim)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>open_in_new</span>
          </a>
        )}
      </div>

      {/* Description */}
      <p style={{ fontSize: "13px", color: "var(--color-muted)", lineHeight: 1.7 }}>
        {project.description}
      </p>

      {/* Divider */}
      <div style={{ height: "1px", background: "var(--color-border)" }} />

      {/* Bullet points */}
      <ul style={{ margin: 0, paddingLeft: "16px", flex: 1 }}>
        {project.bullets.map((bullet, i) => (
          <li
            key={i}
            style={{
              fontSize: "12px",
              color: "var(--color-faint)",
              lineHeight: 1.6,
              marginBottom: "4px",
            }}
          >
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
