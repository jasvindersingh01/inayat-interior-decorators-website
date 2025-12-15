import Hero from "../components/Hero";
import AboutUs from "../components/AboutPreview";
import Services from "../components/ServicesPreview";
import PortfolioPreview from "../components/PortfolioPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonial";
import WhatsAppFloat from "../components/WhatsAppFlot";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <PortfolioPreview />
      <WhyChooseUs />
      <Testimonials />
      <WhatsAppFloat />
    </>
  );
}
