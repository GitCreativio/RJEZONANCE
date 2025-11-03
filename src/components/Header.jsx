import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0   z-50 transition-all duration-300 ${
        scrolled ? "bg-white  text-black shadow-md" : "bg-transparent text-white mt-10"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-10 px-5 md:px-24">
        {/* Logo */}
        <a href="#">
          <h1 className="text-3xl cursor-pointer font-bold">
          ZOOM <span className="text-red-500">Delivery</span>
        </h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden text-lg font-semibold md:flex space-x-6">
          <a href="#home" className="relative group">
            Home
            <span className="absolute  left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="relative group">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#why" className="relative group">
            Why Us
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with smooth slide-down */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`flex flex-col items-center space-y-4 py-6 ${
            scrolled
              ? "bg-white text-black shadow-md"
              : "bg-green-700 text-white"
          }`}
        >
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-400"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-400"
          >
            About
          </a>
          <a
            href="#why"
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-400"
          >
            Why Us
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-green-400"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
