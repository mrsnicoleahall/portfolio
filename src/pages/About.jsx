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
        <div className="flex min-h-screen">
          {/* Left Side - Black - Marketing */}
          <div className="w-1/2 bg-black text-white p-16 relative overflow-hidden">
            {/* Subtle color accent - top left corner */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/65 to-transparent blur-lg"></div>
            <div className="max-w-xl relative z-10">
              <h2 className="text-4xl font-black uppercase mb-8">Marketing</h2>

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
          <div className="w-1/2 bg-white text-black p-16 relative overflow-hidden">
            {/* Subtle color accent - bottom right corner */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-cyan-400/70 to-transparent blur-lg"></div>
            <div className="max-w-xl relative z-10">
              <h2 className="text-4xl font-black uppercase mb-8">Engineering</h2>

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
