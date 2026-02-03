import { Helmet } from 'react-helmet';
import TerminalWindow from '@/components/TerminalWindow';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Nicole Hall | Marketing Engineer</title>
        <meta name="description" content="Marketing Engineer. Black and white. No compromise." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="pt-16">

        {/* Dictionary Definition - Hybrid Style */}
        <div className="w-full relative border-b-2 border-white/20">
          {/* Split background */}
          <div className="absolute inset-0 flex">
            <div className="w-1/2 bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-orange-50/50"></div>
            <div className="w-1/2 bg-black"></div>
          </div>

          <div className="max-w-4xl mx-auto py-12 px-6 relative z-10">
            <div className="bg-white/95 backdrop-blur-sm border-4 border-purple-400 rounded-lg p-8 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Marketing</span>
                {' '}
                <span className="text-cyan-600 font-mono">Engineer</span>
              </h2>
              <p className="text-sm text-gray-600 italic mb-6">
                mar·kuh·ting en·juh·neer <span className="text-gray-500">noun</span>
              </p>

              <div className="space-y-4 text-gray-800 text-sm md:text-base leading-relaxed">
                <p>
                  A hybrid strategist who blends creative insight with technical skill to design, build, and optimize marketing systems that actually work instead of just looking clever in a Canva deck.
                </p>

                <p>
                  A practitioner who understands code, data, funnels, user behavior, automation, and brand narrative, then stitches them together into a scalable growth engine.
                </p>

                <p>
                  The person you call when you need someone who can architect the strategy, write the copy, fix the tracking, debug the CMS, rebuild the website, launch the ads, interpret the analytics, and explain it all without condescending or panicking.
                </p>

                <div className="pt-4 border-t border-purple-200 mt-6">
                  <p className="text-gray-700 italic">
                    <span className="text-purple-700 font-semibold">Usage:</span><br/>
                    "Instead of hiring five specialists who don't talk to each other, we hired a Marketing Engineer."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="w-full bg-white border-b-2 border-white/20 py-12 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 text-center text-gray-900">
              Case Studies
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Product Marketing Case Study */}
              <a href="/case-studies/product-marketing" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-sm border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-lg p-6">
                <div className="inline-block px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-bold mb-3">
                  Product Marketing
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors">
                  GTM: 840 Activations in 30 Days
                </h3>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  Customer research → strategic positioning → comprehensive launch assets
                </p>
                <div className="text-purple-600 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Case Study →
                </div>
              </a>

              {/* Performance Marketing Case Study */}
              <a href="/case-studies/performance-marketing" className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-sm border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg p-6">
                <div className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold mb-3">
                  Performance Marketing
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  Scaled $12k → $85k Monthly at 4.2x ROAS
                </h3>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  Creative testing + attribution fix + automation = profitable scale
                </p>
                <div className="text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Case Study →
                </div>
              </a>

              {/* Demand Gen Case Study */}
              <a href="/case-studies/demand-gen" className="group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg shadow-sm border-2 border-emerald-200 hover:border-emerald-400 transition-all hover:shadow-lg p-6">
                <div className="inline-block px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-bold mb-3">
                  Demand Generation
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-emerald-600 transition-colors">
                  $2.4M Pipeline from Zero
                </h3>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  Content + paid + webinars + automation = qualified pipeline engine
                </p>
                <div className="text-emerald-600 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  View Case Study →
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Marketing/Engineer Labels - Split Design */}
        <div className="w-full flex flex-col md:flex-row border-b-2 border-white/20 relative">
          {/* Left Side - Marketing (Creative) */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 py-12 px-6 md:px-8 border-r-2 border-pink-200 relative overflow-hidden">
            {/* Creative Background Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="watercolor-labels">
                    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="4" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
                  </filter>
                </defs>
                <ellipse cx="30%" cy="50%" rx="100" ry="80" fill="#ec4899" opacity="0.3" filter="url(#watercolor-labels)" />
                <ellipse cx="70%" cy="40%" rx="80" ry="95" fill="#a855f7" opacity="0.25" filter="url(#watercolor-labels)" />
              </svg>
            </div>

            <div className="max-w-xl mx-auto relative z-10">
              <h1 className="text-2xl md:text-3xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 mb-3">
                Marketing
              </h1>
              <p className="text-gray-700 leading-relaxed">
                Human persuasion. Creative concepts. Stories that resonate and convert.
              </p>
            </div>
          </div>

          {/* Right Side - Engineer (Technical) */}
          <div className="w-full md:w-1/2 bg-black text-white py-12 px-6 md:px-8">
            <div className="max-w-xl mx-auto">
              <h1 className="text-2xl md:text-3xl font-black uppercase text-cyan-400 mb-3 font-mono">
                Engineer
              </h1>
              <p className="text-gray-300 leading-relaxed font-mono">
                Machine logic. Systems that scale. Code that turns ideas into growth.
              </p>
            </div>
          </div>

          {/* Center Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-200 via-purple-500 to-cyan-400"></div>
        </div>

        {/* Split Section with Content from About */}
        <div className="flex flex-col md:flex-row relative">
          {/* Left Side - Black - Marketing */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 text-gray-900 p-8 md:p-16 flex items-center justify-center border-r-2 border-pink-200 relative overflow-hidden">
            {/* Creative Background Pattern */}
            <div className="absolute inset-0 opacity-25 pointer-events-none">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="watercolor-home">
                    <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" />
                  </filter>
                </defs>
                <ellipse cx="15%" cy="25%" rx="120" ry="100" fill="#ec4899" opacity="0.2" filter="url(#watercolor-home)" />
                <ellipse cx="80%" cy="20%" rx="90" ry="110" fill="#a855f7" opacity="0.18" filter="url(#watercolor-home)" />
                <ellipse cx="70%" cy="75%" rx="100" ry="85" fill="#f97316" opacity="0.22" filter="url(#watercolor-home)" />
                <ellipse cx="25%" cy="80%" rx="80" ry="95" fill="#fbbf24" opacity="0.15" filter="url(#watercolor-home)" />
                <circle cx="50%" cy="45%" r="70" fill="#ec4899" opacity="0.12" filter="url(#watercolor-home)" />
              </svg>
            </div>

            {/* Decorative paint splotches */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/40 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-yellow-300/40 rounded-full blur-2xl"></div>

            <div className="max-w-xl relative z-10">
              <div className="space-y-8 md:space-y-12">
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-pink-700">Strategy & Positioning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Defining core value propositions and market differentiation. Mapping audience psychology and pain points that drive action.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-purple-700">Copywriting & Content</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Writing headlines that stop the scroll. Crafting landing page copy that converts cold traffic. Every word earns its place.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-orange-700">Brand & Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Creating visual identities that communicate positioning. Designing interfaces that guide users naturally toward conversion.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-pink-700">Campaign Development</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Developing creative concepts that cut through noise. Building lifecycle flows that nurture leads through automation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Dark - Engineer */}
          <div className="w-full md:w-1/2 bg-black text-white p-8 md:p-16 flex items-center justify-center">
            <div className="max-w-xl">
              <div className="space-y-8 md:space-y-12">
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-cyan-400 font-mono">Full-Stack Development</h3>
                  <p className="text-gray-300 leading-relaxed font-mono text-sm">
                    Building production-ready web applications with React, Vite, and modern JavaScript. Clean, maintainable code that scales.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-cyan-400 font-mono">Data & Analytics</h3>
                  <p className="text-gray-300 leading-relaxed font-mono text-sm">
                    Setting up tracking architectures that capture meaningful data. Building dashboards that answer business questions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-cyan-400 font-mono">Automation & CI/CD</h3>
                  <p className="text-gray-300 leading-relaxed font-mono text-sm">
                    Writing scripts to automate repetitive tasks. Building pipelines for quality assurance. Removing human error from critical processes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-cyan-400 font-mono">Systems Architecture</h3>
                  <p className="text-gray-300 leading-relaxed font-mono text-sm">
                    Designing systems that connect marketing tools, CRMs, and data warehouses. Building scalable infrastructure that handles growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Line - Only visible on desktop, starts at beginning of split section */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-500"></div>
        </div>

        {/* About Me Section - Split Design */}
        <div className="flex flex-col md:flex-row relative border-t-2 border-white/20">
          {/* Creative Side - Left */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 text-gray-900 p-8 md:p-16 relative overflow-hidden border-r-2 border-pink-200">
            {/* Creative Background Pattern */}
            <div className="absolute inset-0 opacity-25 pointer-events-none">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="watercolor-bio">
                    <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" />
                  </filter>
                </defs>
                <ellipse cx="15%" cy="25%" rx="100" ry="80" fill="#ec4899" opacity="0.2" filter="url(#watercolor-bio)" />
                <ellipse cx="80%" cy="20%" rx="70" ry="90" fill="#a855f7" opacity="0.18" filter="url(#watercolor-bio)" />
                <ellipse cx="70%" cy="75%" rx="85" ry="70" fill="#f97316" opacity="0.22" filter="url(#watercolor-bio)" />
                <circle cx="30%" cy="50%" r="60" fill="#fbbf24" opacity="0.15" filter="url(#watercolor-bio)" />
              </svg>
            </div>

            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                About Me
              </h2>

              <div className="space-y-4 md:space-y-5 text-sm md:text-base leading-relaxed text-gray-800">
                <p>
                  I'm Nicole Hall, a marketing strategist who somehow turned a messy life into a career that thrives on untangling other people's messes. Cute, right?
                </p>

                <p>
                  I've spent more than two decades helping businesses figure out why their marketing is broken, then fixing it so they stop throwing money into the digital void. I ask the hard questions like "Why are we doing this?" and "Who approved this?" and "Did we really think Comic Sans was the answer?"
                </p>

                <p>
                  My path here wasn't exactly a storybook climb up the corporate ladder. More like the ladder was missing rungs, on fire, and sometimes being used as a baseball bat. I faced trauma, detours, and the kind of plot twists that make people lean in and whisper "wait… what happened next?" But here's the thrilling part: I didn't just survive it, I learned from it.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Side - Right */}
          <div className="w-full md:w-1/2 bg-gray-900 text-white p-8 md:p-16 relative">
            <div className="relative z-10 max-w-xl mx-auto">
              <div className="border-2 border-white/20 bg-black">
                {/* Terminal Header */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-white/20">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-white/60 font-mono">nicole@portfolio ~ %</span>
                </div>

                {/* Terminal Content */}
                <div className="p-6">
                  <p className="text-green-400 text-sm mb-4 font-mono">$ cat about_continued.txt</p>

                  <div className="space-y-4 md:space-y-5 text-sm md:text-base leading-relaxed text-gray-300">
                    <p>
                      That winding road taught me how to rebuild. A life. A business. A marketing plan that doesn't make everyone hate their job. I care about results that actually matter and strategies that don't make people want to crawl under their desk.
                    </p>

                    <p>
                      Professionally speaking, I've led teams, built brands from scratch, launched campaigns that actually worked, and helped companies make friends with data instead of crying about it. I'm obsessed with clarity, allergic to buzzwords, and known to roll my eyes at "synergy" more than medically recommended.
                    </p>

                    <p>
                      Here's the deal. If you work with me, you'll get honesty, stubborn commitment, clever strategy, and a sense of humor that somehow survived everything. I believe progress beats perfection every time. And yes, coffee keeps the whole operation running.
                    </p>

                    <p className="font-bold text-base md:text-lg text-green-400 font-mono">
                      <span className="text-yellow-400">$</span> echo "So that's me. Resilient. Strategic. Slightly feral. Let's build cool things anyway."
                    </p>
                    <p className="text-green-400 text-sm mt-6 font-mono">✓ Process completed successfully</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
