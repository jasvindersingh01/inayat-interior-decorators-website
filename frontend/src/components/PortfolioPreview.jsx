import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
      img: "portfolio/designer-tv-unit.jpeg",
      title: "Designer TV Unit with Backlit Wall Shelves",
      desc: "Modern gypsum TV unit featuring geometric wall niches with warm LED lighting, concealed wiring, and a clean contemporary finish for elegant living spaces."
    },
    {
      img: "portfolio/luxury-hall-floor.jpeg",
      title: "Luxury Wooden Flooring",
      desc: "High-end wooden flooring installation with precise alignment and rich textures for elegant living spaces."
    },
    {
      img: "portfolio/modern-office-glass-partition.jpeg",
      title: "Modern Cafe Interior with Glass Partitions",
      desc: "Contemporary office interior featuring black-framed glass partitions, industrial-style ceiling, focused lighting, and comfortable lounge seating for a modern workspace."
    },
    {
      img: "portfolio/modern-living-led-ceiling.jpeg",
      title: "Modern Living Room with LED False Ceiling",
      desc: "Contemporary living room featuring a gypsum false ceiling with blue LED cove lighting, recessed spotlights, and a clean modern layout designed for elegant everyday living."
    },
    {
      img: "portfolio/staircase-wood-floor.jpeg",
      title: "Designer Ceiling with Lighting",
      desc: "Contemporary ceiling design featuring modern lighting elements that enhance ambiance and architectural appeal."
    },
    {
      img: "portfolio/commercial-glass-facade.jpeg",
      title: "Commercial Glass Facade & Structural Glazing",
      desc: "High-quality structural glazing and glass facade work for a commercial building, providing a sleek modern appearance, maximum natural light, and long-lasting weather-resistant performance."
    },
];

export default function PortfolioPreview() {
  return (
    <section id="home-portfolio" className="bg-white py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-lg uppercase tracking-widest text-red-600 mb-3">
            Our Work
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            A glimpse of our recent interior projects
          </h2>

          <div className="w-20 h-[2px] bg-red-600 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {projects.slice(0, 6).map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-60 object-cover rounded-lg"
              />

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {p.title}
              </h3>

              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-red-600 font-semibold hover:underline transition"
          >
            View All Projects
            <span aria-hidden>→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
