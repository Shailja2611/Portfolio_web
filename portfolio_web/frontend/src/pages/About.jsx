import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaReact,
  FaServer,
  FaDatabase,
  FaTools,
  FaPalette,
  FaMobileAlt,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FaReact />,
    skills: [
      { name: "React", level: 95 },
      { name: "HTML", level: 98 },
      { name: "CSS", level: 96 },
      { name: "JavaScript", level: 92 },
    ],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
      { name: "Python", level: 84 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "SQL", level: 86 },
    ],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    skills: [
      { name: "Git", level: 93 },
      { name: "GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 88 },
    ],
  },
  {
    title: "Design",
    icon: <FaPalette />,
    skills: [
      { name: "Figma", level: 88 },
      { name: "Canva", level: 92 },
      { name: "UI / UX", level: 86 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    title: "Mobile",
    icon: <FaMobileAlt />,
    skills: [
      { name: "React Native", level: 72 },
      { name: "Flutter", level: 65 },
      { name: "PWA", level: 82 },
      { name: "Responsive Apps", level: 90 },
    ],
  },
];

function SkillBar({ name, level }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let current = 0;

    const timer = setInterval(() => {
      current++;

      if (current >= level) {
        current = level;
        clearInterval(timer);
      }

      setProgress(current);
    }, 15);

    return () => clearInterval(timer);
  }, [isInView, level]);

  return (
    <div ref={ref}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <span
          style={{
            color: "#4B5563",
            fontWeight: 500,
          }}
        >
          {name}
        </span>

        <span
          style={{
            color: "#002854",
            fontWeight: 600,
          }}
        >
          {progress}%
        </span>
      </div>

      <div
        style={{
          width: "100%",
          height: "8px",
          borderRadius: "999px",
          background: "#ECE8F8",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.25 }}
          style={{
            height: "100%",
            borderRadius: "999px",
            background:
              "linear-gradient(to right, #A8D8EA, #B9A8F8, #F5BFD6)",
          }}
        />
      </div>
    </div>
  );
}

const About = () => {
  return (
    <section
      id="about"
      style={{
        // minHeight: "100vh",
        // background: "#FFF9F4",
        padding: "clamp(48px, 10vw, 96px) 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Georgia, serif",
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: "700",
              color: "#002854",
              margin: 0,
            }}
          >
            Skills & Expertise
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#6B7280",
              marginTop: "16px",
              fontSize: "18px",
              fontFamily: "Georgia, serif",
            }}
          >
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
            gap: "32px",
            marginTop: "64px",
          }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              style={{
                background: "#F8F5FF",
                borderRadius: "24px",
                border: "1px solid #E7E1FB",
                padding: "28px",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "32px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "#ECE5FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#002854",
                    fontSize: "22px",
                  }}
                >
                  {category.icon}
                </div>

                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: 600,
                    fontFamily: "Georgia, serif",
                    color: "#383838",
                    margin: 0,
                  }}
                >
                  {category.title}
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                {category.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default About;