import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'NovaEdge Solutions — Software & AI Studio';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 96px',
          background: 'linear-gradient(135deg, #06060b 0%, #0d1220 100%)',
          color: '#f4f8ff',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* HUD corner brackets */}
        <div
          style={{
            position: 'absolute',
            top: 36,
            left: 36,
            width: 40,
            height: 40,
            borderTop: '3px solid #ffb454',
            borderLeft: '3px solid #ffb454',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            right: 36,
            width: 40,
            height: 40,
            borderBottom: '3px solid #ffb454',
            borderRight: '3px solid #ffb454',
          }}
        />

        <div
          style={{
            display: 'flex',
            fontSize: 26,
            letterSpacing: 6,
            color: '#00e5ff',
            marginBottom: 28,
          }}
        >
          SYS ONLINE · SIGNAL LOCKED · LATENCY &lt;24H
        </div>
        <div style={{ display: 'flex', fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
          <span>Nova</span>
          <span style={{ color: '#00e5ff' }}>Edge</span>
          <span style={{ marginLeft: 24 }}>Solutions</span>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 34,
            color: '#aebbd4',
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          Senior-led software studio — AI systems, web platforms, and hardware-integrated
          products.
        </div>
        <div
          style={{
            display: 'flex',
            gap: 40,
            marginTop: 48,
            fontSize: 28,
            color: '#5cff9d',
          }}
        >
          <span>10+ projects</span>
          <span>5+ countries</span>
          <span>5.0 verified rating</span>
        </div>
      </div>
    ),
    size
  );
}
