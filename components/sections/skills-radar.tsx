"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';

export function SkillsRadar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(centerX, centerY) - 60;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid circles
    for (let i = 1; i <= 5; i++) {
      const radius = (maxRadius * i) / 5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = '#e5e5e5';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Draw grid lines
    const angleStep = (2 * Math.PI) / skills.length;
    skills.forEach((_, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const endX = centerX + maxRadius * Math.cos(angle);
      const endY = centerY + maxRadius * Math.sin(angle);

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = '#e5e5e5';
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Draw skill data
    ctx.beginPath();
    skills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const radius = (skill.level / 100) * maxRadius;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
    ctx.fill();
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw skill points and labels
    skills.forEach((skill, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const radius = (skill.level / 100) * maxRadius;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      // Draw point
      ctx.beginPath();
      ctx.arc(x, y, hoveredSkill === skill.name ? 8 : 5, 0, 2 * Math.PI);
      ctx.fillStyle = skill.color;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw label
      const labelRadius = maxRadius + 30;
      const labelX = centerX + labelRadius * Math.cos(angle);
      const labelY = centerY + labelRadius * Math.sin(angle);

      ctx.fillStyle = '#374151';
      ctx.font = '14px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(skill.name, labelX, labelY);

      // Draw level text
      if (hoveredSkill === skill.name) {
        ctx.fillStyle = '#3b82f6';
        ctx.font = 'bold 12px Inter';
        ctx.fillText(`${skill.level}%`, labelX, labelY + 15);
      }
    });
  }, [hoveredSkill]);

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(centerX, centerY) - 60;

    let hoveredSkillName = null;

    skills.forEach((skill, index) => {
      const angleStep = (2 * Math.PI) / skills.length;
      const angle = index * angleStep - Math.PI / 2;
      const radius = (skill.level / 100) * maxRadius;
      const skillX = centerX + radius * Math.cos(angle);
      const skillY = centerY + radius * Math.sin(angle);

      const distance = Math.sqrt((x - skillX) ** 2 + (y - skillY) ** 2);
      if (distance < 15) {
        hoveredSkillName = skill.name;
      }
    });

    setHoveredSkill(hoveredSkillName);
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skill Overview</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive visualization of my technical skills and proficiency levels
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <canvas
            ref={canvasRef}
            width={600}
            height={600}
            className="max-w-full h-auto cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoveredSkill(null)}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                hoveredSkill === skill.name 
                  ? 'bg-blue-50 border-blue-300 dark:bg-blue-900/20' 
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
              }`}
            >
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: skill.color }}
              />
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-xs text-muted-foreground">{skill.level}%</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}