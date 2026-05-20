require("dotenv").config(); // Load .env variables if present

const express = require("express");
const cors = require("cors");
const contactRoute = require("./routes/contact");

const app = express();

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(cors({ origin: "http://localhost:3000" })); // Allow React dev server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use("/submit", contactRoute);

// Health check
app.get("/", (req, res) => {
  res.json({ status: "Portfolio backend running ✅" });
});

// ─── Start ────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
