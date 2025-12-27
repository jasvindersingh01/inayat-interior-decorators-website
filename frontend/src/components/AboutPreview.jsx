import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutImg from "../assets/HeroImg1.jpg";

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-20 scroll-mt-18"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl shrink-0">
            <img
              src={aboutImg}
              alt="Inayat Interior & Decorators Work"
              className="w-full max-w-lg object-cover rounded-2xl"
            />
          </div>

          {/* Content */}
          <div className=" text-gray-600">
            <h4 className="text-sm uppercase font-semibold tracking-widest text-red-600">
              About Us
            </h4>

            <div className="w-20 h-[3px] bg-red-600 rounded-full mt-2 mb-6"></div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Inayat Interior & Decorators
            </h2>

            <p className="leading-relaxed mb-4">
              Inayat Interior & Decorators is a trusted interior design and
              execution firm based in Faridabad, delivering stylish, functional
              and durable interior solutions for residential and commercial
              spaces.
            </p>

            <p className="leading-relaxed mb-4">
              From false ceilings, wall paneling and modular interiors to
              aluminium & glass fabrication and complete renovations, we manage
              every project with skilled workmanship and quality materials.
            </p>

            <p className="leading-relaxed">
              Our goal is to transform ordinary spaces into elegant environments
              that reflect our client’s lifestyle, vision and comfort.
            </p>

            {/* Read More */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3
                         bg-red-600 text-white font-semibold rounded-full
                         hover:bg-red-700 transition"
            >
              Read More
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
