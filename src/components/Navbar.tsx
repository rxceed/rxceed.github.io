import { useState, useEffect } from "react";
import { profile } from "../contents/profile";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navItems = ["About", "Experience", "Skills", "Projects", "Contact"];

  return (
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
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="hidden-mobile">
        <span
          className="material-symbols-outlined"
          style={{ color: "var(--color-primary-dim)", cursor: "pointer", fontSize: "20px" }}
          title="Terminal"
        >
          terminal
        </span>
        <span
          className="material-symbols-outlined"
          style={{ color: "var(--color-primary-dim)", cursor: "pointer", fontSize: "20px" }}
          title="Code"
        >
          code
        </span>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ padding: "8px 20px", fontSize: "13px" }}
        >
          Hire Me
        </a>
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
  );
}
