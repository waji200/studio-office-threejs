'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="bg-white relative min-h-screen flex items-center justify-center py-20 px-16">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="text-9xl font-black text-gray-100 opacity-10 whitespace-nowrap">Contact</span>
      </div>

      {/* Form and links wrapper */}
      <div className="relative z-10 flex flex-col items-center gap-0 max-w-2xl w-full">
        <form className="w-full bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-3xl border border-gray-200 shadow-md flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            required
            className="px-5 py-4 border border-gray-300 rounded-2xl bg-white text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-gray-400 focus:shadow-lg focus:ring-1 focus:ring-gray-100 hover:border-gray-400"
          />
          <input
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            required
            className="px-5 py-4 border border-gray-300 rounded-2xl bg-white text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-gray-400 focus:shadow-lg focus:ring-1 focus:ring-gray-100 hover:border-gray-400"
          />
          <textarea
            placeholder="Tell us about your project..."
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            required
            className="px-5 py-4 border border-gray-300 rounded-2xl bg-white text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-gray-400 focus:shadow-lg focus:ring-1 focus:ring-gray-100 hover:border-gray-400 resize-none"
          />
          <button
            type="submit"
            disabled={submitted}
            className="mt-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white border-none px-10 py-4 rounded-2xl text-base font-semibold cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:bg-green-500 disabled:cursor-default disabled:shadow-md disabled:transform-none"
          >
            {submitted ? '✓ Message Sent!' : 'Send Message →'}
          </button>
        </form>

        {/* Links section */}
        <div className="flex gap-10 justify-center mt-12">
          <a href="mailto:info@innovationstudio.com" className="text-base font-semibold text-gray-900 relative group">
            Email.
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-gray-900 relative group">
            Instagram.
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-gray-900 relative group">
            Twitter.
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </div>
    </div>
  )
}
