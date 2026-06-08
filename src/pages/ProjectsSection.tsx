import { projects } from "../contents/projects";
import { profile } from "../contents/profile";
import { SectionHeader } from "../components/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader
          label="Projects"
          title="Things I've built"
          subtitle="A selection of projects at the intersection of hardware, software, and AI."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            id="view-all-projects-btn"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>code</span>
            VIEW ALL ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
}
