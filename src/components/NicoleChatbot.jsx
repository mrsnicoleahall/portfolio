import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

const NicoleChatbot = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm here to help you learn about Nicole's skills and experience. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const marketingSkills = [
    'Brand Positioning', 'Messaging Strategy', 'Audience Research', 'Campaign Strategy',
    'Go-to-Market Planning', 'Competitive Analysis', 'Value Proposition', 'Product Marketing',
    'Copywriting', 'Landing Page Design', 'Email Marketing', 'Ad Creative', 'Social Media',
    'SEO', 'Content Marketing', 'UI/UX Design', 'Video Production', 'Graphic Design',
    'Marketing Automation', 'Lead Generation', 'Customer Journey Mapping', 'Market Research',
    'Budget Management', 'Marketing Analytics', 'Growth Marketing', 'Account-Based Marketing',
    'Lifecycle Marketing', 'Customer Retention', 'Influencer Marketing', 'Community Building',
    'Public Relations', 'Partnership Marketing'
  ];

  const engineeringSkills = [
    'React', 'Tailwind CSS', 'Node.js', 'Git', 'HubSpot', 'GA4', 'Looker Studio',
    'Meta Ads', 'Google Ads', 'Zapier', 'Figma', 'Webflow', 'Python', 'Framer Motion',
    'Stripe', 'Airtable', 'Salesforce', 'Segment', 'SQL & BigQuery', 'A/B Testing',
    'CRO', 'Performance Optimization', 'Marketing Attribution', 'Data Visualization',
    'Static Site Generation', 'Headless CMS', 'Front-End Development', 'Responsive Design',
    'REST APIs', 'Webhook Integration', 'JavaScript', 'Version Control'
  ];

  const systemPrompt = `You are a helpful assistant answering questions about Nicole Hall, a Marketing Engineer.

Nicole has expertise in both marketing and engineering:

MARKETING SKILLS: ${marketingSkills.join(', ')}

ENGINEERING SKILLS: ${engineeringSkills.join(', ')}

Nicole is a marketing strategist who has spent more than two decades helping businesses fix broken marketing strategies. She's experienced in building brands, launching campaigns, and helping companies make data-driven decisions. She values clarity, results, and practical solutions.

When asked about her skills, provide specific, helpful information about what she can do. Be conversational but professional. Keep responses concise (2-4 sentences max) and focused on what Nicole can do for potential clients or collaborators.`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages,
            userMessage
          ],
          temperature: 0.7,
          max_tokens: 300
        })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message || 'API request failed');
      }

      const assistantMessage = {
        role: 'assistant',
        content: data.choices[0].message.content
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white border-4 border-purple-300 rounded-2xl shadow-2xl overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 text-white p-4">
        <h3 className="text-xl font-bold">What Can Nicole Do?</h3>
        <p className="text-sm text-white/90">Ask me about skills, experience, and expertise</p>
      </div>

      {/* Messages Container */}
      <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gradient-to-br from-purple-50 to-pink-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.role === 'user'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-800 border-2 border-pink-200'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border-2 border-pink-200 rounded-2xl px-4 py-3">
              <p className="text-sm text-gray-600">Thinking...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="border-t-2 border-purple-200 p-4 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Nicole's skills..."
            disabled={isLoading}
            className="flex-1 px-4 py-2 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-100 text-gray-800"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 font-semibold"
          >
            <Send size={18} />
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default NicoleChatbot;
