import DotGrid from "../components/DotGrid";

const Hero = () => {
  const downloadResume = () => {
    window.open("/resume_2.pdf", "_blank");
  };

  return (
    <section className="hero">
      {/* Pink side panel — anchored to the right edge, fills remaining width */}
      <div className="backdrop" />

      {/* Main row */}
      <div className="main-row">
        {/* Heading block */}
        <div className="heading-block">
          <h1 className="heading">
            <span className="heading__script">hey!</span>
            <span className="heading__serif">I am Shailja</span>
          </h1>

          <h3 className="subheading">
            A passionate developer crafting clean code and creative
            solutions. I turn ideas into reliable, user-friendly digital
            products.
          </h3>

          <button onClick={downloadResume} className="resume-btn">
            <div className="resume-btn__inner">
              {/* Left Section */}
              <div className="resume-btn__label">Download Resume</div>

              {/* Right Circle */}
              <div className="resume-btn__ring">
                <div className="resume-btn__arrow">→</div>
              </div>
            </div>
          </button>
        </div>

        {/* Visual cluster: blobs, photo, badges, arrows — all positioned
            relative to THIS box (percentage-based), so scaling the box
            via CSS scales every child proportionally with it. */}
        <div className="cluster">
          <div className="cluster__inner">
            {/* Background Circle */}
            <div className="circle">
              <img
                src="/profile2.jpeg"
                alt="Shailja"
                className="circle__img"
              />
            </div>

            {/* Decorative Ring */}
            <div className="ring" />

            {/* Badges */}
            <div className="badge badge--react">⚛ React</div>
            <div className="badge badge--js">JS</div>
            <div className="badge badge--node">Node.js</div>
            <div className="badge badge--mongo">MongoDB</div>
            <div className="badge badge--cpp">C++</div>

            {/* Dot Decorations */}
            <DotGrid className="dotgrid dotgrid--1" />
            <DotGrid className="dotgrid dotgrid--2" />
          </div>
        </div>
      </div>

      {/* Ambient floating shapes on the left/green side */}
      <div className="ambient-shapes" aria-hidden="true">
        <span className="shape shape--1" />
        <span className="shape shape--2" />
        <span className="shape shape--3" />
        <span className="shape shape--4" />
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          min-height: 100dvh;
          overflow: hidden;
          background: transparent;
        }

        .backdrop {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .main-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 100vh;
          min-height: 100dvh;
          padding: 0 60px;
          position: relative;
          z-index: 1;
          gap: 24px;
        }

        /* ---------- Heading ---------- */
        .heading-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          max-width: 460px;
        }

        .heading {
          color: rgb(0, 40, 84);
          font-weight: bold;
          line-height: 1;
          margin: 0;
        }
        .heading__script {
          font-size: clamp(2.6rem, 6vw, 5.5rem);
          font-family: "Handlee", cursive;
          display: block;
        }
        .heading__serif {
          font-size: clamp(2.1rem, 5vw, 4.5rem);
          font-family: Georgia, serif;
          display: block;
        }

        .subheading {
          color: #002854;
          font-family: Georgia, serif;
          font-weight: 300;
          max-width: 400px;
          font-size: clamp(0.95rem, 2vw, 1.17rem);
        }

        .resume-btn {
          margin-top: 25px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          max-width: 100%;
        }
        .resume-btn__inner {
          display: flex;
          align-items: center;
          width: 270px;
          max-width: 100%;
          height: 64px;
          border-radius: 40px;
          border: 4px solid #002854;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }
        .resume-btn__label {
          flex: 1;
          height: 100%;
          background: #ca6180;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 18px;
          font-weight: 600;
          white-space: nowrap;
          padding: 0 8px;
        }
        .resume-btn__ring {
          width: 72px;
          height: 72px;
          background: #bfdff5;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: -4px;
          flex-shrink: 0;
        }
        .resume-btn__arrow {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 26px;
          color: #2f4a35;
          font-weight: bold;
        }

        /* ---------- Visual cluster ---------- */
        /* Outer box sets the scalable footprint; inner box keeps the
           520x600 aspect ratio so every percentage-positioned child
           inside stays glued in place at any size. */
        .cluster {
          width: 520px;
          max-width: 42vw;
          flex-shrink: 0;
          margin-right: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .cluster__inner {
          position: relative;
          width: 100%;
          aspect-ratio: 520 / 600;
        }

        .circle {
          position: absolute;
          width: 80.7%;
          height: 70%;
          top: 11.6%;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 50%;
          background: #002854;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.15);
          z-index: 1;
        }
        .circle__img {
          width: 100%;
          height: 122%;
          object-fit: cover;
          object-position: center top;
          filter: drop-shadow(0 25px 30px rgba(0, 0, 0, 0.25));
        }

        .ring {
          position: absolute;
          width: 86.5%;
          height: 75%;
          top: 9.2%;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 50%;
          border: 2px dashed rgba(0, 40, 84, 0.18);
          z-index: 0;
        }

        .badge {
          position: absolute;
          background: white;
          padding: clamp(7px, 1.4vw, 10px) clamp(14px, 3vw, 22px);
          border-radius: 30px;
          font-weight: 600;
          color: #002854;
          font-size: clamp(12px, 2.2vw, 16px);
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.12);
          white-space: nowrap;
          z-index: 5;
        }
        .badge--react {
          top: 10%;
          left: 2%;
        }
        .badge--js {
          top: 20%;
          right: 0;
        }
        .badge--node {
          bottom: 30%;
          left: 0;
        }
        .badge--mongo {
          bottom: 20%;
          right: 3.8%;
        }
        .badge--cpp {
          bottom: 5.8%;
          left: 27%;
        }

        .dotgrid {
          position: absolute;
        }
        .dotgrid--1 {
          top: 41.6%;
          right: -11.5%;
        }
        .dotgrid--2 {
          bottom: 3.3%;
          left: -7.7%;
        }

        /* ---------- Ambient floating shapes ---------- */
        .ambient-shapes {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }
        .shape {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: transparent;
          animation: float 3s ease-in-out infinite;
        }
        .shape--1 {
          top: 20%;
          left: 38%;
          border: 5px solid rgb(0, 60, 100);
        }
        .shape--2 {
          bottom: 22%;
          left: 55%;
          border: 5px solid rgb(0, 60, 100);
        }
        .shape--3 {
          bottom: 10%;
          left: 45%;
          border: 5px dotted rgb(0, 60, 100);
        }
        .shape--4 {
          bottom: 30%;
          left: 38%;
          border-radius: 0;
          border: 4px solid rgb(0, 60, 100);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* ---------- Tablet ---------- */
        @media (max-width: 1024px) {
          .main-row {
            padding: 0 32px;
          }
          .cluster {
            max-width: 46vw;
            margin-right: 32px;
          }
          .heading-block {
            max-width: 380px;
          }
        }

        /* ---------- Mobile: stack heading above visual ---------- */
        @media (max-width: 768px) {
          .hero {
            height: auto;
          }
          .main-row {
            flex-direction: column;
            justify-content: center;
            padding: 120px 24px 60px;
            gap: 48px;
            min-height: auto;
          }
          .heading-block {
            align-items: center;
            text-align: center;
            max-width: 100%;
          }
          .subheading {
            max-width: 480px;
          }
          .resume-btn {
            align-self: center;
          }

          .cluster {
            max-width: min(90vw, 420px);
            margin-right: 0;
          }

          .ambient-shapes {
            display: none;
          }
        }

        /* ---------- Small phones ---------- */
        @media (max-width: 420px) {
          .cluster {
            max-width: 92vw;
          }
          .dotgrid {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;