import { Fragment, useCallback } from "react"

const GLYPHS = "!<>-_\\/[]{}=+*^?#$%&@01"
const FRAME_MS = 50

type ScrambleTextProps = {
  text: string
  duration?: number
  delay?: number
}

function ScrambleWord({ text, duration = 700, delay = 0 }: ScrambleTextProps) {
  const ref = useCallback(
    (node: HTMLSpanElement | null) => {
      const textNode = node?.firstChild
      if (!(textNode instanceof Text) || matchMedia("(prefers-reduced-motion: reduce)").matches) return

      const start = performance.now() + delay
      let frame = 0
      let last = 0

      const tick = (now: number) => {
        const revealed = Math.floor((Math.max(0, now - start) / duration) * text.length)
        if (revealed >= text.length) {
          textNode.data = text
          return
        }
        if (now - last >= FRAME_MS) {
          last = now
          textNode.data = [...text]
            .map((char, i) => (i < revealed ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
            .join("")
        }
        frame = requestAnimationFrame(tick)
      }

      tick(performance.now())
      return () => {
        cancelAnimationFrame(frame)
        textNode.data = text
      }
    },
    [text, duration, delay],
  )

  return (
    <span className="relative inline-block">
      <span aria-hidden className="invisible">
        {text}
      </span>
      <span ref={ref} className="absolute inset-0 overflow-x-clip whitespace-nowrap">
        {text}
      </span>
    </span>
  )
}

export function ScrambleText({ text, ...props }: ScrambleTextProps) {
  return text.split(" ").map((word, i) => (
    <Fragment key={i}>
      {i > 0 && " "}
      <ScrambleWord text={word} {...props} />
    </Fragment>
  ))
}
