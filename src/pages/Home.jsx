import { Helmet } from 'react-helmet';

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
        <div className="relative bg-white border-b border-black py-8 md:py-12">
          <div className="text-center px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-2">
              Marketing Engineer
            </h1>
            <p className="text-sm md:text-lg text-gray-600 font-mono mb-1">
              /ˈmärkədiNG ˌenjəˈnir/ n.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-black max-w-3xl mx-auto leading-relaxed">
              A person fluent in human persuasion and machine logic. Designs systems that turn ideas into measurable growth.
            </p>
          </div>
        </div>

        {/* Split Section with Content from About */}
        <div className="flex flex-col md:flex-row relative">
          {/* Left Side - Black - Marketing */}
          <div className="w-full md:w-1/2 bg-black text-white p-8 md:p-16 flex items-center justify-center">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">Marketing</h2>

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
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">Engineer</h2>

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
        <div className="bg-white border-t-2 border-black">
          <div className="max-w-4xl mx-auto p-8 md:p-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-8 md:mb-12 text-center">
              About Me
            </h2>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed">
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

              <p className="font-bold text-lg md:text-xl">
                So that's me. Resilient. Strategic. Slightly feral. Let's build cool things anyway.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
