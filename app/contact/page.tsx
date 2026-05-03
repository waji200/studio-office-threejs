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
      <section className="relative w-full bg-white min-h-screen flex items-center px-[60px] py-[120px] overflow-hidden">
        {/* Background text - pure Tailwind */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-black/[0.07] whitespace-nowrap select-none pointer-events-none uppercase z-0">
          Contact
        </div>

        <div className="contact-container">
          {/* Content */}
          <div className="contact-content">
            <form className="contact-form-minimal" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
              <input
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                required
              />
              <button
                type="submit"
                className="contact-submit-btn-minimal"
                disabled={submitted}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message →'}
              </button>
            </form>

            {/* Links */}
            <div className="contact-links-minimal">
              <a href="mailto:info@innovationstudio.com">Email.</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram.</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter.</a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
