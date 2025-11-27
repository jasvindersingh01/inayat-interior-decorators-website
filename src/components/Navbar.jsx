import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/Logo.jpg"

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 z-50 w-full transition-all duration-300
        ${scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <img
            src={Logo}
            className="w-12 h-12 object-contain rounded-full"
          />
          <div>
            <div className="text-lg font-semibold">Inayat</div>
            <div className="text-xs opacity-80">Interior & Decorators</div>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#home" className="text-sm hover:text-red-600">Home</a>
          <a href="#about" className="text-sm hover:text-red-600">About Us</a>
          <a href="#services" className="text-sm hover:text-red-600">Services</a>
          <a href="#portfolio" className="text-sm hover:text-red-600">Portfolio</a>
          <a href="#contact" className="text-sm hover:text-red-600">Contact</a>

          <a href="#contact"><button
            className=
            "px-4 py-2 rounded-md text-sm font-semibold transition bg-red-600 text-white cursor-pointer"
          >
            Book Consultation
          </button></a>
        </nav>

        <button
          className={`
            md:hidden text-3xl transition
            ${scrolled ? "text-black" : "text-white"}
          `}
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className={`md:hidden ${scrolled ? "bg-white text-black" : "bg-black/80 text-white"}`}>
          <nav className="flex flex-col items-start px-6 py-4 gap-4">
            <a href="#home" onClick={() => setOpen(false)} className="hover:text-red-600">Home</a>
            <a href="#services" onClick={() => setOpen(false)} className="hover:text-red-600">Services</a>
            <a href="#portfolio" onClick={() => setOpen(false)} className="hover:text-red-600">Portfolio</a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-red-600">Contact</a>

            <a href="#contact"> <button className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md">
              Book Consultation
            </button></a>
          </nav>
        </div>
      )}
    </header>
  );
}
