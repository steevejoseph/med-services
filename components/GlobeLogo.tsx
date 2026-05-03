export default function GlobeLogo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="gl-globe" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#6b9eed" />
          <stop offset="60%" stopColor="#2a5bbf" />
          <stop offset="100%" stopColor="#0f2a6b" />
        </radialGradient>
        <clipPath id="gl-ring-front">
          <rect x="-10" y="50" width="120" height="60" />
        </clipPath>
        <clipPath id="gl-globe-area">
          <circle cx="50" cy="50" r="37" />
        </clipPath>
      </defs>

      {/* Ring: back (globe will cover the overlapping portion) */}
      <ellipse cx="50" cy="50" rx="51" ry="14"
        fill="none" stroke="#b87800" strokeWidth="5" strokeLinecap="round"
        transform="rotate(-22 50 50)" />

      {/* Globe */}
      <circle cx="50" cy="50" r="37" fill="url(#gl-globe)" />

      {/* Latitude lines */}
      <g clipPath="url(#gl-globe-area)" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="0.9">
        <ellipse cx="50" cy="32" rx="26" ry="7" />
        <ellipse cx="50" cy="50" rx="37" ry="10" />
        <ellipse cx="50" cy="68" rx="26" ry="7" />
      </g>

      {/* Longitude lines */}
      <g clipPath="url(#gl-globe-area)" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="0.9">
        <line x1="50" y1="13" x2="50" y2="87" />
        <ellipse cx="50" cy="50" rx="13" ry="37" />
        <ellipse cx="50" cy="50" rx="26" ry="37" />
      </g>

      {/* Globe edge */}
      <circle cx="50" cy="50" r="37" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />

      {/* Ring: front (lower half, in front of globe) */}
      <ellipse cx="50" cy="50" rx="51" ry="14"
        fill="none" stroke="#d4920a" strokeWidth="5" strokeLinecap="round"
        transform="rotate(-22 50 50)"
        clipPath="url(#gl-ring-front)" />

      {/* Ring metallic highlight */}
      <ellipse cx="50" cy="50" rx="51" ry="14"
        fill="none" stroke="rgba(255,220,100,0.55)" strokeWidth="2"
        transform="rotate(-22 50 50)"
        clipPath="url(#gl-ring-front)" />
    </svg>
  );
}
