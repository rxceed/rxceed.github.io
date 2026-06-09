import { useState, useEffect } from "react";
import { profile } from "../contents/profile";
import { EmailModal } from "./EmailModal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hireModalOpen, setHireModalOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navItems = ["About", "Experience", "Skills", "Projects", "Contact"];

  return (
    <>
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 24px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(19, 19, 21, 0.85)" : "rgba(19, 19, 21, 0.6)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(59, 73, 75, 0.3)",
        transition: "background 0.3s ease",
      }}
    >
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontFamily: "'Geist', 'Inter', sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            letterSpacing: "-0.03em",
            color: "var(--color-primary-container)",
          }}
        >
          RISANG.DEV
        </span>
      </a>

      {/* Desktop nav */}
      <div style={{ display: "flex", alignItems: "center", gap: "40px" }} className="hidden-mobile">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
            {item}
          </a>
        ))}
      </div>

      {/* CTA + icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }} className="hidden-mobile">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
          title="GitHub"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            style={{
              color: "var(--color-primary-dim)",
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary-bright)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-primary-dim)")}
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
          title="LinkedIn"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            style={{
              color: "var(--color-primary-dim)",
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary-bright)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-primary-dim)")}
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <button
          onClick={() => setHireModalOpen(true)}
          className="btn-primary"
          style={{ padding: "8px 20px", fontSize: "13px" }}
        >
          Hire Me
        </button>
      </div>

      {/* Mobile menu button */}
      <button
        id="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-only"
        style={{
          background: "none",
          border: "1px solid var(--color-border-strong)",
          padding: "6px 10px",
          color: "var(--color-text)",
          cursor: "pointer",
          fontSize: "12px",
          fontFamily: "'Geist', sans-serif",
          letterSpacing: "0.05em",
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            background: "rgba(19, 19, 21, 0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--color-border)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
              style={{ padding: "10px 0", fontSize: "15px" }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>

    {/* Hire Me email modal — rendered outside nav to avoid containing block issues */}
    <EmailModal isOpen={hireModalOpen} onClose={() => setHireModalOpen(false)} />
    </>
  );
}
