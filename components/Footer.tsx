'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-4 gap-12 mb-16 relative z-10">
          <div>
            <div className="text-2xl font-bold mb-4">innovation</div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">Strategic Design & Digital Innovation. Strategic innovation shaping future digital experiences.</p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 text-black">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link href="/projects" className="text-sm text-gray-600 hover:text-gray-900">Projects</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link></li>
              <li><Link href="/services" className="text-sm text-gray-600 hover:text-gray-900">Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-6 text-black">Contact Info</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="mailto:info@innovationstudio.com" className="text-sm text-gray-600 hover:text-gray-900">Email</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">LinkedIn</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-black">Newsletter</h4>
            <p className="text-sm text-gray-600 mb-4">Join Our Perspective. Insights that inspire smarter digital decisions.</p>
            <form className="flex flex-col gap-2">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 text-sm border border-gray-300 rounded-md" />
              <button type="submit" className="px-4 py-2 bg-black text-white text-sm font-bold rounded-md hover:bg-gray-800">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8 flex justify-between items-center relative z-10">
          <p className="text-xs text-gray-500">&copy; 2026 Innovation Studio. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-9 h-9 bg-blue-500 border-none rounded-sm flex items-center justify-center cursor-pointer hover:-translate-y-0.5 transition-transform">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
