import { motion } from "framer-motion";
import aboutImg from "../assets/about/HeroImg2.jpg";
import banner from "../assets/banner.jpg";

import certificate from "../assets/about/certificate.jpeg";
import work1 from "../assets/about/img1.jpeg";
import work2 from "../assets/about/img2.jpeg";
import work3 from "../assets/about/img3.jpeg";
import work4 from "../assets/about/img4.jpeg";

export default function AboutUs() {
  return (
    <>
      {/* Banner */}
      <div className="w-full h-[25vh] md:h-[45vh] relative">
        <img
          src={banner}
          alt="About Inayat Interior & Decorators"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center pt-16">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            About Us
          </h1>
        </div>
      </div>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-red-600">Inayat Interior & Decorators</span>
            </h2>

            <p className="text-gray-700 text-lg mb-5">
              Inayat Interior & Decorators is a trusted interior and fabrication firm
              based in Faridabad, delivering complete residential and commercial
              interior solutions under one roof.
            </p>

            <p className="text-gray-700 text-lg mb-5">
              We specialize in false ceilings, gypsum & PVC ceiling systems, wall
              paneling, aluminium & glass partitions, wooden flooring, modular
              interiors, and full turnkey interior projects.
            </p>

            <p className="text-gray-700 text-lg mb-5">
              Every project is handled with careful planning, quality materials,
              skilled workmanship, and timely execution to ensure long-lasting and
              visually appealing results.
            </p>

            <p className="text-gray-700 text-lg">
              Our focus is on delivering practical, durable, and elegant spaces that
              reflect our client’s lifestyle and business needs.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={aboutImg}
              alt="Interior work by Inayat Interior & Decorators"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h3 className="text-3xl font-bold mb-4">
            Authorized <span className="text-red-600">Dealer Certificate</span>
          </h3>

          <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
            We are an authorized dealer of Saint-Gobain Gyproc, ensuring genuine
            materials, certified installation practices, and industry-approved
            quality standards.
          </p>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            src={certificate}
            alt="Gyproc Authorized Dealer Certificate"
            className="mx-auto rounded-xl shadow-xl max-h-[420px]"
          />
        </div>
      </section>

      {/* Work & Infrastructure Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h3 className="text-3xl font-bold text-center mb-4">
            Our Work & Infrastructure
          </h3>

          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From material storage to on-site execution, we maintain high standards
            of quality, safety, and professionalism at every stage of work.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[work1, work2, work3, work4].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-xl"
              >
                <img
                  src={img}
                  alt="Inayat Interior Work"
                  className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
