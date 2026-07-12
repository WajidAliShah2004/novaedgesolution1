import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              Nova<em>Edge</em> Solutions
            </div>
            <p className="footer-tag">
              Senior-led software studio building AI systems, web platforms, and
              hardware-integrated products for clients worldwide.
            </p>
            <div className="hud-readout footer-readout" aria-hidden="true">
              <span>
                <b>SYS</b> ONLINE
              </span>
              <span>
                <b>LATENCY</b> &lt;24H
              </span>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-head">Explore</div>
            <Link href="/#about">About</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#stack">Stack</Link>
            <Link href="/#reviews">Reviews</Link>
            <Link href="/projects">Case Studies</Link>
          </div>

          <div className="footer-col">
            <div className="footer-head">Contact</div>
            <a href="mailto:murtazajii876@gmail.com">murtazajii876@gmail.com</a>
            <a href="mailto:zeeshanonwork@gmail.com">zeeshanonwork@gmail.com</a>
            <a
              href="https://www.linkedin.com/in/murtaza-hussain-97175b197/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.upwork.com/agencies/1913615184399103598/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Upwork Agency
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">© 2026 NovaEdge Solutions. All rights reserved.</div>
          <Link href="/#contact" className="footer-cta">
            Start a project →
          </Link>
        </div>
      </div>
    </footer>
  );
}
