export function LinkedinIcon() {
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="peek linkedin-icon">
      <defs>
        <linearGradient id="linkedin-icon-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.6 0.16 250)" />
          <stop offset="1" stopColor="oklch(0.5 0.16 252)" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14.5" fill="url(#linkedin-icon-bg)" />
      <g className="linkedin-icon-mark" fill="oklch(0.99 0 0)">
        <circle cx="19.5" cy="18.5" r="4.25" />
        <rect x="15.75" y="26" width="7.5" height="22" rx="0.75" />
        <path d="M28 26h7v3.3c1.5-2.5 4.1-3.9 7.4-3.9 5.7 0 8.1 3.7 8.1 9.6V48h-7.5V36.6c0-3-.9-4.9-3.6-4.9-2.9 0-4.4 2-4.4 4.9V48H28z" />
      </g>
    </svg>
  )
}
