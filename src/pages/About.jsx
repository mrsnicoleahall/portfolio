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
          {/* Left Side - Marketing */}
          <div className="w-1/2 bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 text-gray-900 p-16 relative border-r-2 border-pink-200 overflow-hidden">
            {/* Creative Background Pattern */}
            <div className="absolute inset-0 opacity-25 pointer-events-none">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="watercolor-about">
                    <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" />
                  </filter>
                </defs>
                <ellipse cx="15%" cy="25%" rx="120" ry="100" fill="#ec4899" opacity="0.2" filter="url(#watercolor-about)" />
                <ellipse cx="80%" cy="20%" rx="90" ry="110" fill="#a855f7" opacity="0.18" filter="url(#watercolor-about)" />
                <ellipse cx="70%" cy="75%" rx="100" ry="85" fill="#f97316" opacity="0.22" filter="url(#watercolor-about)" />
                <ellipse cx="25%" cy="80%" rx="80" ry="95" fill="#fbbf24" opacity="0.15" filter="url(#watercolor-about)" />
                <circle cx="50%" cy="45%" r="70" fill="#ec4899" opacity="0.12" filter="url(#watercolor-about)" />
              </svg>
            </div>

            {/* Decorative paint splotches */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/40 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-yellow-300/40 rounded-full blur-2xl"></div>

            <div className="max-w-xl relative z-10">
              <h2 className="text-4xl font-black uppercase mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Marketing</h2>

              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-pink-700">Strategy & Positioning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Defining core value propositions and market differentiation. Mapping audience psychology and pain points that drive action.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-700">Copywriting & Content</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Writing headlines that stop the scroll. Crafting landing page copy that converts cold traffic. Every word earns its place.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-orange-700">Brand & Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Creating visual identities that communicate positioning. Designing interfaces that guide users naturally toward conversion.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-pink-700">Campaign Development</h3>
                  <p className="text-gray-700 leading-relaxed">
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
