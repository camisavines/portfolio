import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "../../utils/animations";
import "./About.css";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
    },
    { category: "Tools", items: ["Git", "Figma", "Vite", "VS Code"] },
  ];

  const experience = [
    {
      year: "2024 - Present",
      role: "Senior Frontend Developer",
      company: "Tech Company",
      description:
        "Leading frontend development for enterprise applications, mentoring junior developers, and implementing design systems.",
      highlights: [
        "Built scalable React applications",
        "Improved performance by 40%",
        "Led team of 4 developers",
      ],
    },
    {
      year: "2022 - 2024",
      role: "Full Stack Developer",
      company: "Digital Agency",
      description:
        "Developed custom web solutions for clients, from concept to deployment.",
      highlights: [
        "Delivered 20+ client projects",
        "Specialized in React & Node.js",
        "Maintained 99.9% uptime",
      ],
    },
    {
      year: "2020 - 2022",
      role: "Frontend Developer",
      company: "Startup Inc",
      description:
        "Built responsive web applications and collaborated with design team.",
      highlights: [
        "Implemented responsive designs",
        "Optimized load times",
        "A/B tested features",
      ],
    },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="about__content"
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="about__header">
            <h2 className="heading-2">About Me</h2>
            {/* <p className="body-large about__subtitle">
              Building with purpose, designing with heart
            </p> */}
          </motion.div>

          {/* Two Column Layout */}
          <div className="about__columns">
            {/* Left Column: Bio & Skills */}

            <motion.div variants={staggerItem} className="about__left">
              {/* Bio */}
              <div className="about__bio">
                <h3 className="heading-3">about me</h3>

                <p className="body-base">
                  I believe the web should feel welcoming, not intimidating.
                  Every project I take on is an opportunity to create something
                  that makes people feel confident and capable.
                </p>
                <p className="body-base">
                  With a background in full-stack development and a passion for
                  user experience, I bring both technical expertise and a
                  human-centered approach to every build. I don't just write
                  code—I craft experiences that resonate.
                </p>
                <p className="body-base">
                  When I'm not coding, you'll find me exploring new coffee
                  shops, reading about design psychology, or contributing to
                  open-source projects.
                </p>
              </div>

              {/* Skills TODO: Fix this */}
            </motion.div>

            {/* Right Column: Experience Timeline */}
            <motion.div variants={staggerItem} className="about__right">
              <div className="about__skills">
                <h3 className="heading-3">Skills & Technologies</h3>
                <div className="about__skills-list">
                  <ul>
                    {skills.map((skillGroup, index) => (
                      <li>
                        <strong>{skillGroup.category}</strong>:{" "}
                        {skillGroup.items.join(", ")}
                      </li>
                    ))}
                  </ul>

                  {/* {skills.map((skillGroup, index) => (
                    <div key={skillGroup.category} className="about__skill-group">
                      <p className="about__skill-category">
                        <strong>{skillGroup.category}:</strong>
                      </p>
                      <ul className="about__skill-items">
                        {skillGroup.items.map((skill) => (
                          <li key={skill} className="about__skill-item">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))} */}
                </div>
              </div>
            </motion.div>
          </div>


          <div className="about__experience" style={{marginTop: "8rem"}}>
            <h3 className="heading-3">Work Experience</h3>
            <div className="about__timeline">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  className="about__timeline-item"
                  variants={staggerItem}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="about__timeline-marker">
                    <div className="about__timeline-dot"></div>
                    {index < experience.length - 1 && (
                      <div className="about__timeline-line"></div>
                    )}
                  </div>
                  <div className="about__timeline-content">
                    <span className="about__timeline-year">{job.year}</span>
                    <h4 className="about__timeline-role">{job.role}</h4>
                    <p className="about__timeline-company">{job.company}</p>
                    <p className="about__timeline-description">
                      {job.description}
                    </p>
                    <ul className="about__timeline-highlights">
                      {job.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Made with Bob
