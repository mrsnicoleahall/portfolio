
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const NodeChart = ({ skills }) => {
  const [activeNode, setActiveNode] = useState(null);

  const quadrants = [
    { name: 'Invent', items: skills.invent, color: 'var(--creative-accent)', position: 'items-start justify-start text-left' },
    { name: 'Amplify', items: skills.amplify, color: 'var(--creative-accent)', position: 'items-end justify-start text-right' },
    { name: 'Optimize', items: skills.optimize, color: 'var(--technical-accent)', position: 'items-start justify-end text-left' },
    { name: 'Automate', items: skills.automate, color: 'var(--technical-accent)', position: 'items-end justify-end text-right' },
  ];

  return (
    <div className="relative aspect-square max-w-2xl mx-auto">
      {/* Crosshairs */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-border"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-px bg-border"></div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 h-full w-full">
        {quadrants.map((quadrant, qIndex) => (
          <div key={quadrant.name} className={`p-8 flex flex-col ${quadrant.position} gap-4`}>
            <h3 className="text-xl font-bold" style={{ color: quadrant.color }}>
              {quadrant.name}
            </h3>
            <div className={`flex flex-col gap-3 ${quadrant.position.includes('items-end') ? 'items-end' : 'items-start'}`}>
              {quadrant.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative cursor-pointer"
                  onHoverStart={() => setActiveNode(item)}
                  onHoverEnd={() => setActiveNode(null)}
                >
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: quadrant.color }}
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {activeNode && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-background border border-border rounded-md text-center shadow-2xl pointer-events-none">
          <p className="font-bold text-foreground">{activeNode.name}</p>
          <p className="text-sm text-muted-foreground">{activeNode.description}</p>
        </div>
      )}
    </div>
  );
};

export default NodeChart;
