import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Code2,
  BarChart3,
  Smartphone,
  ShoppingBag,
  Palette,
  LineChart,
} from "lucide-react";

import "./Projects.css";

const projects = [
  {
    id: "01",
    title: "Arnika Enterprise",
    category: "Web Development",
    type: "Business / E-commerce",
    description:
      "A modern business and e-commerce website built to showcase interior products, support product browsing, and provide a smooth online shopping experience.",
    image: "/projects/arnika_web.jpg",
    
    tags: ["Web Development", "E-commerce", "Business Website"],
    icon: Code2,
    liveUrl: "https://arnikaenterprise.com/",
    caseStudyUrl: "https://drive.google.com/file/d/1wI0rvXgzq4Uj1TgYMmdizkyPM2plyA1T/view?usp=sharing",

    featured: true,
  },

  {
    id: "02",
    title: "Meta Ads — message Campaign",
    category: "Digital Marketing",
    type: "Performance Marketing",
    description:
      "Managed a long-term Meta Ads messaging campaign focused on generating customer conversations through strategic audience targeting, campaign optimization, and performance monitoring. The campaign generated 1,410 messaging conversations at an average cost of $7.59 per conversation, with a total ad spend of $10,707.47.",
    image: "/projects/project1-meta-ads.jpeg",
    images: [
      "/projects/project1-meta-ads.jpeg",
      "/projects/project1-meta-ads-2.jpeg",
      "/projects/project1-meta-ads-3.jpeg",
    ],
    tags: ["Meta Ads",
      "Messaging Campaign",
      "Audience Targeting",
      "Campaign Optimization",
      "Performance Analytics"],

    metrics: [
      { label: "Website Purchases", value: "768" },
      { label: "Cost per Purchase", value: "$39.89" },
      { label: "Total Ad Spend", value: "$30,632.76" },
    ],
    icon: BarChart3,
    caseStudyUrl: "https://drive.google.com/file/d/1wI0rvXgzq4Uj1TgYMmdizkyPM2plyA1T/view?usp=sharing",
    liveUrl: "https://drive.google.com/file/d/1wI0rvXgzq4Uj1TgYMmdizkyPM2plyA1T/view?usp=sharing",

  },

  {
    id: "03",
    title: "Meta Ads — Moto Sales Campaign",
    category: "Digital Marketing",
    type: "Meta Ads | E-commerce Sales",
    description:
      "Executed a performance-driven Meta Ads sales campaign for NumbSkull, focused on generating website purchases through campaign management, audience targeting, creative testing, and ongoing optimization. During the selected reporting period, the campaign generated 768 website purchases at an average cost of $39.89 per purchase, with a total ad spend of $30,632.76.",
    image: "/projects/project2-moto-sales.jpeg",
    images: [
      "/projects/project2-moto-sales.jpeg",
      "/projects/project2-moto-sales-2.jpg",
    ],
    tags: [
      "Meta Ads",
      "E-commerce Sales",
      "Purchase Optimization",
      "Audience Targeting",
      "Campaign Analytics"
    ],
    metrics: [
      { label: "Website Purchases", value: "768" },
      { label: "Cost per Purchase", value: "$39.89" },
      { label: "Total Ad Spend", value: "$30,632.76" },
    ],
    icon: BarChart3,
    caseStudyUrl: "https://drive.google.com/drive/folders/1uY8EE8ICFeBQOvq6hDr4HhwReVz6DgkH?usp=sharing",
    liveUrl: "https://drive.google.com/drive/folders/1uY8EE8ICFeBQOvq6hDr4HhwReVz6DgkH?usp=sharing",


  },

  {
    id: "04",
    title: "Meta Ads — simplistore Lead & Call Campaign",
    category: "Digital Marketing",
    type: "Meta Ads | Searvice Lead",
    description:
      "Managed Meta Ads campaigns focused on generating phone calls, capturing leads through instant forms, and driving website traffic. The campaign strategy included audience targeting, budget management, and performance monitoring to improve lead generation and connect potential customers with the business.",
    image: "/projects/project3-SIMPLI-call1.jpg",
    images: [
      "/projects/project3-SIMPLI-call1.jpg",
      "/projects/project3-SIMPLI-call2.jpg",
    ],
    tags: [
      "Meta Ads",
      "Lead Generation",
      "Call Campaigns",
      "Audience Targeting",
      "Campaign Analytics",
    ],
    metrics: [
      { label: "Calls Placed", value: "220" },
      { label: "Cost per Call", value: "$8.77" },
      { label: "Leads Generated", value: "59" },
      { label: "Cost per Lead", value: "$20.25" },
      { label: "Landing Page Views", value: "368" },
      { label: "Cost per Landing Page View", value: "$0.53" },
      { label: "Total Ad Spend", value: "$2,473.31" },
      { label: "Total Impressions", value: "313,133" },
      { label: "Total Clicks", value: "6,795" },
    ],
    icon: BarChart3,
    caseStudyUrl: "https://drive.google.com/drive/folders/1uY8EE8ICFeBQOvq6hDr4HhwReVz6DgkH?usp=sharing",
    liveUrl: "https://drive.google.com/drive/folders/1uY8EE8ICFeBQOvq6hDr4HhwReVz6DgkH?usp=sharing",


  },


  {
    id: "05",
    title: "Facebook Media Management",
    category: "Social Media",
    type: "Social Media Strategy & Content Management",
    description:
      "Managed social media for Cape Family Medical Clinic, focusing on content creation, consistent publishing, and audience engagement. During October 2026, the clinic’s content generated 77,278 views, with views increasing by 500% and watch time growing by 850%. The campaign also achieved 714 three-second video views, demonstrating improved content visibility and video engagement across social media.",
    image: "/projects/capefemily_facebook_management1.jpeg",
    images: [
      "/projects/capefemily_facebook_management1.jpeg",
      "/projects/capefemily_facebook_management2.jpeg",
    ],
    tags: [
      "Meta Ads",
      "E-commerce Sales",
      "Purchase Optimization",
      "Audience Targeting",
      "Campaign Analytics"
    ],
    metrics: [
      { label: "Website Purchases", value: "768" },
      { label: "Cost per Purchase", value: "$39.89" },
      { label: "Total Ad Spend", value: "$30,632.76" },
    ],
    icon: Palette,
    caseStudyUrl: "https://drive.google.com/drive/folders/1uY8EE8ICFeBQOvq6hDr4HhwReVz6DgkH?usp=sharing",
    liveUrl: "https://drive.google.com/drive/folders/1uY8EE8ICFeBQOvq6hDr4HhwReVz6DgkH?usp=sharing",
  },

  {
    id: "06",
    title: "Facebook Media Management",
    category: "Social Media",
    type: "Social Media Strategy & Content Management",
    description:
      "Managed social media for Cape Family Medical Clinic, focusing on content creation, consistent publishing, and audience engagement. During October 2026, the clinic’s content generated 77,278 views, with views increasing by 500% and watch time growing by 850%. The campaign also achieved 714 three-second video views, demonstrating improved content visibility and video engagement across social media.",
    image: "/projects/capefemily_facebook_management1.jpeg",
    images: [
      "/projects/capefemily_facebook_management1.jpeg",
    ],
    tags: [
      "Meta Ads",
      "E-commerce Sales",
      "Purchase Optimization",
      "Audience Targeting",
      "Campaign Analytics"
    ],
    metrics: [
      { label: "Website Purchases", value: "768" },
      { label: "Cost per Purchase", value: "$39.89" },
      { label: "Total Ad Spend", value: "$30,632.76" },
    ],
    icon: Palette,
    caseStudyUrl: "https://drive.google.com/drive/folders/13PEGXZYCK45vGkzJRuI-9XmUkMZ_IDGj?usp=sharing",
    liveUrl: "https://drive.google.com/drive/folders/13PEGXZYCK45vGkzJRuI-9XmUkMZ_IDGj?usp=sharing",

  },

  {
    id: "07",
    title: "Analytics & Tracking",
    category: "Analytics",
    type: "Conversion Tracking",
    description:
      "A tracking and analytics setup designed to measure website activity, conversions and marketing performance.",
    image: "/projects/project-analytics.jpg",
    tags: ["GA4", "GTM", "Tracking"],
    icon: LineChart,
    caseStudyUrl: "https://drive.google.com/drive/folders/1uY8EE8ICFeBQOvq6hDr4HhwReVz6DgkH?usp=sharing",
    liveUrl: "https://drive.google.com/drive/folders/1uY8EE8ICFeBQOvq6hDr4HhwReVz6DgkH?usp=sharing",
  },
];

