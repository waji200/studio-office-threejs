'use client';

import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-black/6">
      <div className="px-15 py-16">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1.3fr] gap-12 mb-16">
          {/* Brand */}
          <div className="footer-brand">
            <div className="text-2xl font-black text-black mb-4 tracking-tight">
              Studio
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-64">
              Building beautiful digital experiences with Three.js and modern web technologies.
            </p>
          </div>

          {/* Company */}
          <div className="footer-cols">
            <h4 className="text-sm font-bold mb-6 text-black">Company</h4>
            <ul className="space-y-3.5">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="footer-cols">
            <h4 className="text-sm font-bold mb-6 text-black">Projects</h4>
            <ul className="space-y-3.5">
              <li>
                <Link href="/projects" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  All Projects
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4 className="text-sm font-bold mb-4 text-black">Newsletter</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Subscribe to get updates on new projects.
            </p>
            <form className="flex flex-col gap-2.5">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-3.5 border border-gray-200 rounded text-sm font-inherit focus:border-gray-700 outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-black text-white border-none px-4 py-3.5 rounded text-sm font-bold cursor-pointer font-inherit hover:bg-gray-900 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex justify-center items-center relative">
          <p className="text-xs text-gray-500 tracking-wide">
            © 2024 Studio. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="absolute right-0 top-5 w-9 h-9 bg-blue-500 border-none rounded flex items-center justify-center cursor-pointer shadow-[0_4px_16px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
