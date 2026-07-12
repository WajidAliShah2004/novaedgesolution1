import Link from 'next/link';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import Icon, { type IconName } from './components/Icons';

const SERVICES: {
  icon: IconName;
  title: string;
  desc: string;
  tags: string[];
}[] = [
  {
    icon: 'ai',
    title: 'AI Apps & Integration',
    desc: 'AI-powered applications, machine learning models, LLM integrations, and automated workflow systems that run in production.',
    tags: ['OpenAI', 'Machine Learning', 'LangChain', 'AI Automation'],
  },
  {
    icon: 'globe',
    title: 'Web Development',
    desc: 'Full-stack web applications with modern frameworks — responsive, scalable, and optimized for performance.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
  },
  {
    icon: 'mobile',
    title: 'Mobile Development',
    desc: 'Native and cross-platform apps for iOS and Android with seamless performance and polished interfaces.',
    tags: ['Flutter', 'React Native', 'iOS', 'Android'],
  },
  {
    icon: 'desktop',
    title: 'Desktop Applications',
    desc: 'Custom desktop software for Windows, Mac, and Linux — enterprise-grade solutions with offline capability.',
    tags: ['.NET', 'Electron', 'C#', 'Cross-Platform'],
  },
  {
    icon: 'gamepad',
    title: 'Game Development',
    desc: 'Engaging games and interactive experiences for web, mobile, and desktop platforms.',
    tags: ['Unity', 'Unreal', 'Game Design', '2D/3D'],
  },
  {
    icon: 'terminal',
    title: 'Scripts & Utilities',
    desc: 'Custom automation scripts, CLI tools, data pipelines, and workflow optimization for daily operations.',
    tags: ['Python', 'Bash', 'Automation', 'DevOps'],
  },
  {
    icon: 'pen',
    title: 'UI/UX Design',
    desc: 'Intuitive interfaces and considered user experiences built on modern design systems.',
    tags: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
  },
  {
    icon: 'video',
    title: 'Video Editing',
    desc: 'Professional editing for marketing, social media, tutorials, and promotional content.',
    tags: ['Premiere Pro', 'After Effects', 'Motion Graphics', 'Color Grading'],
  },
  {
    icon: 'layers',
    title: 'Graphic Design',
    desc: 'Brand identities, logos, and visual assets that make your brand recognizable at a glance.',
    tags: ['Photoshop', 'Illustrator', 'Branding', 'Print Design'],
  },
  {
    icon: 'megaphone',
    title: 'Social Media Marketing',
    desc: 'Strategic campaigns, content creation, and community management that grow your presence.',
    tags: ['Content Strategy', 'Social Ads', 'Analytics', 'Community'],
  },
  {
    icon: 'copy',
    title: 'Sales & Marketing Copy',
    desc: 'Copy for websites, landing pages, and email campaigns written to convert, not just to fill space.',
    tags: ['Copywriting', 'SEO Content', 'Marketing', 'Brand Voice'],
  },
  {
    icon: 'wrench',
    title: 'Custom Software',
    desc: 'Solutions tailored to your unique needs — from first MVP to enterprise systems and integrations.',
    tags: ['Custom Solutions', 'MVP Development', 'Consulting', 'Integration'],
  },
];

const VALUES: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: 'users',
    title: 'Direct Access',
    desc: 'You work directly with the engineers building your product — no layers, no handoffs.',
  },
  {
    icon: 'clipboard',
    title: 'Transparent Scopes',
    desc: 'Fixed scopes and milestones with defined deliverables — no surprises, no hidden costs.',
  },
  {
    icon: 'shield',
    title: 'Confidentiality First',
    desc: 'NDAs as standard. Your data, designs, and IP remain entirely yours.',
  },
  {
    icon: 'star',
    title: 'Verifiable Track Record',
    desc: 'A 5.0★ rating backed by public, verifiable Upwork reviews.',
  },
];

