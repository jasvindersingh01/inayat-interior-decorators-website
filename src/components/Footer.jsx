import { motion } from "framer-motion";
import Logo from "../assets/Logo.jpg"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-20">
     <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
         className="max-w-6xl mx-auto px-6 text-center">

        {/* LOGO + NAME */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <img
            src={Logo}
            alt="Inayat Logo"
            className="w-14 h-14 object-contain rounded-full"
          />

          <div className="font-playfair text-xl font-semibold tracking-wide">
            Inayat Interior & Decorators
          </div>
        </div>

        {/* Quick links */}
        <div className="flex justify-center gap-8 mb-6 text-gray-300 text-sm">
          <a href="#home" className="hover:text-red-500 transition">Home</a>
          <a href="#services" className="hover:text-red-500 transition">Services</a>
          <a href="#portfolio" className="hover:text-red-500 transition">Portfolio</a>
          <a href="#contact" className="hover:text-red-500 transition">Contact</a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 text-gray-300 text-sm mb-6">
          <a
            href="https://www.instagram.com/inayat_interior_decorator/"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/inayat.interior.decorator"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            Facebook
          </a>
        </div>

        {/* bottom line */}
        <p className="text-gray-400 text-xs">
          © {new Date().getFullYear()} Inayat Interior & Decorators — All Rights Reserved
        </p>

        <p className="text-gray-600 text-xs mt-1">
         Designed & Developed by <span className="text-red-600 font-semibold">RightAds</span>
        </p>
      </motion.div>
    </footer>
  );
}
