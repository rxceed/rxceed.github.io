import "./index.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HeroSection } from "./pages/HeroSection";
import { AboutSection } from "./pages/AboutSection";
import { ExperienceSection } from "./pages/ExperienceSection";
import { ProjectsSection } from "./pages/ProjectsSection";
import { SkillsSection } from "./pages/SkillsSection";
import { ContactSection } from "./pages/ContactSection";

export function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