const REVIEWS = [
  {
    project: 'Front-End Figma Design & Implementation',
    text: '“Designed and delivered perfectly on time. Would highly recommend to anyone wanting a punctual professional.”',
    by: 'Verified Upwork Client',
  },
  {
    project: 'Google OCR API Implementation',
    text: '“Excellent technical implementation and exceptional execution speed on the OCR pipeline. Highly recommended developer.”',
    by: 'Verified Upwork Client',
  },
  {
    project: 'Streamlit & Amazon API Integration',
    text: '“Highly knowledgeable, professional execution, and robust backend alignment with Amazon interfaces.”',
    by: 'Verified Upwork Client',
  },
  {
    project: 'MERN Stack — UI Changes & New Feature',
    text: '“Incredibly professional UI adjustments and clean full-stack enhancements to our production system.”',
    by: 'Verified Upwork Client',
  },
  {
    project: 'PHP Web Issue Resolution',
    text: '“Solved the issue very fast. Hope to work together again.”',
    by: 'Verified Upwork Client',
  },
  {
    project: 'LabVIEW Email Issue (Agency)',
    text: '“Outstanding diagnostics. Quickly isolated the breakdown in our LabVIEW system and fixed the mailing routines cleanly.”',
    by: 'Engineering Client',
  },
];

const PROCESS = [
  {
    title: 'Discovery & trust-building',
    desc: 'We start with a conversation — understanding your goals, constraints, and success criteria before proposing anything.',
  },
  {
    title: 'Clear, fixed scope',
    desc: 'A written proposal with defined deliverables, milestones, and pricing. No surprises and no hidden costs.',
  },
  {
    title: 'Build with steady updates',
    desc: 'Regular progress demos and a single point of contact. You always know where your project stands.',
  },
  {
    title: 'Test, deliver & hand over',
    desc: 'Quality-checked delivery with full source code, documentation, and a clean handover.',
  },
  {
    title: 'Long-term support',
    desc: 'Ongoing maintenance and enhancement as a continuing partner — the relationship does not end at delivery.',
  },
];

