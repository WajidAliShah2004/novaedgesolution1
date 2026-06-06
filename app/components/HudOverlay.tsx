/**
 * Static HUD chrome: a faint technical grid + radial focus behind content,
 * targeting brackets at the screen corners, and a slow scanline. Purely
 * decorative and non-interactive. Animations fade out under reduced-motion.
 */
export default function HudOverlay() {
  return (
    <>
      <div className="hud-grid" aria-hidden="true" />
      <div className="hud-frame" aria-hidden="true">
        <span className="hud-corner tl" />
        <span className="hud-corner tr" />
        <span className="hud-corner bl" />
        <span className="hud-corner br" />
        <div className="hud-scanline" />
      </div>
    </>
  );
}
