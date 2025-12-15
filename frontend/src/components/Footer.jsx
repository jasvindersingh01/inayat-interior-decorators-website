import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Logo from "../assets/Logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        {/* Logo */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <img
            src={Logo}
            alt="Inayat Interior & Decorators Logo"
            className="w-14 h-14 object-contain rounded-full"
          />
          <div className="font-playfair text-xl font-semibold tracking-wide">
            Inayat Interior & Decorators
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center gap-8 mb-6 text-gray-300 text-sm flex-wrap">
          <a href="/" className="hover:text-red-500 transition">Home</a>
          <a href="/about" className="hover:text-red-500 transition">About</a>
          <a href="/services" className="hover:text-red-500 transition">Services</a>
          <a href="/portfolio" className="hover:text-red-500 transition">Portfolio</a>
          <a href="/contact" className="hover:text-red-500 transition">Contact</a>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.instagram.com/inayat_interior_decorator/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram className="text-lg" />
            <span className="text-sm">Instagram</span>
          </a>

          <a
            href="https://www.facebook.com/inayat.interior.decorator"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-red-500 transition"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-lg" />
            <span className="text-sm">Facebook</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Inayat Interior & Decorators — All Rights Reserved
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
