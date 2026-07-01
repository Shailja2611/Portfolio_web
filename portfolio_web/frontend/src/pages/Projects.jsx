import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHandPointUp,
  FaHandPeace,
  FaHandSpock,
  FaHandPaper,
  FaThumbsUp,
  FaHandPointRight,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Space Quiz",
    category: "React • Node",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    link: "https://github.com/Shailja2611",
  },
  {
    id: 2,
    title: "Diet Tracker",
    category: "UI / UX",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600",
    link: "https://github.com/Shailja2611",
  },
  {
    id: 3,
    title: "SEO Rank Tracker",
    category: "Full Stack",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    link: "https://github.com/Shailja2611",
  },
  {
    id: 4,
    title: "Doctor Booking",
    category: "MERN",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600",
    link: "https://github.com/Shailja2611",
  },
  {
    id: 5,
    title: "Portfolio",
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    link: "https://github.com/Shailja2611",
  },
  {
    id: 6,
    title: "Weather App",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
    link: "https://github.com/Shailja2611",
  },
];

const heights = [360, 470, 390, 500, 410, 470];

const fingers = [
  <FaHandPointUp />,
  <FaHandPeace />,
  <FaHandSpock />,
  <FaHandPaper />,
  <FaThumbsUp />,
  <FaHandPointRight />,
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        backgroundImage: `
        linear-gradient(rgba(255,255,255,.55) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.55) 1px, transparent 1px)
      `,

        backgroundSize: "42px 42px",
      }}
    >
      {/* soft glow */}

      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(255,255,255,.35)",
          filter: "blur(120px)",
          top: -200,
          left: -200,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(255,255,255,.25)",
          filter: "blur(100px)",
          bottom: -150,
          right: -150,
        }}
      />

      {/* Heading */}

      <motion.h1
        initial={{
          opacity: 0,
          y: -40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .7,
        }}
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginTop: 60,
          marginBottom: 70,
          fontFamily: "Georgia, serif",
          letterSpacing: 5,
          color: "#002854",
        }}
      >
        PROJECTS
      </motion.h1>

      {/* Gallery */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 24,
          paddingBottom: 80,
          flexWrap: "wrap",
          paddingInline: 40,
        }}
      >
      {projects.map((project, index) => (
  <motion.div
    key={project.id}
    initial={{
      opacity: 0,
      y: 80,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 0.7,
      delay: index * 0.15,
    }}
    viewport={{ once: true }}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: 210,
    }}
  >
    {/* Animated Finger */}

    <motion.div
      animate={{
        x: [-10, 10, -10],
        rotate: [-8, 8, -8],
        y: [0, -5, 0],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.25,
      }}
      style={{
        fontSize: 35,
        marginBottom: 10,
        color: "#002854",
      }}
    >
      {fingers[index]}
    </motion.div>

    {/* Number */}

    <div
      style={{
        fontSize: 18,
        fontWeight: "700",
        fontFamily: "Georgia, serif",
        marginBottom: 25,
        color: "#222",
      }}
    >
      {String(project.id).padStart(2, "0")}
    </div>

    {/* Card */}

    <motion.div
      whileHover={{
        y: -15,
        scale: 1.04,
        rotate: -1,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
      }}
      onMouseEnter={() => setHovered(project.id)}
      onMouseLeave={() => setHovered(null)}
      style={{
        width: 200,
        height: heights[index],
        borderRadius: 30,
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        boxShadow: "0 20px 45px rgba(0,0,0,.18)",
        background: "#ddd",
      }}
    >
      {/* Image */}

      <img
        src={project.image}
        alt={project.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: ".5s",
          transform:
            hovered === project.id ? "scale(1.1)" : "scale(1)",
        }}
      />

      {/* Overlay */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            hovered === project.id
              ? "rgba(0,0,0,.45)"
              : "rgba(0,0,0,0)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: ".35s",
        }}
      >
        <motion.button
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: hovered === project.id ? 1 : 0,
            y: hovered === project.id ? 0 : 20,
          }}
          transition={{
            duration: .25,
          }}
          onClick={() => window.open(project.link, "_blank")}
          style={{
            padding: "12px 25px",
            border: "none",
            borderRadius: 30,
            background: "#fff",
            fontWeight: "700",
            cursor: "pointer",
            fontSize: 15,
          }}
        >
          View Project
        </motion.button>
      </div>
    </motion.div>

    {/* Title */}

    <div
      style={{
        marginTop: 18,
        width: "100%",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontFamily: "Georgia, serif",
          fontSize: 22,
          color: "#002854",
        }}
      >
        {project.title}
      </h2>

      <p
        style={{
          marginTop: 8,
          color: "#666",
          fontSize: 15,
          fontFamily: "Georgia, serif",
          letterSpacing: 1,
        }}
      >
        {project.category}
      </p>
    </div>
  </motion.div>
))}
      </div>
    </section>
  );
}