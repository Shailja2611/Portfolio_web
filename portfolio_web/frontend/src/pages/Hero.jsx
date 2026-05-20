import DotGrid from "../components/DotGrid";

const Hero = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
        padding: "0 50px",
        position: "relative",
        background: "linear-gradient(to right, #DDEFBB, #FFEEEE)",
        overflow: "hidden",
      }}
    >
      {/* Heading block */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        <h1
          style={{
            color: "rgb(0,40,84)",
            fontWeight: "bold",
            lineHeight: 1,
            marginLeft: 100,
            marginBottom: 0,
          }}
        >
          <span
            style={{
              fontSize: "5.5rem",
              fontFamily: "'Handlee', cursive",
              display: "block",
            }}
          >
            hey!
          </span>
          <span
            style={{
              fontSize: "4.5rem",
              fontFamily: "Georgia, serif",
              display: "block",
            }}
          >
            I am Shailja
          </span>
        </h1>

        <h3
          style={{
            color: "rgb(0,40,84)",
            fontFamily: "Georgia, serif",
            fontWeight: 300,
            maxWidth: 400,
            marginLeft: 105,
          }}
        >
          A passionate developer crafting clean code and creative solutions. I
          turn ideas into reliable, user-friendly digital products.
        </h3>

        <button
          onClick={() =>
            alert("Link your resume PDF here in Hero.jsx → downloadResume.")
          }
          style={{
            background: "orange",
            position: "relative",
            marginLeft: 110,
            border: "none",
            borderRadius: 5,
            color: "white",
            width: 150,
            height: 60,
            fontWeight: "bold",
            fontSize: 20,
            zIndex: 5,
            cursor: "pointer",
          }}
        >
          Download Resume
        </button>
      </div>

      {/* Pink side panel */}
      <div
        style={{
          width: 500,
          height: "100vh",
          position: "absolute",
          zIndex: 1,
          left: 1000,
          background: "#ffc8dd",
        }}
      />

      {/* Skill badge: Frontend */}
      <div
        style={{
          width: 200,
          height: 70,
          background: "white",
          position: "absolute",
          zIndex: 2,
          left: 650,
          top: 90,
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          fontFamily: "Arial, sans-serif",
          fontSize: 20,
          fontWeight: "600",
        }}
      >
        🎯 Frontend
        <br />
        Development
      </div>

      {/* Skill badge: UI/UX */}
      <div
        style={{
          width: 200,
          height: 70,
          background: "white",
          position: "absolute",
          zIndex: 4,
          left: 1200,
          bottom: 100,
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          fontFamily: "Arial, sans-serif",
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        👓 UI/UX
      </div>

      {/* Dot grids */}
      <DotGrid style={{ top: 300, left: 1360 }} />
      <DotGrid style={{ bottom: -2, left: 953 }} />

      {/* Floating circles */}
      {[
        { top: 150, left: 500, border: "5px solid rgb(0,60,100)" },
        { bottom: 150, left: 800, border: "5px solid rgb(0,60,100)" },
        { bottom: 70, left: 650, border: "5px dotted rgb(0,60,100)" },
      ].map((s, i) => (
        <div
          key={i}
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "transparent",
            position: "absolute",
            animation: "float 3s ease-in-out infinite",
            ...s,
          }}
        />
      ))}

      {/* Floating square */}
      <div
        style={{
          width: 10,
          height: 10,
          border: "4px solid rgb(0,60,100)",
          position: "absolute",
          bottom: 200,
          left: 500,
          animation: "float 3s ease-in-out infinite",
        }}
      />
    </section>
  );
};

export default Hero;
