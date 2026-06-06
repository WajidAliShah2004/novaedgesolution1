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
        {/* EW / signal-intelligence decorative cluster */}
        <div className="hero-hud" aria-hidden="true">
          <div className="radar">
            <span className="cross-h"></span>
            <span className="cross-v"></span>
            <span className="radar-sweep"></span>
            <span className="radar-blip"></span>
          </div>
          <div className="ew-spectrum">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} style={{ animationDelay: `${(i * 0.08).toFixed(2)}s` }}></span>
            ))}
          </div>
        </div>

        <div className="wrap">
          <div className="hud-readout">
            <span><b>SYS</b> ONLINE</span>
            <span><b>NEURAL.NET</b> <span className="sig">ACTIVE</span></span>
            <span><b>SIGNAL</b> <span className="amb">LOCKED</span></span>
            <span><b>LATENCY</b> &lt;24H</span>
          </div>
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
              <div className="hero-stat-n">5.0<span>★</span></div>
              <div className="hero-stat-l">Verified Rating</div>
            </div>
            <div>
              <div className="hero-stat-n">&lt;24<span>h</span></div>
              <div className="hero-stat-l">Response Time</div>
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
              NovaEdge Solutions is a focused, senior-led software studio. We combine engineering discipline with clear communication to deliver digital products that work in production — and keep working. We deliberately stay lean so that the people who scope your project are the same people who build it.
            </p>
            <p className="about-text">
              We work as a long-term partner, not a one-off contractor: honest scoping, steady communication, on-time delivery, and full ownership of the code and data we produce for you.
            </p>
            <p className="about-text">
              Our multidisciplinary team spans software, AI, and electrical engineering — including DSP and avionics specialists with hands-on experience in electronic-warfare (EW) systems — so we can take on hardware-integrated and signal-heavy work that pure software shops cannot.
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🧑‍💻</div>
              <div className="value-title">Direct Access</div>
              <div className="value-desc">You work directly with the engineers building your product — no layers, no handoffs</div>
            </div>
            <div className="value-card">
              <div className="value-icon">📋</div>
              <div className="value-title">Transparent Scopes</div>
              <div className="value-desc">Fixed scopes and milestones with defined deliverables — no surprises, no hidden costs</div>
            </div>
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <div className="value-title">Confidentiality First</div>
              <div className="value-desc">NDAs as standard. Your data, designs, and IP remain entirely yours</div>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <div className="value-title">Verifiable Track Record</div>
              <div className="value-desc">A 5.0★ rating backed by public, verifiable Upwork reviews</div>
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

      {/* HOW WE WORK */}
      <section className="process" id="process">
        <div className="wrap">
          <div className="text-center">
            <div className="sec-label">Engagement & Trust</div>
            <h2 className="sec-title">How We <em>Work</em></h2>
            <p className="sec-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              A simple, transparent process — you always know where your project stands
            </p>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-num">01</div>
              <div className="step-body">
                <h3>Discovery & trust-building</h3>
                <p>We start with a conversation — understanding your goals, constraints, and success criteria before proposing anything.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-num">02</div>
              <div className="step-body">
                <h3>Clear, fixed scope</h3>
                <p>A written proposal with defined deliverables, milestones, and pricing. No surprises and no hidden costs.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-num">03</div>
              <div className="step-body">
                <h3>Build with steady updates</h3>
                <p>Regular progress demos and a single point of contact. You always know where your project stands.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-num">04</div>
              <div className="step-body">
                <h3>Test, deliver & hand over</h3>
                <p>Quality-checked delivery with full source code, documentation, and a clean handover.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-num">05</div>
              <div className="step-body">
                <h3>Long-term support</h3>
                <p>Ongoing maintenance and enhancement as a continuing partner — the relationship does not end at delivery.</p>
              </div>
            </div>
          </div>

          <div className="assurances">
            <div className="assurance-card">
              <h4>Confidentiality</h4>
              <p>NDAs as standard. Your data, designs, and IP remain entirely yours.</p>
            </div>
            <div className="assurance-card">
              <h4>Responsive communication</h4>
              <p>Replies within 24 hours, in clear and professional English.</p>
            </div>
            <div className="assurance-card">
              <h4>Honest commitments</h4>
              <p>We only promise what we can deliver — and we deliver what we promise.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="hr"></div>

      {/* VERIFIED REVIEWS */}
      <section className="reviews" id="reviews">
        <div className="wrap">
          <div className="text-center">
            <div className="sec-label">Client Feedback</div>
            <h2 className="sec-title">Verified <em>Reviews</em></h2>
          </div>

          <div className="rating-banner">
            <div>
              <div className="rating-banner-title">Average rating across verified Upwork contracts</div>
              <div className="rating-banner-sub">Publicly verifiable on our Upwork freelancer & agency profiles</div>
            </div>
            <div className="rating-banner-score">5.0 ★</div>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <div className="review-proj">Front-End Figma Design & Implementation</div>
              <p className="review-text">“Designed and delivered perfectly on time. Would highly recommend to anyone wanting a punctual professional.”</p>
              <div className="review-by">— Verified Upwork Client</div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <div className="review-proj">Google OCR API Implementation</div>
              <p className="review-text">“Excellent technical implementation and exceptional execution speed on the OCR pipeline. Highly recommended developer.”</p>
              <div className="review-by">— Verified Upwork Client</div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <div className="review-proj">Streamlit & Amazon API Integration</div>
              <p className="review-text">“Highly knowledgeable, professional execution, and robust backend alignment with Amazon interfaces.”</p>
              <div className="review-by">— Verified Upwork Client</div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <div className="review-proj">MERN Stack — UI Changes & New Feature</div>
              <p className="review-text">“Incredibly professional UI adjustments and clean full-stack enhancements to our production system.”</p>
              <div className="review-by">— Verified Upwork Client</div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <div className="review-proj">PHP Web Issue Resolution</div>
              <p className="review-text">“Solved the issue very fast. Hope to work together again.”</p>
              <div className="review-by">— Verified Upwork Client</div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <div className="review-proj">LabVIEW Email Issue (Agency)</div>
              <p className="review-text">“Outstanding diagnostics. Quickly isolated the breakdown in our LabVIEW system and fixed the mailing routines cleanly.”</p>
              <div className="review-by">— Engineering Client</div>
            </div>
          </div>
        </div>
      </section>

      <div className="hr"></div>

      {/* PROJECTS PREVIEW */}
      <section className="projects-preview">
        <div className="wrap">
          <div className="sec-label">Selected Work</div>
          <h2 className="sec-title">Case <em>Studies</em></h2>
          <p className="preview-text">
            A sample of production systems we've delivered — from AI-powered automation to enterprise and web platforms. Explore the challenges we solved and the results we shipped.
          </p>
          <Link href="/projects" className="btn-primary">
            View Case Studies →
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
            <div className="contact-card" onClick={() => goLink('mailto:murtazajii876@gmail.com')}>
              <div className="contact-icon">📧</div>
              <div className="contact-label">Email - Murtaza Hussain</div>
              <div className="contact-value">murtazajii876@gmail.com</div>
            </div>

            <div className="contact-card" onClick={() => goLink('mailto:Zeeshanonwork@gmail.com')}>
              <div className="contact-icon">📧</div>
              <div className="contact-label">Email - Zeeshan Liaqat</div>
              <div className="contact-value">zeeshanonwork@gmail.com</div>
            </div>

            <div className="contact-card" onClick={() => goLink('tel:+923165479603')}>
              <div className="contact-icon">📱</div>
              <div className="contact-label">Phone - Murtaza Hussain</div>
              <div className="contact-value">+92 316 5479603</div>
            </div>

            <div className="contact-card" onClick={() => goLink('tel:+923485032295')}>
              <div className="contact-icon">📱</div>
              <div className="contact-label">Phone - Zeeshan Liaqat</div>
              <div className="contact-value">+92 348 5032295</div>
            </div>
          </div>

          <div className="social-links">
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
              © 2026 NovaEdge Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
