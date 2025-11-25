import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Showcase from './components/Showcase'
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App(){
  return (
    <div className="font-inter text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Showcase />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
