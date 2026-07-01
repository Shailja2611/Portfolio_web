import React from "react";

const Experience = () => {
  return (
    <section className="experience">
      <div className="small-title">Experience</div>

      <h1 className="heading">Experience & Education</h1>

      <p className="subtitle">Where I've worked and what I've studied.</p>

      <div className="grid">
        {/* Left */}
        <div>
          <div className="column-title">Work</div>

          <div className="timeline">
            <div className="dot"></div>

            <div className="duration">Jun 2025 — Jan 2026</div>

            <div className="role">Full Stack Developer Intern</div>

            <div className="company">iRoots</div>

            <p className="text">
              Contributed to full-stack development of healthcare web
              applications, building responsive frontend interfaces and
              RESTful backend APIs to enable seamless data integration.
            </p>

            <p className="text">
              Enhanced patient data management by designing
              category-specific visualizations for sugar and insulin
              timelines, implementing a green/red compliance status
              indicator, and developing a WhatsApp-integrated chat interface
              with direct record sharing and in-app camera access.
            </p>
          </div>
        </div>

        {/* Right */}
        <div>
          <div className="column-title">Education</div>

          <div className="timeline">
            <div className="dot"></div>

            <div className="duration">Aug 2023 — May 2027</div>

            <div className="degree">B.Tech</div>

            <div className="college">
              Dr. BR Ambedkar National Institute of Technology, Jalandhar
            </div>

            <div className="location">Jalandhar, India</div>

            <div className="info">CGPA: 8.04/10</div>

            <div className="member">Member of Zeal Society.</div>
          </div>
        </div>
      </div>

      <style>{`
        .experience {
          min-height: 100vh;
          color: #002854;
          padding: 150px 80px;
          font-family: Georgia, serif;
        }

        .small-title {
          color: #000001;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 3px;
        }

        .heading {
          font-size: clamp(26px, 4vw, 38px);
          font-weight: 700;
          margin: 0;
          line-height: 1.1;
        }

        .subtitle {
          margin-top: 8px;
          color: #696f7f;
          font-size: clamp(18px, 2.8vw, 30px);
          margin-bottom: 98px;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
        }

        .column-title {
          color: #3b82f6;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 40px;
          text-transform: uppercase;
        }

        .timeline {
          position: relative;
          padding-left: 30px;
          border-left: 3px solid rgba(0, 0, 0);
        }

        .dot {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #3b82f6;
          left: -6px;
          top: 1px;
        }

        .duration {
          color: #696f7f;
          font-size: 17px;
          margin-bottom: 12px;
        }

        .role,
        .degree {
          font-size: clamp(22px, 3.2vw, 35px);
          font-weight: 700;
          margin-bottom: 8px;
        }
        .degree {
          margin-bottom: 10px;
        }

        .company {
          color: #696f7f;
          font-size: 20px;
          margin-bottom: 10px;
        }

        .text {
          color: #696f7f;
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 18px;
        }

        .college {
          color: #696f7f;
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 5px;
        }

        .location {
          color: #696f7f;
          font-size: 18px;
          margin-bottom: 5px;
        }

        .info {
          color: #696f7f;
          font-size: 17px;
          margin-bottom: 8px;
        }

        .member {
          color: #696f7f;
          font-size: 17px;
          line-height: 1.8;
        }

        /* ---------- Tablet ---------- */
        @media (max-width: 1024px) {
          .experience {
            padding: 100px 48px;
          }
          .grid {
            gap: 50px;
          }
        }

        /* ---------- Mobile: stack columns, shrink padding ---------- */
        @media (max-width: 768px) {
          .experience {
            min-height: auto;
            padding: 80px 24px;
          }
          .subtitle {
            margin-bottom: 56px;
          }
          .grid {
            grid-template-columns: 1fr;
            gap: 64px;
          }
        }

        /* ---------- Small phones ---------- */
        @media (max-width: 420px) {
          .experience {
            padding: 64px 18px;
          }
          .timeline {
            padding-left: 22px;
          }
          .text,
          .college,
          .location {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;