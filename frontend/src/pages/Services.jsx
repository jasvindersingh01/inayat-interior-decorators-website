import { motion } from "framer-motion";
import { FaCouch, FaBed, FaDrawPolygon, FaHome, FaImages, FaTools } from "react-icons/fa";
import banner from "../assets/banner.webp"

export default function Services() {
  const services = [
    {
      icon: <FaCouch className="text-4xl text-red-600" />,
      title: "Living Room Interior",
      desc: "Modern layouts with premium wall paneling, ceiling designs, lighting and furniture placement.",
    },
    {
      icon: <FaBed className="text-4xl text-red-600" />,
      title: "Bedroom Interior",
      desc: "Comfort-focused interiors with wardrobes, soft lighting, storage units and false ceiling work.",
    },
    {
      icon: <FaTools className="text-4xl text-red-600" />,
      title: "False Ceiling & Gypsum Work",
      desc: "Stylish and durable false ceilings designed to enhance lighting and elevate the entire space.",
    },
    {
      icon: <FaDrawPolygon className="text-4xl text-red-600" />,
      title: "Wall Paneling & PVC Panels",
      desc: "Premium wall panels that add texture, depth and a luxurious feel to your rooms.",
    },
    {
      icon: <FaHome className="text-4xl text-red-600" />,
      title: "Complete Home Makeover",
      desc: "End-to-end renovation including ceiling, paneling, furniture layout & interior styling.",
    },
    {
      icon: <FaImages className="text-4xl text-red-600" />,
      title: "3D Visualization",
      desc: "High-quality 3D renders to help you preview your room before execution.",
    },
  ];

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
            Services
          </h1>
        </div>
      </div>
      <section id="services" className="py-14 bg-white scroll-mt-30">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-playfair font-bold text-center mb-14">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-y-14 gap-x-10">
            {services.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-start gap-3 group"
              >
                {s.icon}

                <h3 className="text-xl font-semibold group-hover:text-red-600 transition-colors">
                  {s.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {s.desc}
                </p>

                <span className="h-[2px] w-0 bg-red-600 mt-2 group-hover:w-full transition-all duration-300"></span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
