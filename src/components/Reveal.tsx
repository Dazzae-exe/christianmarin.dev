import type { ComponentProps } from "react"

export function Reveal(props: ComponentProps<"div">) {
  const ref = (node: HTMLDivElement | null) => {
    if (!node || node.dataset.reveal === "visible") return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        node.dataset.reveal = "visible"
        observer.disconnect()
      },
      { rootMargin: "0px 0px -8% 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }

  return <div ref={ref} data-reveal="" {...props} />
}
