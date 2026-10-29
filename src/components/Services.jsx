import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowUpRight,
  Code2,
  Megaphone,
  Share2,
  Palette,
  BarChart3,
  Layers3,
  X,
  Check,
} from "lucide-react";

import "./Services.css";

function Services() {
  const [selectedService, setSelectedService] =
    useState(null);

  const services = [
    {
      number: "01",
      title: "Web Development",
      icon: Code2,

      shortDescription:
        "Modern, responsive and high-performance websites built with clean code and a strong focus on user experience.",

      description:
        "We build modern digital experiences that are fast, responsive and designed around real user needs. From frontend interfaces to backend systems, we focus on creating websites that look great and work reliably across devices.",

      tags: [
        "React",
        "JavaScript",
        "Frontend",
        "Backend",
      ],

      services: [
        "Responsive Website Development",
        "React Web Applications",
        "Frontend Development",
        "Backend Development",
        "API Integration",
        "Performance Optimization",
      ],

      process: [
        "Understand the project requirements",
        "Plan the structure and user experience",
        "Build the frontend and backend",
        "Test across devices",
        "Optimize and deploy",
      ],
    },

    {
      number: "02",
      title: "Digital Marketing",
      icon: Megaphone,

      shortDescription:
        "Data-driven digital marketing strategies designed to reach the right audience and generate meaningful results.",

      description:
        "We create and manage digital marketing campaigns with a focus on audience targeting, creative strategy, campaign optimization and measurable growth.",

      tags: [
        "Meta Ads",
        "Google Ads",
        "Campaign Strategy",
        "Lead Generation",
      ],

      services: [
        "Meta Advertising",
        "Google Advertising",
        "Campaign Setup",
        "Audience Research",
        "Lead Generation",
        "Campaign Optimization",
      ],

      process: [
        "Research the business and audience",
        "Build the campaign strategy",
        "Create and launch campaigns",
        "Monitor performance",
        "Optimize based on data",
      ],
    },

    {
      number: "03",
      title: "Social Media Management",
      icon: Share2,

      shortDescription:
        "Strategic social media management with engaging content, consistent branding and a growth-focused approach.",

      description:
        "We help businesses maintain a professional and engaging social presence through content planning, creative direction, posting strategy and audience-focused communication.",

      tags: [
        "Content Strategy",
        "Instagram",
        "Facebook",
        "Reels",
      ],

      services: [
        "Social Media Strategy",
        "Content Planning",
        "Post Management",
        "Reels Strategy",
        "Creative Direction",
        "Performance Monitoring",
      ],

      process: [
        "Understand the brand",
        "Research the target audience",
        "Create a content strategy",
        "Plan and publish content",
        "Review performance and improve",
      ],
    },

    {
      number: "04",
      title: "Creative & UI Design",
      icon: Palette,

      shortDescription:
        "Clean and engaging digital visuals that communicate your brand clearly across websites, advertisements and social platforms.",

      description:
        "We create clean, modern and engaging visual experiences for brands that want to stand out. Every creative is designed with clarity, consistency and the target audience in mind.",

      tags: [
        "UI Design",
        "Ad Creative",
        "Social Posts",
        "Brand Visuals",
      ],

      services: [
        "Website UI Design",
        "Landing Page Design",
        "Social Media Creatives",
        "Advertisement Design",
        "Visual Branding",
        "Creative Direction",
      ],

      process: [
        "Understand the visual direction",
        "Create the design concept",
        "Develop the visual system",
        "Refine based on feedback",
        "Prepare final assets",
      ],
    },

    {
      number: "05",
      title: "Performance & Analytics",
      icon: BarChart3,

      shortDescription:
        "Tracking and optimization solutions that help understand user behavior, measure conversions and improve campaign performance.",

      description:
        "We help connect marketing activities with measurable data. Proper tracking allows businesses to understand what is working, where users are coming from and which actions are generating results.",

      tags: [
        "GA4",
        "Meta Pixel",
        "GTM",
        "Conversion Tracking",
      ],

      services: [
        "Google Analytics 4",
        "Meta Pixel Setup",
        "Google Tag Manager",
        "Conversion Tracking",
        "Event Tracking",
        "Campaign Measurement",
      ],

      process: [
        "Audit the existing setup",
        "Define important events",
        "Configure tracking",
        "Test the implementation",
        "Monitor and improve data quality",
      ],
    },

    {
      number: "06",
      title: "Digital Strategy",
      icon: Layers3,

      shortDescription:
        "Practical digital strategies that connect development, marketing and creative work into one focused growth system.",

      description:
        "We bring development, marketing and creative thinking together to create a clear digital strategy. The goal is to make every part of the online presence work together instead of operating separately.",

      tags: [
        "Growth Strategy",
        "Content Planning",
        "Brand Strategy",
        "Consultation",
      ],

      services: [
        "Digital Strategy",
        "Growth Planning",
        "Content Strategy",
        "Brand Positioning",
        "Marketing Planning",
        "Digital Consultation",
      ],

      process: [
        "Understand the business goals",
        "Identify opportunities",
        "Build the digital roadmap",
        "Prioritize the right actions",
        "Measure and improve",
      ],
    },
  ];

  return (
    <>
      {/* =================================================
          SERVICES
      ================================================= */}

      <section
        className="services-section"
        id="services"
      >
        <div className="container">

          {/* ================= HEADER ================= */}

          <motion.div
            className="services-heading"
            initial={{
              opacity: 0,
              y: 60,
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
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="section-label-row">
              <span className="section-number">
                02
              </span>

              <span className="section-line"></span>

              <span className="section-label">
                What We Do
              </span>
            </div>

            <div className="services-title-row">
              <div>
                <h2>
                  Built to
                  <br />
                  <span>
                    move you forward.
                  </span>
                </h2>
              </div>

              <p>
                From code to campaigns, we bring
                development, marketing and
                creative thinking together to build
                digital experiences that actually
                matter.
              </p>
            </div>
          </motion.div>


          {/* ================= SERVICES GRID ================= */}

          <div className="services-grid">

            {services.map(
              (service, index) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    key={service.number}
                    className="service-card cursor-target"

                    initial={{
                      opacity: 0,
                      y: 80,
                      scale: 0.94,
                    }}

                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}

                    viewport={{
                      once: true,
                      amount: 0.18,
                    }}

                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}

                    onClick={() =>
                      setSelectedService(
                        service
                      )
                    }
                  >

                    <div className="service-card-glow"></div>


                    {/* CARD TOP */}

                    <div className="service-top">

                      <motion.span
                        className="service-number"

                        initial={{
                          opacity: 0,
                          x: -15,
                        }}

                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}

                        viewport={{
                          once: true,
                        }}

                        transition={{
                          duration: 0.4,
                          delay:
                            index * 0.1 +
                            0.15,
                        }}
                      >
                        {service.number}
                      </motion.span>


                      <motion.div
                        className="service-icon"

                        initial={{
                          opacity: 0,
                          scale: 0.6,
                          rotate: -12,
                        }}

                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          rotate: 0,
                        }}

                        viewport={{
                          once: true,
                        }}

                        transition={{
                          duration: 0.55,
                          delay:
                            index * 0.1 +
                            0.2,
                          ease: "backOut",
                        }}
                      >
                        <Icon size={23} />
                      </motion.div>


                      <motion.div
                        className="service-arrow"

                        initial={{
                          opacity: 0,
                          x: 15,
                        }}

                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}

                        viewport={{
                          once: true,
                        }}

                        transition={{
                          duration: 0.4,
                          delay:
                            index * 0.1 +
                            0.25,
                        }}
                      >
                        <ArrowUpRight
                          size={20}
                        />
                      </motion.div>

                    </div>


                    {/* CARD CONTENT */}

                    <div className="service-main">

                      <h3>
                        {service.title}
                      </h3>

                      <p>
                        {
                          service.shortDescription
                        }
                      </p>


                      <div className="service-tags">

                        {service.tags.map(
                          (tag) => (
                            <span key={tag}>
                              {tag}
                            </span>
                          )
                        )}

                      </div>

                    </div>


                    <div className="service-view">
                      Click to explore
                    </div>

                  </motion.article>
                );
              }
            )}

          </div>


          {/* ================= BOTTOM ================= */}

          <motion.div
            className="services-bottom"

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
              duration: 0.7,
              delay: 0.2,
            }}
          >
            <div className="services-bottom-line"></div>

            <p>
              One team. Multiple disciplines.
              <strong>
                {" "}
                One digital vision.
              </strong>
            </p>

            <div className="services-bottom-line"></div>
          </motion.div>

        </div>
      </section>


      {/* =================================================
          SERVICE DETAILS MODAL
      ================================================= */}

      <AnimatePresence>
        {selectedService && (() => {

          const SelectedIcon =
            selectedService.icon;

          return (
            <motion.div
              className="service-modal"

              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              exit={{
                opacity: 0,
              }}

              onClick={() =>
                setSelectedService(null)
              }
            >

              <motion.div
                className="service-modal-inner"

                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.95,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}

                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.97,
                }}

                transition={{
                  duration: 0.35,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}

                onClick={(event) =>
                  event.stopPropagation()
                }
              >

                {/* CLOSE */}

                <button
                  type="button"
                  className="service-modal-close cursor-target"

                  onClick={() =>
                    setSelectedService(
                      null
                    )
                  }
                >
                  <X size={20} />
                </button>


                {/* HEADER */}

                <div className="service-modal-header">

                  <motion.div
                    className="service-modal-icon"

                    initial={{
                      scale: 0.7,
                      rotate: -10,
                    }}

                    animate={{
                      scale: 1,
                      rotate: 0,
                    }}

                    transition={{
                      duration: 0.45,
                      ease: "backOut",
                    }}
                  >
                    <SelectedIcon
                      size={30}
                    />
                  </motion.div>


                  <div>

                    <span className="service-modal-number">
                      {
                        selectedService.number
                      }
                    </span>

                    <h2>
                      {
                        selectedService.title
                      }
                    </h2>

                  </div>

                </div>


                {/* DESCRIPTION */}

                <p className="service-modal-description">
                  {
                    selectedService.description
                  }
                </p>


                {/* DETAILS */}

                <div className="service-modal-grid">

                  {/* PROVIDE */}

                  <div className="service-detail-block">

                    <h3>
                      What We Provide
                    </h3>

                    <div className="service-detail-list">

                      {selectedService.services.map(
                        (item, index) => (
                          <motion.div
                            key={item}
                            className="service-detail-item"

                            initial={{
                              opacity: 0,
                              x: -15,
                            }}

                            animate={{
                              opacity: 1,
                              x: 0,
                            }}

                            transition={{
                              duration: 0.3,
                              delay:
                                index * 0.05,
                            }}
                          >
                            <span>
                              <Check
                                size={14}
                              />
                            </span>

                            {item}
                          </motion.div>
                        )
                      )}

                    </div>

                  </div>


                  {/* PROCESS */}

                  <div className="service-detail-block">

                    <h3>
                      Our Approach
                    </h3>

                    <div className="service-detail-list">

                      {selectedService.process.map(
                        (item, index) => (
                          <motion.div
                            key={item}
                            className="service-detail-item"

                            initial={{
                              opacity: 0,
                              x: 15,
                            }}

                            animate={{
                              opacity: 1,
                              x: 0,
                            }}

                            transition={{
                              duration: 0.3,
                              delay:
                                index * 0.05,
                            }}
                          >
                            <span>
                              {String(
                                index + 1
                              ).padStart(
                                2,
                                "0"
                              )}
                            </span>

                            {item}
                          </motion.div>
                        )
                      )}

                    </div>

                  </div>

                </div>


                {/* TAGS */}

                <div className="service-modal-tags">

                  {selectedService.tags.map(
                    (tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    )
                  )}

                </div>


                {/* CTA */}

                <a
                  href="#contact"
                  className="service-modal-cta cursor-target"

                  onClick={() =>
                    setSelectedService(
                      null
                    )
                  }
                >
                  Let's discuss your project

                  <ArrowUpRight
                    size={18}
                  />
                </a>

              </motion.div>

            </motion.div>
          );

        })()}
      </AnimatePresence>
    </>
  );
}

export default Services;