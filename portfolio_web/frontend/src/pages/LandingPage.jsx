import HeroImage from "../components/HeroImage";

export default function LandingPage() {
  return (
    <section id="home" className="hero">
      {/* stars logo */}
      <div className="star star--sm star--1">
        <span>✦</span>
      </div>
      <div className="star star--lg star--2">
        <span>✦</span>
      </div>
      <div className="star star--sm star--3">
        <span>✦</span>
      </div>

      {/* image Card */}
      <div className="photo-card">
        {/* Swap this src for your real profile photo. */}
        <HeroImage src="/Profile1.jpeg" alt="Portrait photo" />
      </div>

      {/* Repeated text behind card */}
      <div className="repeat-text" aria-hidden="true">
        <div className="repeat-text__line">PORTFOLIO</div>
        <div className="repeat-text__line">PORTFOLIO</div>
        <div className="repeat-text__line">PORTFOLIO</div>
      </div>

      {/* Main Text */}
      <div className="main-text">
        <h1>PORTFOLIO</h1>
      </div>

      {/* small White Card */}
      <div className="accent-card" />

      <style jsx="true">{`
        .hero {
          width: 100%;
          height: 100vh;
          height: 100dvh; /* respects mobile browser chrome */
          position: relative;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }

        .star {
          position: absolute;
          display: flex;
          align-items: center;
          z-index: 3;
          color: #fff57e;
          pointer-events: none;
        }
        .star--sm span {
          font-size: clamp(22px, 4vw, 44px);
        }
        .star--lg span {
          font-size: clamp(32px, 6vw, 64px);
        }
        .star--1 {
          left: 8.5%;
          top: 37%;
        }
        .star--2 {
          left: 9.5%;
          top: 30%;
        }
        .star--3 {
          left: 39%;
          bottom: 13%;
        }

        .photo-card {
          position: absolute;
          left: 10%;
          bottom: 15%;
          width: 30%;
          height: 60%;
          background-color: #ffffff;
          box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          z-index: 2;
        }

        .repeat-text {
          position: absolute;
          left: 50%;
          top: 34%;
          transform: translateX(-50%);
          z-index: 1;
          pointer-events: none;
          width: 100%;
          text-align: center;
        }
        .repeat-text__line {
          font-family: "Cinzel Decorative", serif;
          font-size: clamp(2.2rem, 8vw, 6rem);
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 1.3px #fff265;
          line-height: 1;
          margin-top: 20px;
          white-space: nowrap;
        }

        .main-text {
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 3;
          width: 100%;
          padding: 0 12px;
        }
        .main-text h1 {
          font-family: "Cinzel Decorative", serif;
          font-size: clamp(2.2rem, 8vw, 6rem);
          font-weight: 700;
          color: #f1e8c0;
          margin: 0;
          line-height: 1;
        }

        .accent-card {
          position: absolute;
          right: 20%;
          bottom: 35%;
          width: 13%;
          height: 20%;
          background-color: #ffffff;
          box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.15);
          z-index: 2;
        }

        /* ---- Tablet ---- */
        @media (max-width: 1024px) {
          .photo-card {
            left: 8%;
            width: 38%;
            height: 55%;
          }
          .accent-card {
            right: 12%;
            width: 18%;
            height: 16%;
          }
        }

        /* ---- Mobile ---- */
        @media (max-width: 768px) {
          .hero {
            overflow-x: hidden;
          }

          /* Stars: smaller and repositioned so they don't collide with the card */
          .star--sm span {
            font-size: 22px;
          }
          .star--lg span {
            font-size: 30px;
          }
          .star--1 {
            left: 6%;
            top: 20%;
          }
          .star--2 {
            left: 12%;
            top: 14%;
          }
          .star--3 {
            left: 44%;
            bottom: 6%;
          }

          /* Stack the photo card centered instead of pinned to the left */
          .photo-card {
            left: 50%;
            bottom: 6%;
            transform: translateX(-50%);
            width: 78%;
            height: 42%;
          }

          .repeat-text {
            top: 12%;
          }
          .repeat-text__line {
            margin-top: 8px;
          }

          .main-text {
            top: 12%;
          }

          .accent-card {
            right: 6%;
            bottom: auto;
            top: 50%;
            width: 22%;
            height: 12%;
          }
        }

        /* ---- Small phones ---- */
        @media (max-width: 400px) {
          .photo-card {
            width: 88%;
            height: 38%;
          }
          .accent-card {
            width: 26%;
            height: 10%;
          }
        }
      `}</style>
    </section>
  );
}