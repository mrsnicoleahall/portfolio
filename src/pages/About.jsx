import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Nicole Hall - Marketing Engineer</title>
        <meta name="description" content="Two sides. One person. Zero compromise." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen pt-16">

        <div className="flex min-h-screen border-t-2 border-white/20">
          {/* Left Side - Black - Marketing */}
          <div className="w-1/2 bg-black text-white p-16 relative border-r-2 border-white/20">
            <div className="max-w-xl relative z-10">
              <p className="text-green-400 font-mono text-sm mb-2">$ cat /skills/marketing.sh</p>
              <h2 className="text-4xl font-black uppercase mb-8 font-mono text-cyan-400">./MARKETING</h2>

              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold mb-4">Strategy & Positioning</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Defining core value propositions and market differentiation. Mapping audience psychology and pain points that drive action.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Copywriting & Content</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Writing headlines that stop the scroll. Crafting landing page copy that converts cold traffic. Every word earns its place.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Brand & Design</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Creating visual identities that communicate positioning. Designing interfaces that guide users naturally toward conversion.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Campaign Development</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Developing creative concepts that cut through noise. Building lifecycle flows that nurture leads through automation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - White - Engineering */}
          <div className="w-1/2 bg-white text-black p-16 relative">
            <div className="max-w-xl relative z-10">
              <p className="text-purple-600 font-mono text-sm mb-2">$ ls -la /skills/engineer/</p>
              <h2 className="text-4xl font-black uppercase mb-8 font-mono text-purple-600">./ENGINEER</h2>

              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold mb-4">Full-Stack Development</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Building production-ready web applications with React, Vite, and modern JavaScript. Clean, maintainable code that scales.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Data & Analytics</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Setting up tracking architectures that capture meaningful data. Building dashboards that answer business questions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Automation & CI/CD</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Writing scripts to automate repetitive tasks. Building pipelines for quality assurance. Removing human error from critical processes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Systems Architecture</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Designing systems that connect marketing tools, CRMs, and data warehouses. Building scalable infrastructure that handles growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Line */}
          <div className="absolute left-1/2 top-16 bottom-0 w-px bg-gray-500"></div>
        </div>
      </div>
    </>
  );
};

export default About;
