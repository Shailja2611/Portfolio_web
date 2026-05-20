const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Gmail transporter — replace with your own credentials or use .env
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER || "jerrytiwari1126@gmail.com",
    pass: process.env.MAIL_PASS || "pnkr yinf rgex fwtc", // Gmail App Password
  },
});

// POST /submit
router.post("/", async (req, res) => {
  const { fname, lname, email, phone } = req.body;

  if (!fname || !lname || !email || !phone) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const mailOptions = {
    from: process.env.MAIL_USER || "jerrytiwari1126@gmail.com",
    to: "shailjakhandal555@gmail.com",
    subject: `New Contact Form Submission from ${fname} ${lname}`,
    text: `
You have received a new message from your portfolio contact form:

First Name : ${fname}
Last Name  : ${lname}
Email      : ${email}
Phone      : ${phone}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ message: "Failed to send message." });
  }
});

module.exports = router;
