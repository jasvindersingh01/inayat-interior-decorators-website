import HeroImg from "../assets/HeroImg3.jpg"
import { motion } from "framer-motion";

export default function Hero(){
  return (
   <section id="home" className="relative h-screen pt-24">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${HeroImg})` }}
  />

  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="max-w-2xl text-white"
    >
      <h1 className="font-playfair text-4xl md:text-5xl leading-tight mb-4">
        Premium Interior Design & Turnkey Home Renovations
      </h1>

      <p className="text-lg md:text-xl text-gray-100/90 mb-6">
        Transforming ordinary spaces into modern, stylish, and comfortable interiors.
      </p>

      <a
        href="#contact"
        className="inline-flex items-center gap-3 px-6 py-3 bg-amber-400 text-black rounded-md font-semibold shadow"
      >
        Book Consultation
      </a>
    </motion.div>

  </div>
</section>

  );
}
