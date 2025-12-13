import { motion } from "framer-motion";
import aboutImg from "../assets/HeroImg5.jpg";
import banner from "../assets/banner.webp"

export default function AboutUs() {
  return (
    <>
          <div className="w-full h-[25vh] md:h-[45vh] relative">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center pt-16">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            About Us
          </h1>
        </div>
      </div>
    <section
      id="about"
      className="py-20 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-red-600">Inayat Interior & Decorators</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Inayat Interior & Decorators is a trusted and well-established
            interior design firm based in Faridabad, delivering premium-quality
            interior solutions for residential, commercial, and retail spaces.
            With years of hands-on experience, we specialize in creating
            interiors that balance aesthetics, functionality, and durability.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Our expertise spans across false ceilings, PVC and wall paneling,
            gypsum board work, aluminium and glass fabrication, modular
            partitions, and complete interior transformations. Every project we
            undertake is carefully planned and executed with attention to
            detail, superior materials, and skilled craftsmanship.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            At Inayat Interior & Decorators, customer satisfaction is at the
            heart of everything we do. We work closely with our clients to
            understand their vision, lifestyle, and budget — delivering elegant
            spaces that are timeless, practical, and visually impressive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={aboutImg}
            alt="Interior Design Work by Inayat Interior & Decorators"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
    </>
  );
}
