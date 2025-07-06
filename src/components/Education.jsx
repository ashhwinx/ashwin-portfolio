import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  GraduationCap,
  BookOpen,
  Code2,
  Brain,
  Rocket,
  Zap,
  Target,
  Trophy,
  Sparkles
} from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const milestones = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Started Web Dev Journey',
      description: 'Learned HTML, CSS, JavaScript fundamentals',
      period: '2024',
      gradient: 'from-cyan-400 to-blue-500',
      delay: 0
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Mastered React & Tailwind',
      description: 'Built 10+ responsive projects with modern frameworks',
      period: '2024',
      gradient: 'from-blue-400 to-purple-500',
      delay: 0.1
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Dived into Node.js & MongoDB',
      description: 'Created full-stack applications with MERN stack',
      period: '2024',
      gradient: 'from-purple-400 to-pink-500',
      delay: 0.2
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Solved 10+ DSA Problems',
      description: 'Strengthened algorithmic thinking and problem-solving',
      period: '2024',
      gradient: 'from-pink-400 to-red-500',
      delay: 0.3
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Created Full-Stack Projects',
      description: 'UnivMate, Gambling App, and Website clones',
      period: '2024',
      gradient: 'from-red-400 to-orange-500',
      delay: 0.4
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Currently Learning',
      description: 'React Native, DSA , DevOps, System Design, AI modification.',
      period: 'Present',
      gradient: 'from-orange-400 to-yellow-500',
      delay: 0.5
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
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
          

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent">
            My Education & Growth Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          My CS journey? Just vibes, caffeine, and unresolved promises. Learning never ends, and neither does the pain. But at least the websites look kinda cute.
          </p>
        </motion.div>

        {/* Education Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50"></div>

            <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 mb-6"
                >
                  <GraduationCap className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-2">B.Tech in Computer Science</h3>
                <p className="text-xl text-blue-400 mb-4">Institute of Engineering and Technology</p>
                <p className="text-gray-300 mb-6">Currently in 1st Year</p>

                <div className="flex flex-wrap justify-center gap-3">
                  {['DSA', 'Software Engineering', 'CS Fundamentals', 'Database Systems'].map((subject, index) => (
                    <motion.span
                      key={subject}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-600/50 hover:border-blue-400/50 hover:text-blue-300 transition-all duration-300 cursor-pointer"
                    >
                      {subject}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-orange-500 rounded-full opacity-30"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: milestone.delay }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
              >
                <div className="flex-1 max-w-md">
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${milestone.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                    <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-500">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${milestone.gradient} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          {milestone.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {milestone.title}
                          </h4>
                          <span className="text-sm text-gray-400">{milestone.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: milestone.delay + 0.2 }}
                  className="relative z-10"
                >
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${milestone.gradient} border-4 border-gray-900 shadow-lg`}>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: milestone.delay }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${milestone.gradient} opacity-50 blur-sm`}
                    />
                  </div>
                </motion.div>

                <div className="flex-1 max-w-md"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Goal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-50"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500">
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-block mb-4"
              >
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">
                The Journey Continues...
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
              Life’s just a loop of errors, caffeine, and pretending I have a five-year plan. Still coding, still confused, still convincing myself this is progress.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
