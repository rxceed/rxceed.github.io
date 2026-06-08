import { experiences, organizationalExperiences, education } from "../contents/experience";
import { SectionHeader } from "../components/SectionHeader";

export function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "100px 24px", background: "var(--color-surface)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader
          label="Experience"
          title="Where I've worked"
          subtitle="My professional and organizational journey."
        />

        {/* Professional Experience + Education */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "start",
            marginBottom: "56px",
          }}
          className="responsive-grid"
        >
          {/* Professional Experience */}
          <div>
            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--color-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "24px",
              }}
            >
              Professional Experience
            </p>
            <div style={{ position: "relative", paddingLeft: "32px" }}>
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="timeline-item glass-card card-accent-primary hover-card"
                  style={{
                    position: "relative",
                    padding: "24px",
                    marginBottom: i < experiences.length - 1 ? "24px" : 0,
                  }}
                  id={`exp-${i}`}
                >
                  {i < experiences.length - 1 && <div className="timeline-line" />}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "8px",
                      gap: "12px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "'Geist', sans-serif",
                          fontWeight: 600,
                          fontSize: "15px",
                          color: "white",
                        }}
                      >
                        {exp.role}
                      </div>
                      <div
                        style={{
                          color: "var(--color-primary-dim)",
                          fontSize: "13px",
                          marginTop: "3px",
                        }}
                      >
                        {exp.company}
                      </div>
                    </div>
                    <span className="tag" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>
                      {exp.period}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--color-muted)",
                      lineHeight: 1.65,
                      marginBottom: "12px",
                    }}
                  >
                    {exp.description}
                  </p>
                  <ul style={{ margin: "0 0 14px", paddingLeft: "16px" }}>
                    {exp.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
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
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--color-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "24px",
              }}
            >
              Education
            </p>
            <div style={{ position: "relative", paddingLeft: "32px" }}>
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="timeline-item glass-card card-accent-secondary hover-card"
                  style={{
                    position: "relative",
                    padding: "24px",
                    marginBottom: i < education.length - 1 ? "24px" : 0,
                  }}
                  id={`edu-${i}`}
                >
                  {i < education.length - 1 && <div className="timeline-line" />}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "8px",
                      gap: "12px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "'Geist', sans-serif",
                          fontWeight: 600,
                          fontSize: "15px",
                          color: "white",
                        }}
                      >
                        {edu.degree}
                      </div>
                      <div style={{ color: "var(--color-secondary)", fontSize: "13px", marginTop: "3px" }}>
                        {edu.school}
                      </div>
                    </div>
                    <span
                      className="tag tag-secondary"
                      style={{ whiteSpace: "nowrap", flexShrink: 0 }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--color-muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Organizational Experience */}
        <div>
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--color-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "24px",
            }}
          >
            Organizational Experience
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {organizationalExperiences.map((org, i) => (
              <div
                key={i}
                className="glass-card hover-card"
                style={{
                  padding: "24px",
                  borderLeft: "2px solid rgba(208, 91, 255, 0.4)",
                  position: "relative",
                  overflow: "hidden",
                }}
                id={`org-${i}`}
              >
                {/* Background icon */}
                <span
                  className="material-symbols-outlined"
                  style={{
                    position: "absolute",
                    right: "-8px",
                    top: "-8px",
                    fontSize: "80px",
                    color: "rgba(208, 91, 255, 0.04)",
                    transform: "rotate(12deg)",
                    pointerEvents: "none",
                  }}
                >
                  groups
                </span>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "8px",
                    gap: "8px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      {org.role}
                    </div>
                    <div style={{ color: "var(--color-secondary)", fontSize: "13px", marginTop: "3px" }}>
                      {org.organization}
                    </div>
                  </div>
                  <span
                    className="tag tag-secondary"
                    style={{ whiteSpace: "nowrap", flexShrink: 0, fontSize: "10px" }}
                  >
                    {org.period}
                  </span>
                </div>
                <ul style={{ margin: "10px 0 14px", paddingLeft: "16px" }}>
                  {org.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
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
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {org.tags.map((tag) => (
                    <span key={tag} className="tag tag-secondary">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
