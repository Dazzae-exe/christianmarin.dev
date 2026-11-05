const WEEKS = 16
const DAYS = 7
const STEP = 6.5

const cells = Array.from({ length: WEEKS * DAYS }, (_, i) => {
  const week = Math.floor(i / DAYS)
  const day = i % DAYS
  const noise = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1
  const weekend = day === 0 || day === 6
  const busy = noise * (weekend ? 0.55 : 1) + week / (WEEKS * 4)
  const level = busy < 0.42 ? 0 : busy < 0.66 ? 1 : busy < 0.82 ? 2 : busy < 0.93 ? 3 : 4
  return { week, day, level }
})

export function GithubGraph() {
  return (
    <svg aria-hidden viewBox={`0 0 ${WEEKS * STEP - 1.5} ${DAYS * STEP - 1.5}`} className="peek github-graph">
      {cells.map(({ week, day, level }) => (
        <rect
          key={`${week}-${day}`}
          x={week * STEP}
          y={day * STEP}
          width="5"
          height="5"
          rx="1.25"
          data-level={level}
        />
      ))}
    </svg>
  )
}
