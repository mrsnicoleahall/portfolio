
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, Palette, BarChart, Zap, FileText, Workflow } from 'lucide-react';

const About = () => {
  const [expandedTechnology, setExpandedTechnology] = useState(null);
  const [expandedCreativity, setExpandedCreativity] = useState(null);

  const technologySkills = [
    {
      icon: Code,
      title: "Full-Stack Development",
      shortDesc: "React, Node.js, APIs",
      fullDesc: "Building production-ready web applications with React, Vite, and modern JavaScript. Creating API integrations, data pipelines, and custom tooling. I write clean, maintainable code that scales."
    },
    {
      icon: BarChart,
      title: "Data & Analytics",
      shortDesc: "GA4, BigQuery, Looker Studio",
      fullDesc: "Setting up tracking architectures that capture meaningful data. Building dashboards that answer business questions. Creating ETL pipelines that transform raw data into insights executives can act on."
    },
    {
      icon: Zap,
      title: "Automation & CI/CD",
      shortDesc: "Scripts, workflows, testing",
      fullDesc: "Writing Node.js scripts to automate repetitive tasks. Building CI/CD pipelines for quality assurance. Creating testing frameworks that catch bugs before they reach production. Removing human error from critical processes."
    },
    {
      icon: Workflow,
      title: "Systems Architecture",
      shortDesc: "Integration, optimization, performance",
      fullDesc: "Designing systems that connect marketing tools, CRMs, and data warehouses. Optimizing site performance for Core Web Vitals. Building scalable infrastructure that handles growth without breaking."
    }
  ];

  const creativitySkills = [
    {
      icon: Palette,
      title: "Brand & Design",
      shortDesc: "Visual identity, UI/UX, motion",
      fullDesc: "Crafting visual identities that communicate positioning at a glance. Designing interfaces that guide users naturally toward conversion. Creating animations and micro-interactions that feel premium and polished."
    },
    {
      icon: FileText,
      title: "Copywriting & Content",
      shortDesc: "Conversion copy, storytelling, messaging",
      fullDesc: "Writing headlines that stop the scroll. Crafting landing page copy that converts cold traffic. Developing brand voice guides and content systems that scale. Every word earns its place or gets cut."
    },
    {
      icon: BarChart,
      title: "Strategy & Positioning",
      shortDesc: "Market research, messaging frameworks",
      fullDesc: "Mapping audience psychology and competitive landscapes. Defining unique value propositions that resonate. Creating messaging hierarchies that guide prospects from awareness to decision. Strategy informed by data, executed through design."
    },
    {
      icon: Zap,
      title: "Campaign Development",
      shortDesc: "Concepts, execution, optimization",
      fullDesc: "Developing creative concepts that cut through noise. Designing multi-channel campaigns with consistent messaging. Building lifecycle flows that nurture leads through automation. Running A/B tests to optimize creative performance."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const SkillCard = ({ skill, isExpanded, onToggle, accentColor, glowClass, side }) => {
    const Icon = skill.icon;
    return (
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        <motion.button
          onClick={onToggle}
          className="w-full text-left p-5 rounded-xl transition-all duration-300 bg-card/30 backdrop-blur-sm border border-border/30 hover:border-border hover:bg-card/50"
          whileHover={{ x: side === 'left' ? 5 : -5, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-start gap-4">
            <div className={`p-2 rounded-lg ${isExpanded ? `bg-${accentColor}/20` : 'bg-card'} transition-colors duration-300`}>
              <Icon className={`w-6 h-6 ${isExpanded ? accentColor : 'text-muted-foreground'} transition-colors duration-300`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className={`font-bold text-lg ${isExpanded ? `${accentColor} ${glowClass}` : ''} transition-all duration-300`}>
                  {skill.title}
                </h3>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <ChevronDown className={`w-5 h-5 ${isExpanded ? accentColor : 'text-muted-foreground'}`} />
                </motion.div>
              </div>
              <p className="text-sm text-muted-foreground">{skill.shortDesc}</p>
            </div>
          </div>
        </motion.button>
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 pt-3 text-muted-foreground leading-relaxed">
                {skill.fullDesc}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <>
      <Helmet>
        <title>About | Nicole Hall - Marketing Engineer</title>
        <meta name="description" content="Two systems. One person. Zero hand-offs. Operating at the intersection of creative and technical work." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <motion.div
        className="py-16 space-y-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Two Systems. One Person.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Zero hand-offs that kill momentum. No translations lost between departments. Just direct execution from strategy to deployment.
          </p>
        </motion.section>

        {/* Dual Panel Section */}
        <motion.section
          variants={itemVariants}
          className="relative overflow-hidden"
        >
          {/* Animated Wave Intersection - showing movement between worlds */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Large waves converging at center */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 100% 50% at 0% 50%, var(--technical-accent) 0%, transparent 50%),
                  radial-gradient(ellipse 100% 50% at 100% 50%, var(--creative-accent) 0%, transparent 50%)
                `,
              }}
              animate={{
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            {/* Multiple ocean-like flowing sine waves filling the background */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
              <defs>
                <linearGradient id="intersectionGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--technical-accent)" stopOpacity="0.12" />
                  <stop offset="50%" stopColor="var(--creative-accent)" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="var(--technical-accent)" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient id="intersectionGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--creative-accent)" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="var(--technical-accent)" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="var(--creative-accent)" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="intersectionGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--technical-accent)" stopOpacity="0.08" />
                  <stop offset="50%" stopColor="var(--creative-accent)" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="var(--technical-accent)" stopOpacity="0.08" />
                </linearGradient>
              </defs>
              {/* Wave 1 - Main sine wave - Full height */}
              <motion.path
                d="M 0,500 C 150,100 300,900 450,500 C 600,100 750,900 900,500 C 950,200 1000,500 1000,500"
                fill="none"
                stroke="url(#intersectionGradient1)"
                strokeWidth="350"
                strokeLinecap="round"
                animate={{
                  d: [
                    'M 0,500 C 150,100 300,900 450,500 C 600,100 750,900 900,500 C 950,200 1000,500 1000,500',
                    'M 0,500 C 150,900 300,100 450,500 C 600,900 750,100 900,500 C 950,800 1000,500 1000,500',
                    'M 0,500 C 150,100 300,900 450,500 C 600,100 750,900 900,500 C 950,200 1000,500 1000,500',
                  ],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {/* Wave 2 - Secondary wave - Full height */}
              <motion.path
                d="M 0,300 C 200,50 400,950 600,300 C 800,50 900,800 1000,300"
                fill="none"
                stroke="url(#intersectionGradient2)"
                strokeWidth="300"
                strokeLinecap="round"
                animate={{
                  d: [
                    'M 0,300 C 200,50 400,950 600,300 C 800,50 900,800 1000,300',
                    'M 0,300 C 200,950 400,50 600,300 C 800,950 900,200 1000,300',
                    'M 0,300 C 200,50 400,950 600,300 C 800,50 900,800 1000,300',
                  ],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
              {/* Wave 3 - Tertiary wave - Full height */}
              <motion.path
                d="M 0,700 C 250,150 500,950 750,700 C 900,300 1000,900 1000,700"
                fill="none"
                stroke="url(#intersectionGradient3)"
                strokeWidth="320"
                strokeLinecap="round"
                animate={{
                  d: [
                    'M 0,700 C 250,150 500,950 750,700 C 900,300 1000,900 1000,700',
                    'M 0,700 C 250,950 500,150 750,700 C 900,900 1000,300 1000,700',
                    'M 0,700 C 250,150 500,950 750,700 C 900,300 1000,900 1000,700',
                  ],
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              />
            </svg>
          </div>

          {/* Vertical Split Container */}
          <div className="relative grid md:grid-cols-2 gap-0 items-start">
            {/* Technology Side */}
            <motion.div
              className="relative p-8 md:pr-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-3 glow-text-technical">
                Technology
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I build the machinery that powers growth. Fast sites. Clean data. Automated workflows. If it's repeated more than twice, it gets scripted.
              </p>
              <div className="space-y-3">
                {technologySkills.map((skill, idx) => (
                  <SkillCard
                    key={idx}
                    skill={skill}
                    isExpanded={expandedTechnology === idx}
                    onToggle={() => setExpandedTechnology(expandedTechnology === idx ? null : idx)}
                    accentColor="text-technical-accent"
                    glowClass="glow-text-technical"
                    side="left"
                  />
                ))}
              </div>
            </motion.div>

            {/* Creativity Side */}
            <motion.div
              className="relative p-8 md:pl-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-3 glow-text-creative">
                Creativity
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I design experiences that convert. Visual systems. Written narratives. Strategic positioning. Every element serves the goal: measurable growth.
              </p>
              <div className="space-y-3">
                {creativitySkills.map((skill, idx) => (
                  <SkillCard
                    key={idx}
                    skill={skill}
                    isExpanded={expandedCreativity === idx}
                    onToggle={() => setExpandedCreativity(expandedCreativity === idx ? null : idx)}
                    accentColor="text-creative-accent"
                    glowClass="glow-text-creative"
                    side="right"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Center Divider - Many Animated Dots (No Border Line) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 pointer-events-none">
            {/* Many flowing particles evenly distributed */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-0 w-3 h-3 rounded-full"
                style={{
                  background: i % 2 === 0 ? 'var(--technical-accent)' : 'var(--creative-accent)',
                  boxShadow: `0 0 12px ${i % 2 === 0 ? 'var(--technical-accent)' : 'var(--creative-accent)'}`,
                  filter: `brightness(${1.2 + (i % 3) * 0.2})`,
                  top: `${(i / 30) * 100}%`, // Distribute evenly from 0% to 100%
                }}
                animate={{
                  y: [0, 1000],
                  opacity: [0, 0.9, 0.9, 0],
                  scale: [0.4, 1.2, 1.2, 0.4],
                }}
                transition={{
                  duration: 4 + (i % 8) * 0.5,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: 'linear',
                }}
              />
            ))}
          </div>
        </motion.section>

        {/* Philosophy Section */}
        <motion.section
          variants={itemVariants}
          className="max-w-3xl mx-auto text-center space-y-6 pt-8"
        >
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
            The Philosophy
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most companies separate creative and technical work into different departments. That creates friction. Translation errors. Delays. Compromises.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I operate as both. I design the campaign and build the landing page. I write the copy and set up the analytics. I create the automation and write the nurture emails. No handoffs. No information lost in translation. Just execution.
          </p>
          <p className="text-lg font-semibold">
            Speed. Precision. Proof.
          </p>
        </motion.section>
      </motion.div>
    </>
  );
};

export default About;
