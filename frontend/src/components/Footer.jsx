import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Logo from "../assets/Logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        {/* MAIN GRID */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* BRAND */}
          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-4">
              <img
                src={Logo}
                alt="Inayat Interior & Decorators Logo"
                className="w-14 h-14 rounded-full object-contain"
              />
              <h3 className="text-xl font-semibold">
                Inayat Interior & Decorators
              </h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              A trusted interior design and execution firm delivering residential
              and commercial interiors with quality materials, skilled workmanship,
              and reliable timelines.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
              <li><a href="/about" className="hover:text-red-500 transition">About Us</a></li>
              <li><a href="/services" className="hover:text-red-500 transition">Services</a></li>
              <li><a href="/portfolio" className="hover:text-red-500 transition">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-red-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">
              Contact Details
            </h4>

            <div className="space-y-3 text-gray-400 text-sm">
              <p className="flex items-start justify-center md:justify-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-red-600" />
                <span>
                  Shop No. 516, East Chawla Colony,<br />
                  Ballabhgarh, Faridabad, Haryana
                </span>
              </p>

              <a
                href="tel:+919873002495"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-red-500 transition"
              >
                <FaPhoneAlt className="text-red-600" />
                +91 98730 02495
              </a>

              <a
                href="mailto:inayatinteriordecorator@gmail.com"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-red-500 transition"
              >
                <FaEnvelope className="text-red-600" />
                inayatinteriordecorator@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-5 mt-12">
          <a
            href="https://www.instagram.com/inayat_interior_decorator/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700
                       hover:bg-pink-500 hover:border-pink-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/inayat.interior.decorator"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700
                       hover:bg-blue-600 hover:border-blue-600 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://wa.me/919873002495"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700
                       hover:bg-green-500 hover:border-green-500 transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </motion.div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-xs px-4">
        <p>
          © {new Date().getFullYear()} Inayat Interior & Decorators. All Rights Reserved.
        </p>
        <p className="mt-1">
          Designed & Developed by{" "}
          <a
            href="https://rightads.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline"
          >
            RightAds
          </a>
        </p>
      </div>
    </footer>
  );
}
