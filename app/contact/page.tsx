'use client';

import { useState } from 'react';
import PageWrapper from '@/components/PageWrapper';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <PageWrapper>
      <section className="relative w-full px-15 py-20 bg-white min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto w-full relative z-10">
          {/* Background text */}
          <div className="absolute inset-0 text-9xl font-black text-gray-100 opacity-10 pointer-events-none overflow-hidden">
            <span>Contact</span>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6 mb-12">
              <div>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded text-sm font-inherit focus:border-black outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded text-sm font-inherit focus:border-black outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded text-sm font-inherit focus:border-black outline-none transition-colors resize-none"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-black text-white border-none px-4 py-3 rounded text-sm font-bold cursor-pointer font-inherit hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message →'}
                </button>
              </div>
            </form>

            {/* Links */}
            <div className="flex gap-8 items-center">
              <a
                href="mailto:info@innovationstudio.com"
                className="text-lg font-semibold text-black hover:text-gray-600 transition-colors"
              >
                Email.
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-black hover:text-gray-600 transition-colors"
              >
                Instagram.
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-black hover:text-gray-600 transition-colors"
              >
                Twitter.
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
