import { useEffect } from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Showcase from './components/Showcase'
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App(){

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-inter text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Showcase />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
