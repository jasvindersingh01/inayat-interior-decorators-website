import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBoxes,
  FaTools,
  FaThLarge,
  FaHammer,
  FaPaintRoller,
} from "react-icons/fa";

export default function HomeServices() {
  const services = [
    {
      title: "Interior Design",
      desc: "Residential & commercial interior design solutions crafted with style and functionality.",
      icon: <FaHome />,
      img: "/services/living-room.jpg",
    },
    {
      title: "Modular Kitchen & Wardrobes",
      desc: "Modern modular kitchens and wardrobes designed for comfort and durability.",
      icon: <FaBoxes />,
      img: "/services/modular-kitchen.jpg",
    },
    {
      title: "False Ceiling Solutions",
      desc: "Gypsum, POP, PVC & designer false ceilings with premium finish.",
      icon: <FaTools />,
      img: "/services/false-ceiling.avif",
    },
    {
      title: "Wall Paneling & Decor",
      desc: "PVC, wooden panels and decorative wall solutions for elegant interiors.",
      icon: <FaThLarge />,
      img: "/services/wall-panel.jpg",
    },
    {
      title: "Civil Work & Renovation",
      desc: "Dismantling, wall shifting, brickwork and complete renovation services.",
      icon: <FaHammer />,
      img: "/services/civil-work.webp",
    },
    {
      title: "Painting & Finishing",
      desc: "Interior & exterior painting, polishing and final finishing touches.",
      icon: <FaPaintRoller />,
      img: "/services/painting.webp",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
            Complete interior solutions — from design and civil work to premium
            finishing and final execution.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden group"
            >
              <img
                src={s.img}
                alt={s.title}
                className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-6">
                <div className="text-red-600 text-2xl mb-3">
                  {s.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors">
                  {s.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            to="/services"
            className="inline-block px-8 py-4 border-2 border-red-600 text-red-600 font-semibold rounded-md hover:bg-red-600 hover:text-white transition"
          >
            View All Services
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
