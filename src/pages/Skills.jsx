import { Helmet } from 'react-helmet';
import { useState } from 'react';
import ProofCard from '@/components/ProofCard';
import caseStudiesData from '@/data/case-studies.json';

const Skills = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Hybrid', 'Creative', 'Technical'];

  const filteredCases = filter === 'All'
    ? caseStudiesData
    : caseStudiesData.filter(cs => cs.type === filter);

  const marketingSkills = [
    { name: 'Brand Positioning', description: 'Defining unique market position and differentiation strategy' },
    { name: 'Messaging Strategy', description: 'Crafting cohesive narratives that resonate with target audiences' },
    { name: 'Audience Research', description: 'Deep-diving into customer psychology, pain points, and motivations' },
    { name: 'Campaign Strategy', description: 'Designing multi-channel campaigns that drive measurable results' },
    { name: 'Go-to-Market Planning', description: 'Orchestrating product launches across all marketing channels' },
    { name: 'Competitive Analysis', description: 'Analyzing market landscape to identify opportunities and threats' },
    { name: 'Value Proposition', description: 'Articulating clear benefits that solve customer problems' },
    { name: 'Product Marketing', description: 'Positioning products to connect features with customer needs' },
    { name: 'Copywriting', description: 'Writing persuasive copy that converts browsers into buyers' },
    { name: 'Landing Page Design', description: 'Creating high-converting pages with clear CTAs and user flows' },
    { name: 'Email Marketing', description: 'Building automated sequences that nurture leads to conversion' },
    { name: 'Ad Creative', description: 'Designing performance-driven ads for Meta, Google, and LinkedIn' },
    { name: 'Social Media', description: 'Creating platform-specific content that engages and converts' },
    { name: 'SEO', description: 'Optimizing content for search engines while maintaining readability' },
    { name: 'Content Marketing', description: 'Producing educational content that builds authority and trust' },
    { name: 'UI/UX Design', description: 'Designing intuitive interfaces that enhance user experience' },
    { name: 'Video Production', description: 'Creating compelling video content for marketing campaigns' },
    { name: 'Graphic Design', description: 'Designing visual assets that communicate brand identity' },
    { name: 'Marketing Automation', description: 'Building workflows that deliver personalized experiences at scale' },
    { name: 'Lead Generation', description: 'Creating systems to attract and capture qualified prospects' },
    { name: 'Customer Journey Mapping', description: 'Visualizing touchpoints from awareness to advocacy' },
    { name: 'Market Research', description: 'Conducting qualitative and quantitative research to inform strategy' },
    { name: 'Budget Management', description: 'Allocating marketing spend to maximize ROI across channels' },
    { name: 'Marketing Analytics', description: 'Tracking KPIs and translating data into actionable insights' },
    { name: 'Growth Marketing', description: 'Implementing data-driven experiments to accelerate growth' },
    { name: 'Account-Based Marketing', description: 'Targeting high-value accounts with personalized campaigns' },
    { name: 'Lifecycle Marketing', description: 'Engaging customers at every stage from acquisition to retention' },
    { name: 'Customer Retention', description: 'Building programs that reduce churn and increase lifetime value' },
    { name: 'Influencer Marketing', description: 'Partnering with influencers to amplify brand reach' },
    { name: 'Community Building', description: 'Fostering engaged communities around products and brands' },
    { name: 'Public Relations', description: 'Managing media relationships and brand reputation' },
    { name: 'Partnership Marketing', description: 'Developing strategic partnerships to expand market reach' }
  ];

  const engineeringSkills = [
    { name: 'React', description: 'Building dynamic, component-based user interfaces' },
    { name: 'Tailwind CSS', description: 'Rapidly styling responsive designs with utility-first CSS' },
    { name: 'Node.js', description: 'Creating server-side applications and automation scripts' },
    { name: 'Git', description: 'Version control for tracking code changes and collaboration' },
    { name: 'HubSpot', description: 'Implementing CRM workflows, forms, and marketing automation' },
    { name: 'GA4', description: 'Setting up analytics tracking and custom event instrumentation' },
    { name: 'Looker Studio', description: 'Building custom dashboards for marketing performance reporting' },
    { name: 'Meta Ads', description: 'Managing campaigns, tracking pixels, and conversion APIs' },
    { name: 'Google Ads', description: 'Running search, display, and video campaigns with conversion tracking' },
    { name: 'Zapier', description: 'Automating workflows between marketing tools and platforms' },
    { name: 'Figma', description: 'Designing interfaces and prototyping user experiences' },
    { name: 'Webflow', description: 'Building responsive websites without traditional coding' },
    { name: 'Python', description: 'Writing scripts for data analysis and process automation' },
    { name: 'Framer Motion', description: 'Creating smooth animations and micro-interactions' },
    { name: 'Stripe', description: 'Integrating payment processing and subscription management' },
    { name: 'Airtable', description: 'Building custom databases and workflow management systems' },
    { name: 'Salesforce', description: 'Configuring CRM processes and marketing cloud integrations' },
    { name: 'Segment', description: 'Implementing customer data platforms and event tracking' },
    { name: 'SQL & BigQuery', description: 'Querying databases to extract insights from large datasets' },
    { name: 'A/B Testing', description: 'Running controlled experiments to optimize conversion rates' },
    { name: 'CRO', description: 'Analyzing funnels and removing friction to improve conversions' },
    { name: 'Performance Optimization', description: 'Improving page speed and Core Web Vitals scores' },
    { name: 'Marketing Attribution', description: 'Tracking customer touchpoints to measure channel effectiveness' },
    { name: 'Data Visualization', description: 'Creating charts and graphs that make data actionable' },
    { name: 'Static Site Generation', description: 'Building fast, SEO-friendly sites with frameworks like Vite and Astro' },
    { name: 'Headless CMS', description: 'Integrating content management systems via APIs for flexible delivery' },
    { name: 'Front-End Development', description: 'Writing HTML, CSS, and JavaScript to build web experiences' },
    { name: 'Responsive Design', description: 'Creating layouts that work seamlessly across all devices' },
    { name: 'REST APIs', description: 'Connecting applications through HTTP-based web services' },
    { name: 'Webhook Integration', description: 'Building real-time data flows between marketing platforms' },
    { name: 'JavaScript', description: 'Programming interactive features and dynamic functionality' },
    { name: 'Version Control', description: 'Managing code repositories and collaborating with teams' }
  ];

  return (
    <>
      <Helmet>
        <title>Skills, Proof, & Examples | Nicole Hall - Marketing Engineer</title>
        <meta name="description" content="Skills and proof of work. Real results from real projects." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen pt-16 bg-white">
        {/* Jump to Section Navigation */}
        <div className="border-b-2 border-black bg-white sticky top-16 z-20">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="#proof"
                className="px-4 py-2 text-sm font-semibold uppercase tracking-wide border-2 border-black bg-white text-black hover:bg-gray-100 transition-colors"
              >
                Proof
              </a>
              <a
                href="#skills"
                className="px-4 py-2 text-sm font-semibold uppercase tracking-wide border-2 border-black bg-white text-black hover:bg-gray-100 transition-colors"
              >
                Skills
              </a>
              <a
                href="#examples"
                className="px-4 py-2 text-sm font-semibold uppercase tracking-wide border-2 border-black bg-white text-black hover:bg-gray-100 transition-colors"
              >
                Examples
              </a>
            </div>
          </div>
        </div>

        {/* Proof Section - Now First */}
        <div id="proof" className="max-w-7xl mx-auto p-8 md:p-16 scroll-mt-32 relative">
          {/* Subtle color accent - top right */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-yellow-400/75 to-transparent blur-lg -z-10"></div>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Proof
            </h1>
            <p className="text-lg md:text-xl text-gray-600">Real results from real projects</p>
          </div>

          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide border-2 border-black ${
                  filter === f
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredCases.map((caseStudy) => (
              <ProofCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="border-t-2 border-black scroll-mt-32 relative overflow-hidden">
          {/* Subtle color accent - center left */}
          <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-r from-green-400/70 to-transparent blur-lg"></div>
          <div className="max-w-7xl mx-auto p-8 md:p-16 relative z-10">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 text-center">
              Skills
            </h1>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
              {/* Marketing Skills */}
              <div>
                <h2 className="text-2xl md:text-3xl font-black uppercase mb-8">Marketing</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {marketingSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="text-sm font-semibold border border-black p-3 relative group cursor-help"
                    >
                      {skill.name}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-white border-2 border-black text-xs font-normal leading-relaxed w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 shadow-lg">
                        {skill.description}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-[2px] w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-black"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Skills */}
              <div>
                <h2 className="text-2xl md:text-3xl font-black uppercase mb-8">Engineer</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {engineeringSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="text-sm font-semibold border border-black p-3 relative group cursor-help"
                    >
                      {skill.name}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-white border-2 border-black text-xs font-normal leading-relaxed w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 shadow-lg">
                        {skill.description}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-[2px] w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-black"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div id="examples" className="border-t-2 border-black bg-gray-50 scroll-mt-32 relative overflow-hidden">
          {/* Subtle color accent - bottom right */}
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-purple-400/70 to-transparent blur-lg"></div>
          <div className="max-w-7xl mx-auto p-8 md:p-16 relative z-10">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-center">
              Examples
            </h1>

            <div className="space-y-12">
              {/* Marketing Ethos and Approach */}
              <div>
                <h2 className="text-2xl md:text-3xl font-black uppercase mb-4">
                  Marketing Ethos and Approach
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  These resources highlight how I think about marketing at both a strategic and executional level, from frameworks to audience insights to campaign delivery.
                </p>
                <ul className="space-y-3">
                  <li>
                    <span className="font-bold">Marketing Strategy Framework:</span>{' '}
                    <a href="https://drive.google.com/file/d/199U6xyWPFRc_9UktHUppsMcPPpajIR0Y/view" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                      https://drive.google.com/file/d/199U6xyWPFRc_9UktHUppsMcPPpajIR0Y/view
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">Audience Analysis via Personas:</span>{' '}
                    <a href="https://drive.google.com/file/d/1m6KxuASL-IeH0zTSA7Jqwp4LiIT1J6M-/view" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                      https://drive.google.com/file/d/1m6KxuASL-IeH0zTSA7Jqwp4LiIT1J6M-/view
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">Campaign Case Study (from ideation to execution):</span>{' '}
                    <a href="https://nicole-ems-case-study.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                      https://nicole-ems-case-study.netlify.app/
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">Strategic Marketing Pitch Deck:</span>{' '}
                    <a href="https://drive.google.com/file/d/1Sc9TXDro75YD48HGL4c4YKUR1GbcuXon/view" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                      https://drive.google.com/file/d/1Sc9TXDro75YD48HGL4c4YKUR1GbcuXon/view
                    </a>
                  </li>
                </ul>
              </div>

              {/* Writing and Content Samples */}
              <div>
                <h2 className="text-2xl md:text-3xl font-black uppercase mb-4">
                  Writing and Content Samples
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  To give you a sense of my writing style and approach to marketing communication, here are a few examples of my published work:
                </p>
                <ul className="space-y-3">
                  <li>
                    <span className="font-bold">LinkedIn Article:</span>{' '}
                    <a href="https://www.linkedin.com/pulse/marketers-business-leaders-ai-survival-guide-nicole-choman/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 break-all">
                      https://www.linkedin.com/pulse/marketers-business-leaders-ai-survival-guide-nicole-choman/
                    </a>
                  </li>
                  <li>
                  <span className="font-bold">Blog Post:</span>{' '}
                    <a href="https://marketingcar.com/blog/5-quick-ways-to-improve-small-business-marketing" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 break-all">
                      https://marketingcar.com/blog/5-quick-ways-to-improve-small-business-marketing
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">Book (Bad Marketing):</span>{' '}
                    <a href="https://drive.google.com/file/d/14SY2auY_oBeguLB1eg24ruzsFeUZx4GA/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 break-all">
                      https://drive.google.com/file/d/14SY2auY_oBeguLB1eg24ruzsFeUZx4GA/view
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">Strategic Marketing Pitch Deck:</span>{' '}
                    <a href="https://drive.google.com/file/d/1Sc9TXDro75YD48HGL4c4YKUR1GbcuXon/view" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                      https://drive.google.com/file/d/1Sc9TXDro75YD48HGL4c4YKUR1GbcuXon/view
                    </a>
                  </li>
                </ul>
              </div>

              {/* Branding and Design Work */}
              <div>
                <h2 className="text-2xl md:text-3xl font-black uppercase mb-4">
                  Branding and Design Work
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  These projects showcase my ability to create cohesive brand identities that align with strategy and audience.
                </p>
                <ul className="space-y-3 mb-6">
                  <li>
                    <span className="font-bold">Brand Design Example (Seerist):</span>{' '}
                    <a href="https://www.figma.com/design/jDTC2AOUgTQviVDbIseF3J/Seerist?node-id=0-1&p=f" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                      https://www.figma.com/design/jDTC2AOUgTQviVDbIseF3J/Seerist?node-id=0-1&p=f
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">Brand Design Example (Basic Instructions):</span>{' '}
                    <a href="https://xd.adobe.com/view/688f8407-8edb-48a6-8206-5d9040dd6e7c-3ddc/?hints=off" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                      https://xd.adobe.com/view/688f8407-8edb-48a6-8206-5d9040dd6e7c-3ddc/?hints=off
                    </a>
                  </li>
                </ul>
                <h3 className="text-xl md:text-2xl font-black uppercase mb-4 mt-8">
                  Site Examples
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a href="https://wtfareu.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                    wtfareu.com
                  </a>
                  <a href="https://oasishealthservices.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                    oasishealthservices.com
                  </a>
                  <a href="https://marketingcar.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                    marketingcar.com
                  </a>
                  <a href="https://clarkcounselingandconsulting.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                    clarkcounselingandconsulting.com
                  </a>
                  <a href="https://bxhealthtx.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                    bxhealthtx.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
