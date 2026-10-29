import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>


      <div className="footer-container">

        {/* =========================================
            TOP CTA
        ========================================= */}

        <motion.div
          className="footer-cta"
          initial={{
            opacity: 0,
            y: 35,
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

          <div className="footer-cta-text">

            <span className="footer-eyebrow">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's build
              <br />
              <span>something great.</span>
            </h2>

          </div>


          <a
            href="#contact"
            className="footer-cta-button cursor-target"
          >
            <span>
              Let's Talk
            </span>

            <ArrowUpRight size={18} />
          </a>

        </motion.div>


        {/* =========================================
            DIVIDER
        ========================================= */}

        <div className="footer-divider"></div>


        {/* =========================================
            FOOTER GRID
        ========================================= */}

        <div className="footer-grid">

          {/* BRAND */}

          <motion.div
            className="footer-brand"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <a
              href="#"
              className="footer-logo cursor-target"
            >

              <span className="footer-logo-mark">
                M
              </span>

              <span>
                Portfolio
              </span>

            </a>


            <p>
              Developer, digital marketer and
              social media manager focused on
              building meaningful digital
              experiences.
            </p>


            {/* Socials */}

            <div className="footer-socials">

              <a
                href="https://www.facebook.com/dev.monowar"
                className="cursor-target"
                aria-label="Facebook"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="https://www.instagram.com/md.monowar.090909/"
                className="cursor-target"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/monowar-dev/"
                className="cursor-target"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>

            </div>

          </motion.div>


          {/* NAVIGATION */}

          <motion.div
            className="footer-column"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >

            <h3>
              Navigation
            </h3>

            <a
              href="#home"
              className="cursor-target"
            >
              Home
            </a>

            <a
              href="#about"
              className="cursor-target"
            >
              About
            </a>

            <a
              href="#services"
              className="cursor-target"
            >
              Services
            </a>

            <a
              href="#projects"
              className="cursor-target"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="cursor-target"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="cursor-target"
            >
              Contact
            </a>

          </motion.div>


          {/* SERVICES */}

          <motion.div
            className="footer-column"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >

            <h3>
              Services
            </h3>

            <a
              href="#services"
              className="cursor-target"
            >
              Web Development
            </a>

            <a
              href="#services"
              className="cursor-target"
            >
              Digital Marketing
            </a>

            <a
              href="#services"
              className="cursor-target"
            >
              Social Media Management
            </a>

            <a
              href="#services"
              className="cursor-target"
            >
              Creative & UI Design
            </a>

            <a
              href="#services"
              className="cursor-target"
            >
              Performance & Analytics
            </a>

          </motion.div>


          {/* CONTACT */}

          <motion.div
            className="footer-column footer-contact"
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >

            <h3>
              Get in touch
            </h3>


            <a
              href="mailto:monowarhossain2155@gmail.com"
              className="footer-contact-item cursor-target"
            >

              <Mail size={16} />

              <span>
                monowarhossain2155@gmail.com
              </span>

              <ArrowUpRight size={15} />

            </a>


            <a
              href="#contact"
              className="footer-contact-item cursor-target"
            >

              <MessageCircle size={16} />

              <span>
                Let's chat
              </span>

              <ArrowUpRight size={15} />

            </a>


            {/* Availability */}

            <div className="footer-availability">

              <span></span>

              <p>
                Available for new projects
              </p>

            </div>

          </motion.div>

        </div>


        {/* =========================================
            BOTTOM DIVIDER
        ========================================= */}

        <div className="footer-divider"></div>


        {/* =========================================
            BOTTOM
        ========================================= */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Monowar Hossain.
            All rights reserved.
          </p>


          <div className="footer-bottom-center">

            <span>
              DESIGN
            </span>

            <i></i>

            <span>
              DEVELOP
            </span>

            <i></i>

            <span>
              GROW
            </span>

          </div>


          <button
            type="button"
            className="footer-top-button cursor-target"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={17} />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;