
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ManagerManual = () => {
  const guidelines = [
    "Clear goals, short updates, visible proof.",
    "Weekly owner map.",
    "Access day one: GA4, CRM, repo, ad accounts.",
    "Feedback: precise beats polite.",
    "Accountability: if it’s not checked, it’s not done.",
    "No vanity metrics. Ever."
  ];

  return (
    <>
      <Helmet>
        <title>Manager Manual | Marketing Engineer</title>
        <meta name="description" content="How to work with me (so it works)." />
      </Helmet>

      <div className="py-20 space-y-[12vh]">
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">How to work with me (so it works).</h1>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {guidelines.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              >
                <Check className="w-5 h-5 text-creative-accent flex-shrink-0 mt-1" />
                <p className="text-muted-foreground text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default ManagerManual;
