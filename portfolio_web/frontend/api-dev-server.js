// Local-only dev server that runs the real api/submit.js Vercel function
// so you can test it without the Vercel CLI. Not deployed — Vercel only
// picks up files under /api.
import dotenv from "dotenv";
import express from "express";

dotenv.config({ path: ".env.local" });

// Imported dynamically (after dotenv.config) so submit.js's module-level
// nodemailer setup sees MAIL_USER/MAIL_PASS — static imports evaluate
// before this file's own top-level code runs, which is too early.
const { default: handler } = await import("./api/submit.js");

const app = express();
app.use(express.json());

app.all("/api/submit", (req, res) => handler(req, res));

const PORT = process.env.API_PORT || 5055;
app.listen(PORT, () => {
  console.log(`Local API dev server running at http://localhost:${PORT}`);
});