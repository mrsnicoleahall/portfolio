
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Home = () => {
  const [expandedMarketing, setExpandedMarketing] = useState(null);
  const [expandedTechnology, setExpandedTechnology] = useState(null);

  const marketingSkills = [
    {
      title: "Positioning & Messaging",
      description: "Defining the core value proposition and crafting narratives that resonate with target audiences. I map the psychological triggers and language patterns that convert browsers into buyers."
    },
    {
      title: "Conversion Copy & Landing Systems",
      description: "Writing clear, persuasive copy optimized for action. Every word is tested. Every headline has a purpose. Every CTA is designed to reduce friction and increase conversions."
    },
    {
      title: "Lifecycle & Campaign Architecture",
      description: "Building automated email sequences, nurture flows, and multi-channel campaigns. I design the journey from first touch to loyal customer using behavioral triggers and segmentation."
    },
    {
      title: "Performance Creative & Testing",
      description: "Designing ad creative that stops the scroll. Running structured A/B tests on headlines, images, and offers. Using data to iterate toward winning combinations."
    }
  ];

  const technologySkills = [
    {
      title: "React & Modern Web",
      description: "Building fast, static-generated sites with React, Vite, and Tailwind. Creating responsive, accessible interfaces that load in under 2 seconds and convert on any device."
    },
    {
      title: "Analytics & Data Pipelines",
      description: "Setting up GA4, building custom dashboards in Looker Studio, and creating ETL pipelines that transform raw data into actionable insights. Making data speak plain English."
    },
    {
      title: "Marketing Automation & APIs",
      description: "Connecting systems with Zapier, Make, and custom Node scripts. Automating lead flows, data syncs, and repetitive tasks. Removing human error from critical workflows."
    },
    {
      title: "Testing & Quality Assurance",
      description: "Writing scripts to catch bugs before users do. Setting up CI/CD pipelines. Building automated testing frameworks that ensure quality at scale."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  };

  const SkillItem = ({ skill, isExpanded, onToggle, accentColor, side }) => (
    <motion.div
      layout
      className="relative"
      initial={{ opacity: 0, x: side === 'left' ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <motion.button
        onClick={onToggle}
        className="w-full text-left p-4 rounded-lg transition-all duration-300 hover:bg-card/30 border border-transparent hover:border-border/50"
        whileHover={{ x: side === 'left' ? 5 : -5 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center justify-between gap-2">
          <span className={`font-semibold text-lg ${isExpanded ? accentColor : ''} transition-colors duration-300`}>
            {skill.title}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ChevronDown className={`w-5 h-5 ${isExpanded ? accentColor : 'text-muted-foreground'}`} />
          </motion.div>
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
            <div className="px-4 pb-4 pt-2 text-muted-foreground leading-relaxed">
              {skill.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <>
      <Helmet>
        <title>Nicole Hall | Marketing Engineer</title>
        <meta name="description" content="Fluent in human persuasion and machine logic. Building systems that turn ideas into measurable growth." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <motion.div
        className="space-y-20 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Definition Section */}
        <section className="text-center">
          <motion.div variants={itemVariants} className="relative max-w-4xl mx-auto">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
                marketing engineer
              </h1>
              <p className="text-lg text-muted-foreground font-mono">
                /ˈmärkədiNG ˌenjəˈnir/ n.
              </p>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-6">
              A person fluent in human persuasion and machine logic. Designs systems that turn ideas into measurable growth.
            </p>
          </motion.div>
        </section>

        {/* Dual Panel Interactive Skills Section */}
        <motion.section
          variants={itemVariants}
          className="relative overflow-hidden"
        >
          {/* Animated Wave Pattern - showing flow between dualities */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Large wave flowing across */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 120% 60% at 0% 50%, var(--creative-accent) 0%, transparent 50%),
                  radial-gradient(ellipse 120% 60% at 100% 50%, var(--technical-accent) 0%, transparent 50%)
                `,
              }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            {/* Multiple ocean-like flowing waves filling the background */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--creative-accent)" stopOpacity="0.12" />
                  <stop offset="50%" stopColor="var(--technical-accent)" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="var(--creative-accent)" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--technical-accent)" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="var(--creative-accent)" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="var(--technical-accent)" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--creative-accent)" stopOpacity="0.08" />
                  <stop offset="50%" stopColor="var(--technical-accent)" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="var(--creative-accent)" stopOpacity="0.08" />
                </linearGradient>
              </defs>
              {/* Wave 1 - Main wave - Full height */}
              <motion.path
                d="M 0,500 Q 200,100 400,500 T 800,500 Q 900,900 1000,500"
                fill="none"
                stroke="url(#waveGradient1)"
                strokeWidth="350"
                strokeLinecap="round"
                animate={{
                  d: [
                    "M 0,500 Q 200,100 400,500 T 800,500 Q 900,900 1000,500",
                    "M 0,500 Q 200,900 400,500 T 800,500 Q 900,100 1000,500",
                    "M 0,500 Q 200,100 400,500 T 800,500 Q 900,900 1000,500",
                  ]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {/* Wave 2 - Secondary wave - Full height */}
              <motion.path
                d="M 0,300 Q 250,50 500,300 T 1000,300"
                fill="none"
                stroke="url(#waveGradient2)"
                strokeWidth="300"
                strokeLinecap="round"
                animate={{
                  d: [
                    "M 0,300 Q 250,50 500,300 T 1000,300",
                    "M 0,300 Q 250,950 500,300 T 1000,300",
                    "M 0,300 Q 250,50 500,300 T 1000,300",
                  ]
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
                d="M 0,700 Q 300,200 600,700 T 1000,700"
                fill="none"
                stroke="url(#waveGradient3)"
                strokeWidth="320"
                strokeLinecap="round"
                animate={{
                  d: [
                    "M 0,700 Q 300,200 600,700 T 1000,700",
                    "M 0,700 Q 300,950 600,700 T 1000,700",
                    "M 0,700 Q 300,200 600,700 T 1000,700",
                  ]
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
          <div className="relative grid md:grid-cols-2 gap-0">
            {/* Marketing Side */}
            <motion.div
              className="relative p-8 md:pr-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="sticky top-8">
                <h2 className="text-4xl md:text-5xl font-black mb-3 glow-text-creative">
                  Marketing
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I map the audience, write the story, and design the path to action. Every campaign is a hypothesis. Every metric tells a story.
                </p>
                <div className="space-y-2">
                  {marketingSkills.map((skill, idx) => (
                    <SkillItem
                      key={idx}
                      skill={skill}
                      isExpanded={expandedMarketing === idx}
                      onToggle={() => setExpandedMarketing(expandedMarketing === idx ? null : idx)}
                      accentColor="text-creative-accent"
                      side="left"
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Technology Side */}
            <motion.div
              className="relative p-8 md:pl-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="sticky top-8">
                <h2 className="text-4xl md:text-5xl font-black mb-3 glow-text-technical">
                  Technology
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I build the machinery. Fast sites. Clean pipelines. Automated workflows. If it's manual and repeated more than twice, I script it.
                </p>
                <div className="space-y-2">
                  {technologySkills.map((skill, idx) => (
                    <SkillItem
                      key={idx}
                      skill={skill}
                      isExpanded={expandedTechnology === idx}
                      onToggle={() => setExpandedTechnology(expandedTechnology === idx ? null : idx)}
                      accentColor="text-technical-accent"
                      side="right"
                    />
                  ))}
                </div>
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
                  background: i % 2 === 0 ? 'var(--creative-accent)' : 'var(--technical-accent)',
                  boxShadow: `0 0 12px ${i % 2 === 0 ? 'var(--creative-accent)' : 'var(--technical-accent)'}`,
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

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center text-center pt-12 relative"
        >
          <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-6">
            Both obsessed with proof.
          </h3>
          <Link to="/proof">
            <motion.div
              className="relative group"
              whileHover="hover"
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-creative-accent to-technical-accent rounded-lg blur-md opacity-60 group-hover:opacity-100"
                variants={{ hover: { scale: 1.05 } }}
                transition={{ duration: 0.3 }}
              />
              <Button
                size="lg"
                className="relative text-lg px-8 py-6 rounded-lg bg-background text-foreground border-2 border-primary hover:bg-primary hover:text-background transition-all duration-300"
              >
                View the Proof
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"/>
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
