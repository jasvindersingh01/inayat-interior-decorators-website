import { motion } from "framer-motion";

export default function PortfolioWorkVideos() {
  const videos = [
      {
        src: "videos/ac1.mp4",
        title: "Completed Interior Walkthrough",
      },
      {
        src: "videos/ac2.mp4",
        title: "Completed Interior Walkthrough",
      },
      {
        src: "videos/ac3.mp4",
        title: "Completed Interior Walkthrough",
      },
      {
        src: "videos/ac4.mp4",
        title: "Completed Interior Walkthrough",
      },
      {
        src: "videos/ac5.mp4",
        title: "Completed Interior Walkthrough",
      },
      {
        src: "videos/ac6.mp4",
        title: "Completed Interior Walkthrough",
      },
      {
        src: "videos/ac7.mp4",
        title: "Completed Interior Walkthrough",
      },
    {
      src: "videos/bc1.mp4",
      title: "Work in Progress",
    },
    {
      src: "videos/bc2.mp4",
      title: "On-Site Interior Execution",
    },
  ];

  return (
    <section className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Our <span className="text-red-600">Project Execution & Final Results</span>
        </motion.h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Real-time work progress and completed interiors that reflect our dedication to quality materials, skilled workmanship, and flawless finishing.
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
                className="w-full h-120 object-cover"
              />

              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800 text-center">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
