import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/Logo.jpg";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

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
        ${isHome
          ? scrolled
            ? "bg-white shadow-md text-black"
            : "bg-transparent text-white"
          : "bg-white shadow-md text-black"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <img src={Logo} className="w-14 h-14 object-contain rounded-full" />
          <div>
            <div className="text-lg font-semibold">Inayat</div>
            <div className="text-xs opacity-80">Interior & Decorators</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 items-center hower:yellow-400">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>

          <a
            href="tel:9694218177"
            className="px-4 py-2 rounded-md text-sm font-semibold bg-red-600 text-white flex items-center gap-2 hover:bg-red-700 transition"
          >
            <FaPhoneAlt />
            <span>Call: 9873002495</span>
          </a>

        </nav>

        <button
          className={`md:hidden text-3xl transition ${isHome
              ? scrolled
                ? "text-black"
                : "text-white"
              : "text-black"
            }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className={`md:hidden ${isHome
              ? scrolled
                ? "bg-white text-black"
                : "bg-black/80 text-white"
              : "bg-white text-black"
            }`}
        >
          <nav className="flex flex-col items-start px-6 py-4 gap-4">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/protfolio" onClick={() => setOpen(false)}>Protfolio</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
               <a
            href="tel:9694218177"
            className="px-4 py-2 rounded-md text-sm font-semibold bg-red-600 text-white flex items-center gap-2 hover:bg-red-700 transition"
          >
            <FaPhoneAlt />
            <span>Call: 9873002495</span>
          </a>
          </nav>
        </div>
      )}
    </header>
  );
}
