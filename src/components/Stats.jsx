import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Target, Clock, TrendingUp, Zap, BookOpen, Code2, Brain } from 'lucide-react';

const Stats = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [counters, setCounters] = useState({
    projects: 0,
    technologies: 0,
    problems: 0,
    hours: 0
  });

  const finalValues = {
    projects: 25,
    technologies: 12,
    problems: 10,
    hours: 400
  };

  useEffect(() => {
    if (inView) {
      const duration = 2500;
      const steps = 100;
      const stepTime = duration / steps;

      const intervals = Object.keys(finalValues).map(key => {
        const finalValue = finalValues[key];
        const increment = finalValue / steps;
        let currentValue = 0;

        return setInterval(() => {
          currentValue += increment;
          if (currentValue >= finalValue) {
            currentValue = finalValue;
            clearInterval(intervals[Object.keys(finalValues).indexOf(key)]);
          }
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(currentValue)
          }));
        }, stepTime);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [inView]);

  const stats = [
    {
      icon: <Trophy className="w-8 h-8" />,
      value: counters.projects,
      suffix: '+',
      label: 'Projects Built',
      description: 'Full-stack applications',
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
      glowColor: 'shadow-yellow-500/25'
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: counters.technologies,
      suffix: '+',
      label: 'Technologies',
      description: 'Modern tech stack',
      gradient: 'from-blue-400 via-cyan-500 to-teal-500',
      glowColor: 'shadow-blue-500/25'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: counters.problems,
      suffix: '+',
      label: 'DSA Problems',
      description: 'Algorithms mastered',
      gradient: 'from-green-400 via-emerald-500 to-lime-500',
      glowColor: 'shadow-green-500/25'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: counters.hours,
      suffix: '+',
      label: 'Learning Hours',
      description: 'Continuous improvement',
      gradient: 'from-purple-400 via-pink-500 to-rose-500',
      glowColor: 'shadow-purple-500/25'
    }
  ];

  const currentlyLearning = [
    {
      title: 'Advanced React Patterns',
      icon: <Code2 className="w-5 h-5" />,
      progress: 75,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'System Design',
      icon: <Brain className="w-5 h-5" />,
      progress: 60,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'DevOps Basics',
      icon: <Zap className="w-5 h-5" />,
      progress: 45,
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Advanced DSA',
      icon: <BookOpen className="w-5 h-5" />,
      progress: 80,
      color: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section id="stats" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
      <motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8 }}
  className="text-center mb-16 overflow-visible"
>
  <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-orange-400 bg-clip-text text-transparent leading-tight pb-1">
    My Learning Stats
  </h2>
  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
  A numeric flex of how much sanity I’ve sacrificed to keep “learning and growing”
  </p>
</motion.div>


        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className={`relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-500 text-center hover:shadow-2xl ${stat.glowColor}`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <motion.div
                    className="text-5xl font-bold text-white mb-2"
                    initial={{ scale: 0.5 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {stat.value}{stat.suffix}
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-300 mb-2 group-hover:text-white transition-colors">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
