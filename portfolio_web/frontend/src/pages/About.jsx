const stackItems = [
  { label: "AFTER EFFECTS", size: 20 },
  { label: "FIGMA", size: 21 },
  { label: "<HTML>", size: 18 },
  { label: "CSS", size: 37 },
  { label: "JAVASCRIPT", size: 11 },
  { label: "REACT", size: 21 },
  { label: "WORDPRESS", size: 11 },
];

const About = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        padding: "0 50px",
        position: "relative",
        background: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 100,
          fontSize: "1.5rem",
          fontFamily: "'Dosis', sans-serif",
          fontWeight: "bold",
        }}
      >
        <h1>About Me :</h1>
      </div>

      {/* Name box */}
      <div
        style={{
          width: 290,
          height: 250,
          position: "absolute",
          background: "#C6E7FA",
          top: 170,
          left: 350,
        }}
      >
        <div
          style={{
            width: 130,
            position: "relative",
            top: 70,
            left: 80,
            background: "#ddd",
            borderRadius: "50%",
            aspectRatio: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
          }}
        >
          🧑‍💻
        </div>
        <h2
          style={{
            position: "absolute",
            top: 170,
            fontFamily: "'Dosis', sans-serif",
            fontWeight: 600,
            color: "rgb(61,61,61)",
            fontSize: "large",
          }}
        >
          <span style={{ position: "relative", left: 80 }}>SHAILJA</span>
          <br />
          <span style={{ position: "relative", left: 103 }}>KHANDAL</span>
        </h2>
      </div>

      {/* UI/UX box */}
      <div
        style={{
          width: 290,
          height: 250,
          position: "absolute",
          background: "#C6E7FA",
          top: 430,
          left: 350,
        }}
      >
        <h2
          style={{
            position: "absolute",
            bottom: 90,
            fontFamily: "'Dosis', sans-serif",
            fontWeight: 600,
            left: 50,
          }}
        >
          <span style={{ color: "rgb(61,61,61)", fontSize: "3rem", display: "block" }}>
            UI/UX
          </span>
          <span style={{ fontSize: "2.5rem", color: "black", display: "block" }}>
            DESIGNER
          </span>
        </h2>
      </div>

      {/* Frontend Dev box */}
      <div
        style={{
          width: 290,
          height: 250,
          position: "absolute",
          background: "#d8b5f3",
          top: 300,
          left: 647,
        }}
      >
        <h2
          style={{
            position: "absolute",
            bottom: 90,
            fontFamily: "'Dosis', sans-serif",
            fontWeight: 600,
            left: 50,
          }}
        >
          <span
            style={{ color: "rgb(252,248,248)", fontSize: "1.8rem", display: "block" }}
          >
            FRONTEND
          </span>
          <span
            style={{ fontSize: "1.8rem", color: "rgb(61,61,61)", display: "block" }}
          >
            DEVELOPER
          </span>
        </h2>
      </div>

      {/* Blank accent box */}
      <div
        style={{
          width: 290,
          height: 250,
          position: "absolute",
          background: "#C6E7FA",
          top: 450,
          left: 947,
        }}
      />

      {/* Currently Focus */}
      <div
        style={{
          fontFamily: "'Dosis', sans-serif",
          position: "absolute",
          top: 200,
          left: 680,
          fontWeight: 700,
        }}
      >
        <span style={{ fontSize: "large", display: "block" }}>CURRENTLY FOCUS:</span>
        <span style={{ fontSize: "1.5rem", color: "rgb(61,61,61)", display: "block" }}>
          BACKEND
        </span>
        <span style={{ fontSize: "1.5rem", color: "rgb(61,61,61)", display: "block" }}>
          ENGINEERING
        </span>
      </div>

      {/* Problem Solving */}
      <div
        style={{
          fontFamily: "'Dosis', sans-serif",
          position: "absolute",
          bottom: 100,
          left: 680,
          fontWeight: 700,
        }}
      >
        <span style={{ fontSize: "large", display: "block" }}>WITH ABILITY OF</span>
        <span style={{ fontSize: "1.5rem", color: "rgb(61,61,61)", display: "block" }}>
          PROBLEM SOLVING
        </span>
      </div>

      {/* Vertical FRAMEWORKS label */}
      <div
        style={{
          fontFamily: "'Train One', system-ui",
          fontSize: "4rem",
          transform: "rotate(90deg)",
          transformOrigin: "left top",
          position: "absolute",
          top: 170,
          left: 1080,
        }}
      >
        FRAMEWORKS
      </div>

      {/* Tech stack list */}
      <div
        style={{
          display: "flex",
          fontFamily: "'Dosis', sans-serif",
          flexDirection: "column",
          position: "relative",
          top: -60,
          left: 1050,
          gap: 2,
        }}
      >
        {stackItems.map((item, i) => (
          <span
            key={i}
            style={{ color: "#555", fontWeight: "bold", textAlign: "center", fontSize: item.size }}
          >
            {item.label}
          </span>
        ))}
      </div>
    </section>
  );
};

export default About;
