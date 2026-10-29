import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Megaphone,
  Share2,
  Palette,
  Server,
  Database,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

import "./Experience.css";

const people = {
  monowar: {
    number: "01",
    name: "Md. Monowar Hossain",
    role: "Web Developer · Digital Marketer · Social Media Manager",

    intro:
      "I work across development, digital marketing, social media and creative digital solutions, combining technical thinking with creative strategy.",

    experiences: [
      {
        title: "Web Development",
        icon: Code2,
        text:
          "Building modern, responsive and user-focused websites with clean structure, smooth interactions and practical functionality.",
        tags: ["React", "JavaScript", "WordPress"],
      },
      {
        title: "Digital Marketing",
        icon: Megaphone,
        text:
          "Planning and managing digital campaigns with a focus on audience, creative strategy, engagement and measurable growth.",
        tags: ["Meta Ads", "Google Ads", "Strategy"],
      },
      {
        title: "Social Media Management",
        icon: Share2,
        text:
          "Managing social media presence through content planning, creative development, publishing and audience engagement.",
        tags: ["Facebook", "Instagram", "Content"],
      },
      {
        title: "Creative & UI Design",
        icon: Palette,
        text:
          "Creating clean digital visuals, social media creatives and user interfaces that communicate ideas clearly.",
        tags: ["UI Design", "Creative", "Branding"],
      },
    ],
  },

  // shakibur: {
  //   number: "02",
  //   name: "Md. Shakibur Rahman",
  //   role: "Backend Developer",

  //   intro:
  //     "I focus on backend development and the systems behind modern web applications, working with APIs, databases and application logic.",

  //   experiences: [
  //     {
  //       title: "Backend Development",
  //       icon: Server,
  //       text:
  //         "Building reliable server-side applications and backend systems that support modern digital products.",
  //       tags: ["Node.js", "Backend", "Server"],
  //     },
  //     {
  //       title: "API Development",
  //       icon: Code2,
  //       text:
  //         "Developing structured APIs that connect frontend applications with backend services and data.",
  //       tags: ["REST API", "API", "Integration"],
  //     },
  //     {
  //       title: "Database",
  //       icon: Database,
  //       text:
  //         "Working with application data and database structures to build reliable and organized systems.",
  //       tags: ["Database", "Data", "Backend"],
  //     },
  //     {
  //       title: "Digital Marketing",
  //       icon: BarChart3,
  //       text:
  //         "Supporting digital growth through campaign planning, online presence and marketing-focused solutions.",
  //       tags: ["Marketing", "Analytics", "Growth"],
  //     },
  //   ],
  // },
};

function Experience() {
  const [activePerson, setActivePerson] = useState("monowar");

  const person = people[activePerson];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        {/* HEADER */}
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="experience-label">
            <span>04</span>
            <i></i>
            <p>Experience</p>
          </div>

          <div className="experience-heading">
            <h2>
              What we
              <br />
              <span>work with.</span>
            </h2>

            <p>
              Explore our individual experience,
              expertise and the areas we currently
              work across.
            </p>
          </div>
        </motion.div>

        {/* PERSON TABS */}
        <motion.div
          className="experience-tabs"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <button
            className={
              activePerson === "monowar"
                ? "experience-tab active"
                : "experience-tab"
            }
            onClick={() => setActivePerson("monowar")}
          >
            <span className="tab-number">01</span>

            <span className="tab-content">
              <strong>Md. Monowar Hossain</strong>
              <small>
                Developer · Marketer · Social Media
              </small>
            </span>

            <ArrowUpRight size={17} />
          </button>

          {/* <button
            className={
              activePerson === "shakibur"
                ? "experience-tab active"
                : "experience-tab"
            }
            onClick={() => setActivePerson("shakibur")}
          >
            <span className="tab-number">02</span>

            <span className="tab-content">
              <strong>Md. Shakibur Rahman</strong>
              <small>Backend Developer</small>
            </span>

            <ArrowUpRight size={17} />
          </button> */}
        </motion.div>

        {/* EXPERIENCE CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePerson}
            className="experience-content"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.4,
            }}
          >

            {/* PERSON INFO */}
            <div className="experience-person-info">

              <div className="person-number">
                {person.number}
              </div>

              <div>
                <h3>{person.name}</h3>

                <span className="person-role">
                  {person.role}
                </span>

                <p>{person.intro}</p>
              </div>

            </div>

            {/* EXPERIENCE GRID */}
            <div className="experience-grid">

              {person.experiences.map(
                (experience, index) => {
                  const Icon = experience.icon;

                  return (
                    <motion.article
                      key={experience.title}
                      className="experience-card cursor-target"

                      initial={{
                        opacity: 0,
                        y: 25,
                      }}

                      animate={{
                        opacity: 1,
                        y: 0,
                      }}

                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                      }}

                      whileHover={{
                        y: -6,
                      }}
                    >

                      <div className="experience-card-top">

                        <span>
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </span>

                        <div className="experience-icon">
                          <Icon size={20} />
                        </div>

                      </div>

                      <h4>
                        {experience.title}
                      </h4>

                      <p>
                        {experience.text}
                      </p>

                      <div className="experience-tags">
                        {experience.tags.map(
                          (tag) => (
                            <span key={tag}>
                              {tag}
                            </span>
                          )
                        )}
                      </div>

                      <div className="experience-card-line" />

                    </motion.article>
                  );
                }
              )}

            </div>

          </motion.div>
        </AnimatePresence>

        {/* BOTTOM */}
        <motion.div
          className="experience-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span></span>

          <p>
            Always learning.{" "}
            <strong>Always building.</strong>
          </p>

          <span></span>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;