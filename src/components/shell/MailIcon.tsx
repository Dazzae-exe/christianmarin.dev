export function MailIcon() {
  return (
    <svg aria-hidden viewBox="0 0 64 64" className="peek mail-icon">
      <defs>
        <linearGradient id="mail-icon-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="oklch(0.74 0.15 236)" />
          <stop offset="1" stopColor="oklch(0.55 0.21 258)" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14.5" fill="url(#mail-icon-bg)" />
      <g className="mail-icon-envelope">
        <rect x="11" y="18" width="42" height="29" rx="3.5" fill="oklch(0.99 0 0)" />
        <path
          d="M12.5 20.5 32 35l19.5-14.5"
          fill="none"
          stroke="oklch(0.8 0.03 250)"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
