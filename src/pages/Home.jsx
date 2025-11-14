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

        {/* Definition Section */}
        <div className="w-full bg-black text-white py-12 px-6 border-b-2 border-white/20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">Marketing Engineer</h1>
            <p className="text-sm text-gray-400 italic mb-6">mar·kuh·ting en·juh·neer <span className="text-gray-500">noun</span></p>

            <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                A hybrid strategist who blends creative insight with technical skill to design, build, and optimize marketing systems that actually work instead of just looking clever in a Canva deck.
              </p>

              <p>
                A practitioner who understands code, data, funnels, user behavior, automation, and brand narrative, then stitches them together into a scalable growth engine.
              </p>

              <p>
                The person you call when you need someone who can architect the strategy, write the copy, fix the tracking, debug the CMS, rebuild the website, launch the ads, interpret the analytics, and explain it all without condescending or panicking.
              </p>

              <div className="pt-4 border-t border-white/20 mt-6">
                <p className="text-gray-400 italic">
                  <span className="text-cyan-400 font-semibold">Usage:</span><br/>
                  "Instead of hiring five specialists who don't talk to each other, we hired a Marketing Engineer."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section - Split Design */}
        <div className="flex flex-col md:flex-row relative border-b-2 border-white/20">
          {/* Creative Side - Left */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 text-gray-900 py-12 md:py-16 px-6 md:px-12 flex items-center justify-center relative overflow-hidden border-r-2 border-pink-200">
            {/* Creative Background Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="watercolor-hero">
                    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="4" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
                  </filter>
                </defs>
                <ellipse cx="20%" cy="30%" rx="100" ry="80" fill="#ec4899" opacity="0.3" filter="url(#watercolor-hero)" />
                <ellipse cx="75%" cy="25%" rx="80" ry="95" fill="#a855f7" opacity="0.25" filter="url(#watercolor-hero)" />
                <circle cx="50%" cy="70%" r="70" fill="#f97316" opacity="0.28" filter="url(#watercolor-hero)" />
              </svg>
            </div>

            <div className="text-center relative z-10 max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600">
                Marketing
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                Human persuasion. Creative concepts. Stories that resonate and convert.
              </p>
            </div>
          </div>

          {/* Technical Side - Right */}
          <div className="w-full md:w-1/2 bg-black text-white py-12 md:py-16 px-6 md:px-12 flex items-center justify-center relative">
            <div className="text-center relative z-10 max-w-2xl">
              <p className="text-green-400 font-mono text-sm mb-4">$ whoami</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-3 text-cyan-400 font-mono">
                Engineer
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed font-mono">
                Machine logic. Systems that scale. Code that turns ideas into growth.
              </p>
            </div>
          </div>

          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pink-200 via-gray-500 to-white/20"></div>
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
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Marketing</h2>

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
              <p className="text-green-400 font-mono text-sm mb-2">$ ls -la engineer/</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 font-mono text-cyan-400">./ENGINEER</h2>

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
