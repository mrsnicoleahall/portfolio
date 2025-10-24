
import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import SeamGlow from '@/components/SeamGlow';

const SplitPanel = ({ leftContent, rightContent, leftTitle, rightTitle }) => {
  const [mouseX, setMouseX] = useState(0.5);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    setMouseX(x);
  };

  return (
    <div 
      className="relative w-full min-h-[600px] flex"
      onMouseMove={handleMouseMove}
    >
      <motion.div 
        className="flex-1 p-8 md:p-12 relative"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 creative-accent">
          {leftTitle}
        </h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          {leftContent}
        </div>
      </motion.div>

      <SeamGlow mouseX={mouseX} />

      <motion.div 
        className="flex-1 p-8 md:p-12 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 technical-accent">
          {rightTitle}
        </h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          {rightContent}
        </div>
      </motion.div>
    </div>
  );
};

export default SplitPanel;
