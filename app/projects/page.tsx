'use client';

import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import CloudCircuitIcon from '@/components/CloudCircuitIcon';

export const articles = [
  {
    id: 'cfos-funded-ai',
    title: "CFOs Funded the AI Revolution. Now They're Joining It.",
    description: "CFOs championed enterprise AI investment while their own function lagged. That calculus is changing fast. In this new era, CFOs are not just funding AI, they are integrating it into their core financial operations to drive efficiency and strategic insight.",
    fullContent: "The shift is driven by a realization that AI can do more than just automate routine tasks. It can provide deep insights into market trends, optimize resource allocation, and even predict future financial performance with high accuracy. As a result, CFOs are increasingly becoming the architects of AI-driven strategy within their organizations. Beyond automation, AI is being used for scenario modeling, real-time risk assessment, and enhanced decision-making capabilities that were previously impossible.",
    category: "Digital",
    categoryColor: "#e78a4e",
    gradient: "from-purple-500 to-pink-500",
    date: "Apr 12, 2026",
  },
  {
    id: 'ai-operating-model',
    title: "AI's Next Operating Model",
    description: "From cognitive agents to long-running agents. The transition to a new operating model is essential for businesses to stay competitive.",
    fullContent: "This new model focuses on long-running agents that can perform complex tasks over extended periods, learning and adapting as they go. This allows for a much more autonomous and efficient operation, freeing up human workers for more creative and high-level strategic tasks. Organizations are moving away from simple chatbots toward sophisticated agentic workflows that can orchestrate multi-step processes across various enterprise systems.",
    category: "AI Insights",
    categoryColor: "#667eea",
    gradient: "from-pink-400 to-red-500",
    date: "Apr 10, 2026",
  },
];

const clients = [
  {
    name: "Google",
    description: "Dozens of projects with teams like Google Maps, Chrome, Android, Gmail, Drive, Play, Waze, YouTube, Search, Google One, and more.",
    icon: "⊕",
  },
  {
    name: "Twitter",
    description: "We worked with Twitter to create a comprehensive new product vision for the consumer and revenue side as well as a re-brand.",
    icon: "𝕏",
  },
  {
    name: "Meta",
    description: "Multi year engagements with Messenger, Instagram, Facebook, Oculus, Meta AI, and more, as well as a Meta re-brand.",
    icon: "◯",
  },
  {
    name: "PayPal + Venmo",
    description: "We worked with PayPal to re-design their core apps on desktop and mobile.",
    icon: "▮",
  },
  {
    name: "Square",
    description: "Long term engagement including product design and development.",
    icon: "█",
  },
  {
    name: "Airbnb",
    description: "We worked with Airbnb from the early days of the service and onwards.",
    icon: "⌂",
  },
];

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <section className="relative w-full px-15 py-20 bg-white">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="absolute top-0 right-0 -translate-x-1/4 opacity-5 pointer-events-none">
            <CloudCircuitIcon className="w-96 h-96" />
          </div>

          {/* Hero */}
          <div className="mb-20">
            <span className="text-xs uppercase tracking-widest font-semibold text-gray-600 block mb-4">
              Our Work
            </span>
            <h2 className="text-6xl font-black text-black mb-6">Projects</h2>
            <p className="text-lg text-gray-700 max-w-3xl">
              We craft digital experiences that leave lasting impressions. Each project is a collaboration built on trust, creativity, and relentless attention to detail.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-2 gap-8 mb-24 items-stretch">
            {articles.map((article, idx) => (
              <div 
                key={idx} 
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div
                  className={`bg-gradient-to-br ${article.gradient} h-48 rounded mb-4 flex-shrink-0`}
                />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: article.categoryColor }}
                >
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-black mt-3 mb-3 leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                  {article.description}
                </p>

                <div className="flex justify-between items-center pt-6 border-t border-gray-100 mt-auto">
                  <span className="text-xs text-gray-500 font-medium">{article.date}</span>
                  <Link 
                    href={`/projects/${article.id}`}
                    className="bg-black text-white px-5 py-2 rounded text-xs font-bold cursor-pointer hover:bg-gray-800 transition-colors no-underline"
                  >
                    READ MORE →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Clients Section */}
          <div>
            <h3 className="text-4xl font-black text-black mb-12">Heir Clients</h3>
            <div className="grid grid-cols-2 gap-8">
              {clients.map((client, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg p-8 hover:border-black transition-colors"
                >
                  <div className="text-4xl font-bold text-gray-900 mb-4">
                    {client.icon}
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3">{client.name}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {client.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
