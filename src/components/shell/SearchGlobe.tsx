import Globe from "@/assets/hero-page/sphere-halftone-gif.webp"

export function SearchGlobe() {
  return (
    <span aria-hidden className="peek globe">
      <img src={Globe} alt="" decoding="async" fetchPriority="low" />
    </span>
  )
}
