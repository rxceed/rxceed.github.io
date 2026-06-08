import { useEffect, useRef, useState } from "react";
import { profile } from "../contents/profile";
import profilePhoto from "../assets/profile_photo.png";

export function HeroSection() {
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const roles = [
    "Computer Engineer",
    "Embedded Systems",
    "Internet of Things",
    "Robotics"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50);

  useEffect(() => {
    let timer: any;
    const handleType = () => {
      const fullText = roles[currentRoleIndex] || "";
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(50);

        if (currentText === fullText) {
          setTypingSpeed(1500);
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(20);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(250);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

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

          {/* Subtitle / User Profile & Rotating Roles */}
          <div
            className="fade-in-up stagger-3"
            style={{
              marginBottom: "40px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "clamp(2rem, 5vw, 2.5rem)",
                fontWeight: 700,
                color: "white",
                marginBottom: "12px",
                lineHeight: 1.2,
              }}
            >
              Muhammad Risang Radityatama
            </h2>
            <div
              style={{
                fontFamily: "'Geist', monospace",
                fontSize: "clamp(1.1rem, 3.5vw, 1.4rem)",
                color: "var(--color-primary-dim)",
                fontWeight: 500,
                letterSpacing: "0.02em",
                display: "flex",
                alignItems: "center",
                height: "36px",
              }}
            >
              <span style={{ marginRight: "10px", opacity: 0.8 }}>&gt;</span>
              <span>{currentText}</span>
              <span
                style={{
                  display: "inline-block",
                  color: "var(--color-primary-dim)",
                  marginLeft: "2px",
                  animation: "pulse 1s infinite",
                }}
              >
                _
              </span>
            </div>
          </div>

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
              { label: "GitHub", href: profile.github },
              { label: "LinkedIn", href: profile.linkedin },
              { label: profile.email, href: `mailto:${profile.email}` },
            ].map(({ label, href }) => (
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
                {label === "GitHub" ? (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0 }}>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                ) : label === "LinkedIn" ? (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0 }}>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                ) : (
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>mail</span>
                )}
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
