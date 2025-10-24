
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const Ethics = () => {
  const lines = [
    "No fake reviews.",
    "No fabricated data.",
    "No dark patterns.",
    "No manipulative scarcity.",
    "Private receipts under NDA only."
  ];

  return (
    <>
      <Helmet>
        <title>Ethics | Marketing Engineer</title>
        <meta name="description" content="Lines I don’t cross." />
      </Helmet>

      <div className="py-20 space-y-[12vh]">
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Lines I don’t cross.</h1>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {lines.map((line, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              >
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-muted-foreground text-lg">{line}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Ethics;
