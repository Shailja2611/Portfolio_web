const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Create transporter
console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_PASS:", process.env.MAIL_PASS);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// POST /submit
router.post("/", async (req, res) => {
  try {
    const { fname, lname, email, phone } = req.body;

    // Validation
    if (!fname || !lname || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Email sent to you
    const ownerMail = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `New Portfolio Contact: ${fname} ${lname}`,
      html: `
        <h2>New Portfolio Contact Form Submission</h2>
        <p><strong>First Name:</strong> ${fname}</p>
        <p><strong>Last Name:</strong> ${lname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    };

    // Auto-reply to visitor
    const userMail = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Thank you for contacting me",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${fname},</p>

        <p>Thank you for contacting me through my portfolio website.</p>

        <p>I have received your details and will get back to you as soon as possible.</p>

        <br>

        <p>Best regards,</p>
        <p><strong>Shailja Khandal</strong></p>
      `,
    };

    await transporter.sendMail(ownerMail);
    await transporter.sendMail(userMail);

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Email Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message.",
    });
  }
});

module.exports = router;