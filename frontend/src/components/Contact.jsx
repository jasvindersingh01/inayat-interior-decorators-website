import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://inayat-interior.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent! We will contact you soon.");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Server issue. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try later.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-14 bg-white scroll-mt-18">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Get in Touch
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Have a project in mind? Need full home interiors or a single room makeover?
            We’d love to craft a beautiful space for you.
          </p>

          <div className="flex flex-col gap-3 text-gray-700">
            <p>
              <span className="font-semibold">Phone:</span> 9873002495
            </p>

            <p>
              <span className="font-semibold">Email:</span> inayatinteriordecorator@gmail.com
            </p>

            <p>
              <span className="font-semibold">Location:</span>
              Shop No. 516, East Chawla Colony, Ballabhgarh, Faridabad
            </p>

            <div className="mt-4 flex gap-4">
              <a href="https://www.instagram.com/inayat_interior_decorator/"
                target="_blank"
                className="text-red-600 font-semibold hover:underline">
                Instagram
              </a>

              <a href="https://www.facebook.com/inayat.interior.decorator"
                target="_blank"
                className="text-red-600 font-semibold hover:underline">
                Facebook
              </a>
            </div>
          </div>

          <a
            href="https://wa.me/919873002495"
            target="_blank"
            className="inline-block mt-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 transition"
          >
            WhatsApp Us
          </a>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>

          <form 
          onSubmit={handleSubmit}
          className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
            />

            <textarea
              placeholder="Tell us about your project"
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 bg-red-600 text-white font-semibold rounded-md transition cursor-pointer 
      ${loading ? "bg-red-400 cursor-not-allowed" : "hover:bg-red-700"}
    `}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-xl max-w-6xl mx-auto px-6"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.305425186094!2d77.31762897532485!3d28.34961427582039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb9604bd1b73%3A0x38bfd6bcbc6d5c53!2sInayat%20Interior%20%26%20Decorators!5e0!3m2!1sen!2sin!4v1764738456229!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
}
