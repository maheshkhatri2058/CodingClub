import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { Code2, Users, Rocket, Mail, Phone, MapPin } from "lucide-react";

const Home= () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen text-white scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center min-h-screen px-6 pt-20"
      >
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-4 text-blue-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-white">Coding Club</span>
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg sm:text-xl max-w-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Empowering students to code, collaborate, and create innovative tech
          solutions together.
        </motion.p>

        <motion.a
          href="#about"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-transform transform hover:scale-110 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Explore More
        </motion.a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 bg-gray-950 text-center border-t border-gray-800"
      >
        <motion.h2
          className="text-4xl font-bold mb-8 text-blue-400"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          About Us
        </motion.h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          The Coding Club is a community of passionate developers, learners, and
          innovators who love to explore technology. We organize coding events,
          hackathons, and workshops to help members grow their technical skills
          and build real-world projects.
        </p>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-blue-400"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          Upcoming Highlights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Code2 size={40} />,
              title: "Coding Hackathon",
              desc: "Compete, code, and innovate in our annual hackathon event.",
            },
            {
              icon: <Users size={40} />,
              title: "Team Projects",
              desc: "Collaborate with peers to build real-world applications.",
            },
            {
              icon: <Rocket size={40} />,
              title: "Skill Workshops",
              desc: "Learn from experts in AI, Web Dev, and more.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-400 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gray-950 border-t border-gray-800"
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-10 text-blue-400"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
        >
          Contact Us
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Contact Info */}
          <motion.div
            className="space-y-6 text-gray-300"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg leading-relaxed">
              Have questions or want to collaborate?  
              Reach out to us — we’d love to connect!
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
            className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-4"
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
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-transform transform hover:scale-105"
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
