import { motion } from "framer-motion";
import banner from "../assets/banner.jpg";
import PortfolioWorkVideos from "../components/PortfolioWorkVideos";
import { FaEye, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Portfolio() {

  const [previewImg, setPreviewImg] = useState(null);

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
    {
      img: "portfolio/luxury-residential-exterior.jpeg",
      title: "Luxury Residential Exterior with Wooden Cladding",
      desc: "Premium residential exterior showcasing wooden cladding, glass balcony railings, and modern architectural detailing, delivering a perfect balance of elegance, durability, and contemporary design."
    },
    {
      img: "portfolio/designer-ceiling.jpeg",
      title: "Wooden Flooring & Staircase Area",
      desc: "Seamless wooden flooring work combined with modern staircase design for a premium interior look."
    },
    {
      img: "portfolio/wooden-deck-1.jpeg",
      title: "Outdoor Wooden Deck Flooring",
      desc: "Premium quality outdoor wooden deck flooring designed for durability, weather resistance, and a warm natural finish."
    },
    {
      img: "portfolio/bedroom-flooring.jpeg",
      title: "WPC Wall Paneling",
      desc: "Vertical WPC wall panel installation delivering a clean, modern aesthetic with long-lasting performance."
    },
    {
      img: "portfolio/wpc-wall-panel.jpeg",
      title: "Balcony Wall & Ceiling Paneling",
      desc: "Stylish balcony transformation using durable paneling materials suitable for outdoor environments."
    },
    {
      img: "portfolio/balcony-paneling.jpeg",
      title: "Balcony Wooden Flooring",
      desc: "Elegant wooden flooring solution for balconies, combining aesthetics with moisture resistance."
    },
    {
      img: "portfolio/wooden-balcony-floor.jpeg",
      title: "Custom Curved Wooden Flooring",
      desc: "Expertly crafted curved wooden flooring work, showcasing precision craftsmanship and premium finishes."
    },
    {
      img: "portfolio/curved-wood-floor.jpeg",
      title: "Bedroom Wooden Flooring",
      desc: "Warm and comfortable bedroom flooring designed to elevate the overall interior experience."
    },
    {
      img: "portfolio/exterior-facade.jpeg",
      title: "Modern Exterior Facade Design",
      desc: "Contemporary exterior elevation featuring wood textures, glass elements, and clean architectural lines."
    }
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
            Portfolio
          </h1>
        </div>
      </div>
      <section className="bg-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-4"
          >
            Our <span className="text-red-600">Portfolio</span>
          </motion.h1>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
            A showcase of our recent interior, exterior, flooring, and paneling projects —
            crafted with precision, quality materials, and attention to detail.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setPreviewImg(item.img)}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition"
              >
                {/* Image Wrapper */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center
                     opacity-0 group-hover:opacity-100 transition duration-300"
                  >
                    <FaEye
                      onClick={() => setPreviewImg(item.img)}
                      className="text-white text-4xl cursor-pointer
                       scale-90 group-hover:scale-110 transition"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>
      <PortfolioWorkVideos />
      {previewImg && (
        <div
          className="fixed inset-0 bg-black/80 z-[999]
               flex items-center justify-center px-4"
          onClick={() => setPreviewImg(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE ICON */}
            <button
              onClick={() => setPreviewImg(null)}
              className="absolute -top-10 right-0 text-white text-2xl hover:scale-110 transition"
            >
              <FaTimes />
            </button>

            {/* PREVIEW IMAGE */}
            <img
              src={previewImg}
              alt="Project Preview"
              className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
