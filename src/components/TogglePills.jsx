
import React from 'react';
import { motion } from 'framer-motion';

const TogglePills = ({ options, active, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {options.map((option) => (
        <motion.button
          key={option}
          onClick={() => onChange(option)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
            active === option
              ? 'bg-[#00F5D4] text-white shadow-lg shadow-[#00F5D4]/30'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {option}
        </motion.button>
      ))}
    </div>
  );
};

export default TogglePills;
