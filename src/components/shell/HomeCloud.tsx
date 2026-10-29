import Cloud from "@/assets/ascii/cloud-ascii.webp"

export function HomeCloud() {
  return (
    <span aria-hidden className="peek cloud">
      <img src={Cloud} alt="" decoding="async" fetchPriority="low" />
    </span>
  )
}
