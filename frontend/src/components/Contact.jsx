import { motion } from "framer-motion";

export default function Contact() {
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

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
            />

            <textarea
              placeholder="Tell us about your project"
              rows="4"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:border-red-600"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

      </motion.div>
    </section>
  );
}
