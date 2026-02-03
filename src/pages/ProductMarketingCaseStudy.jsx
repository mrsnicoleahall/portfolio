import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const ProductMarketingCaseStudy = () => {
  return (
    <>
      <Helmet>
        <title>Product Marketing GTM Case Study | Nicole Hall</title>
        <meta name="description" content="How customer research and strategic GTM drove 840 feature activations in 30 days" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen pt-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-5xl mx-auto px-8 py-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Product Marketing
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              Customer Research to Launch: GTM that Drove 840 Activations
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              How deep customer research and strategic go-to-market execution transformed an uncertain product feature into a widely-adopted tool that users actually needed.
            </p>
          </motion.div>

          {/* Context */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">The Challenge</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                A B2B SaaS company [Company Name Redacted] had invested six months of engineering resources building a sophisticated analytics feature. The product team believed it would be valuable, but had limited validation from actual users. The feature was scheduled to launch in 60 days, but the company had no clear understanding of:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Whether this feature solved real, pressing problems for their target audience</li>
                <li>How to position and message the feature in a way that would drive adoption</li>
                <li>Which customer segments would find the most value</li>
                <li>What objections or friction points might prevent adoption</li>
              </ul>
              <p>
                The stakes were high. If the feature failed to gain traction, it would represent significant wasted engineering time and opportunity cost. The company needed to validate the feature's value proposition and develop a comprehensive go-to-market strategy—fast.
              </p>
            </div>
          </section>

          {/* Research Methodology */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">Research & Discovery</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-700">User Interview Program</h3>
                <p className="text-gray-700 mb-4">
                  I designed and executed a rapid user research program over three weeks, conducting 28 in-depth interviews with current customers, churned users, and prospects who matched our ICP.
                </p>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                  <p className="font-semibold text-purple-900 mb-2">Interview Structure:</p>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm">
                    <li>Current analytics workflow and pain points (15 min)</li>
                    <li>Feature prototype walkthrough and feedback (20 min)</li>
                    <li>Prioritization exercise: rank against other needs (10 min)</li>
                    <li>Willingness to pay and adoption barriers (5 min)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-700">Key Findings</h3>
                <p className="text-gray-700 mb-4">
                  The research uncovered three critical pain points that our feature could address:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="text-3xl font-black text-purple-600 mb-2">73%</div>
                    <p className="text-sm text-gray-700">
                      of users were manually exporting data to spreadsheets for analysis—a process taking 4-6 hours weekly
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="text-3xl font-black text-purple-600 mb-2">64%</div>
                    <p className="text-sm text-gray-700">
                      couldn't get answers to critical business questions without involving engineering or BI teams
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="text-3xl font-black text-purple-600 mb-2">89%</div>
                    <p className="text-sm text-gray-700">
                      said they'd adopt a feature that eliminated these manual processes within the first month
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-700">Product Roadmap Impact</h3>
                <p className="text-gray-700 mb-4">
                  I synthesized interview findings into a detailed report with 7 specific product recommendations. The Product team implemented 5 of these suggestions before launch:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Added one-click export to CSV (85% of users requested this)</li>
                  <li>Changed default visualization from bar chart to line graph (matched mental model)</li>
                  <li>Included 5 pre-built report templates for common use cases</li>
                  <li>Added scheduling feature for automated weekly reports</li>
                  <li>Simplified the filtering interface based on usability feedback</li>
                </ul>
              </div>
            </div>
          </section>

          {/* GTM Strategy */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">Go-to-Market Strategy</h2>

            <div className="space-y-6">
              <p className="text-gray-700">
                Armed with deep customer insights, I partnered with the Product Manager to develop and execute a comprehensive GTM strategy spanning multiple channels and customer touchpoints.
              </p>

              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-700">Positioning & Messaging</h3>
                <div className="bg-purple-50 p-6 rounded-lg mb-4">
                  <p className="text-sm text-purple-800 font-semibold mb-2">Core Message Framework:</p>
                  <p className="text-gray-800 mb-3 italic">
                    "Stop wasting 5 hours a week on manual reporting. Get instant answers to your business questions—no spreadsheet required."
                  </p>
                  <p className="text-sm text-gray-700">
                    This positioning directly addressed the #1 pain point from research and framed the feature as a time-saver rather than "another analytics tool."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 text-purple-700">Marketing Asset Development</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">Dedicated Landing Page</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Designed and wrote a conversion-optimized landing page with:
                    </p>
                    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                      <li>Benefit-driven headline testing 3 variations (A/B tested, winner saw 14.2% conversion vs 6% baseline)</li>
                      <li>Interactive demo showing the 5-hour to 5-minute transformation</li>
                      <li>Customer testimonials from beta users (pulled from interview program)</li>
                      <li>ROI calculator: "How much time will you save?"</li>
                      <li>Clear CTAs for different user segments (existing users vs. prospects)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">Sales Enablement Playbook (12 pages)</h4>
                    <p className="text-gray-700 text-sm mb-2">
                      Created comprehensive sales resources including:
                    </p>
                    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                      <li>Feature overview with key selling points mapped to customer pain points</li>
                      <li>Battle cards comparing to competitor solutions</li>
                      <li>Demo script with objection handling for common concerns</li>
                      <li>ROI discussion guide with cost-benefit calculations</li>
                      <li>Success stories from beta customers with quantified results</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">Product Brochure</h4>
                    <p className="text-gray-700 text-sm">
                      Designed 6-page leave-behind featuring before/after scenarios, feature highlights, and customer quotes. Used in sales meetings and sent to prospects.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">Social Media Carousel Series (8 slides)</h4>
                    <p className="text-gray-700 text-sm">
                      Created educational carousel posts for LinkedIn showing:
                    </p>
                    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                      <li>The problem: manual reporting workflows (slides 1-2)</li>
                      <li>How the feature solves it (slides 3-5)</li>
                      <li>Customer results and testimonials (slides 6-7)</li>
                      <li>CTA to learn more (slide 8)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-gray-900 mb-2">In-App Messaging Campaign</h4>
                    <p className="text-gray-700 text-sm">
                      Designed targeted in-app tooltips, modals, and announcement banners segmented by user behavior and role.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Execution */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">Technical Implementation</h2>

            <div className="space-y-4 text-gray-700">
              <p>
                To measure GTM success and optimize throughout the campaign, I implemented comprehensive tracking and automation:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-3 text-gray-900">Event Tracking</h4>
                  <p className="text-sm text-gray-700">
                    Set up custom events in the product analytics platform to track feature discovery, first use, repeat usage, and drop-off points. Created funnel visualization showing path from awareness to activation.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-3 text-gray-900">A/B Testing</h4>
                  <p className="text-sm text-gray-700">
                    Implemented landing page A/B test comparing three headline variations. Winner ("Stop wasting 5 hours...") outperformed alternatives by 38% conversion rate.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-3 text-gray-900">Marketing Automation</h4>
                  <p className="text-sm text-gray-700">
                    Built 3-part email nurture sequence in HubSpot targeting different ICP segments with customized messaging. Automated follow-ups based on engagement signals.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-3 text-gray-900">Activation Dashboard</h4>
                  <p className="text-sm text-gray-700">
                    Created real-time dashboard tracking daily activations, segment breakdown, conversion rates by channel, and time-to-first-value metrics.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="mb-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-3xl font-black mb-8">Results & Impact</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">840</div>
                <div className="text-sm opacity-90">Feature activations in first 30 days (68% of target user base)</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">14.2%</div>
                <div className="text-sm opacity-90">Landing page conversion rate (vs 6% site average—137% improvement)</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">19 deals</div>
                <div className="text-sm opacity-90">Closed by sales team citing the new playbook within 60 days of launch</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">5 of 7</div>
                <div className="text-sm opacity-90">Research-backed product recommendations implemented before launch</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="font-bold mb-3 text-lg">Additional Outcomes</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Average time-to-first-value: 3.2 days (target was 7 days)</li>
                <li>• 76% of activated users became weekly active users within first month</li>
                <li>• Email nurture sequence achieved 34% open rate, 8.2% click-through rate</li>
                <li>• Sales team reported 40% reduction in demo-to-close time when leading with this feature</li>
              </ul>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">Key Takeaways</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Customer Research Is Not Optional</h3>
                <p className="text-gray-700">
                  The insights from 28 user interviews fundamentally shaped both the product itself and how we positioned it. Without this research, we would have launched with generic messaging that didn't resonate with the core pain points users actually experienced.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Product + Marketing Collaboration Drives Success</h3>
                <p className="text-gray-700">
                  Working closely with the Product Manager throughout the process—from research to roadmap to launch—ensured we built something people wanted AND knew how to position it effectively. The 5 product changes based on research feedback were critical to achieving 68% adoption.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Comprehensive Assets Enable Sales</h3>
                <p className="text-gray-700">
                  The 12-page sales playbook gave the team confidence and clear talking points. Within 60 days, they closed 19 deals specifically citing the new feature—showing that well-equipped sales teams convert faster.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Measure What Matters</h3>
                <p className="text-gray-700">
                  Setting up proper event tracking and creating a real-time activation dashboard allowed us to identify and fix friction points quickly. We discovered that users who completed the onboarding checklist were 3x more likely to become weekly active users, so we optimized the onboarding flow accordingly.
                </p>
              </div>
            </div>
          </section>

          {/* Receipts */}
          <section className="bg-gray-50 rounded-lg border border-gray-300 p-8">
            <h3 className="text-2xl font-black mb-4 text-gray-900">Receipts</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-purple-600">📄</span>
                <span>User interview synthesis doc (28 interviews, key findings)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-600">📊</span>
                <span>GTM timeline and channel strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-600">📈</span>
                <span>HubSpot activation funnel dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-600">📖</span>
                <span>Sales enablement playbook (12 pages)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-600">🎨</span>
                <span>Landing page A/B test results</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-600">💬</span>
                <span>Customer testimonials and feedback log</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default ProductMarketingCaseStudy;
