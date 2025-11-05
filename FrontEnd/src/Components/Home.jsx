import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { Code2, Users, Rocket, Mail, Phone, MapPin } from "lucide-react";
import intro from '../assets/intro.jpg'

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-950 via-black to-gray-950 min-h-screen text-white scroll-smooth font-inter">
      <Navbar />

      {/* Hero Section */}
      <section
              id="home"
              className="flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24"
            >
              <motion.h1
                className="text-5xl sm:text-6xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-md"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Welcome to <span className="text-white">Coding Club</span>
              </motion.h1>
      
              <motion.p
                className="text-gray-300 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Empowering students to become innovative thinkers and problem solvers.
                Our club inspires curiosity, collaboration, and a culture of coding —
                bridging classroom learning with real-world technologies.
              </motion.p>
      
              <motion.a
                href="#about"
                className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-blue-500/30 transition-transform transform hover:scale-110"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Discover More
              </motion.a>
      
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.15),_transparent_70%)]"></div>
            </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6 bg-gray-950 border-t border-gray-800 text-gray-300"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src={intro}
              alt="Coding Club"
              className="rounded-2xl shadow-xl shadow-blue-500/20 w-full md:w-4/5 object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
              About <span className="text-white">Coding Club</span>
            </h2>
           <p className="text-lg leading-relaxed mb-6 text-gray-300">
              The <span className="text-blue-400 font-semibold">Coding Club</span> aims to
              inculcate a culture of coding and problem-solving in students. It
              exposes members to cutting-edge technologies, encourages
              participation in hackathons, and builds confidence to work on
              real-world challenges.
            </p>
            <p className="text-lg leading-relaxed text-gray-400">
              Our goal is to nurture creativity and develop an affinity towards
              global computing models and workflows. Through workshops,
              projects, and teamwork, we empower students to evolve into
              industry-ready professionals.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
              {[ "🧠 DSA Zone","💻 Web Dev", "🤖 AI & ML", "🚀 Hackathons"].map((tag) => (
                <div
                  key={tag}
                  className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl px-4 py-2 text-sm text-blue-300 shadow-inner"
                >
                  {tag}
                </div>
              ))}
            </div>

            <motion.a
              href="#events"
              className="inline-block mt-10 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-transform transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              Explore Events
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section
        id="events"
        className="py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black text-center"
      >
        <motion.h2
          className="text-4xl font-bold mb-16 text-blue-400"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          Upcoming Highlights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[ 
            {
              icon: <Code2 size={42} />,
              title: "Coding Hackathon",
              desc: "Compete, code, and innovate in our annual hackathon event.",
            },
            {
              icon: <Users size={42} />,
              title: "Team Projects",
              desc: "Collaborate with peers to build real-world applications.",
            },
            {
              icon: <Rocket size={42} />,
              title: "Skill Workshops",
              desc: "Learn from experts in AI, Web Dev, and more.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800/40 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-blue-500/40 hover:-translate-y-2 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-400 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 bg-gray-950 border-t border-gray-800"
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-blue-400"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          Contact Us
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            className="space-y-6 text-gray-300"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg leading-relaxed">
              Have ideas, feedback, or want to collaborate?  
              Let’s connect and create something extraordinary together.
            </p>
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-400" />
              <span>codingclub@email.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-400" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-400" />
              <span>Acharya College, Bengaluru</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-700 space-y-4"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500 text-white resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 text-white py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 shadow-lg shadow-blue-500/40"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Home;
