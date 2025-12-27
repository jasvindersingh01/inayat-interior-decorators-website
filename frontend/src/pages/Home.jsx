import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import Services from "../components/ServicesPreview";
import PortfolioPreview from "../components/PortfolioPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonial";
import WhatsAppFloat from "../components/WhatsAppFlot";
import HomeWorkVideos from "../components/HomeWorkVideos";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services />
      <PortfolioPreview />
      <WhyChooseUs />
      <Testimonials />
      <HomeWorkVideos />
      <WhatsAppFloat />
    </>
  );
}
