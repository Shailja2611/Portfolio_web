import nodemailer from "nodemailer";

console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_PASS:", process.env.MAIL_PASS ? "Loaded" : "Not Loaded");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const { fname, lname, email, phone } = req.body;

    if (!fname || !lname || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

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

    const userMail = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Thank you for contacting me",
      html: `
        <h2>Thank you for reaching out!</h2>

        <p>Hi ${fname},</p>

        <p>Thank you for contacting me through my portfolio website.</p>

        <p>I have received your details and will get back to you as soon as possible.</p>

        <br/>

        <p>Best regards,</p>

        <strong>Shailja Khandal</strong>
      `,
    };

    await transporter.sendMail(ownerMail);
    await transporter.sendMail(userMail);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Failed to send message.",
    });
  }
}