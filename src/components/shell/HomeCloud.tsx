import Cloud from "@/assets/ascii/cloud-ascii.jpg"

export function HomeCloud() {
  return (
    <span aria-hidden className="peek cloud">
      <img src={Cloud} alt="" decoding="async" />
    </span>
  )
}
