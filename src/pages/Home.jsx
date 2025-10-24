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

        {/* Definition Section at Top */}
        <div className="relative bg-black border-b-2 border-white/20 py-8 md:py-12">
          <div className="text-center px-6 md:px-12 relative z-10">
            <p className="text-green-400 font-mono text-sm mb-4">$ whoami</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-2 text-white font-mono">
              &gt; MARKETING_ENGINEER
            </h1>
            <p className="text-sm md:text-lg text-cyan-400 font-mono mb-1">
              /ˈmärkədiNG ˌenjəˈnir/ n.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-mono">
              A person fluent in human persuasion and machine logic. Designs systems that turn ideas into measurable growth.
            </p>
          </div>
        </div>

        {/* Split Section with Content from About */}
        <div className="flex flex-col md:flex-row relative">
          {/* Left Side - Black - Marketing */}
          <div className="w-full md:w-1/2 bg-black text-white p-8 md:p-16 flex items-center justify-center border-r-2 border-white/20">
            <div className="max-w-xl">
              <p className="text-green-400 font-mono text-sm mb-2">$ cat marketing.txt</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 font-mono text-cyan-400">./MARKETING</h2>

              <div className="space-y-8 md:space-y-12">
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Strategy & Positioning</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Defining core value propositions and market differentiation. Mapping audience psychology and pain points that drive action.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Copywriting & Content</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Writing headlines that stop the scroll. Crafting landing page copy that converts cold traffic. Every word earns its place.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Brand & Design</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Creating visual identities that communicate positioning. Designing interfaces that guide users naturally toward conversion.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Campaign Development</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Developing creative concepts that cut through noise. Building lifecycle flows that nurture leads through automation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - White - Engineer */}
          <div className="w-full md:w-1/2 bg-white text-black p-8 md:p-16 flex items-center justify-center">
            <div className="max-w-xl">
              <p className="text-purple-600 font-mono text-sm mb-2">$ ls -la engineer/</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 font-mono text-purple-600">./ENGINEER</h2>

              <div className="space-y-8 md:space-y-12">
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Full-Stack Development</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Building production-ready web applications with React, Vite, and modern JavaScript. Clean, maintainable code that scales.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Data & Analytics</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Setting up tracking architectures that capture meaningful data. Building dashboards that answer business questions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Automation & CI/CD</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Writing scripts to automate repetitive tasks. Building pipelines for quality assurance. Removing human error from critical processes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Systems Architecture</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Designing systems that connect marketing tools, CRMs, and data warehouses. Building scalable infrastructure that handles growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Line - Only visible on desktop, starts at beginning of split section */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-500"></div>
        </div>

        {/* About Me Section */}
        <div className="bg-gray-900 border-t-2 border-white/20 relative">
          <div className="max-w-5xl mx-auto p-8 md:p-16 relative z-10">
            <TerminalWindow title="nicole@portfolio ~ % cat about.md">
              <p className="text-green-400 text-sm mb-4">$ ./read_bio.sh</p>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6 text-cyan-400">
                &gt; ABOUT_ME.txt
              </h2>

              <div className="space-y-4 md:space-y-6 text-sm md:text-base leading-relaxed text-gray-300">
              <p>
                I'm Nicole Hall, a marketing strategist who somehow turned a messy life into a career that thrives on untangling other people's messes. Cute, right?
              </p>

              <p>
                I've spent more than two decades helping businesses figure out why their marketing is broken, then fixing it so they stop throwing money into the digital void. I ask the hard questions like "Why are we doing this?" and "Who approved this?" and "Did we really think Comic Sans was the answer?" My job is to turn chaos into strategy and chaos into growth and, occasionally, chaos into a polite email with bullet points.
              </p>

              <p>
                My path here wasn't exactly a storybook climb up the corporate ladder. More like the ladder was missing rungs, on fire, and sometimes being used as a baseball bat. I faced addiction, trauma, detours, and the kind of plot twists that make people lean in and whisper "wait… what happened next?" But here's the thrilling part: I didn't just survive it, I learned from it. Turns out resilience makes a great superpower, right after sarcasm.
              </p>

              <p>
                That winding road taught me how to rebuild. A life. A business. A marketing plan that doesn't make everyone hate their job. I care about results that actually matter and strategies that don't make people want to crawl under their desk. I believe marketing is about telling the truth in a way people want to hear. Groundbreaking, I know.
              </p>

              <p>
                Professionally speaking, I've led teams, built brands from scratch, launched campaigns that actually worked, and helped companies make friends with data instead of crying about it. I'm obsessed with clarity, allergic to buzzwords, and known to roll my eyes at "synergy" more than medically recommended.
              </p>

              <p>
                Here's the deal. If you work with me, you'll get honesty, stubborn commitment, clever strategy, and a sense of humor that somehow survived everything. I believe progress beats perfection every time. And yes, coffee keeps the whole operation running.
              </p>

              <p className="font-bold text-base md:text-lg text-green-400">
                <span className="text-yellow-400">$</span> echo "So that's me. Resilient. Strategic. Slightly feral. Let's build cool things anyway."
              </p>
              <p className="text-green-400 text-sm mt-6">✓ Process completed successfully</p>
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
