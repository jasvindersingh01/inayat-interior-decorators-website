const Contact = require("../models/Contact");
const sendNotificationEmail = require("../utils/mailer");

exports.submitForm = async (req, res) => {
  console.log("🔥 New Request Received");
  console.log("Body:", req.body);

  try {
    const { name, phone, email, message } = req.body;

    console.log("🟢 Saving to Database...");

    const newLead = new Contact({ name, phone, email, message });
    await newLead.save();

    console.log("🟢 DB Saved. Sending email...");

    await sendNotificationEmail(name, phone, email, message);

    console.log("🟢 Email sent successfully!");

    res.status(201).json({ success: true });
  } catch (err) {
    console.log("❌ ERROR:", err.message);
    res.status(500).json({ success: false, error: err.message });
  }
};
