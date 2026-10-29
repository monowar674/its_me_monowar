import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Code2,
  Menu,
  MessageCircle,
  Moon,
  Palette,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

import Lightfall from "./components/Lightfall";
import ServiceOrbit from "./components/ServiceOrbit";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DomeGallery from "./components/DomeGallery";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  const cursorPosition = useRef({
    x: -100,
    y: -100,
  });

  const cursorRingPosition = useRef({
    x: -100,
    y: -100,
  });

  /* =========================================
     THEME
  ========================================= */

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("portfolio-theme");

    if (
      savedTheme === "dark" ||
      savedTheme === "light" ||
      savedTheme === "pink"
    ) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      "portfolio-theme",
      theme
    );
  }, [theme]);

  /* =========================================
     CUSTOM CURSOR
  ========================================= */

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(pointer: fine)"
    );

    if (!finePointer.matches) {
      return;
    }

    document.body.classList.add(
      "custom-cursor-enabled"
    );

    let animationFrame;

    const moveCursor = (event) => {
      cursorPosition.current.x =
        event.clientX;

      cursorPosition.current.y =
        event.clientY;
    };

    const animateCursor = () => {
      const dot = cursorDotRef.current;
      const ring = cursorRingRef.current;

      if (dot) {
        dot.style.transform = `translate3d(
          ${cursorPosition.current.x}px,
          ${cursorPosition.current.y}px,
          0
        ) translate(-50%, -50%)`;
      }

      if (ring) {
        cursorRingPosition.current.x +=
          (cursorPosition.current.x -
            cursorRingPosition.current.x) *
          0.18;

        cursorRingPosition.current.y +=
          (cursorPosition.current.y -
            cursorRingPosition.current.y) *
          0.18;

        ring.style.transform = `translate3d(
          ${cursorRingPosition.current.x}px,
          ${cursorRingPosition.current.y}px,
          0
        ) translate(-50%, -50%)`;
      }

      animationFrame =
        requestAnimationFrame(
          animateCursor
        );
    };

    const handlePointerOver = (event) => {
      const target =
        event.target.closest?.(
          ".cursor-target"
        );

      if (target) {
        document.body.classList.add(
          "cursor-hovering"
        );
      }
    };

    const handlePointerOut = (event) => {
      const target =
        event.target.closest?.(
          ".cursor-target"
        );

      if (
        target &&
        !target.contains(
          event.relatedTarget
        )
      ) {
        document.body.classList.remove(
          "cursor-hovering"
        );
      }
    };

    window.addEventListener(
      "mousemove",
      moveCursor,
      { passive: true }
    );

    document.addEventListener(
      "mouseover",
      handlePointerOver
    );

    document.addEventListener(
      "mouseout",
      handlePointerOut
    );

    animationFrame =
      requestAnimationFrame(
        animateCursor
      );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      document.removeEventListener(
        "mouseover",
        handlePointerOver
      );

      document.removeEventListener(
        "mouseout",
        handlePointerOut
      );

      cancelAnimationFrame(
        animationFrame
      );

      document.body.classList.remove(
        "custom-cursor-enabled"
      );

      document.body.classList.remove(
        "cursor-hovering"
      );
    };
  }, []);

  /* =========================================
     ESC CLOSE MODAL
  ========================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedMember(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* =========================================
     THEME BUTTONS
  ========================================= */

  const themes = [
    {
      name: "dark",
      icon: Moon,
      label: "Dark",
    },
    {
      name: "light",
      icon: Sun,
      label: "Light",
    },
    {
      name: "pink",
      icon: Palette,
      label: "Pink",
    },
  ];

  /* =========================================
     NAVIGATION
  ========================================= */

  const navItems = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const handleNavClick = (
    event,
    targetId
  ) => {
    event.preventDefault();

    const target =
      document.querySelector(targetId);

    if (!target) return;

    const navbarHeight = 76;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  /* =========================================
     LIGHTFALL SETTINGS
  ========================================= */

  const lightfallSettings = {
    dark: {
      colors: [
        "#A855F7",
        "#5227FF",
        "#C084FC",
      ],
      backgroundColor: "#1b1925",
      opacity: 0.72,
    },

    light: {
      colors: [
        "#A6C8FF",
        "#7C3AED",
        "#F9FFFC",
      ],
      backgroundColor: "#F5F3FF",
      opacity: 0.55,
    },

    pink: {
      colors: [
        "#FF69B4",
        "#DB2777",
        "#FFD1E8",
      ],
      backgroundColor: "#241522",
      opacity: 0.72,
    },
  };

  const activeLightfall =
    lightfallSettings[theme];

  /* =========================================
     TEAM DATA
  ========================================= */

  const teamMembers = [
    {
      id: "monowar",

      name: "Md. Monowar Hossain",

      shortName: "Monowar",

      position: "CEO",

      role:
        "Web Developer · Digital Marketer · Social Media Manager",

      image:
        "/team-placeholder.jpg",

      bio:
        "I’m a Web Developer and Digital Marketer focused on building modern digital experiences and helping businesses grow online. With experience in web development, digital marketing, and social media management, I combine technical skills with creative strategies to turn ideas into practical digital solutions.",

      experience: [
        "1.5+ Years — Web Development",
        "1+ Year — Digital Marketing",
        "Social Media Management",
      ],

      education: [
        "Diploma in Computer Science",
      ],

      tools: [
        "React",
        "JavaScript",
        "HTML & CSS",
        "WordPress",
        "Meta Ads",
        "Google Ads",
        "Google Analytics",
        "Google Tag Manager",
        "Canva",
        "Photoshop",
        "CapCut",
      ],

      socials: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        whatsapp: "#",
      },
    },

    
  ];

  /* =========================================
     SOCIAL ICONS
  ========================================= */

  const socialIcons = [
    {
      name: "facebook",
      icon: MessageCircle,
    },
    {
      name: "whatsapp",
      icon: MessageCircle,
    },
  ];

  return (
    <div className="app">

      {/* =====================================
          CUSTOM CURSOR
      ===================================== */}

      <div
        ref={cursorDotRef}
        className="custom-cursor-dot"
      />

      <div
        ref={cursorRingRef}
        className="custom-cursor-ring"
      />

      {/* =====================================
          NAVBAR
      ===================================== */}

      <header className="navbar">

        <div className="container navbar-inner">

          <a
            href="#home"
            className="logo cursor-target"
            onClick={(event) =>
              handleNavClick(
                event,
                "#home"
              )
            }
          >
            <span className="logo-mark">
              M
            </span>

            <span className="logo-text">
              Portfolio
            </span>
          </a>

          <nav
            className={`nav-links ${
              menuOpen ? "open" : ""
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="cursor-target"
                onClick={(event) =>
                  handleNavClick(
                    event,
                    item.href
                  )
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="navbar-actions">

            <div className="theme-switcher">

              {themes.map((item) => {

                const Icon = item.icon;

                return (
                  <button
                    key={item.name}
                    type="button"
                    title={item.label}
                    className={`theme-button cursor-target ${
                      theme === item.name
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setTheme(item.name)
                    }
                  >
                    <Icon size={16} />
                  </button>
                );

              })}

            </div>

            <a
              href="#contact"
              className="nav-cta cursor-target"
              onClick={(event) =>
                handleNavClick(
                  event,
                  "#contact"
                )
              }
            >
              Let's Talk

              <ArrowUpRight size={16} />
            </a>

            <button
              type="button"
              className="mobile-menu cursor-target"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
            >
              {menuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

          </div>

        </div>

      </header>

      {/* =====================================
          MAIN
      ===================================== */}

      <main>

        {/* ===================================
            HERO
        =================================== */}

        <section
          className="hero"
          id="home"
        >

          <div className="hero-lightfall">

            <Lightfall
              colors={
                activeLightfall.colors
              }
              backgroundColor={
                activeLightfall.backgroundColor
              }
              speed={0.28}
              streakCount={1}
              streakWidth={1}
              streakLength={0.8}
              glow={0.7}
              density={0.35}
              twinkle={0.4}
              zoom={3}
              backgroundGlow={0.25}
              opacity={
                activeLightfall.opacity
              }
              mouseInteraction={false}
            />

          </div>

          <div className="hero-overlay"></div>

          <div className="container hero-content">

            {/* LEFT SIDE */}

            <div className="hero-main-content">

              <motion.div
                className="hero-badge"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <span className="status-dot"></span>

                Available for new projects
              </motion.div>

              <motion.p
                className="hero-kicker"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
              >
                Developer · Digital Marketer ·
                Social Media Manager
              </motion.p>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
              >
                We build digital
                experiences

                <span>
                  {" "}
                  that make an impact.
                </span>
              </motion.h1>

              <motion.p
                className="hero-description"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
              >
                We combine development,
                digital marketing, and
                creative thinking to help
                businesses build a stronger
                presence online.
              </motion.p>

              <motion.div
                className="hero-buttons"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                }}
              >

                <a
                  href="#projects"
                  className="primary-button cursor-target"
                  onClick={(event) =>
                    handleNavClick(
                      event,
                      "#projects"
                    )
                  }
                >
                  Explore Our Work

                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="#about"
                  className="secondary-button cursor-target"
                  onClick={(event) =>
                    handleNavClick(
                      event,
                      "#about"
                    )
                  }
                >
                  Meet The Team
                </a>

              </motion.div>

              <motion.div
                className="hero-services"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                }}
              >

                <div className="mini-service">
                  <Code2 size={19} />

                  <span>
                    Web Development
                  </span>
                </div>

                <div className="mini-service">
                  <Sparkles size={19} />

                  <span>
                    Digital Marketing
                  </span>
                </div>

                <div className="mini-service">
                  <Palette size={19} />

                  <span>
                    Social Media
                  </span>
                </div>

              </motion.div>

            </div>

            {/* RIGHT SIDE */}

            <motion.div
              className="hero-orbit"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.35,
              }}
            >

              <ServiceOrbit
                logo="/logo.png"
              />

            </motion.div>

          </div>

          {/* SCROLL INDICATOR */}

          <div className="scroll-indicator">

            <span>
              Scroll to explore
            </span>

            <div className="scroll-line"></div>

          </div>

        </section>

        {/* ===================================
            ABOUT / TEAM
        =================================== */}

        <section
          className="team-section"
          id="about"
        >

          <div className="container">

            <motion.div
              className="team-heading"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              <div className="section-label-row">

                <span className="section-number">
                  01
                </span>

                <span className="section-line"></span>

                <span className="section-label">
                  About Us
                </span>

              </div>

              <h2>
                Two minds.
                <br />

                <span>
                  One vision.
                </span>
              </h2>

              <p>
                We combine technical
                expertise, creative thinking,
                and digital strategy to build
                meaningful online experiences.
              </p>

            </motion.div>

            <div className="team-grid">

              {teamMembers.map(
                (member, index) => (

                  <motion.article
                    className="team-card cursor-target"
                    key={member.id}
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.6,
                      delay:
                        index * 0.12,
                    }}
                  >

                    <div className="team-image-wrap">

                      <div className="team-image-glow"></div>

                      <img
                        src={member.image}
                        alt={member.name}
                        className="team-image"
                      />

                      <div className="team-image-number">
                        0{index + 1}
                      </div>

                    </div>

                    <div className="team-card-content">

                      <div className="team-role">
                        {member.role}
                      </div>

                      <h3>
                        {member.name}
                      </h3>

                      <p>
                        {member.bio}
                      </p>

                      <button
                        type="button"
                        className="view-profile cursor-target"
                        onClick={() =>
                          setSelectedMember(
                            member
                          )
                        }
                      >
                        View Full Profile

                        <ArrowUpRight
                          size={17}
                        />
                      </button>

                    </div>

                  </motion.article>

                )
              )}

            </div>

            <motion.div
              className="team-statement"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <span>
                <Sparkles size={18} />
              </span>

              <p>
                Different strengths,
                shared ambition — building
                better digital experiences
                together.
              </p>

            </motion.div>

          </div>

        </section>

        {/* ===================================
            SERVICES
        =================================== */}

        <Services />

        {/* ===================================
            PROJECTS
        =================================== */}

        <Projects />

        {/* ===================================
            EXPERIENCE
        =================================== */}

        <Experience />

         {/* ===================================
            Dome Gallery
        =================================== */}

        <section
  className="dome-gallery-section"
  id="gallery"
  style={{
    position: "relative",
    width: "100%",
    height: "680px",
    overflow: "hidden",
  }}
