
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building as Build, Wrench, Package, ArrowRight } from 'lucide-react';

const Help = () => {
  const services = [
    {
      icon: Build,
      title: "Build a system that proves itself",
      description: "You get a plan, the build, the measurement, and the receipts. No dead hand-offs.",
      color: "var(--creative-accent)"
    },
    {
      icon: Wrench,
      title: "Fix what’s leaking",
      description: "If your traffic is fine but your pipeline isn’t, I’ll find the break and patch it fast.",
      color: "var(--technical-accent)"
    },
    {
      icon: Package,
      title: "Ship one high-impact thing",
      description: "A landing page. A campaign. A workflow. Scoped to 30 days, tied to numbers.",
      color: "var(--primary)"
    }
  ];

  return (
    <>
      <Helmet>
        <title>How I Can Help | Marketing Engineer</title>
        <meta name="description" content="Build systems, fix leaks, or ship high-impact work. All tied to numbers and delivered with proof." />
      </Helmet>

      <div className="py-16 space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">How I Can Help</h1>
          <p className="text-xl text-muted-foreground">Build, fix, or ship. Always with proof.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 group relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: 'spring' }}
            >
              <motion.div 
                className="absolute top-0 left-0 w-full h-1" 
                style={{ background: `linear-gradient(90deg, ${service.color}, transparent)`}}
                initial={{ x: "-100%" }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.8, ease: 'circOut', delay: index * 0.2 }}
              />
              
              <div className="relative z-10">
                <service.icon className="w-10 h-10 mb-6" style={{ color: service.color }} />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/contact">
            <motion.div
                className="relative group inline-block"
                whileHover="hover"
              >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-creative-accent to-technical-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                variants={{ hover: { scale: 1.15 } }}
              ></motion.div>
              <div className="relative px-8 py-4 text-lg font-semibold rounded-md bg-background text-foreground hover:bg-transparent transition-colors flex items-center gap-2">
                Invite me to review your funnel <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
              </div>
            </motion.div>
          </Link>
           <p className="text-sm text-muted-foreground mt-4">NDA-friendly; full receipts available privately.</p>
        </motion.div>

      </div>
    </>
  );
};

export default Help;
