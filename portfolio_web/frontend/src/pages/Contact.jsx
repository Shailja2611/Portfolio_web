import { useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const floatAnim = { animation: "float 3s ease-in-out infinite" };

// const decoratives = [
//   { width: 15, height: 15, borderRadius: "50%", background: "grey", left: 800, bottom: 50 },
//   { width: 20, height: 20, borderRadius: "50%", background: "rgb(243,255,9)", left: 800, top: 40 },
//   { width: 20, height: 20, borderRadius: "50%", background: "rgb(38,255,9)", left: 150, bottom: 150 },
//   { width: 10, height: 10, background: "rgb(251,73,102)", left: 600, bottom: 50 },
//   { width: 15, height: 15, background: "rgb(73,251,97)", left: 1300, bottom: 250 },
// ];

const Contact = () => {
  const [formData, setFormData] = useState({ fname: "", lname: "", email: "", phone: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("http://localhost:5001/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ fname: "", lname: "", email: "", phone: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "50px",
        position: "relative",
        // background: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* Floating decorative shapes */}
      {/* {decoratives.map((d, i) => (
        <div key={i} style={{ position: "absolute", ...floatAnim, ...d }} />
      ))} */}

      {/* Triangles */}
      {/* <div style={{ width: 0, height: 0, borderLeft: "25px solid transparent", borderRight: "25px solid transparent", borderTop: "35px solid #4c94e6", position: "absolute", left: 80, top: 300, ...floatAnim }} />
      <div style={{ width: 0, height: 0, borderLeft: "15px solid transparent", borderRight: "15px solid transparent", borderTop: "25px solid #e64c4c", position: "absolute", left: 400, top: 30, ...floatAnim }} />
 */}

      <div>
        {/* Left info */}
        <div
            style={{
            position:"absolute",
            left:170,
            top:210,
            maxWidth:"520px"
            }}
            >

            <p
            style={{
            color:"#002854",
            letterSpacing:"3px",
            fontWeight:"700",
            fontSize:"30px",
            marginBottom:"5px"
            }}
            >
            CONTACT
            </p>

            <h1
            style={{
            fontSize:"44px",
            fontWeight:"800",
            lineHeight:"1.05",
            color:"#111",
            marginBottom:"3px"
            }}
            >
            Let's work
            together.
            </h1>

            <p
            style={{
            fontSize:"18px",
            lineHeight:"1.8",
            color:"#666"
            }}
            >
            Have a project in mind, want to collaborate,
            or just want to say hi?
            Drop me a message and I'll get back to you.
            </p>

            </div>
            {/* icons for socials and mail */}
        <div
        style={{
          display: "flex",
          gap: "18px",
          position: "absolute",
          left: 170,
          top: 330,
          marginTop: "50px",
        }}
      >
        {[
          {
            icon: <FaGithub />,
            link: "https://github.com/Shailja2611",
          },
          {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/in/shailja-khandal-a10a232b3/",
          },
          {
            icon: <FaXTwitter />,
            link: "https://twitter.com/",
          },
          {
            icon: <FaInstagram />,
            link: "https://instagram.com/",
          },
          {
            icon: <FaEnvelope />,
            link: "mailto:shailjakhandal555@gmail.com",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            style={{
              width: "38px",
              height: "38px",
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              color: "#555",
              background: "#fff",
              textDecoration: "none",
              transition: "all .3s ease",
              boxShadow: "0 8px 20px rgba(0,0,0,.06)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#4F7DF3";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 15px 30px rgba(79,125,243,.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#555";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0,0,0,.06)";
            }}
          >
            {item.icon}
          </a>
        ))}
      </div>

        {/* Right form */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#ffffff",
            padding: "40px",
            borderRadius: "28px",
            boxShadow:
            "0 30px 60px rgba(0,0,0,.18)",
            border:"1px solid rgba(0,0,0,.05)",
            width: 450,
            position: "relative",
            left: 270,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {[
            { label: "First name:", id: "fname", type: "text" },
            { label: "Last name:", id: "lname", type: "text" },
            { label: "Email:", id: "email", type: "email" },
            { label: "Phone No.:", id: "phone", type: "tel" },
          ].map(({ label, id, type }) => (
            <div key={id}>
              <label htmlFor={id} style={{ display: "block", marginBottom: 6, fontWeight: 600, color: "#333" }}>
                {label}
              </label>
              <input
                type={type}
                id={id}
                name={id}
                value={formData[id]}
                onChange={handleChange}
                maxLength={id === "phone" ? 10 : undefined}
                required
                style={{
                  width: "100%",
                  padding: 10,
                  marginBottom: 14,
                  border: "1px solid #ccc",
                  borderRadius: 8,
                  fontSize: 14,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              width: "100%",
              background: status === "success" ? "#28a745" : status === "error" ? "#dc3545" : "#4a90e2",
              color: "white",
              padding: 10,
              border: "none",
              borderRadius: 8,
              fontSize: 16,
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            {status === "loading" ? "Sending..." : status === "success" ? "✅ Sent!" : status === "error" ? "❌ Failed" : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
