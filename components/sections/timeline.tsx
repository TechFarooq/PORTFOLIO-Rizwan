"use client";

import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';
import { GraduationCap, Briefcase, Award, Rocket } from 'lucide-react';

export function Timeline() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'education': return <GraduationCap className="h-6 w-6" />;
      case 'internship': return <Briefcase className="h-6 w-6" />;
      case 'achievement': return <Award className="h-6 w-6" />;
      case 'project': return <Rocket className="h-6 w-6" />;
      default: return <Briefcase className="h-6 w-6" />;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'education': return 'bg-green-500';
      case 'internship': return 'bg-blue-500';
      case 'achievement': return 'bg-yellow-500';
      case 'project': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey So Far</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my educational background, internships, and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-start mb-8"
              >
                {/* Timeline Icon */}
                <div className={`flex items-center justify-center w-16 h-16 rounded-full text-white ${getColor(experience.type)} shadow-lg z-10`}>
                  {getIcon(experience.type)}
                </div>

                {/* Content */}
                <div className="ml-6 flex-1">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                      <span className="text-sm text-blue-600 font-medium">{experience.duration}</span>
                    </div>
                    <p className="text-lg text-muted-foreground mb-2">{experience.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{experience.location}</p>
                    <ul className="space-y-2">
                      {experience.description.map((desc, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}