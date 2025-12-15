import { motion } from "framer-motion";
import { FaStar, FaGoogle, FaUserCircle } from "react-icons/fa";

const reviews = [
  {
    name: "Reena Malik",
    text: "All false ceiling material r available here like gypsum board,gypsum channel,gypsum tiles,Armstrong material, bison board,everest board,pvc panel,louvers etc.",
  },
  {
    name: "Mahender Kumar",
    text: "Mujhe ye inayat interior and decorators ka Mere friend ne diya humne inse grid false ceiling ka kaam karwaya bahut hi acche rates par or quality bhi good...",
  },
  {
    name: "Norang Singh",
    text: "I m glad that I gave my false ceiling work to inayat interior and decorators ,I see perfection in their work.",
  },
  {
    name: "Manoj Chauhan",
    text: "Meine inyat ji se false ceiling ka kaam Kara jiski finishing dekhkar mein hairan hun......bahut hi shandar kaam.",
  },
  {
    name: "Anuj Saraswat",
    text: "Very friendly behavior and good experience.",
  },
  {
    name: "Sanjay Kumar",
    text: "All interior products are available here.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Trusted by homeowners and businesses across Faridabad
          </p>

          <div className="flex justify-center items-center gap-2 mt-4 text-gray-700">
            <FaGoogle className="text-blue-500" />
            <span className="font-medium">Google Reviews</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
           <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.05 }}
  viewport={{ once: true }}
  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
>

  <div className="flex items-center gap-3 mb-4">
    <FaUserCircle className="text-gray-400 text-4xl" />
    <div>
      <h4 className="font-semibold text-gray-900">
        {review.name}
      </h4>
      <span className="text-sm text-gray-500">Verified Client</span>
    </div>
  </div>

  <div className="flex gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className="text-yellow-400" />
    ))}
  </div>

  <p className="text-gray-700 leading-relaxed">
    “{review.text}”
  </p>
</motion.div>

          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <a
            href="https://www.google.com/search?q=Inayat+Interior+%26+Decorators+Faridabad+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition text-center"
          >
            View All Reviews
          </a>

          <a
            href="https://www.google.com/search?q=Inayat+Interior+%26+Decorators+Faridabad+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700 transition text-center"
          >
            Write a Review
          </a>
        </div>
      </div>
    </section>
  );
}
