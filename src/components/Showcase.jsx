import Img1 from "../assets/HeroImg1.jpg";
import Img2 from "../assets/HeroImg2.jpg";
import Img3 from "../assets/HeroImg4.jpg";
import Img4 from "../assets/HeroImg5.jpg";
import Img5 from "../assets/HeroImg6.jpg";

const projects = [
  {
    img: Img1,
    title: "Modern Open-Concept Living",
    desc: "A seamless blend of comfort and style — warm tones, refined lighting, and a beautifully crafted staircase define this elegant modern living space.",
  },
  {
    img: Img2,
    title: "Minimal TV Lounge Design",
    desc: "Clean lines, soft lighting, and contemporary furniture come together to create a calm and balanced entertainment area.",
  },
  {
    img: Img3,
    title: "Luxury White Interior Theme",
    desc: "Premium white interiors with reflective surfaces and accent lighting — ideal for creating a luxurious ambiance.",
  },
  {
    img: Img4,
    title: "Elegant Open Kitchen Living Space",
    desc: "Modern textures and high-quality finishes come together to elevate the everyday living experience.",
  },
  {
    img: Img5,
    title: "Warm & Contemporary Living Room",
    desc: "Soft colors, stylish decor, and rich textures create a cozy yet modern family-friendly environment.",
  },
];

export default function ProjectsShowcase() {
  return (
    <section id="portfolio" className="py-8 bg-white scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Interior Work
      </h2>

      <div className="max-w-6xl mx-auto space-y-24">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={p.img}
                alt={p.title}
                className="rounded-xl shadow-xl hover:scale-[1.02] transition duration-300 w-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-700 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
