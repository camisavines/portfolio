import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "../../utils/animations";
import { skills, work, awards } from "../../data/resume.jsx";
import "./About.css";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


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
                  <div className="about__skill-tags">
                    {skills.map((skill, index) => (
                      <span key={index} className="about__skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>


          <div className="about__experience" style={{marginTop: "8rem"}}>
            <h3 className="heading-3">Work Experience</h3>
            <div className="about__timeline">
              {work.map((job, index) => (
                <motion.div
                  key={index}
                  className="about__timeline-item"
                  variants={staggerItem}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="about__timeline-marker">
                    <div className="about__timeline-dot"></div>
                    {index < work.length - 1 && (
                      <div className="about__timeline-line"></div>
                    )}
                  </div>
                  <div className="about__timeline-content">
                    <span className="about__timeline-year">{job.dates}</span>
                    <h4 className="about__timeline-role">{job.title}</h4>
                    <p className="about__timeline-company">{job.company}</p>
                    <p className="about__timeline-description">
                      {job.description}
                    </p>
                    {job.assets && (
                      <p className="about__timeline-assets">
                        <strong>Technologies:</strong> {job.assets}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div className="about__awards" style={{marginTop: "6rem"}}>
            <h3 className="heading-3">Awards & Recognition</h3>
            <div className="about__awards-grid">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="about__award-card"
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="about__award-name">{award.name}</h4>
                  <p className="about__award-description">{award.description}</p>
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
