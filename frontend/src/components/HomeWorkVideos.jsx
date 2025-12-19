import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomeWorkVideos() {
  const videos = [
    {
      src: "videos/bc1.mp4",
      title: "Work in Progress",
    },
    {
      src: "videos/bc2.mp4",
      title: "On-Site Interior Execution",
    },
    {
      src: "videos/ac1.mp4",
      title: "Completed Interior Walkthrough",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Our <span className="text-red-600">Work in Action</span>
        </motion.h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          A glimpse of our on-site execution and completed interior projects —
          showcasing quality workmanship, precision, and attention to detail.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <video
                src={video.src}
                controls
                className="w-full h-150 object-cover"
              />

              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800 text-center">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
           <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-block px-8 py-3 mt-12 rounded-md bg-red-600 text-white font-semibold
                       hover:bg-red-700 transition shadow-md"
          >
            View All Work
          </Link>
        </div>
      </div>
    </section>
  );
}
