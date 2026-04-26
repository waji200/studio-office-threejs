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
      <section className="contact-section-minimal">
        <div className="contact-container">
          {/* Background text */}
          <div className="contact-bg-text">Contact</div>

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
