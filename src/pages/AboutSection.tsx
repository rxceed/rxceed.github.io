import { profile } from "../contents/profile";
import { SectionHeader } from "../components/SectionHeader";

const stats = [
  { label: "GPA", value: "3.79", icon: "school" },
  { label: "Projects", value: "6+", icon: "code_blocks" },
  { label: "Skill Areas", value: "5", icon: "hub" },
  { label: "Org Roles", value: "3", icon: "groups" },
];

export function AboutSection() {
  return (
    <section id="about" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader label="About Me" title="A bit about myself" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="responsive-grid"
        >
          {/* Bio */}
          <div>
            <p
              style={{
                color: "var(--color-text)",
                fontSize: "16px",
                lineHeight: 1.8,
                marginBottom: "20px",
                opacity: 0.85,
              }}
            >
              {profile.bio}
            </p>
            <p style={{ color: "var(--color-muted)", fontSize: "15px", lineHeight: 1.8 }}>
              When I'm not coding, I enjoy exploring robotics and AI research, mentoring fellow students,
              and staying active in student organizations. I'm always eager to take on new challenges
              at the intersection of hardware and software.
            </p>

            {/* Meta info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "32px" }}>
              {[
                { icon: "location_on", text: profile.location },
                { icon: "mail", text: profile.email },
                { icon: "phone", text: profile.phone },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "var(--color-muted)",
                    fontSize: "14px",
                    fontFamily: "'Geist', sans-serif",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "18px", color: "var(--color-primary-dim)" }}>
                    {icon}
                  </span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card hover-card card-accent-primary"
                style={{ padding: "28px 24px" }}
                id={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "22px", color: "var(--color-primary-dim)", marginBottom: "12px", display: "block" }}
                >
                  {stat.icon}
                </span>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    fontFamily: "'Geist', sans-serif",
                    letterSpacing: "-0.03em",
                    color: "var(--color-primary-container)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--color-muted)",
                    marginTop: "4px",
                    fontFamily: "'Geist', sans-serif",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
