import { useState } from "react";
import PunchDots from "../components/PunchDots";

const gridBoxStyle = {
  width: 500,
  height: 550,
  background: "white",
  backgroundImage:
    "linear-gradient(to right, rgba(0,123,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,123,255,0.5) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  position: "absolute",
  borderRadius: 10,
};

const smallBoxStyle = {
  width: 130,
  height: 50,
  background: "white",
  border: "2px solid black",
  borderTopLeftRadius: 5,
  borderBottomRightRadius: 5,
  boxShadow: "8px 8px 0 #f0ed67",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "'Dosis', sans-serif",
  fontWeight: 700,
  fontSize: "larger",
};

const projects = [
  {
    id: 1,
    label: "PROJECT-1",
    title: "SPACE QUIZ",
    emoji: "🚀",
    bg: "#8ecae6",
    desc: "The Quiz Website is an interactive platform where users answer 10 random questions each time they log in. After the quiz, a celebration card shows their name, score, and rank, followed by a redirect to the leaderboard. The platform focuses on user engagement, competitive learning, and smooth UI/UX.",
    link: "https://github.com/Shailja2611",
    gridLeft: 200,
    cardLeft: 220,
    punchSide: { left: 450, top: 25 },
    labelLeft: 260,
  },
  {
    id: 2,
    label: "PROJECT-2",
    title: "DIET TRACKER",
    emoji: "🥗",
    bg: "#a8dadc",
    desc: "A clean, intuitive design that helps users easily log meals, track calories, and monitor nutrition goals. The UI uses a minimalist layout with clear visuals and progress indicators. UX focuses on quick food entry, personalized insights, and motivational features like reminders and trend charts.",
    link: "https://www.figma.com/proto/YEUDTyZ79ImBBs9fp34y0G/Untitled?node-id=53-15&t=5IRQJ4AgdR2BaLwi-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=53%3A15",
    gridLeft: 800,
    cardLeft: 870,
    punchSide: { right: 450, top: 25 },
    labelLeft: 335,
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState({ 1: false, 2: false });

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        padding: "0 50px",
        position: "relative",
        background: "#eebfe1",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          position: "absolute",
          top: 30,
          left: 580,
          fontSize: "5rem",
          fontFamily: "'Viga', sans-serif",
          fontWeight: "bold",
        }}
      >
        PROJECTS
      </h1>

      {projects.map((p) => (
        <div key={p.id}>
          {/* Grid info card */}
          <div style={{ ...gridBoxStyle, top: 160, left: p.gridLeft }}>
            <PunchDots style={p.punchSide} />
            <div
              style={{
                ...smallBoxStyle,
                position: "relative",
                left: p.labelLeft,
                top: 120,
              }}
            >
              {p.label}
            </div>
            <div
              style={{
                position: "relative",
                top: 270,
                left: 100,
                maxWidth: 350,
                fontSize: "large",
                fontWeight: 500,
                fontFamily: "'Dosis', sans-serif",
                lineHeight: "30px",
              }}
            >
              {p.desc}
            </div>
          </div>

          {/* Hover image card */}
          <div
            onMouseEnter={() => setHovered((h) => ({ ...h, [p.id]: true }))}
            onMouseLeave={() => setHovered((h) => ({ ...h, [p.id]: false }))}
            style={{
              width: 200,
              height: 280,
              position: "absolute",
              top: 190,
              left: p.cardLeft,
              borderRadius: 15,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: p.bg,
                borderRadius: 15,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "4rem",
                filter: hovered[p.id] ? "brightness(0.6)" : "none",
                transition: "0.5s ease",
              }}
            >
              {p.emoji}
            </div>

            {hovered[p.id] && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: 15,
                  background: "rgba(0,0,0,0.5)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <h3 style={{ fontFamily: "'Dosis', sans-serif" }}>{p.title}</h3>
                <button
                  onClick={() => window.open(p.link, "_blank")}
                  style={{
                    marginTop: 10,
                    padding: "8px 16px",
                    background: "#fff",
                    color: "#333",
                    border: "none",
                    borderRadius: 5,
                    cursor: "pointer",
                  }}
                >
                  View Project
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
