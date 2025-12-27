const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendNotificationEmail(name, phone, email, message) {
  try {
    await resend.emails.send({
      from: "Inayat Interiors <onboarding@resend.dev>",
      to: [process.env.EMAIL_TO],
      subject: "New Contact Form Inayat Interior",
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      throw error;
    }

    console.log("Email Sent ✔ via Resend", data);
  } catch (err) {
    console.error("Email Error (Resend):", err);
    throw err;
  }
};
module.exports = sendNotificationEmail;
