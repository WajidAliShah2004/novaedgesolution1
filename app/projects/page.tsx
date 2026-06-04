'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const goLink = (url: string) => {
    window.open(url, '_blank');
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
          <div className="sec-label">Portfolio</div>
          <h1 className="sec-title">
            Our <em>Work</em>
          </h1>
          <p className="sec-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Production-ready applications serving thousands of users worldwide
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="wrap">
          <div className="projects-grid">
            
            {/* FEATURED PROJECT */}
            <div className="project-card featured-project">
              <div className="project-accent"></div>
              <div className="featured-content">
                <div className="featured-left">
                  <div className="featured-badge">
                    ⭐ Featured Project
                  </div>
                  <h2>A.T.L.A.S. ENGINE</h2>
                  <p className="project-subtitle">atlase.ai · Autonomous Sales Automation Platform</p>
                  <p>
                    An autonomous lead generation platform that streamlines sales operations through intelligent automation — automatically discovering prospects, enriching business data, qualifying leads, and scheduling meetings without any manual intervention.
                  </p>
                  <div className="project-impacts">
                    <div className="impact-item">
                      <div className="impact-check">✓</div>
                      <span>Increased sales team productivity significantly</span>
                    </div>
                    <div className="impact-item">
                      <div className="impact-check">✓</div>
                      <span>Eliminated manual prospecting overhead entirely</span>
                    </div>
                    <div className="impact-item">
                      <div className="impact-check">✓</div>
                      <span>Automated lead qualification pipeline end-to-end</span>
                    </div>
                  </div>
                  <button className="btn-primary" onClick={() => goLink('https://atlase.ai')}>
                    Visit atlase.ai →
                  </button>
                </div>
                <div className="featured-right">
                  <div className="contribution-box">
                    <div className="contribution-title">Our Contribution</div>
                    <div className="contribution-list">
                      <div className="contribution-item"><span className="contrib-dot"></span>Backend Architecture</div>
                      <div className="contribution-item"><span className="contrib-dot"></span>Workflow Automation Engine</div>
                      <div className="contribution-item"><span className="contrib-dot"></span>REST API Development</div>
                      <div className="contribution-item"><span className="contrib-dot"></span>Lead Enrichment Pipelines</div>
                      <div className="contribution-item"><span className="contrib-dot"></span>CRM Integrations</div>
                    </div>
                  </div>
                  <div className="contribution-box">
                    <div className="contribution-title">Tech Stack</div>
                    <div className="stack-badges">
                      <span className="stack-badge">Node.js</span>
                      <span className="stack-badge">AI Automation</span>
                      <span className="stack-badge">REST APIs</span>
                      <span className="stack-badge">CRM Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MREC AI */}
            <div className="project-card">
              <div className="project-accent"></div>
              <div className="project-body">
                <div className="project-badge badge-ai">OCR · Document AI</div>
                <h3 className="project-title">MREC AI</h3>
                <p className="project-subtitle">mrecai.com · Intelligent Business Automation</p>
                <p className="project-desc">
                  Helps businesses automate document processing and workflow management using OCR and AI, delivering higher accuracy with less manual effort.
                </p>
                <div className="project-features">
                  <span className="project-feature">Intelligent OCR</span>
                  <span className="project-feature">Data Extraction</span>
                  <span className="project-feature">Workflow Automation</span>
                  <span className="project-feature">Analytics Dashboard</span>
                </div>
                <div className="project-link" onClick={() => goLink('https://mrecai.com')}>
                  Visit mrecai.com →
                </div>
              </div>
            </div>

            {/* GRADEWISE AI */}
            <div className="project-card">
              <div className="project-accent"></div>
              <div className="project-body">
                <div className="project-badge badge-ai">EdTech · AI Grading</div>
                <h3 className="project-title">GradeWise AI</h3>
                <p className="project-subtitle">gradewiseai.com · Educational Assessment Platform</p>
                <p className="project-desc">
                  Assists students and educators through intelligent grading, assignment analysis, plagiarism detection, and personalized learning tools powered by AI.
                </p>
                <div className="project-features">
                  <span className="project-feature">AI Grading</span>
                  <span className="project-feature">Rubric Analysis</span>
                  <span className="project-feature">AI Tutor</span>
                  <span className="project-feature">Plagiarism Detection</span>
                </div>
                <div className="project-link" onClick={() => goLink('https://www.gradewiseai.com')}>
                  Visit gradewiseai.com →
                </div>
              </div>
            </div>

            {/* STORIBEE */}
            <div className="project-card">
              <div className="project-accent"></div>
              <div className="project-body">
                <div className="project-badge badge-web">AI · Voice · Storytelling</div>
                <h3 className="project-title">Storibee</h3>
                <p className="project-subtitle">storibee.com · Personalized AI Storytelling</p>
                <p className="project-desc">
                  Generates personalized bedtime stories and voice experiences using AI — allowing families to create unique storytelling experiences with customized content.
                </p>
                <div className="project-features">
                  <span className="project-feature">Personalized Stories</span>
                  <span className="project-feature">AI Voice Replication</span>
                  <span className="project-feature">Story Library</span>
                  <span className="project-feature">Secure Profiles</span>
                </div>
                <div className="project-link" onClick={() => goLink('https://storibee.com')}>
                  Visit storibee.com →
                </div>
              </div>
            </div>

            {/* TOURDESWAT */}
            <div className="project-card">
              <div className="project-accent"></div>
              <div className="project-body">
                <div className="project-badge badge-web">Tourism · Booking</div>
                <h3 className="project-title">TourDeSwat</h3>
                <p className="project-subtitle">tourdeswat.pk · Tourism & Booking Platform</p>
                <p className="project-desc">
                  A digital tourism platform helping travelers discover destinations, book tours, and plan travel experiences in the scenic Swat Valley region.
                </p>
                <div className="project-features">
                  <span className="project-feature">Destination Listings</span>
                  <span className="project-feature">Tour Packages</span>
                  <span className="project-feature">Booking Management</span>
                  <span className="project-feature">Search & Filtering</span>
                </div>
                <div className="project-link" onClick={() => goLink('https://tourdeswat.pk')}>
                  Visit tourdeswat.pk →
                </div>
              </div>
            </div>

            {/* FACE RECOGNITION */}
            <div className="project-card">
              <div className="project-accent"></div>
              <div className="project-body">
                <div className="project-badge badge-ai">AI · Computer Vision</div>
                <h3 className="project-title">Face Recognition System</h3>
                <p className="project-subtitle">Biometric Identity Verification Platform</p>
                <p className="project-desc">
                  Real-time face recognition for identity verification, access control, and attendance tracking using computer vision and deep learning.
                </p>
                <div className="project-features">
                  <span className="project-feature">Real-Time Detection</span>
                  <span className="project-feature">Identity Verification</span>
                  <span className="project-feature">Access Control</span>
                  <span className="project-feature">Deep Learning</span>
                </div>
              </div>
            </div>

            {/* INVENTORY MANAGEMENT */}
            <div className="project-card">
              <div className="project-accent"></div>
              <div className="project-body">
                <div className="project-badge badge-enterprise">Enterprise · Operations</div>
                <h3 className="project-title">Inventory Management System</h3>
                <p className="project-subtitle">Full-featured Stock & Warehouse Management</p>
                <p className="project-desc">
                  Comprehensive platform to track stock levels, manage suppliers, automate reorder alerts, and generate real-time operational reports.
                </p>
                <div className="project-features">
                  <span className="project-feature">Stock Tracking</span>
                  <span className="project-feature">Supplier Management</span>
                  <span className="project-feature">Auto Reorder</span>
                  <span className="project-feature">Analytics</span>
                </div>
              </div>
            </div>

            {/* MOBILE SHOP */}
            <div className="project-card">
              <div className="project-accent"></div>
              <div className="project-body">
                <div className="project-badge badge-mobile">Retail · POS</div>
                <h3 className="project-title">Mobile Shop Management</h3>
                <p className="project-subtitle">POS & Retail Operations Platform</p>
                <p className="project-desc">
                  All-in-one shop management for mobile retailers covering sales, inventory, repair job tracking, and financial reporting.
                </p>
                <div className="project-features">
                  <span className="project-feature">POS System</span>
                  <span className="project-feature">Repair Tracking</span>
                  <span className="project-feature">Customer Records</span>
                  <span className="project-feature">Sales Reports</span>
                </div>
              </div>
            </div>

            {/* ENTERPRISE DESKTOP */}
            <div className="project-card">
              <div className="project-accent"></div>
              <div className="project-body">
                <div className="project-badge badge-enterprise">Enterprise · Desktop</div>
                <h3 className="project-title">Enterprise Desktop Apps</h3>
                <p className="project-subtitle">Custom .NET / C# Business Software</p>
                <p className="project-desc">
                  Custom desktop applications for enterprise environments delivering robust offline-capable tools for HR, workflow processing, and data management.
                </p>
                <div className="project-features">
                  <span className="project-feature">.NET Core / C#</span>
                  <span className="project-feature">Offline Capable</span>
                  <span className="project-feature">HR Workflows</span>
                  <span className="project-feature">Data Management</span>
                </div>
              </div>
            </div>

            {/* REAL-TIME NETWORKING */}
            <div className="project-card">
              <div className="project-accent"></div>
              <div className="project-body">
                <div className="project-badge badge-web">Infrastructure · Real-Time</div>
                <h3 className="project-title">Real-Time Networking</h3>
                <p className="project-subtitle">Live Data Sync & Event-Driven Architecture</p>
                <p className="project-desc">
                  High-performance real-time communication using WebSockets and event-driven architecture powering live dashboards and messaging.
                </p>
                <div className="project-features">
                  <span className="project-feature">WebSocket Architecture</span>
                  <span className="project-feature">Live Dashboards</span>
                  <span className="project-feature">Event-Driven</span>
                  <span className="project-feature">Scalable</span>
                </div>
              </div>
            </div>

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
              © 2025 NovaEdge Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
