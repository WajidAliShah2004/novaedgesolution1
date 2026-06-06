'use client';

import { useState } from 'react';
import Link from 'next/link';

type CaseStudy = {
  badge: string;
  tag: string;
  title: string;
  challenge: string;
  result: string;
  stack: string;
  location?: string;
  link?: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    badge: 'badge-ai',
    tag: 'AI · Automation',
    title: 'A.T.L.A.S. Engine — Autonomous Lead Generation',
    challenge: 'A B2B client needed qualified leads at scale without manual prospecting or a sales team.',
    result: 'A fully autonomous, multi-agent AI engine that discovers prospects, enriches contacts, runs multi-channel outreach and live AI calls, and books meetings 24/7.',
    stack: 'Multi-Agent AI · LLMs · Python · Enrichment APIs · Telephony',
    location: 'USA',
    link: 'https://atlase.ai',
  },
  {
    badge: 'badge-ai',
    tag: 'AI · OCR · EdTech',
    title: 'GradeWise AI — Assignment Grading Assistant',
    challenge: 'University students needed fast, reliable feedback on assignments before submitting them.',
    result: 'An AI assistant that reads uploaded work via OCR, predicts grades against the rubric, and returns detailed feedback with plagiarism and AI-content checks.',
    stack: 'AI/LLM · Google Cloud Vision OCR · Web App',
    location: 'Australia',
    link: 'https://gradewiseai.com',
  },
  {
    badge: 'badge-mobile',
    tag: 'Mobile · iOS & Android',
    title: 'Storibee — Personalised Bedtime Stories',
    challenge: 'Parents wanted a safe, personal way to read bedtime stories — even when away from their children.',
    result: 'A cross-platform app with 60+ curated stories and voice replication that lets parents narrate in their own voice; COPPA-compliant and ad-free.',
    stack: 'Flutter · iOS · Android · Backend · Voice AI',
    location: 'USA',
    link: 'https://storibee.com',
  },
  {
    badge: 'badge-enterprise',
    tag: 'Kiosk · Hardware · Payments',
    title: "Jane's Golf Carts — Self-Service Kiosk",
    challenge: 'A US dealership wanted unattended, in-store sales and checkout with real cash and card handling.',
    result: 'A self-service kiosk integrating a bill acceptor, Stripe Terminal, cash dispenser, thermal printer, barcode scanner, and QuickBooks sync for end-to-end automated transactions.',
    stack: 'Kiosk · Stripe Terminal · QuickBooks API · Hardware Integration',
    location: 'USA',
    link: 'https://janesgolfcarts.com',
  },
  {
    badge: 'badge-web',
    tag: 'Web · Business',
    title: 'MRE Consulting — Advisory Web Platform',
    challenge: 'A New York advisory firm needed a professional web presence spanning tax, insurance, and AI services.',
    result: 'A clean, conversion-focused website presenting the firm’s integrated consulting offering.',
    stack: 'Next.js · Responsive Web · UI Design',
    location: 'USA',
    link: 'https://mrecai.com',
  },
  {
    badge: 'badge-web',
    tag: 'Automation · Infrastructure',
    title: 'Workflow Automation Infrastructure (Barberflo)',
    challenge: 'High volumes of incoming webhooks and data needed processing with minimal manual work.',
    result: 'Automated multi-step workflows that normalise data and run operations with near-zero overhead.',
    stack: 'n8n · Python · Webhooks · API Integration',
    location: 'USA',
    link: 'https://barberflo.com',
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
  {
    badge: 'badge-enterprise',
    tag: 'POS · Retail',
    title: 'Mobile Shop POS & Management System',
    challenge: 'A local mobile-phone retailer was tracking sales and stock manually.',
    result: 'A point-of-sale and shop-management system handling sales, billing, and customer records.',
    stack: 'POS · Desktop/Web · Database',
    location: 'Pakistan',
  },
  {
    badge: 'badge-enterprise',
    tag: 'Inventory · Retail',
    title: 'Inventory Management System',
    challenge: 'A local business needed accurate stock control across purchases and sales.',
    result: 'An inventory system with stock tracking, purchase and sales records, and low-stock reporting.',
    stack: 'Inventory · Database · Reporting',
    location: 'Pakistan',
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
                  {(c.location || c.link) && (
                    <div className="case-meta">
                      {c.location && <span className="case-loc">📍 {c.location}</span>}
                      {c.link && (
                        <a
                          className="case-link"
                          href={c.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {c.link.replace(/^https?:\/\//, '').replace(/\/$/, '')} ↗
                        </a>
                      )}
                    </div>
                  )}
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
