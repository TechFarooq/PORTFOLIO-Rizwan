"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { frontendSkills, backendSkills, toolsSkills } from '@/lib/data';
import { Button } from '@/components/ui/button';

type StackType = 'frontend' | 'backend' | 'tools';

export function TechStackSwitcher() {
  const [activeStack, setActiveStack] = useState<StackType>('frontend');

  const stacks = {
    frontend: { skills: frontendSkills, label: 'Frontend', icon: '🎨' },
    backend: { skills: backendSkills, label: 'Backend', icon: '⚙️' },
    tools: { skills: toolsSkills, label: 'Tools', icon: '🛠️' }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my technical skills across different categories
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            {Object.entries(stacks).map(([key, stack]) => (
              <Button
                key={key}
                variant={activeStack === key ? "default" : "ghost"}
                onClick={() => setActiveStack(key as StackType)}
                className={`px-6 py-3 rounded-md transition-all ${
                  activeStack === key 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <span className="mr-2">{stack.icon}</span>
                {stack.label}
              </Button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStack}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {stacks[activeStack].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all border"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}