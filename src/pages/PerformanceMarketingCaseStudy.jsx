import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PerformanceMarketingCaseStudy = () => {
  return (
    <>
      <Helmet>
        <title>Performance Marketing Case Study | Nicole Hall</title>
        <meta name="description" content="Scaling paid acquisition from $12k to $85k/month while maintaining 4.2x ROAS" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-5xl mx-auto px-8 py-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Performance Marketing
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
              Scaled Paid Acquisition from $12k to $85k Monthly—Profitably
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              How systematic creative testing, attribution infrastructure, and data-driven optimization enabled a 7x increase in ad spend while maintaining profitability and reducing CAC by 31%.
            </p>
          </motion.div>

          {/* Context */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">The Challenge</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                An e-commerce brand [Company Name Redacted] had reached a growth plateau. Organic channels were tapped out, and their paid acquisition efforts were stuck at $12,000 monthly spend with inconsistent ROAS ranging from 2.8x to 5.1x.
              </p>
              <p className="font-semibold text-gray-900">
                The core problems:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <span className="font-semibold">Attribution breakdown:</span> iOS14+ privacy changes had decimated Facebook pixel accuracy, making it impossible to confidently scale spend without knowing what was actually working
                </li>
                <li>
                  <span className="font-semibold">Creative stagnation:</span> Running the same 3-4 ad creatives for months with diminishing returns and increasing CPMs
                </li>
                <li>
                  <span className="font-semibold">No testing framework:</span> Ad hoc creative decisions without systematic testing or learning loops
                </li>
                <li>
                  <span className="font-semibold">Audience saturation:</span> Limited audience segmentation leading to frequency fatigue
                </li>
                <li>
                  <span className="font-semibold">Manual optimization:</span> Daily bid adjustments and budget reallocation eating up 2+ hours daily
                </li>
              </ul>
              <p>
                The founder wanted to scale to $100k+ monthly ad spend, but couldn't do so profitably without solving these fundamental issues. The business needed sustainable, profitable growth—not just vanity metrics.
              </p>
            </div>
          </section>

          {/* Strategy */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">Strategic Approach</h2>

            <div className="space-y-6">
              <p className="text-gray-700 text-lg">
                I implemented a three-pillar strategy addressing attribution, creative, and optimization infrastructure:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Fix Attribution</h3>
                  <p className="text-sm text-gray-700">
                    Rebuild tracking infrastructure to get accurate performance data post-iOS14
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <div className="text-3xl mb-3">🎨</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Scale Creative</h3>
                  <p className="text-sm text-gray-700">
                    Build systematic testing framework to produce winning ads consistently
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <div className="text-3xl mb-3">⚙️</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Automate Optimization</h3>
                  <p className="text-sm text-gray-700">
                    Implement rules-based automation and real-time monitoring
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Attribution Infrastructure */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">Pillar 1: Attribution Infrastructure</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-blue-700">The Attribution Problem</h3>
                <p className="text-gray-700 mb-4">
                  Before iOS14.5, Facebook reported 78% attribution accuracy. After the update, this dropped to 42%. We were flying blind—scaling ad spend without knowing which campaigns, audiences, or creatives were actually driving profitable sales.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-4 text-blue-900">Solution: Server-Side Tracking + Custom Attribution Model</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">1. Migrated to Google Tag Manager Server-Side</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Set up server-side Google Tag Manager to capture conversion events that client-side pixels were missing:
                    </p>
                    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                      <li>Configured cloud server container on Google Cloud Platform</li>
                      <li>Implemented Meta Conversions API sending purchase data server-to-server</li>
                      <li>Added Google Ads enhanced conversions</li>
                      <li>Set up event deduplication to prevent double-counting</li>
                    </ul>
                    <p className="text-sm text-gray-700 mt-2 italic">
                      Result: Attribution accuracy improved from 42% to 89% within first week
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">2. Built Custom Attribution Dashboard</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Created Looker Studio dashboard connecting three data sources:
                    </p>
                    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                      <li>Meta Ads Manager (ad spend, impressions, clicks)</li>
                      <li>Google Ads (search campaign performance)</li>
                      <li>Shopify (actual revenue, orders, customer data)</li>
                    </ul>
                    <p className="text-sm text-gray-700 mt-2">
                      Dashboard showed blended metrics across channels with 7-day and 30-day ROAS windows, enabling data-backed decisions on budget allocation.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">3. First-Party Data Collection</h4>
                    <p className="text-sm text-gray-700">
                      Implemented email capture strategy (exit-intent popup, post-purchase survey) to build first-party data asset, improving audience targeting and reducing reliance on platform pixels.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-green-800">
                  ✓ Attribution accuracy: 42% → 94% | Data confidence restored | Ready to scale
                </p>
              </div>
            </div>
          </section>

          {/* Creative Testing */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">Pillar 2: Creative Testing Framework</h2>

            <div className="space-y-6">
              <p className="text-gray-700">
                With attribution fixed, I could now accurately test creative variations and identify winning ads. I developed a systematic creative testing process:
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-bold mb-4 text-blue-900">Testing Framework</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Value Proposition Matrix (6 Angles)</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Developed 6 core value propositions based on customer research and purchase drivers:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded border border-blue-200">
                        <p className="font-semibold text-sm text-gray-900">1. Quality & Craftsmanship</p>
                        <p className="text-xs text-gray-600">"Premium materials that last"</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-blue-200">
                        <p className="font-semibold text-sm text-gray-900">2. Social Proof</p>
                        <p className="text-xs text-gray-600">"Join 50,000+ happy customers"</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-blue-200">
                        <p className="font-semibold text-sm text-gray-900">3. Problem/Solution</p>
                        <p className="text-xs text-gray-600">"Tired of [pain point]? Here's the fix"</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-blue-200">
                        <p className="font-semibold text-sm text-gray-900">4. Lifestyle/Aspiration</p>
                        <p className="text-xs text-gray-600">"The [identity] you want to be"</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-blue-200">
                        <p className="font-semibold text-sm text-gray-900">5. Limited Time Offer</p>
                        <p className="text-xs text-gray-600">"Sale ends Sunday—don't miss out"</p>
                      </div>
                      <div className="bg-white p-3 rounded border border-blue-200">
                        <p className="font-semibold text-sm text-gray-900">6. Customer Stories</p>
                        <p className="text-xs text-gray-600">Real testimonials and transformations</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Creative Variations (42 Ads Tested Over 4 Months)</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      For each value prop, tested multiple creative formats:
                    </p>
                    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                      <li>Video ads featuring real customer stories (15-30 second clips)</li>
                      <li>Static carousel ads showing product details and use cases</li>
                      <li>User-generated content (UGC) from actual customers</li>
                      <li>Before/after transformations</li>
                      <li>Product demos with benefit-driven copy</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Weekly Testing Cadence</h4>
                    <div className="bg-white p-4 rounded border border-blue-200">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li><span className="font-semibold text-gray-900">Monday:</span> Launch 3-5 new creative variations with $200 test budget each</li>
                        <li><span className="font-semibold text-gray-900">Wednesday:</span> Review performance data, kill bottom 50% performers</li>
                        <li><span className="font-semibold text-gray-900">Friday:</span> Scale winning ads to broader audiences, document learnings</li>
                        <li><span className="font-semibold text-gray-900">Sunday:</span> Plan next week's creative concepts based on winners</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900">Performance Criteria</h4>
                    <p className="text-sm text-gray-700 mb-2">Ads graduated to scale budget if they achieved:</p>
                    <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                      <li>7-day ROAS ≥ 3.5x (profitability threshold)</li>
                      <li>CTR ≥ 2.2% (audience engagement)</li>
                      <li>CPC ≤ $0.85 (cost efficiency)</li>
                      <li>Hook rate ≥ 40% for video ads (attention capture)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-green-800 mb-2">
                  ✓ Key Finding: Customer story videos (Value Prop #6) consistently outperformed all other formats
                </p>
                <p className="text-xs text-gray-700">
                  UGC-style testimonial videos achieved average 5.8x ROAS vs 3.2x for product-focused ads. Shifted 60% of creative production to customer stories.
                </p>
              </div>
            </div>
          </section>

          {/* Landing Pages */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">Landing Page Optimization</h2>

            <div className="space-y-6">
              <p className="text-gray-700">
                Scaling ad spend is worthless if landing pages don't convert. I built a modular landing page system matched to audience segments:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold mb-2 text-gray-900">Segment-Specific Landing Pages (8 Variants)</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Created dedicated landing pages for different audience segments, each with messaging matched to their awareness level:
                  </p>
                  <div className="bg-gray-50 p-4 rounded">
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li><span className="font-semibold">Cold traffic (problem-unaware):</span> Educational content explaining the problem + solution</li>
                      <li><span className="font-semibold">Warm traffic (problem-aware):</span> Feature/benefit focused with social proof</li>
                      <li><span className="font-semibold">Hot traffic (solution-aware):</span> Product-focused with limited-time offers</li>
                      <li><span className="font-semibold">Remarketing audience:</span> Address objections, show reviews, add urgency</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold mb-2 text-gray-900">Conversion Rate Optimization</h4>
                  <p className="text-sm text-gray-700 mb-2">Key improvements that increased conversion rates:</p>
                  <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                    <li>Simplified checkout from 4 steps to 2 steps (abandoned cart rate -22%)</li>
                    <li>Added trust badges above fold (security concerns addressed)</li>
                    <li>Implemented live chat for pre-purchase questions (26% of chats converted)</li>
                    <li>A/B tested product imagery: lifestyle shots vs white background (lifestyle won +18% CR)</li>
                    <li>Added "Recently Purchased" notification popups (social proof, +12% CR)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-sm font-semibold text-blue-900 mb-1">Landing Page Performance:</p>
                  <p className="text-xs text-gray-700">Average conversion rate improved from 2.1% to 3.8%, directly impacting ROAS and enabling profitable scaling.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Automation */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">Pillar 3: Automation & Optimization</h2>

            <div className="space-y-6">
              <p className="text-gray-700">
                To scale from $12k to $85k monthly without proportionally scaling my time, I automated repetitive optimization tasks:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-3 text-gray-900">Automated Bid Rules</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Set up rules-based automation in Meta Ads Manager:
                  </p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• If 7-day ROAS &lt; 3.0x → decrease budget by 25%</li>
                    <li>• If 7-day ROAS &gt; 5.0x → increase budget by 40%</li>
                    <li>• If CPA &gt; $75 for 3 days → pause ad set</li>
                    <li>• If frequency &gt; 4.5 → pause and refresh creative</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-3 text-gray-900">Slack Performance Alerts</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Built custom alerts for anomaly detection:
                  </p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Daily spend exceeds budget by 20%</li>
                    <li>• ROAS drops below 3.0x for any campaign</li>
                    <li>• New ad achieves ROAS &gt; 6.0x (scale opportunity)</li>
                    <li>• Website conversion rate drops &gt; 15% (technical issue?)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-3 text-gray-900">Budget Pacing Dashboard</h4>
                  <p className="text-sm text-gray-700">
                    Created real-time dashboard showing daily spend vs target, ROAS by channel, and projected month-end performance. Enabled proactive budget reallocation instead of reactive firefighting.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-3 text-gray-900">Weekly Performance Reports</h4>
                  <p className="text-sm text-gray-700">
                    Automated weekly stakeholder reports sent via email every Monday with key metrics, top performers, and strategic recommendations.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-green-800">
                  ✓ Time saved: Daily optimization from 2+ hours to 20 minutes review time
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-3xl font-black mb-8">Results & Impact</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">$12k → $85k</div>
                <div className="text-sm opacity-90">Monthly ad spend scaled 7x over 6 months</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">4.2x ROAS</div>
                <div className="text-sm opacity-90">Maintained throughout entire scaling period (blended across all channels)</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">-31% CAC</div>
                <div className="text-sm opacity-90">Customer acquisition cost decreased from $67 to $46 despite increased spend</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-4xl font-black mb-2">94%</div>
                <div className="text-sm opacity-90">Attribution accuracy (up from 42% pre-server-side tracking)</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="font-bold mb-3 text-lg">Creative Performance</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• 42 ad variations tested over 4 months</li>
                  <li>• Top 5 performers drove 68% of revenue</li>
                  <li>• UGC customer stories: 5.8x avg ROAS</li>
                  <li>• Average ad lifespan before fatigue: 21 days</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="font-bold mb-3 text-lg">Efficiency Gains</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Landing page CVR: 2.1% → 3.8% (+81%)</li>
                  <li>• Daily optimization time: 2h → 20min</li>
                  <li>• Average CTR improvement: +47%</li>
                  <li>• CPC reduction: -28% YoY</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="mb-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-3xl font-black mb-6 text-gray-900">Key Takeaways</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Attribution is Foundation</h3>
                <p className="text-gray-700">
                  You can't scale what you can't measure accurately. Fixing attribution first (42% → 94% accuracy) was critical to everything else. Without server-side tracking and proper data infrastructure, we'd be making million-dollar decisions based on bad data.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Creative is the New Targeting</h3>
                <p className="text-gray-700">
                  Post-iOS14, precise audience targeting is limited. Creative is now the primary lever for performance. Our systematic testing framework—not just "trying stuff"—enabled us to consistently produce winning ads. The creative testing cadence (launch Monday, evaluate Wednesday, scale Friday) became our growth engine.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Customer Stories Beat Product Features</h3>
                <p className="text-gray-700">
                  The biggest creative learning: Real customer testimonial videos outperformed polished product videos by 81% (5.8x ROAS vs 3.2x). People trust people more than brands. We shifted 60% of production to UGC-style content.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Automation Enables Scale</h3>
                <p className="text-gray-700">
                  You can't manually optimize $85k/month ad spend. Automated bid rules, performance alerts, and dashboards saved 90% of optimization time while improving results. This freed me to focus on strategy and creative development instead of spreadsheet management.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Landing Page Optimization = Hidden Multiplier</h3>
                <p className="text-gray-700">
                  A 1.7 percentage point improvement in conversion rate (2.1% → 3.8%) multiplied the impact of every dollar spent. Too many marketers focus only on getting cheaper clicks while ignoring the leaky bucket at conversion. Fix both.
                </p>
              </div>
            </div>
          </section>

          {/* Receipts */}
          <section className="bg-gray-50 rounded-lg border border-gray-300 p-8">
            <h3 className="text-2xl font-black mb-4 text-gray-900">Receipts</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-blue-600">📊</span>
                <span>Meta Ads Manager month-over-month comparison screenshots</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">📈</span>
                <span>Looker Studio ROAS dashboard (live data)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">🛒</span>
                <span>Shopify revenue attribution report</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">📝</span>
                <span>Creative testing log with performance data (42 ads)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">⚙️</span>
                <span>GTM server-side configuration screenshots</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">🎯</span>
                <span>Landing page A/B test results (Hotjar + GA4)</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default PerformanceMarketingCaseStudy;
