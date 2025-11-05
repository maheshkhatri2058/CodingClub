import React from "react";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Logo / About Section */}
        <div>
          <h1 className="text-2xl font-bold text-blue-400 mb-3">
            Coding<span className="text-white">Club</span>
          </h1>
          <p className="text-gray-400 text-sm leading-relaxed">
            A student-driven community fostering innovation, coding excellence, 
            and teamwork. Join us to build, learn, and grow together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-400">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-blue-400 transition">
                Events
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-400">
            Follow Us
          </h2>
          <div className="flex justify-center md:justify-start space-x-5">
            <a
              href="#"
              className="hover:text-blue-400 transition transform hover:scale-110"
            >
              <Facebook size={22} />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition transform hover:scale-110"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition transform hover:scale-110"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition transform hover:scale-110"
            >
              <Github size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-800 mt-10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Coding Club — All Rights Reserved.
        <br className="sm:hidden" />
      </div>
    </footer>
  );
};

export default Footer;
