import { useState } from "react";

const floatAnim = { animation: "float 3s ease-in-out infinite" };

const decoratives = [
  { width: 15, height: 15, borderRadius: "50%", background: "grey", left: 800, bottom: 50 },
  { width: 20, height: 20, borderRadius: "50%", background: "rgb(243,255,9)", left: 800, top: 40 },
  { width: 20, height: 20, borderRadius: "50%", background: "rgb(38,255,9)", left: 150, bottom: 150 },
  { width: 10, height: 10, background: "rgb(251,73,102)", left: 600, bottom: 50 },
  { width: 15, height: 15, background: "rgb(73,251,97)", left: 1300, bottom: 250 },
];

const Contact = () => {
  const [formData, setFormData] = useState({ fname: "", lname: "", email: "", phone: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("http://localhost:5000/submit", {
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
        padding: "0 50px",
        position: "relative",
        background: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* Floating decorative shapes */}
      {decoratives.map((d, i) => (
        <div key={i} style={{ position: "absolute", ...floatAnim, ...d }} />
      ))}

      {/* Triangles */}
      <div style={{ width: 0, height: 0, borderLeft: "25px solid transparent", borderRight: "25px solid transparent", borderTop: "35px solid #4c94e6", position: "absolute", left: 80, top: 300, ...floatAnim }} />
      <div style={{ width: 0, height: 0, borderLeft: "15px solid transparent", borderRight: "15px solid transparent", borderTop: "25px solid #e64c4c", position: "absolute", left: 400, top: 30, ...floatAnim }} />

      {/* Blue contact card */}
      <div
        style={{
          width: 900,
          height: 550,
          borderRadius: 10,
          boxShadow: "inset 1px 1px 3px #8d8d8d",
          background: "#85c1fd",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Left info */}
        <div
          style={{
            position: "absolute",
            left: 50,
            top: 160,
            fontFamily: "'Dosis', sans-serif",
            fontSize: "3rem",
            fontWeight: 800,
            color: "white",
          }}
        >
          Contact Me
          <div
            style={{
              display: "flex",
              gap: 12,
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "rgb(15,15,15)",
              fontFamily: "'Dosis', sans-serif",
              position: "relative",
              top: 50,
            }}
          >
            <span>Phone :</span>
            <span>7726975811</span>
          </div>
          <div
            style={{
              position: "relative",
              top: 80,
              display: "flex",
              gap: 16,
              alignItems: "center",
            }}
          >
            <a href="mailto:shailjakhandal555@gmail.com" style={{ textDecoration: "none", color: "#0c0c0c", fontSize: 28 }}>✉</a>
            <a href="https://github.com/Shailja2611" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#0c0c0c", fontSize: 22 }}>🐙 GitHub</a>
            <a href="https://www.linkedin.com/in/shailja-khandal-a10a232b3/" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#0c0c0c", fontSize: 22 }}>💼 LinkedIn</a>
          </div>
        </div>

        {/* Right form */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#ffffff",
            padding: 30,
            borderRadius: 12,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            width: 300,
            position: "relative",
            right: 30,
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
