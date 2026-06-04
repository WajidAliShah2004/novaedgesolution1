'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navTo = (id: string) => {
    closeMenu();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const goLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      {/* NAVIGATION */}
      <nav>
        <div className="wrap">
          <div className="nav-inner">
            <div className="nav-logo" onClick={() => navTo('hero')}>
              Nova<em>Edge</em>
            </div>
            <div className="nav-links">
              <a onClick={() => navTo('hero')}>Home</a>
              <a onClick={() => navTo('about')}>About</a>
              <a onClick={() => navTo('services')}>Services</a>
              <a onClick={() => navTo('stack')}>Stack</a>
              <Link href="/projects">Projects</Link>
              <a onClick={() => navTo('contact')} className="nav-cta-btn">
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
        <a onClick={() => { navTo('hero'); closeMenu(); }}>Home</a>
        <a onClick={() => { navTo('about'); closeMenu(); }}>About</a>
        <a onClick={() => { navTo('services'); closeMenu(); }}>Services</a>
        <a onClick={() => { navTo('stack'); closeMenu(); }}>Stack</a>
        <Link href="/projects" onClick={closeMenu}>Projects</Link>
        <a onClick={() => { navTo('contact'); closeMenu(); }} className="m-cta">
          Get in Touch
        </a>
      </div>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="wrap">
          <div className="hero-badge">
            <div className="hero-badge-dot"></div>
            <span>Available for Projects · AI · Cloud · Full-Stack</span>
          </div>
          <h1 className="hero-h1">
            Building <em>Intelligent</em><br />
            Digital Solutions
          </h1>
          <p className="hero-desc">
            We craft cutting-edge software products powered by AI, designed for scale, and built to transform businesses. From startups to enterprises, we turn ideas into reality.
          </p>
          <div className="hero-actions">
            <Link href="/projects" className="btn-primary">
              View Our Work →
            </Link>
            <button className="btn-secondary" onClick={() => navTo('contact')}>
              Let's Talk
            </button>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-n">10<span>+</span></div>
              <div className="hero-stat-l">Projects Delivered</div>
            </div>
            <div>
              <div className="hero-stat-n">5<span>+</span></div>
              <div className="hero-stat-l">Countries Served</div>
            </div>
            <div>
              <div className="hero-stat-n">100<span>%</span></div>
              <div className="hero-stat-l">Client Satisfaction</div>
            </div>
            <div>
              <div className="hero-stat-n">24<span>/7</span></div>
              <div className="hero-stat-l">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="wrap">
          <div className="text-center">
            <div className="sec-label">About Us</div>
            <h2 className="sec-title">Who We <em>Are</em></h2>
          </div>
          <div className="about-content">
            <p className="about-text">
              We're a team of passionate engineers, designers, and innovators dedicated to building exceptional digital products. From AI-powered platforms to enterprise solutions, we combine technical excellence with creative problem-solving.
            </p>
            <p className="about-text">
              Our mission is simple: transform complex business challenges into elegant software solutions that drive real growth.
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <div className="value-title">Fast Delivery</div>
              <div className="value-desc">Agile development cycles with rapid iterations and continuous deployment</div>
            </div>
            <div className="value-card">
              <div className="value-icon">💎</div>
              <div className="value-title">Quality First</div>
              <div className="value-desc">Enterprise-grade code with comprehensive testing and documentation</div>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <div className="value-title">Result Focused</div>
              <div className="value-desc">Measurable outcomes and KPIs that matter to your business</div>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <div className="value-title">True Partnership</div>
              <div className="value-desc">Long-term relationships built on trust and mutual success</div>
            </div>
          </div>
        </div>
      </section>

      <div className="hr"></div>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="wrap">
          <div className="text-center">
            <div className="sec-label">Services</div>
            <h2 className="sec-title">What We <em>Build</em></h2>
            <p className="sec-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              End-to-end digital solutions powered by cutting-edge technology
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <span className="service-icon">🤖</span>
              <h3 className="service-title">AI Apps & Integration</h3>
              <p className="service-desc">
                Intelligent AI-powered applications, machine learning models, GPT integrations, and automated workflow systems
              </p>
              <div className="service-tags">
                <span className="service-tag">OpenAI</span>
                <span className="service-tag">Machine Learning</span>
                <span className="service-tag">LangChain</span>
                <span className="service-tag">AI Automation</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-icon">🌐</span>
              <h3 className="service-title">Web Development</h3>
              <p className="service-desc">
                Full-stack web applications with modern frameworks - responsive, scalable, and optimized for performance
              </p>
              <div className="service-tags">
                <span className="service-tag">React</span>
                <span className="service-tag">Next.js</span>
                <span className="service-tag">Node.js</span>
                <span className="service-tag">TypeScript</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-icon">📱</span>
              <h3 className="service-title">Mobile Development</h3>
              <p className="service-desc">
                Native and cross-platform mobile apps for iOS and Android with seamless performance and beautiful UI
              </p>
              <div className="service-tags">
                <span className="service-tag">Flutter</span>
                <span className="service-tag">React Native</span>
                <span className="service-tag">iOS</span>
                <span className="service-tag">Android</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-icon">💻</span>
              <h3 className="service-title">Desktop Application Development</h3>
              <p className="service-desc">
                Custom desktop software for Windows, Mac, and Linux - enterprise-grade solutions with offline capabilities
              </p>
              <div className="service-tags">
                <span className="service-tag">.NET</span>
                <span className="service-tag">Electron</span>
                <span className="service-tag">C#</span>
                <span className="service-tag">Cross-Platform</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-icon">🎮</span>
              <h3 className="service-title">Game Design & Development</h3>
              <p className="service-desc">
                Engaging games and interactive experiences for web, mobile, and desktop platforms
              </p>
              <div className="service-tags">
                <span className="service-tag">Unity</span>
                <span className="service-tag">Unreal</span>
                <span className="service-tag">Game Design</span>
                <span className="service-tag">2D/3D</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-icon">⚙️</span>
              <h3 className="service-title">Scripts & Utilities</h3>
              <p className="service-desc">
                Custom automation scripts, CLI tools, data processing utilities, and workflow optimization solutions
              </p>
              <div className="service-tags">
                <span className="service-tag">Python</span>
                <span className="service-tag">Bash</span>
                <span className="service-tag">Automation</span>
                <span className="service-tag">DevOps</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-icon">🎨</span>
              <h3 className="service-title">UI/UX Design</h3>
              <p className="service-desc">
                Beautiful, intuitive user interfaces and seamless user experiences with modern design systems
              </p>
              <div className="service-tags">
                <span className="service-tag">Figma</span>
                <span className="service-tag">Adobe XD</span>
                <span className="service-tag">User Research</span>
                <span className="service-tag">Prototyping</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-icon">🎬</span>
              <h3 className="service-title">Video Editing</h3>
              <p className="service-desc">
                Professional video editing for marketing, social media, tutorials, and promotional content
              </p>
              <div className="service-tags">
                <span className="service-tag">Premiere Pro</span>
                <span className="service-tag">After Effects</span>
                <span className="service-tag">Motion Graphics</span>
                <span className="service-tag">Color Grading</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-icon">✏️</span>
              <h3 className="service-title">Graphic Design</h3>
              <p className="service-desc">
                Eye-catching graphics, brand identities, logos, and visual assets that make your brand stand out
              </p>
              <div className="service-tags">
                <span className="service-tag">Photoshop</span>
                <span className="service-tag">Illustrator</span>
                <span className="service-tag">Branding</span>
                <span className="service-tag">Print Design</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-icon">📱</span>
              <h3 className="service-title">Social Media Marketing</h3>
              <p className="service-desc">
                Strategic social media campaigns, content creation, and management to grow your online presence
              </p>
              <div className="service-tags">
                <span className="service-tag">Content Strategy</span>
                <span className="service-tag">Social Ads</span>
                <span className="service-tag">Analytics</span>
                <span className="service-tag">Community</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-icon">📝</span>
              <h3 className="service-title">Sales & Marketing Copywriting</h3>
              <p className="service-desc">
                Compelling copy for websites, landing pages, email campaigns, and marketing materials that convert
              </p>
              <div className="service-tags">
                <span className="service-tag">Copywriting</span>
                <span className="service-tag">SEO Content</span>
                <span className="service-tag">Marketing</span>
                <span className="service-tag">Brand Voice</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-icon">🔧</span>
              <h3 className="service-title">Other Software Development</h3>
              <p className="service-desc">
                Custom software solutions tailored to your unique needs - from MVPs to enterprise systems
              </p>
              <div className="service-tags">
                <span className="service-tag">Custom Solutions</span>
                <span className="service-tag">MVP Development</span>
                <span className="service-tag">Consulting</span>
                <span className="service-tag">Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hr"></div>

      {/* TECH STACK */}
      <section className="stack" id="stack">
        <div className="wrap">
          <div className="text-center">
            <div className="sec-label">Technology</div>
            <h2 className="sec-title">Our <em>Stack</em></h2>
            <p className="sec-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              Industry-leading technologies and frameworks
            </p>
          </div>
          <div className="stack-grid">
            <div className="stack-category">
              <div className="stack-title">Frontend</div>
              <div className="stack-items">
                <div className="stack-item"><span className="stack-dot dot-cyan"></span>React.js</div>
                <div className="stack-item"><span className="stack-dot dot-cyan"></span>Next.js</div>
                <div className="stack-item"><span className="stack-dot dot-cyan"></span>TypeScript</div>
                <div className="stack-item"><span className="stack-dot dot-cyan"></span>Tailwind CSS</div>
              </div>
            </div>

            <div className="stack-category">
              <div className="stack-title">Backend</div>
              <div className="stack-items">
                <div className="stack-item"><span className="stack-dot dot-purple"></span>Node.js</div>
                <div className="stack-item"><span className="stack-dot dot-purple"></span>Python</div>
                <div className="stack-item"><span className="stack-dot dot-purple"></span>.NET Core</div>
                <div className="stack-item"><span className="stack-dot dot-purple"></span>NestJS</div>
              </div>
            </div>

            <div className="stack-category">
              <div className="stack-title">Database</div>
              <div className="stack-items">
                <div className="stack-item"><span className="stack-dot dot-green"></span>PostgreSQL</div>
                <div className="stack-item"><span className="stack-dot dot-green"></span>MongoDB</div>
                <div className="stack-item"><span className="stack-dot dot-green"></span>Redis</div>
                <div className="stack-item"><span className="stack-dot dot-green"></span>MySQL</div>
              </div>
            </div>

            <div className="stack-category">
              <div className="stack-title">Cloud & DevOps</div>
              <div className="stack-items">
                <div className="stack-item"><span className="stack-dot dot-orange"></span>AWS</div>
                <div className="stack-item"><span className="stack-dot dot-orange"></span>Azure</div>
                <div className="stack-item"><span className="stack-dot dot-orange"></span>Docker</div>
                <div className="stack-item"><span className="stack-dot dot-orange"></span>Kubernetes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hr"></div>

      {/* PROJECTS PREVIEW */}
      <section className="projects-preview">
        <div className="wrap">
          <div className="sec-label">Our Work</div>
          <h2 className="sec-title">Featured <em>Projects</em></h2>
          <p className="preview-text">
            We've built 10+ production-ready applications serving thousands of users. From AI platforms to enterprise systems, explore our complete portfolio.
          </p>
          <Link href="/projects" className="btn-primary">
            View All Projects →
          </Link>
        </div>
      </section>

      <div className="hr"></div>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="wrap">
          <div className="contact-content">
            <div className="sec-label">Get In Touch</div>
            <h2 className="sec-title">Let's Build Something <em>Amazing</em></h2>
            <p className="sec-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              Ready to start your project? We're here to help turn your ideas into reality.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card" onClick={() => goLink('mailto:WajidAliShah2004@gmail.com')}>
              <div className="contact-icon">📧</div>
              <div className="contact-label">Email - Wajid</div>
              <div className="contact-value">wajidAliShah2004@gmail.com</div>
            </div>

            <div className="contact-card" onClick={() => goLink('mailto:Zeeshanonwork@gmail.com')}>
              <div className="contact-icon">📧</div>
              <div className="contact-label">Email - Zeeshan</div>
              <div className="contact-value">zeeshanonwork@gmail.com</div>
            </div>

            <div className="contact-card" onClick={() => goLink('tel:+923165479603')}>
              <div className="contact-icon">📱</div>
              <div className="contact-label">Phone - Wajid</div>
              <div className="contact-value">+92 316 5479603</div>
            </div>

            <div className="contact-card" onClick={() => goLink('tel:+923485032295')}>
              <div className="contact-icon">📱</div>
              <div className="contact-label">Phone - Zeeshan</div>
              <div className="contact-value">+92 348 5032295</div>
            </div>
          </div>

          <div className="social-links">
            <button className="social-btn" onClick={() => goLink('https://github.com/WajidAliShah2004')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub
            </button>
            <button className="social-btn" onClick={() => goLink('https://www.linkedin.com/in/murtaza-hussain-97175b197/')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </button>
            <button className="social-btn" onClick={() => goLink('https://www.upwork.com/agencies/1913615184399103598/')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.866-3.06a2.707 2.707 0 0 1 2.704 2.705 2.707 2.707 0 0 1-2.732 2.7zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 0 1-2.547 2.548 2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.452-5.439-5.452z"/>
              </svg>
              Upwork
            </button>
          </div>
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
