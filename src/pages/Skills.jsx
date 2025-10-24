
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import skillsData from '@/data/skills.json';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  // All skills with their actual positions on the matrix
  // X: 0 = Strategic/Creative, 100 = Tactical/Technical
  // Y: 0 = Creative, 100 = Technical
  const allSkills = [
    // CREATIVE + STRATEGIC (Top Left Quadrant)
    { name: "Brand Positioning", description: "Defining core value proposition and market differentiation.", x: 15, y: 15 },
    { name: "Messaging Strategy", description: "Creating messaging hierarchies from awareness to conversion.", x: 25, y: 20 },
    { name: "Audience Research", description: "Mapping customer psychology and pain points.", x: 20, y: 28 },
    { name: "Campaign Strategy", description: "Developing big-picture creative concepts that drive action.", x: 12, y: 35 },
    { name: "Go-to-Market Planning", description: "Orchestrating launch strategies across channels.", x: 28, y: 32 },
    { name: "Competitive Analysis", description: "Researching market positioning and differentiation opportunities.", x: 18, y: 22 },
    { name: "Value Proposition", description: "Articulating unique benefits that solve customer problems.", x: 22, y: 38 },
    { name: "Product Marketing", description: "Positioning products in the market and driving adoption.", x: 15, y: 42 },

    // CREATIVE + TACTICAL (Top Right Quadrant)
    { name: "Copywriting", description: "Writing headlines and CTAs that convert cold traffic.", x: 75, y: 18 },
    { name: "Landing Page Design", description: "Creating high-converting page layouts and user flows.", x: 85, y: 25 },
    { name: "Email Marketing", description: "Building automated lifecycle sequences that nurture leads.", x: 80, y: 12 },
    { name: "Ad Creative", description: "Designing performance ads for Meta and Google.", x: 70, y: 30 },
    { name: "Social Media", description: "Crafting platform-specific content that engages.", x: 88, y: 35 },
    { name: "SEO", description: "Writing for search engines and humans simultaneously.", x: 78, y: 38 },
    { name: "Content Marketing", description: "Producing educational content that builds authority.", x: 82, y: 8 },
    { name: "UI/UX Design", description: "Designing intuitive interfaces that guide user behavior.", x: 90, y: 20 },
    { name: "Video Production", description: "Creating video content for ads and social media.", x: 72, y: 15 },
    { name: "Graphic Design", description: "Designing visual assets for marketing campaigns.", x: 85, y: 42 },

    // TECHNICAL + STRATEGIC (Bottom Left Quadrant)
    { name: "Web Analytics", description: "Setting up GA4 tracking to answer business questions.", x: 18, y: 68 },
    { name: "Data Strategy", description: "Designing measurement frameworks and KPI systems.", x: 25, y: 75 },
    { name: "SQL & BigQuery", description: "Querying databases to extract meaningful patterns.", x: 12, y: 78 },
    { name: "A/B Testing", description: "Running structured experiments on copy, design, and flows.", x: 30, y: 70 },
    { name: "CRO", description: "Analyzing funnels and removing friction points.", x: 20, y: 85 },
    { name: "Performance Optimization", description: "Improving Core Web Vitals and page speed.", x: 15, y: 62 },
    { name: "Marketing Attribution", description: "Multi-touch attribution modeling and revenue tracking.", x: 22, y: 90 },
    { name: "Data Visualization", description: "Creating dashboards that communicate insights clearly.", x: 28, y: 82 },

    // TECHNICAL + TACTICAL (Bottom Right Quadrant) - TOOLS
    { name: "React", description: "Building modern web apps with React and Vite.", x: 75, y: 65 },
    { name: "Tailwind CSS", description: "Rapid UI development with utility-first CSS.", x: 82, y: 72 },
    { name: "Node.js", description: "Creating custom automation and API integrations.", x: 70, y: 78 },
    { name: "Git", description: "Version control and collaborative development.", x: 88, y: 68 },
    { name: "HubSpot", description: "CRM, marketing automation, and analytics platform.", x: 78, y: 85 },
    { name: "GA4", description: "Google Analytics 4 for tracking and measurement.", x: 85, y: 80 },
    { name: "Looker Studio", description: "Building dashboards that make insights actionable.", x: 72, y: 88 },
    { name: "Meta Ads", description: "Facebook and Instagram advertising platform.", x: 80, y: 62 },
    { name: "Google Ads", description: "Search, display, and video advertising.", x: 88, y: 78 },
    { name: "Zapier", description: "Workflow automation connecting 5000+ apps.", x: 75, y: 92 },
    { name: "Figma", description: "Design and prototyping tool for UI/UX work.", x: 85, y: 58 },
    { name: "Webflow", description: "Visual web development platform.", x: 68, y: 70 },
    { name: "Python", description: "Data analysis and automation scripting.", x: 78, y: 95 },
    { name: "Framer Motion", description: "Animation library for React applications.", x: 90, y: 85 },
    { name: "Stripe", description: "Payment processing and subscription management.", x: 92, y: 72 },
    { name: "Airtable", description: "Low-code database for project and data management.", x: 70, y: 90 },
    { name: "Make.com", description: "Advanced automation platform for complex workflows.", x: 82, y: 95 },
    { name: "Salesforce", description: "Enterprise CRM and marketing cloud platform.", x: 68, y: 82 },
    { name: "Segment", description: "Customer data platform for unified tracking.", x: 92, y: 90 },
  ];

  const positionedSkills = allSkills;

  return (
    <>
      <Helmet>
        <title>Skills Matrix | Nicole Hall - Marketing Engineer</title>
        <meta name="description" content="Interactive map of 49 skills across creative and technical domains. From strategic planning to hands-on execution." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="py-16 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Skills Matrix</h1>
          <p className="text-xl text-muted-foreground">Interactive map of capabilities across creative and technical domains</p>
        </motion.div>

        {/* 4-Quadrant Matrix */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-full aspect-square max-w-5xl mx-auto glass-card p-8"
        >
          {/* Axis Labels */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center">
            <span className="text-2xl font-black text-creative-accent glow-text-creative">CREATIVE</span>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <span className="text-2xl font-black text-technical-accent glow-text-technical">TECHNICAL</span>
          </div>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90">
            <span className="text-2xl font-black text-muted-foreground">PRACTICAL SKILLS</span>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90">
            <span className="text-2xl font-black text-muted-foreground">TOOLS</span>
          </div>

          {/* Grid Lines */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Horizontal lines */}
            {[25, 50, 75].map((y) => (
              <div
                key={`h-${y}`}
                className="absolute left-0 right-0"
                style={{
                  top: `${y}%`,
                  height: '1px',
                  background: y === 50
                    ? 'linear-gradient(90deg, transparent, var(--border) 10%, var(--border) 90%, transparent)'
                    : 'linear-gradient(90deg, transparent, var(--border) 20%, var(--border) 80%, transparent)',
                  opacity: y === 50 ? 0.6 : 0.2,
                }}
              />
            ))}
            {/* Vertical lines */}
            {[25, 50, 75].map((x) => (
              <div
                key={`v-${x}`}
                className="absolute top-0 bottom-0"
                style={{
                  left: `${x}%`,
                  width: '1px',
                  background: x === 50
                    ? 'linear-gradient(180deg, transparent, var(--border) 10%, var(--border) 90%, transparent)'
                    : 'linear-gradient(180deg, transparent, var(--border) 20%, var(--border) 80%, transparent)',
                  opacity: x === 50 ? 0.6 : 0.2,
                }}
              />
            ))}
          </div>


          {/* Interactive Skill Dots - No Labels */}
          {positionedSkills.map((skill, idx) => {
            const isCreative = skill.y < 50;
            const isHovered = hoveredSkill === idx;
            const isSelected = selectedSkill === idx;

            return (
              <motion.button
                key={idx}
                className="absolute group z-10"
                style={{
                  left: `${skill.x}%`,
                  top: `${skill.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.02 }}
                onMouseEnter={() => setHoveredSkill(idx)}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => setSelectedSkill(selectedSkill === idx ? null : idx)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Skill Dot - Darker and more visible */}
                <motion.div
                  className={`w-5 h-5 rounded-full border-[3px] ${
                    isCreative
                      ? 'bg-[#0E7490] border-[#0E7490]'
                      : 'bg-[#1E40AF] border-[#1E40AF]'
                  }`}
                  animate={{
                    boxShadow: isHovered || isSelected
                      ? `0 0 25px ${isCreative ? 'rgba(14,116,144,1)' : 'rgba(30,64,175,1)'}`
                      : `0 0 10px ${isCreative ? 'rgba(14,116,144,0.7)' : 'rgba(30,64,175,0.7)'}`,
                  }}
                />

                {/* Tooltip with name and description on hover - Strong background */}
                {(isHovered || isSelected) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className={`absolute z-50 left-1/2 -translate-x-1/2 ${
                      skill.y > 50 ? 'bottom-10' : 'top-10'
                    } w-64 md:w-72 p-4 rounded-xl border-2 ${
                      isCreative
                        ? 'border-creative-accent'
                        : 'border-technical-accent'
                    } backdrop-blur-xl pointer-events-none shadow-2xl`}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.98)',
                      boxShadow: isCreative
                        ? '0 0 30px rgba(6,182,212,0.5), 0 0 60px rgba(6,182,212,0.3)'
                        : '0 0 30px rgba(59,130,246,0.5), 0 0 60px rgba(59,130,246,0.3)'
                    }}
                  >
                    <p className={`font-bold text-base mb-2 ${isCreative ? 'text-creative-accent' : 'text-technical-accent'}`}>
                      {skill.name}
                    </p>
                    <p className="text-sm text-slate-900 leading-relaxed">
                      {skill.description}
                    </p>
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          <p>Hover or tap any dot to reveal skill details • {positionedSkills.length} skills mapped</p>
        </motion.div>

        {/* Legend - All Skills Listed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 text-center">All Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {positionedSkills.map((skill, idx) => {
              const isCreative = skill.y < 50;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + idx * 0.01 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <div
                    className={`w-3 h-3 rounded-full flex-shrink-0 ${
                      isCreative ? 'bg-[#0E7490]' : 'bg-[#1E40AF]'
                    }`}
                    style={{
                      boxShadow: `0 0 8px ${isCreative ? 'rgba(14,116,144,0.6)' : 'rgba(30,64,175,0.6)'}`,
                    }}
                  />
                  <span className="text-foreground/90">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
