import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  Sparkles,
  Heart,
  Zap,
} from "lucide-react";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Thank you for your message! I'll get back to you soon. 🚀");
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/ashhwinx",
      gradient: "from-gray-600 to-gray-800",
      hoverGradient: "from-gray-500 to-gray-700",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ashwin-chhipa",
      gradient: "from-blue-500 to-blue-700",
      hoverGradient: "from-blue-400 to-blue-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:chhipaashwin988@gmail.com?subject=Let's%20Connect&body=Hi%20Ashwin,%0AI%20wanted%20to%20talk%20about...",
      gradient: "from-green-500 to-emerald-600",
      hoverGradient: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
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

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-400 bg-clip-text text-transparent">
            Let's Collaborate
          </h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Freelance? Internship? Wild startup dream at 3AM? I’m in. I’ll code
            like my sanity depends on it because, honestly, it kinda does.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              Let's connect and make magic happen
            </span>
            <motion.span
              className="inline-block ml-2"
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              💡
            </motion.span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Zap className="w-6 h-6 text-cyan-400 mr-2" />
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "email", "message"].map((field, index) => (
                  <div key={field} className="relative">
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    </label>
                    {field !== "message" ? (
                      <motion.input
                        type={field === "email" ? "email" : "text"}
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField(null)}
                        required
                        whileFocus={{ scale: 1.02 }}
                        className={`w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                          field === "name"
                            ? "focus:border-cyan-400 focus:ring-cyan-400/20"
                            : "focus:border-purple-400 focus:ring-purple-400/20"
                        }`}
                        placeholder={
                          field === "name" ? "John Doe" : "john@example.com"
                        }
                      />
                    ) : (
                      <motion.textarea
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={5}
                        whileFocus={{ scale: 1.02 }}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project or idea..."
                      />
                    )}
                    {focusedField === field && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`absolute inset-0 border-2 rounded-xl pointer-events-none ${
                          field === "name"
                            ? "border-cyan-400/50"
                            : field === "email"
                            ? "border-purple-400/50"
                            : "border-pink-400/50"
                        }`}
                      />
                    )}
                  </div>
                ))}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg  transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                      <motion.div
                        className="absolute  inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-purple-400 mr-2" />
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center p-3 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Rajasthan, India</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center p-3 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">
                      chhipaashwin988@gmail.com
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Sparkles className="w-6 h-6 text-cyan-400 mr-2" />
                  Follow Me
                </h3>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, delay: 0.1 }}
                  className="flex  space-x-6 "
                >
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{
                        scale: 1.2,
                        boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 text-gray-400 ${link.hoverColor} transition-all duration-300 hover:border-gray-600/50 group`}
                    >
                      <motion.div
                        whileHover={{ rotate: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        {link.icon}
                      </motion.div>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <motion.div
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    🚀
                  </motion.div>
                  <span className="ml-2">Let's Build Something Amazing</span>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Passionate about projects, people, and pushing updates at 2AM
                  Got an idea? I’ll bring it to life with tech, trauma, and a
                  sick sense of humor.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
