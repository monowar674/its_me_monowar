import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Section label */}
        <motion.div
          className="contact-label"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span>05</span>
          <i></i>
          <p>Contact</p>
        </motion.div>

        {/* Main heading */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h2>
              Let's create
              <br />
              <span>something great.</span>
            </h2>
          </div>

          <p>
            Have a project, idea or collaboration in mind?
            Tell us what you're working on and let's build
            something meaningful together.
          </p>
        </motion.div>

        {/* Contact layout */}
        <div className="contact-grid">

          {/* Left side */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >

            <div className="contact-status">
              <span></span>
              Available for new projects
            </div>

            <h3>
              Let's turn your
              <br />
              <span>idea into reality.</span>
            </h3>

            <p>
              Whether you need a website, digital marketing
              support, social media management or a complete
              digital solution, we're ready to help.
            </p>

            {/* Email */}
            <a
              href="mailto:monowarhossain2155@gmail.com"
              className="contact-direct cursor-target"
            >
              <div className="contact-direct-icon">
                <Mail size={19} />
              </div>

              <div>
                <small>Email</small>
                <strong>monowarhossain2155@email.com</strong>
              </div>

              <ArrowUpRight size={18} />
            </a>

            {/* WhatsApp */}
            <a
              href="#"
              className="contact-direct cursor-target"
            >
              <div className="contact-direct-icon">
                <MessageCircle size={19} />
              </div>

              <div>
                <small>WhatsApp</small>
                <strong>Let's chat on WhatsApp</strong>
              </div>

              <ArrowUpRight size={18} />
            </a>

            {/* Socials */}
            <div className="contact-socials">

  <a
    href="https://www.facebook.com/dev.monowar"
    className="cursor-target"
    aria-label="Facebook"
  >
    <FaFacebookF size={16} />
  </a>

  <a
    href="https://www.instagram.com/md.monowar.090909/"
    className="cursor-target"
    aria-label="Instagram"
  >
    <FaInstagram size={17} />
  </a>

  <a
    href="https://www.linkedin.com/in/monowar-dev/"
    className="cursor-target"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn size={17} />
  </a>

</div>

          </motion.div>


          {/* Right side - Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >

            <form
              className="contact-form"
              onSubmit={(e) => e.preventDefault()}
            >

              <div className="form-header">
                <div>
                  <span>START A PROJECT</span>
                  <h3>Tell us about it.</h3>
                </div>

                <div className="form-number">
                  05
                </div>
              </div>

              {/* Name */}
              <div className="form-field">
                <label htmlFor="contact-name">
                  Your name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div className="form-field">
                <label htmlFor="contact-email">
                  Email address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>

              {/* Service */}
              <div className="form-field">
                <label htmlFor="contact-service">
                  What do you need?
                </label>

                <select id="contact-service">
                  <option value="">
                    Select a service
                  </option>

                  <option value="web-development">
                    Web Development
                  </option>

                  <option value="digital-marketing">
                    Digital Marketing
                  </option>

                  <option value="social-media">
                    Social Media Management
                  </option>

                  <option value="creative">
                    Creative & UI Design
                  </option>

                  <option value="other">
                    Something else
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="form-field">
                <label htmlFor="contact-message">
                  Project details
                </label>

                <textarea
                  id="contact-message"
                  rows="5"
                  placeholder="Tell us a little about your project..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="contact-submit cursor-target"
              >
                <span>Send Message</span>

                <div>
                  <Send size={17} />
                </div>
              </button>

              <p className="form-note">
                We'll get back to you as soon as possible.
              </p>

            </form>

          </motion.div>

        </div>

        {/* Bottom line */}
        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span></span>

          <p>
            BUILDING DIGITAL EXPERIENCES
          </p>

          <span></span>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;