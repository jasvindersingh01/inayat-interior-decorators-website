const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendNotificationEmail(name, phone, email, message) {
  try {
    await resend.emails.send({
      from: "Inayat Interiors <onboarding@resend.dev>",
      to: "inayatinteriordecorator@gmail.com",
      subject: "New Contact Form Message",
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return true;

  } catch (err) {
    console.log("Email Error:", err);
    throw err;
  }
}

module.exports = sendNotificationEmail;
