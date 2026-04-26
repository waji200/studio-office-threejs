'use client';

import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="logo">innovation</div>
            <p>
              Strategic Design & Digital Innovation.<br/>Strategic innovation shaping future digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-cols">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-cols">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <a href="mailto:info@innovationstudio.com">Email</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>
              Join Our Perspective. Insights<br/>that inspire smarter digital<br/>decisions.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="your@email.com"
              />
              <button
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© 2024 Innovation Studio. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
