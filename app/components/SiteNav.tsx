'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'stack', label: 'Stack' },
  { id: 'reviews', label: 'Reviews' },
] as const;

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  // Section anchors resolve on the page itself when home, back to home otherwise
  const anchor = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <>
      <nav className={scrolled ? 'nav-scrolled' : ''} aria-label="Main">
        <div className="wrap">
          <div className="nav-inner">
            <Link href="/" className="nav-logo" onClick={closeMenu}>
              Nova<em>Edge</em>
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              {SECTIONS.map((s) => (
                <a key={s.id} href={anchor(s.id)}>
                  {s.label}
                </a>
              ))}
              <Link href="/projects">Projects</Link>
              <a href={anchor('contact')} className="nav-cta-btn">
                Get in Touch
              </a>
            </div>
            <button
              type="button"
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>
        {SECTIONS.map((s) => (
          <a key={s.id} href={anchor(s.id)} onClick={closeMenu}>
            {s.label}
          </a>
        ))}
        <Link href="/projects" onClick={closeMenu}>
          Projects
        </Link>
        <a href={anchor('contact')} className="m-cta" onClick={closeMenu}>
          Get in Touch
        </a>
      </div>
    </>
  );
}
