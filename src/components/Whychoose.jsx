import { FaCheckCircle, FaUserTie, FaCouch, FaClock } from "react-icons/fa";

export default function WhyChoose() {
  const points = [
  {
    icon: <FaUserTie className="text-3xl text-red-600" />,
    title: "Skilled & Trusted Interior Experts",
    desc: "A dedicated team with strong experience in interior execution, gypsum work, wall paneling and full room transformations.",
  },
  {
    icon: <FaCouch className="text-3xl text-red-600" />,
    title: "Premium Materials & Finishing",
    desc: "We use high-quality boards, panels, lights and fittings to deliver long-lasting and elegant interiors.",
  },
  {
    icon: <FaClock className="text-3xl text-red-600" />,
    title: "Fast & On-Time Execution",
    desc: "Well-planned workflow and smooth coordination ensuring interiors are delivered within the promised timeline.",
  },
  {
    icon: <FaCheckCircle className="text-3xl text-red-600" />,
    title: "Complete Interior Solutions",
    desc: "From false ceiling to furniture, partitions to wall paneling — everything under one roof for a seamless experience.",
  },
];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-playfair font-bold text-center mb-16">
          Why Choose Us
        </h2>

        <div className="relative border-l-2 border-gray-300 ml-6">

          {points.map((p, i) => (
            <div key={i} className="mb-12 ml-6 group">

              {/* Dot */}
              <div className="absolute -left-[0.6rem] mt-1 w-4 h-4 bg-red-600 rounded-full group-hover:scale-110 transition"></div>

              {/* Icon */}
              <div className="mb-3">{p.icon}</div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition">
                {p.title}
              </h3>

              <p className="text-gray-600 leading-relaxed max-w-lg">
                {p.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
