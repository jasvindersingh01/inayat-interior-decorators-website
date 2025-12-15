import banner from "../assets/banner.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHome,
  FaCouch,
  FaBed,
  FaBoxes,
  FaTools,
  FaThLarge,
  FaHammer,
  FaPaintRoller,
  FaLayerGroup,
} from "react-icons/fa";

export default function ServicesPage() {
  const visualServices = [
  {
  title: "Residential Interior Design",
  desc: "Personalized home interiors designed for comfort, style and everyday living.",
  icon: <FaHome />,
  img: "/services/interior-design.jpg",
},
{
  title: "Living Room Interiors",
  desc: "Elegant living room designs with modern layouts, lighting and wall finishes.",
  icon: <FaCouch />,
  img: "/services/living-room.jpg",
},
{
  title: "Bedroom Interiors",
  desc: "Comfort-focused bedroom interiors with smart storage and soothing designs.",
  icon: <FaBed />,
  img: "/services/bedroom.jpg",
},
{
  title: "Modular Kitchen",
  desc: "Functional modular kitchens with efficient layouts and premium fittings.",
  icon: <FaBoxes />,
  img: "/services/modular-kitchen.jpg",
},
{
  title: "Modular Wardrobes",
  desc: "Custom-designed wardrobes offering maximum storage with a sleek finish.",
  icon: <FaBoxes />,
  img: "/services/wardrobe.jfif",
},
{
  title: "False Ceiling (Gypsum / POP / PVC)",
  desc: "Designer false ceilings that enhance lighting and elevate interior aesthetics.",
  icon: <FaTools />,
  img: "/services/false-ceiling.avif",
},
{
  title: "Wall Paneling & Decor",
  desc: "PVC, wooden and decorative wall panels for a premium interior look.",
  icon: <FaThLarge />,
  img: "/services/wall-panel.jpg",
},
{
  title: "Civil Work & Renovation",
  desc: "Complete civil solutions including dismantling, wall shifting and renovation.",
  icon: <FaHammer />,
  img: "/services/civil-work.webp",
},
{
  title: "Painting & Polishing",
  desc: "Professional painting and polishing services for a flawless final finish.",
  icon: <FaPaintRoller />,
  img: "/services/painting.webp",
},
{
  title: "Flooring Solutions",
  desc: "Durable and stylish flooring options including wooden, PVC and laminated floors.",
  icon: <FaLayerGroup />,
  img: "/services/flooring.avif",
},
{
  title: "Wallpaper Installation",
  desc: "Premium wallpaper designs installed with precision and clean finishing.",
  icon: <FaThLarge />,
  img: "/services/wallpaper.jpg",
},
{
  title: "Complete Renovation",
  desc: "End-to-end renovation services transforming spaces from start to finish.",
  icon: <FaHammer />,
  img: "/services/renovation.webp",
}

  ];

  const allServices = [
    "Aluminium & Glass Fabrication",
    "Glass Partitions & Office Cabins",
    "Commercial & Office Interior Design",
    "POP & PVC Ceiling Work",
    "Armstrong Ceiling Systems",
    "Dry Wall & Partition Work",
    "Wall Shifting & Brickwork",
    "POP, Putty & Surface Preparation",
    "Wooden, PVC & Laminated Flooring",
    "ACP & HPL Cladding",
    "Wood, Plywood, Veneers & Fiber Work",
    "Furnishing & Final Finishing Work",
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
      <section className="pt-14 pb-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold">
              Our Services
            </h1>
            <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
              Complete interior solutions with expert planning, quality materials
              and flawless execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {visualServices.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden group"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="p-6">
                  <div className="text-red-600 text-2xl mb-3">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-red-600 transition">
                    {s.title}
                  </h3>
                  <p className="text-sm">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">
              Additional Services We Offer
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {allServices.map((service, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition hover:text-red-600"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

              <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            to="/contact"
            className="inline-block px-8 py-2 border-2 border-red-600 text-red-600 font-semibold rounded-md hover:bg-red-600 hover:text-white transition"
          >
            Book Consultant
          </Link>
        </motion.div>

        </div>
      </section>
    </>
  );
}
