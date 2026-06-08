import { useEffect, useRef, useState } from "react";
import { profile } from "../contents/profile";
import profilePhoto from "../assets/profile_photo.png";

export function HeroSection() {
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.012;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.012;
      if (glow1Ref.current) {
        glow1Ref.current.style.transform = `translate(${moveX * 2}px, ${moveY * 2}px)`;
      }
      if (glow2Ref.current) {
        glow2Ref.current.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 24px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        ref={glow1Ref}
        style={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          transition: "transform 0.1s ease-out",
        }}
      />
      <div
        ref={glow2Ref}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(208, 91, 255, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          transition: "transform 0.1s ease-out",
        }}
      />

      <div
        className="responsive-hero-grid"
        style={{
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left Column: Intro text */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {/* Status badge */}
          <div
            className="fade-in-up stagger-1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              background: "var(--color-surface-3)",
              border: "1px solid rgba(59, 73, 75, 0.3)",
              fontSize: "12px",
              fontFamily: "'Geist', monospace",
              color: "var(--color-primary-dim)",
              letterSpacing: "0.06em",
              marginBottom: "32px",
              width: "fit-content",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                background: "var(--color-primary-container)",
                animation: "pulse 2s infinite",
              }}
            />
            SYSTEM_STATUS: ONLINE
          </div>

          {/* Headline */}
          <h1
            className="fade-in-up stagger-2"
            style={{
              fontFamily: "'Geist', 'Inter', sans-serif",
              fontSize: "clamp(2.8rem, 7vw, 4.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "white",
              marginBottom: "24px",
              maxWidth: "800px",
            }}
          >
            Bridging Hardware and{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, var(--color-primary-bright), var(--color-secondary), var(--color-tertiary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Intelligent Systems
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="fade-in-up stagger-3"
            style={{
              fontSize: "18px",
              lineHeight: 1.65,
              color: "var(--color-muted)",
              maxWidth: "560px",
              marginBottom: "40px",
            }}
          >
            {profile.bio.slice(0, 180)}…
          </p>

          {/* CTA Buttons */}
          <div
            className="fade-in-up stagger-4"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "64px" }}
          >
            <a href="#projects" className="btn-primary" id="view-work-btn">
              VIEW ARCHIVE
            </a>
            <a href="#contact" className="btn-outline" id="get-in-touch-btn">
              INITIALIZE CONTACT
            </a>
          </div>

          {/* Social links row */}
          <div
            className="fade-in-up stagger-5"
            style={{
              display: "flex",
              gap: "32px",
              paddingTop: "32px",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            {[
              { label: "GitHub", href: profile.github, icon: "code" },
              { label: "LinkedIn", href: profile.linkedin, icon: "person" },
              { label: profile.email, href: `mailto:${profile.email}`, icon: "mail" },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--color-muted)",
                  fontSize: "13px",
                  fontFamily: "'Geist', sans-serif",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary-dim)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
                id={`hero-${label.toLowerCase().replace(/[@.]/g, "-")}-link`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Photo Frame */}
        <div
          className="fade-in-up stagger-4"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "420px",
            aspectRatio: "1 / 1",
            margin: "0 auto",
          }}
        >
          <div
            className="glass-card clipped-corner"
            style={{
              width: "100%",
              height: "100%",
              padding: "6px",
              border: "1px solid rgba(0, 219, 233, 0.2)",
              position: "relative",
              overflow: "hidden",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              boxShadow: hovered
                ? "0 16px 40px rgba(0, 0, 0, 0.5), 0 0 32px rgba(0, 219, 233, 0.2)"
                : "0 8px 24px rgba(0, 0, 0, 0.3)",
              borderColor: hovered ? "var(--color-primary-bright)" : "rgba(0, 219, 233, 0.2)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Scanning Laser Line */}
            <div className="photo-scan-line" />

            {/* Glowing Corner Accents & Overlays */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: hovered
                  ? "radial-gradient(circle at center, transparent 30%, rgba(0, 240, 255, 0.04) 100%)"
                  : "radial-gradient(circle at center, transparent 55%, rgba(19, 19, 21, 0.45) 100%)",
                transition: "background 0.3s ease",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />

            {/* Image Tag */}
            <img
              src={profilePhoto}
              alt={profile.name}
              className="clipped-corner"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: hovered
                  ? "grayscale(0%) brightness(100%) contrast(105%)"
                  : "grayscale(75%) brightness(65%) contrast(95%)",
                transition: "filter 0.4s ease, transform 0.4s ease",
                transform: hovered ? "scale(1.03)" : "scale(1)",
              }}
            />

            {/* Telemetry Overlay Top Right */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                fontFamily: "'Geist', monospace",
                fontSize: "11px",
                color: "var(--color-primary-dim)",
                opacity: hovered ? 1 : 0.7,
                textAlign: "right",
                lineHeight: 1.5,
                zIndex: 3,
                pointerEvents: "none",
                transition: "opacity 0.3s ease",
                textShadow: "0 1px 4px rgba(0,0,0,0.8)",
              }}
            >
              LOC: SUB_SURABAYA, ID<br />
              LAT: 7.2575° S<br />
              LNG: 112.7521° E<br />
              SYS_TEMP: 37.4°C
            </div>

            {/* Telemetry Overlay Bottom Left */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                fontFamily: "'Geist', monospace",
                fontSize: "11px",
                color: "var(--color-secondary)",
                opacity: hovered ? 1 : 0.7,
                lineHeight: 1.5,
                zIndex: 3,
                pointerEvents: "none",
                transition: "opacity 0.3s ease",
                textShadow: "0 1px 4px rgba(0,0,0,0.8)",
              }}
            >
              HW_ARCH: ARM64_RTOS<br />
              STATUS: ACTIVE_INTEGRATION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
