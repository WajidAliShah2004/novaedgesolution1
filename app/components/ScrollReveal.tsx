'use client';

import { useEffect } from 'react';

/**
 * Reveals [data-reveal] elements as they enter the viewport. The `has-reveal`
 * class on <html> gates the hidden state so content stays visible when JS is
 * unavailable, and nothing is hidden at all under prefers-reduced-motion.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.documentElement;
    root.classList.add('has-reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        // Elements entering together (e.g. a grid row) stagger slightly
        entries
          .filter((e) => e.isIntersecting)
          .forEach((entry, i) => {
            const el = entry.target as HTMLElement;
            window.setTimeout(() => el.classList.add('revealed'), i * 70);
            observer.unobserve(el);
          });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Anything already in view on load shows immediately
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('revealed');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
      root.classList.remove('has-reveal');
    };
  }, []);

  return null;
}