export default function Home() {
  return (
    <div>
      <SiteNav />

      <main id="main">
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
              <span>
                <b>SYS</b> ONLINE
              </span>
              <span>
                <b>NEURAL.NET</b> <span className="sig">ACTIVE</span>
              </span>
              <span>
                <b>SIGNAL</b> <span className="amb">LOCKED</span>
              </span>
              <span>
                <b>LATENCY</b> &lt;24H
              </span>
            </div>
            <div className="hero-badge">
              <div className="hero-badge-dot"></div>
              <span>Available for Projects · AI · Cloud · Full-Stack</span>
            </div>
            <h1 className="hero-h1">
              Building <em>Intelligent</em>
              <br />
              Digital Solutions
            </h1>
            <p className="hero-desc">
              We design, build, and ship production software — AI systems, web platforms, and
              hardware-integrated products — for startups and enterprises in five countries.
            </p>
            <div className="hero-actions">
              <Link href="/projects" className="btn-primary">
                View Our Work →
              </Link>
              <a href="#contact" className="btn-secondary">
                Let&apos;s Talk
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-n">
                  10<span>+</span>
                </div>
                <div className="hero-stat-l">Projects Delivered</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-n">
                  5<span>+</span>
                </div>
                <div className="hero-stat-l">Countries Served</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-n">
                  5.0<span>★</span>
                </div>
                <div className="hero-stat-l">Verified Rating</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-n">
                  &lt;24<span>h</span>
                </div>
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
              <h2 className="sec-title">
                Who We <em>Are</em>
              </h2>
            </div>
            <div className="about-content" data-reveal>
              <p className="about-text">
                NovaEdge Solutions is a focused, senior-led software studio. We combine engineering
                discipline with clear communication to deliver digital products that work in
                production — and keep working. We deliberately stay lean so that the people who
                scope your project are the same people who build it.
              </p>
              <p className="about-text">
                We work as a long-term partner, not a one-off contractor: honest scoping, steady
                communication, on-time delivery, and full ownership of the code and data we produce
                for you.
              </p>
              <p className="about-text">
                Our multidisciplinary team spans software, AI, and electrical engineering —
                including DSP and avionics specialists with hands-on experience in
                electronic-warfare (EW) systems — so we can take on hardware-integrated and
                signal-heavy work that pure software shops cannot.
              </p>
            </div>
            <div className="values-grid">
              {VALUES.map((v) => (
                <div className="value-card" key={v.title} data-reveal>
                  <div className="value-icon">
                    <Icon name={v.icon} size={26} />
                  </div>
                  <div className="value-title">{v.title}</div>
                  <div className="value-desc">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="hr"></div>

        {/* SERVICES */}
        <section className="services" id="services">
          <div className="wrap">
            <div className="text-center">
              <div className="sec-label">Services</div>
              <h2 className="sec-title">
                What We <em>Build</em>
              </h2>
              <p className="sec-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                End-to-end digital work — from AI systems to the brand and copy around them
              </p>
            </div>
            <div className="services-grid">
              {SERVICES.map((s) => (
                <div className="service-card" key={s.title} data-reveal>
                  <span className="service-icon">
                    <Icon name={s.icon} size={26} />
                  </span>
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.desc}</p>
                  <div className="service-tags">
                    {s.tags.map((t) => (
                      <span className="service-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="hr"></div>

        {/* TECH STACK */}
        <section className="stack" id="stack">
          <div className="wrap">
            <div className="text-center">
              <div className="sec-label">Technology</div>
              <h2 className="sec-title">
                Our <em>Stack</em>
              </h2>
              <p className="sec-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                The tools we reach for in production, category by category
              </p>
            </div>
            <div className="stack-grid">
              <div className="stack-category" data-reveal>
                <div className="stack-title">Frontend</div>
                <div className="stack-items">
                  <div className="stack-item">
                    <span className="stack-dot dot-cyan"></span>React.js
                  </div>
                  <div className="stack-item">
                    <span className="stack-dot dot-cyan"></span>Next.js
                  </div>
                  <div className="stack-item">
                    <span className="stack-dot dot-cyan"></span>TypeScript
                  </div>
                  <div className="stack-item">
                    <span className="stack-dot dot-cyan"></span>Tailwind CSS
                  </div>
                </div>
              </div>

              <div className="stack-category" data-reveal>
                <div className="stack-title">Backend</div>
                <div className="stack-items">
                  <div className="stack-item">
                    <span className="stack-dot dot-purple"></span>Node.js
                  </div>
                  <div className="stack-item">
                    <span className="stack-dot dot-purple"></span>Python
                  </div>
                  <div className="stack-item">
                    <span className="stack-dot dot-purple"></span>.NET Core
                  </div>
                  <div className="stack-item">
                    <span className="stack-dot dot-purple"></span>NestJS
                  </div>
                </div>
              </div>

              <div className="stack-category" data-reveal>
                <div className="stack-title">Database</div>
                <div className="stack-items">
                  <div className="stack-item">
                    <span className="stack-dot dot-green"></span>PostgreSQL
                  </div>
                  <div className="stack-item">
                    <span className="stack-dot dot-green"></span>MongoDB
                  </div>
                  <div className="stack-item">
                    <span className="stack-dot dot-green"></span>Redis
                  </div>
                  <div className="stack-item">
                    <span className="stack-dot dot-green"></span>MySQL
                  </div>
                </div>
              </div>

              <div className="stack-category" data-reveal>
                <div className="stack-title">Cloud & DevOps</div>
                <div className="stack-items">
                  <div className="stack-item">
                    <span className="stack-dot dot-orange"></span>AWS
                  </div>
                  <div className="stack-item">
                    <span className="stack-dot dot-orange"></span>Azure
                  </div>
                  <div className="stack-item">
                    <span className="stack-dot dot-orange"></span>Docker
                  </div>
                  <div className="stack-item">
                    <span className="stack-dot dot-orange"></span>Kubernetes
                  </div>
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
              <h2 className="sec-title">
                How We <em>Work</em>
              </h2>
              <p className="sec-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                A simple, transparent process — you always know where your project stands
              </p>
            </div>

            <div className="process-steps">
              {PROCESS.map((step, i) => (
                <div className="process-step" key={step.title} data-reveal>
                  <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="step-body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="assurances">
              <div className="assurance-card" data-reveal>
                <h4>Confidentiality</h4>
                <p>NDAs as standard. Your data, designs, and IP remain entirely yours.</p>
              </div>
              <div className="assurance-card" data-reveal>
                <h4>Responsive communication</h4>
                <p>Replies within 24 hours, in clear and professional English.</p>
              </div>
              <div className="assurance-card" data-reveal>
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
              <h2 className="sec-title">
                Verified <em>Reviews</em>
              </h2>
            </div>

            <div className="rating-banner" data-reveal>
              <div>
                <div className="rating-banner-title">
                  Average rating across verified Upwork contracts
                </div>
                <div className="rating-banner-sub">
                  Publicly verifiable on our Upwork freelancer & agency profiles
                </div>
              </div>
              <div className="rating-banner-score">5.0 ★</div>
            </div>

            <div className="reviews-grid">
              {REVIEWS.map((r) => (
                <div className="review-card" key={r.project} data-reveal>
                  <div className="review-stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <div className="review-proj">{r.project}</div>
                  <p className="review-text">{r.text}</p>
                  <div className="review-by">— {r.by}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="hr"></div>

        {/* PROJECTS PREVIEW */}
        <section className="projects-preview">
          <div className="wrap" data-reveal>
            <div className="sec-label">Selected Work</div>
            <h2 className="sec-title">
              Case <em>Studies</em>
            </h2>
            <p className="preview-text">
              A sample of production systems we&apos;ve delivered — from AI-powered automation to
              enterprise and web platforms. Explore the challenges we solved and the results we
              shipped.
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
              <h2 className="sec-title">
                Tell Us What You&apos;re <em>Building</em>
              </h2>
              <p className="sec-sub" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                Send a brief, a sketch, or just an idea — we reply within 24 hours with an honest
                read on scope and cost.
              </p>
            </div>

            <div className="contact-grid">
              <a className="contact-card" href="mailto:murtazajii876@gmail.com" data-reveal>
                <div className="contact-icon">
                  <Icon name="mail" size={26} />
                </div>
                <div className="contact-label">Email — Murtaza Hussain</div>
                <div className="contact-value">murtazajii876@gmail.com</div>
              </a>

              <a className="contact-card" href="mailto:zeeshanonwork@gmail.com" data-reveal>
                <div className="contact-icon">
                  <Icon name="mail" size={26} />
                </div>
                <div className="contact-label">Email — Zeeshan Liaqat</div>
                <div className="contact-value">zeeshanonwork@gmail.com</div>
              </a>

              <a className="contact-card" href="tel:+923165479603" data-reveal>
                <div className="contact-icon">
                  <Icon name="phone" size={26} />
                </div>
                <div className="contact-label">Phone — Murtaza Hussain</div>
                <div className="contact-value">+92 316 5479603</div>
              </a>

              <a className="contact-card" href="tel:+923485032295" data-reveal>
                <div className="contact-icon">
                  <Icon name="phone" size={26} />
                </div>
                <div className="contact-label">Phone — Zeeshan Liaqat</div>
                <div className="contact-value">+92 348 5032295</div>
              </a>
            </div>

            <div className="social-links">
              <a
                className="social-btn"
                href="https://www.linkedin.com/in/murtaza-hussain-97175b197/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                className="social-btn"
                href="https://www.upwork.com/agencies/1913615184399103598/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.866-3.06a2.707 2.707 0 0 1 2.704 2.705 2.707 2.707 0 0 1-2.732 2.7zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 0 1-2.547 2.548 2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.452-5.439-5.452z" />
                </svg>
                Upwork
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
