'use client';

import { useState } from 'react';
import Link from 'next/link';

const CASE_STUDIES = [
  {
    badge: 'badge-ai',
    tag: 'AI · Automation',
    title: 'AI-Powered Lead Generation Engine',
    challenge: 'A B2B client needed qualified leads at scale without manual research.',
    result: 'An automated engine that scrapes, enriches, and delivers structured leads on a schedule.',
    stack: 'Python · Web Scraping · Data Enrichment · Automation',
  },
  {
    badge: 'badge-web',
    tag: 'Automation · Infrastructure',
    title: 'Workflow Automation Infrastructure (Barbeflo)',
    challenge: 'High volumes of incoming webhooks and data needed processing with minimal manual work.',
    result: 'Automated multi-step workflows that normalise data and run operations with near-zero overhead.',
    stack: 'n8n · Python · Webhooks · API Integration',
  },
  {
    badge: 'badge-ai',
    tag: 'OCR · Document AI',
    title: 'Document Processing with Google OCR',
    challenge: 'Unstructured documents needed to be converted into usable, structured data.',
    result: 'An OCR pipeline that turns scanned text into clean, structured records automatically.',
    stack: 'Google Cloud Vision OCR · Node.js · JSON',
  },
  {
    badge: 'badge-enterprise',
    tag: 'Data · Dashboards',
    title: 'Amazon Seller Analytics Dashboard',
    challenge: 'A seller needed clear inventory and performance reporting from Amazon data.',
    result: 'An interactive dashboard that pulls marketplace metrics into clear, visual reports.',
    stack: 'Python · Streamlit · Amazon API',
  },
  {
    badge: 'badge-web',
    tag: 'Enterprise · MERN',
    title: 'Enterprise MERN Platform & UI System',
    challenge: 'An existing dashboard and admin system needed performance and UI improvements.',
    result: 'Optimised components and a responsive admin experience with faster page loads.',
    stack: 'MongoDB · Express · React · Node.js · Tailwind CSS',
  },
  {
    badge: 'badge-web',
    tag: 'Front-End · Figma',
    title: 'Figma-to-Code Front-End Delivery',
    challenge: 'Designer mockups needed to become a pixel-accurate, interactive front-end.',
    result: 'Clean, responsive implementation faithful to the original design.',
    stack: 'Next.js · TypeScript · Figma',
  },
  {
    badge: 'badge-enterprise',
    tag: 'Enterprise · Industrial',
    title: 'LabVIEW Email & Routing Fix',
    challenge: "An industrial LabVIEW system's automated email notifications had stopped working.",
    result: 'Diagnosed and restored secure email routing inside the enterprise system.',
    stack: 'LabVIEW · SMTP · Server Systems',
  },
  {
    badge: 'badge-mobile',
    tag: 'Web · Performance',
    title: 'PHP Web Performance Troubleshooting',
    challenge: 'A customer portal suffered from scripting errors and slow database queries.',
    result: 'Resolved errors and optimised indexing to reduce load times significantly.',
    stack: 'PHP · MySQL · Web Server',
  },
];

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToContact = () => {
    // Navigate to home page with contact hash
    window.location.href = '/#contact';
  };

  return (
    <div>
      {/* NAVIGATION */}
      <nav>
        <div className="wrap">
          <div className="nav-inner">
            <Link href="/" className="nav-logo">
              Nova<em>Edge</em>
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/#about">About</Link>
              <Link href="/#services">Services</Link>
              <Link href="/#stack">Stack</Link>
              <Link href="/projects">Projects</Link>
              <a onClick={scrollToContact} className="nav-cta-btn" style={{ cursor: 'pointer' }}>
                Get in Touch
              </a>
            </div>
            <div
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/#about" onClick={closeMenu}>About</Link>
        <Link href="/#services" onClick={closeMenu}>Services</Link>
        <Link href="/#stack" onClick={closeMenu}>Stack</Link>
        <Link href="/projects" onClick={closeMenu}>Projects</Link>
        <a onClick={() => { scrollToContact(); closeMenu(); }} className="m-cta" style={{ cursor: 'pointer' }}>
          Get in Touch
        </a>
      </div>

      {/* HERO */}
      <section className="projects-hero">
        <div className="wrap">
          <div className="sec-label">Selected Work</div>
          <h1 className="sec-title">
            Case <em>Studies</em>
          </h1>
          <p className="sec-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            A sample of production systems we have delivered. Project links are available on request and on our Upwork agency profile.
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="wrap">
          <div className="projects-grid">
            {CASE_STUDIES.map((c) => (
              <div className="project-card" key={c.title}>
                <div className="project-accent"></div>
                <div className="project-body">
                  <div className={`project-badge ${c.badge}`}>{c.tag}</div>
                  <h3 className="project-title">{c.title}</h3>
                  <div className="case-rows">
                    <div className="case-row">
                      <div className="case-k">Challenge</div>
                      <div className="case-v">{c.challenge}</div>
                    </div>
                    <div className="case-row">
                      <div className="case-k">Result</div>
                      <div className="case-v">{c.result}</div>
                    </div>
                  </div>
                  <div className="case-stack">{c.stack}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="wrap">
          <h2 className="sec-title">Ready to Start Your <em>Project</em>?</h2>
          <p className="sec-sub" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '2rem' }}>
            Let's discuss how we can help bring your ideas to life
          </p>
          <Link href="/#contact" className="btn-primary">
            Get in Touch →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-inner">
            <div>
              <div className="footer-logo">Nova<em>Edge</em> Solutions</div>
              <div className="footer-tag">Building the future, one project at a time</div>
            </div>
            <div className="footer-copy">
              © 2026 NovaEdge Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
