import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code,
  Database,
  Server,
  Settings,
  Layers,
  Globe,
  Zap,
  Terminal,
  GitBranch,
  Palette
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'React.js', icon: <Layers className="w-4 h-4" /> },
        { name: 'Tailwind CSS', icon: <Palette className="w-4 h-4" /> },
        { name: 'JavaScript', icon: <Zap className="w-4 h-4" /> },
        { name: 'HTML5', icon: <Globe className="w-4 h-4" /> },
        { name: 'CSS3', icon: <Palette className="w-4 h-4" /> }
      ],
      gradient: 'from-cyan-400 via-blue-500 to-purple-600',
      glowColor: 'shadow-cyan-500/25'
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', icon: <Terminal className="w-4 h-4" /> },
        { name: 'Express.js', icon: <Server className="w-4 h-4" /> },
        { name: 'REST APIs', icon: <Globe className="w-4 h-4" /> },
        { name: 'Authentication', icon: <Settings className="w-4 h-4" /> }
      ],
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
      glowColor: 'shadow-green-500/25'
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'MongoDB', icon: <Database className="w-4 h-4" /> },
        { name: 'Mongoose', icon: <Layers className="w-4 h-4" /> },
        { name: 'Aggregation', icon: <Settings className="w-4 h-4" /> },
        { name: 'Database Design', icon: <Terminal className="w-4 h-4" /> }
      ],
      gradient: 'from-purple-400 via-pink-500 to-red-500',
      glowColor: 'shadow-purple-500/25'
    },
    {
      title: 'Tools & Others',
      icon: <Settings className="w-6 h-6" />,
      skills: [
        { name: 'Git', icon: <GitBranch className="w-4 h-4" /> },
        { name: 'GitHub', icon: <GitBranch className="w-4 h-4" /> },
        { name: 'Postman', icon: <Globe className="w-4 h-4" /> },
        { name: 'VS Code', icon: <Terminal className="w-4 h-4" /> },
        { name: 'npm', icon: <Settings className="w-4 h-4" /> }
      ],
      gradient: 'from-orange-400 via-red-500 to-pink-600',
      glowColor: 'shadow-orange-500/25'
    }
  ];

  const mernStack = [
    {
      letter: 'M',
      name: 'MongoDB',
      description: 'NoSQL Database',
      gradient: 'from-green-400 to-emerald-600',
      delay: 0
    },
    {
      letter: 'E',
      name: 'Express.js',
      description: 'Backend Framework',
      gradient: 'from-blue-400 to-cyan-600',
      delay: 0.1
    },
    {
      letter: 'R',
      name: 'React.js',
      description: 'Frontend Library',
      gradient: 'from-cyan-400 to-blue-600',
      delay: 0.2
    },
    {
      letter: 'N',
      name: 'Node.js',
      description: 'Runtime Environment',
      gradient: 'from-green-400 to-lime-600',
      delay: 0.3
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 mb-6"
          >
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm font-medium text-cyan-300 uppercase tracking-wider">
              Technical Expertise
            </span>
          </motion.div> */}

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Passionately pushing pixels while ignoring push notifications from life. Modern tech is fun until your sanity goes async.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className={`bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl ${category.glowColor} hover:scale-105`}>
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: (categoryIndex * 0.1) + (skillIndex * 0.05)
                      }}
                      className="flex items-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-cyan-500/50 hover:bg-gray-800/50 transition-all duration-300 group/skill cursor-pointer"
                    >
                      <div className="text-cyan-400 mr-3 group-hover/skill:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                      <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MERN Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500">
            <motion.h3
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              MERN Stack Developer
            </motion.h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {mernStack.map((tech, index) => (
                <motion.div
                  key={tech.letter}
                  initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                  animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 1 + tech.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 15,
                    transition: { duration: 0.3 }
                  }}
                  className="group cursor-pointer perspective-1000"
                >
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className={`relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-500 transform-gpu`}>
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${tech.gradient} flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300`}>
                        {tech.letter}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {tech.name}
                      </h4>
                      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