const filters = [
  "All",
  "Web Development",
  "Digital Marketing",
  "Social Media",
  "Creative",
  "Analytics",
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const selectedImages = selectedProject
    ? (selectedProject.images?.length ? selectedProject.images : [selectedProject.image])
    : [];

  const showPreviousImage = () => {
    setActiveImageIndex((current) =>
      current === 0 ? selectedImages.length - 1 : current - 1
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((current) =>
      current === selectedImages.length - 1 ? 0 : current + 1
    );
  };

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
        (project) => project.category === activeFilter
      );

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* SECTION HEADER */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-number">
            03 — Selected Work
          </div>

          <div className="projects-heading-row">
            <div>
              <h2>
                Things we've
                <span> built & grown.</span>
              </h2>
            </div>

            <p>
              A selection of websites, campaigns and digital
              experiences we've created to help ideas move forward.
            </p>
          </div>
        </motion.div>

        {/* FILTERS */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              className={
                activeFilter === filter ? "active" : ""
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* PROJECT GRID */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.id}
                  layout
                  className={`project-card ${project.featured ? "featured-project" : ""
                    }`}
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
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  onClick={() => {
                    setActiveImageIndex(0);
                    setSelectedProject(project);
                  }}
                >
                  {/* IMAGE */}
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />

                    <div className="project-image-overlay">
                      <span>
                        View Project
                        <ArrowUpRight size={17} />
                      </span>
                    </div>

                    <div className="project-number">
                      {project.id}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="project-content">

                    <div className="project-meta">
                      <div className="project-icon">
                        <Icon size={17} />
                      </div>

                      <span>
                        {project.category}
                      </span>
                    </div>

                    <div className="project-title-row">
                      <h3>{project.title}</h3>

                      <div className="project-arrow">
                        <ArrowUpRight size={19} />
                      </div>
                    </div>

                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setSelectedProject(null); setActiveImageIndex(0); }}
          >
            <motion.div
              className="project-modal"
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}
              <button
                className="modal-close"
                onClick={() => { setSelectedProject(null); setActiveImageIndex(0); }}
              >
                <X size={20} />
              </button>

              {/* MODAL IMAGE */}
              <div className="modal-image">
                <img
                  src={selectedImages[activeImageIndex]}
                  alt={`${selectedProject.title} — image ${activeImageIndex + 1}`}
                />

                {selectedImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="modal-gallery-arrow modal-gallery-prev"
                      aria-label="Previous project image"
                      onClick={showPreviousImage}
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      type="button"
                      className="modal-gallery-arrow modal-gallery-next"
                      aria-label="Next project image"
                      onClick={showNextImage}
                    >
                      <ChevronRight size={22} />
                    </button>
                    <div className="modal-gallery-count">
                      {activeImageIndex + 1} / {selectedImages.length}
                    </div>
                  </>
                )}
              </div>

              {/* MODAL CONTENT */}
              <div className="modal-content">

                <div className="modal-number">
                  {selectedProject.id}
                </div>

                <div className="modal-category">
                  {selectedProject.category}
                </div>

                <h3>{selectedProject.title}</h3>

                <p className="modal-description">
                  {selectedProject.description}
                </p>

                {selectedProject.metrics && (
                  <div className="project-metrics">
                    {selectedProject.metrics.map((metric) => (
                      <div className="project-metric" key={metric.label}>
                        <p className="project-metric-label">{metric.label}</p>
                        <h4 className="project-metric-value">{metric.value}</h4>
                      </div>
                    ))}
                  </div>
                )}

                <div className="modal-tags">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="modal-action-buttons">


                  {selectedProject.caseStudyUrl && (
                    <a
                      href={selectedProject.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-live-button"
                    >
                      View Case Study
                      <ExternalLink size={17} />
                    </a>
                  )}

                  {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-live-button"
                    >
                      Preview
                      <ExternalLink size={17} />
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;