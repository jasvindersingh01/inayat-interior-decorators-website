import { useEffect } from "react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ContactPage from "./pages/Contact";

export default function App() {

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="font-inter text-gray-800">
        
        <Navbar />

        <main>
          <Toaster position="top-center" />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}
