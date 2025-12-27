import { motion } from "framer-motion";
import { FaCheckCircle, FaUserTie, FaCouch, FaClock } from "react-icons/fa";
import whyImg from "../assets/whychoose.jpg"; // add a good interior image

export default function WhyChoose() {
  const points = [
    {
      icon: <FaUserTie className="text-3xl text-red-600" />,
      title: "Skilled & Trusted Interior Experts",
      desc: "A dedicated team with strong experience in interior execution, gypsum work, wall paneling and complete room transformations.",
    },
    {
      icon: <FaCouch className="text-3xl text-red-600" />,
      title: "Premium Materials & Finishing",
      desc: "We use high-quality boards, panels, lighting and fittings to deliver durable and elegant interiors.",
    },
    {
      icon: <FaClock className="text-3xl text-red-600" />,
      title: "Fast & On-Time Execution",
      desc: "Well-planned workflows and smooth coordination ensure projects are delivered within the promised timeline.",
    },
    {
      icon: <FaCheckCircle className="text-3xl text-red-600" />,
      title: "Complete Interior Solutions",
      desc: "From false ceilings to furniture, partitions to wall paneling — everything under one roof for a seamless experience.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why <span className="text-red-600">Choose Us</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We focus on quality craftsmanship, reliable execution, and delivering
            interiors that are practical, durable, and visually appealing.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          
          {/* Left: Points */}
          <div className="grid sm:grid-cols-2 gap-8">
            {points.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 hover:text-red-600">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="relative">
            <img
              src={whyImg}
              alt="Why Choose Inayat Interior & Decorators"
              className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </motion.div>
    </section>
  );
}
