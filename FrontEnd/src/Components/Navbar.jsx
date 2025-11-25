// Navbar.js
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-400">
              Code<span className="text-white">X</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <HashLink smooth to="/#home" className="hover:text-blue-400 transition">
              Home
            </HashLink>
            <HashLink smooth to="/#about" className="hover:text-blue-400 transition">
              About
            </HashLink>
            <HashLink smooth to="/#events" className="hover:text-blue-400 transition">
              Events
            </HashLink>
            <Link to="/discussion" className="hover:text-blue-400 transition">
              Open Discussion
            </Link>
            <HashLink smooth to="/#contact" className="hover:text-blue-400 transition">
              Contact
            </HashLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="flex flex-col items-center space-y-4 py-4">
            <HashLink smooth to="/#home" onClick={toggleMenu} className="hover:text-blue-400">
              Home
            </HashLink>
            <HashLink smooth to="/#about" onClick={toggleMenu} className="hover:text-blue-400">
              About
            </HashLink>
            <HashLink smooth to="/#events" onClick={toggleMenu} className="hover:text-blue-400">
              Events
            </HashLink>
            <Link to="/discussion" onClick={toggleMenu} className="hover:text-blue-400">
              Open Discussion
            </Link>
            <HashLink smooth to="/#projects" onClick={toggleMenu} className="hover:text-blue-400">
              Projects
            </HashLink>
            <HashLink smooth to="/#contact" onClick={toggleMenu} className="hover:text-blue-400">
              Contact
            </HashLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
