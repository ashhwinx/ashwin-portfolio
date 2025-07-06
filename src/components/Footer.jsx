import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Code2,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <div className="inline-flex items-center mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-3"
              >
                <Code2 className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ashwin Chhipa
              </span>
            </div>
          </motion.div>

          {/* Copyright and Built With */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 space-y-4"
          >
            {/* <Made with React, Tailwind & just enough mental instability — by Ashwin /> */}

            <div className="text-gray-500 flex flex-col items-center justify-center gap-2 sm:flex-row sm:flex-wrap sm:gap-1 sm:justify-center text-sm sm:text-base">
              <span>Made with</span>

              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
                React
              </span>

              <span>&</span>

              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">
                Tailwind
              </span>

              <span>& just enough mental instability — by</span>

              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">
                Ashwin
              </span>
            </div>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={scrollToTop}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm text-gray-300 rounded-full transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50 hover:text-white overflow-hidden"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />

              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mr-2"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.div>
              <span className="relative font-medium">Back to Top</span>

              {/* Sparkle Effect */}
              <motion.div
                className="absolute top-1 right-1"
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Sparkles className="w-3 h-3 text-cyan-400" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Bottom Decoration */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 pt-8 border-t border-gray-800/50"
          >
            <div className="flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-2"
              />
              <span className="text-sm text-gray-500">
                Crafted with passion and precision
              </span>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full ml-2"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
