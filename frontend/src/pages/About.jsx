import { motion } from "framer-motion";
import aboutImg from "../assets/HeroImg5.jpg";
import banner from "../assets/banner.webp";

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
              Inayat Interior & Decorators is a trusted and well-established interior
              design firm based in Faridabad, offering complete interior design and
              decoration solutions for residential, commercial, and retail spaces.
              We specialize in transforming ordinary spaces into elegant, functional
              and visually appealing environments. We also specialize in aluminium and glass fabrication, offering complete interior and exterior solutions under one roof.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Our services cover everything from interior planning and 3D visualization
              to execution and final handover. We work on false ceilings, gypsum and PVC
              ceiling systems, wall paneling, modular kitchens and wardrobes, aluminium
              and glass fabrication, civil renovation work, painting, polishing and
              complete interior makeovers.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Every project begins with understanding our client’s requirements,
              lifestyle and budget. Our experienced team carefully plans layouts,
              selects quality materials and ensures flawless execution using skilled
              workmanship and modern design practices.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              What sets us apart is our commitment to quality, transparency and timely
              delivery. We believe that great interiors should not only look beautiful
              but also be practical, durable and comfortable for everyday living.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              At Inayat Interior & Decorators, our goal is to deliver interiors that
              reflect our client’s personality and vision. From concept to completion,
              we ensure a smooth, hassle-free experience and spaces that our clients
              are proud to call their own.
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
