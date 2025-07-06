
// ye sahi hai mobile screen p but lil changes need in laptop wali

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-screen  min-h-screen lg:min-h-[800px] relative flex flex-col-reverse md:flex-row items-center justify-start pt-24 px-6  sm:px-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Animated Background Elements */}
      
      <div className="absolute  inset-0  mt-8 z-0">
        {/* Large Gradient Orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-32 right-32 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4], x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 text-cyan-400/30 text-3xl font-mono"
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {'{ }'}
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-1/4 text-purple-400/30 text-3xl font-mono"
          animate={{ y: [0, 25, 0], opacity: [0.4, 0.8, 0.4], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          {'</>'}
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3 text-pink-400/25 text-2xl font-mono"
          animate={{ x: [0, 20, 0], y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          {'() =>'}
        </motion.div>
      </div>

      {/* Image Section (First on Mobile) */}
    

      {/* Main Text Section */}
      <div className="relative  lg:mb-40 z-10 text-left lg:ml-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.span
              className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Hey there, I'm
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 0.5 }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Ashwin Chhipa
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl sm:text-2xl text-gray-300 mb-6 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Full-Stack Web Developer
            </span>
            <span className="text-gray-400"> & </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DSA Enthusiast
            </span>
          </motion.p>

          <motion.p 
            className="text-base sm:text-lg text-gray-400 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Making responsive websites, <br />because apparently users rotate their phones nowdays
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col  sm:flex-row gap-4"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300"
          >
            <motion.div
              className="absolute mb-40 inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.1 }}
            />
            <span className="relative flex items-center">
              Explore My Work
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </span>
          </motion.button>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 0, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 border-2 border-pink-400 text-pink-400 rounded-full font-semibold text-lg hover:bg-pink-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
          >
            <span className="flex items-center">
              Get in Touch
              <motion.div
                className="ml-2"
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code size={20} />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>
      </div>
      <motion.img
        src="/photo.PNG"
        alt="photo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-40 sm:w-60 md:w-72 lg:w-[360px] lg:ml-82   lg:mb-40  h-auto mb-10 md:mb-0 z-10"
      />
    </section>
  );
};

export default Hero;