>

  <DomeGallery
    fit={0.55}
    fitBasis="auto"
    minRadius={600}
    maxRadius={Infinity}
    padFactor={0.25}
    overlayBlurColor={
      theme === "light"
        ? "#F5F3FF"
        : theme === "pink"
        ? "#241522"
        : "#120F17"
    }
    maxVerticalRotationDeg={5}
    dragSensitivity={20}
    enlargeTransitionMs={300}
    segments={35}
    dragDampening={2}
    openedImageWidth="250px"
    openedImageHeight="250px"
    imageBorderRadius="12px"
    openedImageBorderRadius="32px"
    grayscale={false}
  />

</section>

        {/* ===================================
            CONTACT
        =================================== */}

        <Contact/>

        {/* ===================================
            Footer
        =================================== */}

        <Footer/>

      </main>

      {/* =====================================
          PROFILE MODAL
      ===================================== */}

      {selectedMember && (

        <div
          className="profile-modal"
          onClick={() =>
            setSelectedMember(null)
          }
        >

          <motion.div
            className="profile-modal-inner"
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="modal-close cursor-target"
              onClick={() =>
                setSelectedMember(null)
              }
            >
              <X size={21} />
            </button>

            <div className="profile-modal-image">

              <img
                src={
                  selectedMember.image
                }
                alt={
                  selectedMember.name
                }
              />

              <div className="profile-modal-gradient"></div>

              <div className="profile-modal-image-info">

                <span>
                  {selectedMember.position}
                </span>

                <strong>
                  {selectedMember.shortName}
                </strong>

              </div>

            </div>

            <div className="profile-modal-content">

              <span className="modal-role">
                {selectedMember.role}
              </span>

              <h2>
                {selectedMember.name}
              </h2>

              <p className="modal-bio">
                {selectedMember.bio}
              </p>

              <div className="profile-info-block">

                <div className="profile-info-title">
                  Experience
                </div>

                <div className="profile-info-list">

                  {selectedMember.experience.map(
                    (item) => (

                      <div
                        key={item}
                        className="profile-info-item"
                      >

                        <span className="info-dot"></span>

                        {item}

                      </div>

                    )
                  )}

                </div>

              </div>

              <div className="profile-info-block">

                <div className="profile-info-title">
                  Education
                </div>

                <div className="profile-info-list">

                  {selectedMember.education.map(
                    (item) => (

                      <div
                        key={item}
                        className="profile-info-item"
                      >

                        <span className="info-dot"></span>

                        {item}

                      </div>

                    )
                  )}

                </div>

              </div>

              <div className="profile-info-block">

                <div className="profile-info-title">
                  Tools & Technologies
                </div>

                <div className="tools-list">

                  {selectedMember.tools.map(
                    (tool) => (

                      <span
                        key={tool}
                        className="tool-chip"
                      >
                        {tool}
                      </span>

                    )
                  )}

                </div>

              </div>

              <div className="profile-socials">

                {socialIcons.map(
                  (social) => {

                    const Icon =
                      social.icon;

                    const link =
                      selectedMember
                        .socials[
                        social.name
                      ];

                    return (

                      <a
                        key={social.name}
                        href={link}
                        className="profile-social cursor-target"
                        onClick={(event) => {

                          if (link === "#") {
                            event.preventDefault();
                          }

                        }}
                      >

                        <Icon size={18} />

                      </a>

                    );

                  }
                )}

              </div>

            </div>

          </motion.div>

        </div>

      )}

    </div>
  );
}

export default App;