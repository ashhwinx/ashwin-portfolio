import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Sparkles, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    
    {
      title: 'Gambling App',
      description: 'Interactive gaming platform with sophisticated game logic, user authentication, and clean UI design for an engaging user experience.',
      longDescription: 'A real-time gaming platform featuring advanced algorithms and seamless user interactions.',
      tech: [
        { name: 'React.js', icon: <Code className="w-3 h-3" />, color: 'bg-cyan-500' },
        { name: 'Node.js', icon: <Database className="w-3 h-3" />, color: 'bg-green-500' },
        { name: 'MongoDB', icon: <Database className="w-3 h-3" />, color: 'bg-emerald-500' },
        { name: 'Express.js', icon: <Globe className="w-3 h-3" />, color: 'bg-blue-500' },
        
        { name: 'JWT', icon: <Code className="w-3 h-3" />, color: 'bg-purple-500' }
      ],
     
      gradient: 'from-blue-500 via-purple-500 to-pink-500',
      glowColor: 'shadow-blue-500/25',
      delay: 0,
      liveLink: 'https://color-trading-flame.vercel.app/',
      githubLink: 'https://github.com/ashhwinx/ColorTrading-App-Full-Stack-'
    },
    {
      title: 'UnivMate',
      description: 'University resource-sharing platform enabling students to share notes, assignments, and study materials with secure authentication and file upload capabilities.',
      longDescription: 'A comprehensive platform designed to revolutionize how university students collaborate and share academic resources.',
      tech: [
        { name: 'React.js', icon: <Code className="w-3 h-3" />, color: 'bg-cyan-500' },
        { name: 'Node.js', icon: <Database className="w-3 h-3" />, color: 'bg-green-500' },
        { name: 'MongoDB', icon: <Database className="w-3 h-3" />, color: 'bg-emerald-500' },
        { name: 'Express.js', icon: <Globe className="w-3 h-3" />, color: 'bg-blue-500' },
        { name: 'JWT Auth', icon: <Code className="w-3 h-3" />, color: 'bg-purple-500' },
        { name: 'Multer', icon: <Database className="w-3 h-3" />, color: 'bg-orange-500' }
      ],
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      glowColor: 'shadow-green-500/25',
      delay: 0.2,
      liveLink: 'https://univmate.com/',
      githubLink: 'https://github.com/ashhwinx/univmate'
    },
    {
      title: 'Website Cloning',
      description: 'A curated set of clean, minimal frontend starter projects perfect for learning, prototyping, or launching your next idea with ease.',
      longDescription: 'Showcasing mastery of frontend technologies through precise recreation of complex web interfaces.',
      tech: [
        { name: 'React.js', icon: <Code className="w-3 h-3" />, color: 'bg-cyan-500' },
        { name: 'Tailwind CSS', icon: <Code className="w-3 h-3" />, color: 'bg-blue-500' },
        { name: 'React Bite', icon: <Code className="w-3 h-3" />, color: 'bg-red-500' },
        { name: 'Framer Motion', icon: <Globe className="w-3 h-3" />, color: 'bg-purple-500' },
        { name: 'JavaScript', icon: <Code className="w-3 h-3" />, color: 'bg-yellow-500' },
        { name: 'CSS3', icon: <Code className="w-3 h-3" />, color: 'bg-pink-500' }
      ],
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      glowColor: 'shadow-purple-500/25',
      delay: 0.4,
      liveLink: 'https://github.com/ashhwinx/SImple-Base-Projects',
      githubLink: 'https://github.com/ashhwinx/SImple-Base-Projects'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A chaotic gallery of sleepless nights and caffeine fueled breakdowns aka my “latest work.”
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: project.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group cursor-pointer"
            >
              <div className="relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className={`relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-500 h-full flex flex-col hover:shadow-2xl ${project.glowColor}`}>
                  <div className="mb-6">
                    <div className={`h-1 rounded-full bg-gradient-to-r ${project.gradient} mb-6 group-hover:h-2 transition-all duration-300`}></div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">
                      {project.description}
                    </p>
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: 'auto' }}
                      className="text-gray-400 text-sm leading-relaxed overflow-hidden"
                    >
                      {project.longDescription}
                    </motion.p>
                  </div>

                  <div className="flex-1 mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: project.delay + (techIndex * 0.05) }}
                          whileHover={{ scale: 1.1 }}
                          className={`flex items-center px-3 py-1 ${tech.color} rounded-full text-white text-xs font-medium hover:shadow-lg transition-all duration-300`}
                        >
                          {tech.icon}
                          <span className="ml-1">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center text-white justify-center px-4 py-3 bg-gradient-to-r ${project.gradient}  rounded-xl font-medium hover:shadow-lg transition-all duration-300 group/btn`}
                    >
                      <ExternalLink className="w-4  h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-3 border border-gray-600 text-gray-300 rounded-xl font-medium hover:bg-gray-800 hover:text-white hover:border-gray-500 transition-all duration-300 group/btn"
                    >
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.8 }}
  className="text-center mt-12"
>
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href="https://github.com/ashhwinx"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-xl font-medium border border-gray-600 hover:border-gray-500 hover:shadow-lg transition-all duration-300"
  >
    View All Projects
  </motion.a>
</motion.div>

      </div>
    </section>
  );
};

export default Projects;
