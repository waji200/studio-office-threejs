export default function Projects() {
  const articles = [
    {
      id: 1,
      category: 'Digital',
      title: 'CFOs Funded the AI Revolution. Now They\'re Joining It.',
      description: 'CFOs championed enterprise AI investment while their own function lagged. That calculus is changing fast.',
      date: 'Apr 12, 2026',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      category: 'AI Insights',
      title: 'AI\'s Next Operating Model',
      description: 'From cognitive agents to long-running agents.',
      date: 'Apr 10, 2026',
      gradient: 'from-pink-400 to-red-500'
    },
    {
      id: 3,
      category: 'Leadership & Talent',
      title: 'Four Things CEOs Need to Do Differently on AI',
      description: 'CEOs need to take personal responsibility for AI adoption, leading by example, building a supportive culture.',
      date: 'Apr 8, 2026',
      gradient: 'from-cyan-500 to-blue-400'
    },
    {
      id: 4,
      category: 'Aerospace & Defense',
      title: 'Industrial Automation: From Control to Intelligence',
      description: 'AI is reshaping the automation value pyramid into an hourglass.',
      date: 'Apr 7, 2026',
      gradient: 'from-green-400 to-emerald-500'
    }
  ]

  return (
    <div className="bg-white">
      <section className="py-20 px-16 max-w-5xl mx-auto">
        <h1 className="text-6xl font-bold mb-6">Projects</h1>
        <p className="text-xl text-gray-600 mb-16">
          We craft digital experiences that leave lasting impressions. Each project is a collaboration built on trust, creativity, and relentless attention to detail.
        </p>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-4 gap-6 mb-20">
          {articles.map((article) => (
            <div key={article.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className={`bg-gradient-to-br ${article.gradient} h-48 w-full`} />
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-3">{article.category}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-sm text-gray-600 flex-1 line-clamp-2">{article.description}</p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Brief • {article.date}</span>
                  <button className="text-gray-400 hover:text-gray-600">📌</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Clients We've Worked With</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { name: 'Google', desc: 'Dozens of projects with teams like Google Maps, Chrome, Android, Gmail, Drive, Play, Waze, YouTube.' },
              { name: 'Twitter', desc: 'Created a comprehensive new product vision for the consumer and revenue side as well as a re-brand.' },
              { name: 'Meta', desc: 'Multi year engagements with Messenger, Instagram, Facebook, Oculus, Meta AI, and more.' },
              { name: 'PayPal + Venmo', desc: 'Re-designed their core apps on desktop and mobile.' },
              { name: 'Square', desc: 'Long term engagement including product design and development.' },
              { name: 'Airbnb', desc: 'Worked with Airbnb from the early days of the service and onwards.' }
            ].map((client, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-3">{client.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{client.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
