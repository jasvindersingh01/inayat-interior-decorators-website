import { motion } from "framer-motion"; 

export default function AboutUs() {
  return (
    <section id="about" className="py-14 bg-gray-50 scroll-mt-18">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About <span className="text-red-600">Inayat Interior & Decorators</span>
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Inayat Interior & Decorators is a premium interior firm based in
          Faridabad delivering stylish, modern and highly functional interior
          transformations.
          <br /><br />
          From false ceilings, wall paneling, partitions to complete room
          makeovers — our team ensures fine craftsmanship, quality materials,
          and a seamless execution experience.
          <br /><br />
          With expertise in residential as well as commercial interiors, we turn
          ordinary spaces into elegant, comfortable and beautifully designed
          environments that reflect your lifestyle and personality.
        </p>
      </motion.div>
    </section>
  );
}
