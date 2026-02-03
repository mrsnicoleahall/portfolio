import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const DemandGenCaseStudy = () => {
  return (
    <>
      <Helmet>
        <title>Demand Gen Case Study | Nicole Hall</title>
        <meta name="description" content="Built inbound demand gen engine generating $2.4M pipeline from zero" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen pt-16 bg-gradient-to-br from-emerald-50 to-teal-100">
        <div className="max-w-5xl mx-auto px-8 py-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              Demand Generation
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              Built Demand Gen Engine: $2.4M Pipeline from Zero
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              How an integrated demand generation strategy—combining content, paid social, webinars, and marketing automation—generated $2.4M in qualified pipeline for a B2B company that previously relied solely on outbound sales.
            </p>
          </motion.div>

          {/* Context */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">The Challenge</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                A mid-market B2B software company [Company Name Redacted] serving the healthcare vertical had reached $8M ARR entirely through outbound sales. Their sales team was stretched thin, chasing leads that often weren't qualified or ready to buy.
              </p>
              <p className="font-semibold text-gray-900">
                The core problems:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <span className="font-semibold">Zero inbound pipeline:</span> 100% reliance on cold outbound (email, cold calls, LinkedIn) with declining response rates
                </li>
                <li>
                  <span className="font-semibold">Long sales cycles:</span> Average 6.3 months from first contact to close, with deals stalling in middle of funnel
                </li>
                <li>
                  <span className="font-semibold">Low brand awareness:</span> Unknown in the market despite strong product-market fit with existing customers
                </li>
                <li>
                  <span className="font-semibold">No lead nurturing:</span> Leads were either "sales-ready" or ignored—nothing in between
                </li>
                <li>
                  <span className="font-semibold">Poor lead quality:</span> Sales spent 60%+ of time chasing unqualified prospects
                </li>
              </ul>
              <p>
                The CEO wanted to build a predictable inbound demand generation engine to complement (and eventually surpass) outbound efforts. The goal: Generate $3M in qualified pipeline within 9 months without proportionally scaling the sales team.
              </p>
            </div>
          </section>

          {/* Strategy */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">Strategic Approach</h2>

            <div className="space-y-6">
              <p className="text-gray-700 text-lg">
                I developed an integrated demand gen strategy focused on building awareness, capturing intent, and nurturing leads through the funnel:
              </p>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-emerald-50 p-5 rounded-lg border-2 border-emerald-200">
                  <div className="text-3xl mb-3">📚</div>
                  <h3 className="font-bold text-sm mb-2 text-gray-900">Content Marketing</h3>
                  <p className="text-xs text-gray-700">
                    Educational content to build authority and capture organic demand
                  </p>
                </div>

                <div className="bg-emerald-50 p-5 rounded-lg border-2 border-emerald-200">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="font-bold text-sm mb-2 text-gray-900">Paid Acquisition</h3>
                  <p className="text-xs text-gray-700">
                    Targeted LinkedIn and Google campaigns to drive qualified leads
                  </p>
                </div>

                <div className="bg-emerald-50 p-5 rounded-lg border-2 border-emerald-200">
                  <div className="text-3xl mb-3">🎥</div>
                  <h3 className="font-bold text-sm mb-2 text-gray-900">Webinar Series</h3>
                  <p className="text-xs text-gray-700">
                    Thought leadership events to engage and qualify prospects
                  </p>
                </div>

                <div className="bg-emerald-50 p-5 rounded-lg border-2 border-emerald-200">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="font-bold text-sm mb-2 text-gray-900">Marketing Automation</h3>
                  <p className="text-xs text-gray-700">
                    Lead scoring and nurture to move prospects through funnel
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pillar 1: Lead Magnet & Content */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">Pillar 1: High-Value Lead Magnet</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-emerald-700">The Ultimate Guide to [Specific Pain Point]</h3>
                <p className="text-gray-700 mb-4">
                  I created a comprehensive 47-page downloadable guide addressing the #1 pain point our ICP faced—a problem our product solved, but valuable even for those not ready to buy software.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold mb-4 text-emerald-900">Content Strategy</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Research & Outline</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Conducted 15 customer interviews asking "What was your biggest challenge before using [product]?" to identify the exact pain points and language our audience used.
                    </p>
                    <p className="text-sm text-gray-700">
                      Outlined 47-page guide covering:
                    </p>
                    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1 mt-2">
                      <li>Industry trends and regulatory changes driving the problem (context)</li>
                      <li>5 common approaches and why they fail (build credibility)</li>
                      <li>Framework for evaluating solutions (education)</li>
                      <li>Step-by-step implementation guide (actionable value)</li>
                      <li>ROI calculator and cost-benefit worksheet (tools)</li>
                      <li>Vendor evaluation checklist (soft CTA toward our solution)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Design & Production</h4>
                    <p className="text-sm text-gray-700">
                      Designed professional PDF with branded templates, charts, screenshots, and customer quotes. Ensured it looked and felt like premium content worth exchanging contact info for.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Gated Landing Page</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Created dedicated landing page optimized for conversion:
                    </p>
                    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                      <li>Benefit-focused headline: "The Complete Guide to [Solving Problem]—Free Download"</li>
                      <li>Preview of guide contents (table of contents, sample pages)</li>
                      <li>Social proof: testimonials from customers who solved this problem</li>
                      <li>Minimal form fields (name, email, company, role) to reduce friction</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-green-800 mb-1">
                  ✓ Lead Magnet Performance (First 6 Months):
                </p>
                <p className="text-xs text-gray-700">
                  2,847 downloads | 63% conversion rate on landing page | Became #1 lead source
                </p>
              </div>
            </div>
          </section>

          {/* Pillar 2: Paid Acquisition */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">Pillar 2: Paid Social & Search Campaigns</h2>

            <div className="space-y-6">
              <p className="text-gray-700">
                To drive traffic to the lead magnet and build awareness, I launched targeted paid campaigns on LinkedIn and Google:
              </p>

              <div className="space-y-6">
                <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
                  <h3 className="text-xl font-bold mb-4 text-emerald-900">LinkedIn Campaign Strategy</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Audience Targeting</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Created 4 audience segments based on ICP criteria:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded border border-emerald-200">
                          <p className="font-semibold text-sm text-gray-900">Decision Makers</p>
                          <p className="text-xs text-gray-600">VP+ titles at target companies (500-5000 employees, healthcare vertical)</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-emerald-200">
                          <p className="font-semibold text-sm text-gray-900">Practitioners</p>
                          <p className="text-xs text-gray-600">Manager-level users who would champion solution internally</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-emerald-200">
                          <p className="font-semibold text-sm text-gray-900">Intent Signals</p>
                          <p className="text-xs text-gray-600">Engaged with competitor content or industry groups</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-emerald-200">
                          <p className="font-semibold text-sm text-gray-900">Lookalike</p>
                          <p className="text-xs text-gray-600">Similar to our best customers (uploaded CRM list)</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Ad Creative</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Developed thought leadership content ads (not direct product pitches):
                      </p>
                      <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                        <li>"5 Reasons Your [Process] is Broken (And How to Fix It)" → Guide download</li>
                        <li>"New [Regulation] Changes Everything. Here's Your Compliance Guide" → Guide download</li>
                        <li>Customer case study highlighting specific ROI metrics → Case study page</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded border border-emerald-200">
                      <p className="text-sm font-semibold text-emerald-900 mb-2">LinkedIn Results:</p>
                      <div className="grid grid-cols-3 gap-4 text-xs text-gray-700">
                        <div>
                          <p className="font-bold text-gray-900">$43</p>
                          <p>Cost per MQL</p>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">2.4%</p>
                          <p>CTR (avg)</p>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">312</p>
                          <p>MQLs in 6 months</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
                  <h3 className="text-xl font-bold mb-4 text-emerald-900">Google Ads Strategy</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Search Campaign (High-Intent Keywords)</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Targeted prospects actively searching for solutions:
                      </p>
                      <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                        <li>Competitor brand names + "alternative" (comparison intent)</li>
                        <li>"[Solution category] software for healthcare" (buying intent)</li>
                        <li>"How to solve [specific problem]" (research intent → guide landing page)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Remarketing Campaign</h4>
                      <p className="text-sm text-gray-700">
                        Retargeted guide downloaders with product-focused ads and demo offers across Google Display Network and YouTube.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded border border-emerald-200">
                      <p className="text-sm font-semibold text-emerald-900 mb-2">Google Ads Results:</p>
                      <div className="grid grid-cols-3 gap-4 text-xs text-gray-700">
                        <div>
                          <p className="font-bold text-gray-900">$52</p>
                          <p>Cost per MQL</p>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">8.3%</p>
                          <p>Search CVR</p>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">175</p>
                          <p>MQLs in 6 months</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pillar 3: Webinar Series */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">Pillar 3: Thought Leadership Webinars</h2>

            <div className="space-y-6">
              <p className="text-gray-700">
                Webinars served as both lead generation and qualification mechanisms—attendees demonstrated serious intent by investing 45 minutes of their time.
              </p>

              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold mb-4 text-emerald-900">Quarterly Webinar Series</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Topic Selection Strategy</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Each quarter, planned webinar on trending industry topic (not product-focused):
                    </p>
                    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                      <li>Q1: "Navigating [New Regulation]: Compliance Strategies for Healthcare Leaders"</li>
                      <li>Q2: "5 Data Security Mistakes Costing Healthcare Organizations Millions"</li>
                      <li>Q3: "The Future of [Process]: Trends and Predictions from Industry Experts"</li>
                      <li>Q4: "2026 Planning: Budget Priorities for Healthcare Technology"</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Guest Expert Strategy</h4>
                    <p className="text-sm text-gray-700">
                      Partnered with recognized industry experts and happy customers as co-presenters. Their networks amplified reach, and their credibility transferred to our brand.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Promotion & Registration</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Multi-channel promotion starting 3 weeks before event:
                    </p>
                    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                      <li>Email invitation to existing database and guide downloaders</li>
                      <li>LinkedIn sponsored posts and InMail to target ICP</li>
                      <li>Partner/speaker promotion to their audiences</li>
                      <li>Organic LinkedIn posts from company account and speakers</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Post-Webinar Follow-Up</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Segmented follow-up based on engagement:
                    </p>
                    <div className="bg-white p-4 rounded border border-emerald-200 space-y-2 text-xs">
                      <div>
                        <p className="font-semibold text-gray-900">Attended + Engaged (asked questions):</p>
                        <p className="text-gray-700">Immediate sales outreach + demo offer</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Attended (passive):</p>
                        <p className="text-gray-700">Recording + content nurture sequence</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Registered but didn't attend:</p>
                        <p className="text-gray-700">Recording + invite to next webinar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-green-800 mb-2">
                  ✓ Webinar Series Performance (4 webinars over 6 months):
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-xs text-gray-700">
                  <div>
                    <p className="font-bold text-gray-900">1,247</p>
                    <p>Total registrations</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">42%</p>
                    <p>Average attendance rate</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">118</p>
                    <p>Sales-qualified opportunities created</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pillar 4: Marketing Automation */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">Pillar 4: Lead Scoring & Nurture Automation</h2>

            <div className="space-y-6">
              <p className="text-gray-700">
                Not all leads are sales-ready immediately. I built a lead scoring model and automated nurture sequences in Salesforce + Marketo to systematically move prospects through the funnel.
              </p>

              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold mb-4 text-emerald-900">Lead Scoring Model</h3>

                <div className="space-y-4">
                  <p className="text-sm text-gray-700 mb-3">
                    Developed scoring system weighing 12 engagement signals to identify Marketing Qualified Leads (MQL threshold: 100 points):
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border border-emerald-200">
                      <h4 className="font-semibold text-sm mb-3 text-gray-900">Demographic Fit (Max 40 pts)</h4>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Target company size: +15</li>
                        <li>• Healthcare vertical: +10</li>
                        <li>• Decision-maker title: +15</li>
                      </ul>
                    </div>

                    <div className="bg-white p-4 rounded border border-emerald-200">
                      <h4 className="font-semibold text-sm mb-3 text-gray-900">Behavioral Engagement (Max 100 pts)</h4>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Downloaded guide: +20</li>
                        <li>• Attended webinar: +30</li>
                        <li>• Visited pricing page: +25</li>
                        <li>• Opened 3+ emails: +10</li>
                        <li>• Watched demo video: +15</li>
                        <li>• Requested demo: +50 (auto-MQL)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-emerald-200">
                    <h4 className="font-semibold text-sm mb-2 text-gray-900">Lead Routing Logic</h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Score ≥ 100 + "Hot" behavior (demo request, pricing page) → Immediate sales assignment</li>
                      <li>• Score 60-99 → Marketing nurture sequence</li>
                      <li>• Score &lt; 60 → Quarterly newsletter only (stay top of mind)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold mb-4 text-emerald-900">Automated Nurture Sequences</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">6-Part Email Nurture (Triggered on Guide Download)</h4>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded border border-emerald-200">
                        <p className="font-semibold text-xs text-gray-900">Email 1 (Immediate):</p>
                        <p className="text-xs text-gray-700">Guide delivery + welcome</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-emerald-200">
                        <p className="font-semibold text-xs text-gray-900">Email 2 (Day 3):</p>
                        <p className="text-xs text-gray-700">"How [Customer] Used This Guide to Solve [Problem]" (case study)</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-emerald-200">
                        <p className="font-semibold text-xs text-gray-900">Email 3 (Day 7):</p>
                        <p className="text-xs text-gray-700">Educational content: "5 Common Mistakes When Implementing [Solution]"</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-emerald-200">
                        <p className="font-semibold text-xs text-gray-900">Email 4 (Day 14):</p>
                        <p className="text-xs text-gray-700">Soft product intro: "How [Product] Automates Everything in the Guide"</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-emerald-200">
                        <p className="font-semibold text-xs text-gray-900">Email 5 (Day 21):</p>
                        <p className="text-xs text-gray-700">Demo video + customer testimonials</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-emerald-200">
                        <p className="font-semibold text-xs text-gray-900">Email 6 (Day 28):</p>
                        <p className="text-xs text-gray-700">Clear CTA: "Ready to see it in action? Book a personalized demo"</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded border border-emerald-200">
                    <h4 className="font-semibold text-sm mb-2 text-gray-900">Nurture Performance</h4>
                    <div className="grid grid-cols-3 gap-4 text-xs text-gray-700">
                      <div>
                        <p className="font-bold text-gray-900">34%</p>
                        <p>Average open rate</p>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">8.2%</p>
                        <p>Click-through rate</p>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">22%</p>
                        <p>MQL conversion rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold mb-4 text-emerald-900">Salesforce Integration & Sales Enablement</h3>

                <div className="space-y-3 text-sm text-gray-700">
                  <p>
                    Bi-directional sync between Marketo and Salesforce ensured sales had complete visibility into lead behavior:
                  </p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Lead score visible in Salesforce contact record</li>
                    <li>Activity timeline showing all email opens, content downloads, webinar attendance</li>
                    <li>Automated task creation when lead hits MQL threshold</li>
                    <li>Email alerts to assigned rep: "Lead score increased to 105—high intent!"</li>
                    <li>Enriched contact data via Clearbit (company info, technologies used, social profiles)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Account-Based Marketing */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">Account-Based Marketing (ABM) Playbook</h2>

            <div className="space-y-4 text-gray-700">
              <p>
                For high-value target accounts, I developed an ABM strategy to orchestrate personalized multi-touch campaigns:
              </p>

              <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200">
                <h4 className="font-semibold mb-3 text-gray-900">Target Account Selection</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Worked with sales to identify 50 dream accounts matching ideal customer profile with $100k+ annual contract value potential.
                </p>
              </div>

              <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200">
                <h4 className="font-semibold mb-3 text-gray-900">Personalized Campaign Tactics</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• LinkedIn ads shown only to employees at target accounts</li>
                  <li>• Personalized direct mail (physical guide book + handwritten note)</li>
                  <li>• Custom landing pages addressing specific company challenges</li>
                  <li>• Sales + marketing coordinated outreach sequences</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-green-800 mb-1">
                  ✓ ABM Results:
                </p>
                <p className="text-xs text-gray-700">
                  23 of 50 target accounts engaged (46% engagement rate) | 8 opportunities created | 3 closed deals worth $340k total
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="mb-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-3xl font-black mb-8">Results & Impact</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">$2.4M</div>
                <div className="text-sm opacity-90">Qualified pipeline generated in 6 months (80% of 9-month goal)</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">487 MQLs</div>
                <div className="text-sm opacity-90">Marketing qualified leads at $43 average cost per MQL</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">28%</div>
                <div className="text-sm opacity-90">Lead-to-opportunity conversion rate (MQL → SQL)</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">72</div>
                <div className="text-sm opacity-90">Sales opportunities created from inbound demand gen</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="font-bold mb-3 text-lg">Channel Breakdown</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Lead magnet (content): 287 MQLs (59%)</li>
                  <li>• Webinars: 118 MQLs (24%)</li>
                  <li>• Paid LinkedIn: 55 MQLs (11%)</li>
                  <li>• Paid Google: 27 MQLs (6%)</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="font-bold mb-3 text-lg">Business Impact</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• 19 closed-won deals worth $680k</li>
                  <li>• Sales cycle shortened from 6.3 to 4.8 months</li>
                  <li>• Inbound leads now 35% of pipeline (vs 0%)</li>
                  <li>• Sales team focusing on qualified opps only</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">Key Takeaways</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">High-Value Content Beats Gimmicks</h3>
                <p className="text-gray-700">
                  The 47-page guide became our #1 lead source because it delivered genuine value. People don't exchange contact info for fluff—they need content worth their time. Our guide solved real problems even for prospects not ready to buy software, building trust and positioning us as experts.
                </p>
              </div>

              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Integrated Beats Siloed</h3>
                <p className="text-gray-700">
                  Success came from orchestrating multiple channels (content, paid, webinars, email) working together—not running isolated campaigns. A prospect might download the guide via LinkedIn ad, attend a webinar 2 weeks later, receive nurture emails, then request a demo. Single-channel attribution misses this reality.
                </p>
              </div>

              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Lead Scoring Prevents Sales Friction</h3>
                <p className="text-gray-700">
                  Before implementing lead scoring, sales complained about "bad leads." After scoring implementation, we routed only qualified MQLs (100+ points) to sales. This improved sales-marketing relationship and shortened sales cycles because reps focused time on genuinely interested prospects.
                </p>
              </div>

              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Nurture Sequences Are Revenue Engines</h3>
                <p className="text-gray-700">
                  22% of guide downloaders eventually became MQLs through automated nurture sequences. Without nurture, we would have captured the immediate 5% ready to buy now and lost the other 95%. The 6-email sequence systematically educated and qualified prospects over 28 days.
                </p>
              </div>

              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Webinars Qualify Intent Better Than Forms</h3>
                <p className="text-gray-700">
                  A prospect investing 45 minutes to attend a live webinar signals much stronger intent than someone downloading a PDF. Webinar attendees had 2.3x higher lead-to-opportunity conversion rate than guide downloaders. Don't underestimate the qualification power of time investment.
                </p>
              </div>
            </div>
          </section>

          {/* Receipts */}
          <section className="bg-gray-50 rounded-lg border border-gray-300 p-8">
            <h3 className="text-2xl font-black mb-4 text-gray-900">Receipts</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600">📊</span>
                <span>Salesforce pipeline report (opportunities + revenue)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600">📈</span>
                <span>Marketo campaign performance dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600">🎥</span>
                <span>Webinar attendance and conversion data</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600">📝</span>
                <span>Lead scoring model documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600">📚</span>
                <span>47-page guide PDF and landing page analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600">💰</span>
                <span>Cost per MQL and ROI calculations</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default DemandGenCaseStudy;
