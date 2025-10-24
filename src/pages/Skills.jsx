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
    'Brand Positioning',
    'Messaging Strategy',
    'Audience Research',
    'Campaign Strategy',
    'Go-to-Market Planning',
    'Competitive Analysis',
    'Value Proposition',
    'Product Marketing',
    'Copywriting',
    'Landing Page Design',
    'Email Marketing',
    'Ad Creative',
    'Social Media',
    'SEO',
    'Content Marketing',
    'UI/UX Design',
    'Video Production',
    'Graphic Design'
  ];

  const engineeringSkills = [
    'React',
    'Tailwind CSS',
    'Node.js',
    'Git',
    'HubSpot',
    'GA4',
    'Looker Studio',
    'Meta Ads',
    'Google Ads',
    'Zapier',
    'Figma',
    'Webflow',
    'Python',
    'Framer Motion',
    'Stripe',
    'Airtable',
    'Make.com',
    'Salesforce',
    'Segment',
    'SQL & BigQuery',
    'A/B Testing',
    'CRO',
    'Performance Optimization',
    'Marketing Attribution',
    'Data Visualization'
  ];

  return (
    <>
      <Helmet>
        <title>Skills & Proof | Nicole Hall - Marketing Engineer</title>
        <meta name="description" content="Skills and proof of work. Real results from real projects." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen pt-16 bg-white">
        {/* Proof Section - Now First */}
        <div className="max-w-7xl mx-auto p-8 md:p-16">
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
        <div className="border-t-2 border-black">
          <div className="max-w-7xl mx-auto p-8 md:p-16">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 text-center">
              Skills
            </h1>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
              {/* Marketing Skills */}
              <div>
                <h2 className="text-2xl md:text-3xl font-black uppercase mb-8">Marketing</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {marketingSkills.map((skill, idx) => (
                    <div key={idx} className="text-sm font-semibold border border-black p-3">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Skills */}
              <div>
                <h2 className="text-2xl md:text-3xl font-black uppercase mb-8">Engineer</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {engineeringSkills.map((skill, idx) => (
                    <div key={idx} className="text-sm font-semibold border border-black p-3">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="border-t-2 border-black bg-gray-50">
          <div className="max-w-7xl mx-auto p-8 md:p-16">
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
                    <a href="https://bit.ly/nicole-marketing" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                      https://bit.ly/nicole-marketing
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">Audience Analysis via Personas:</span>{' '}
                    <a href="https://bit.ly/nicole-persona" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                      https://bit.ly/nicole-persona
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">Campaign Case Study (from ideation to execution):</span>{' '}
                    <a href="https://bit.ly/nicole-ems" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                      https://bit.ly/nicole-ems
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">Strategic Marketing Pitch Deck:</span>{' '}
                    <a href="https://bit.ly/nicole-strat-pitch" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                      https://bit.ly/nicole-strat-pitch
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
                    <a href="https://bit.ly/nicole-strat-pitch" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                      https://bit.ly/nicole-strat-pitch
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
                    <a href="https://bit.ly/nicole-seerist" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                      https://bit.ly/nicole-seerist
                    </a>
                  </li>
                  <li>
                    <span className="font-bold">Brand Design Example (Basic Instructions):</span>{' '}
                    <a href="https://bit.ly/nicole-bi" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                      https://bit.ly/nicole-bi
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
