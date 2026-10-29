import { Link } from "@tanstack/react-router"
import Brochure from "@/assets/hero-page/brochure-design.jpeg"
import Conference from "@/assets/hero-page/pinterest-blue-ui-conference-branding-arabic-design-x.jpg"
import Expo from "@/assets/hero-page/pinterest-motion-graphique-expo-universelle-visualisation.jpg"
import Technologie from "@/assets/hero-page/pinterest-technologie-welt-computer-enact.jpg"
import Sphere from "@/assets/hero-page/sphere-halftone-gif.jpeg"

const ASCII_404 = String.raw`
 _  _    ___  _  _
| || |  / _ \| || |
| || |_| | | | || |_
|__   _| |_| |__   _|
   |_|  \___/   |_|`

const IMAGES = [
  { src: Expo, className: "top-[4%] left-[6%] -rotate-12 stagger-1" },
  { src: Conference, className: "top-[0%] right-[10%] rotate-6 stagger-2" },
  { src: Sphere, className: "top-[40%] right-[0%] rotate-12 stagger-3" },
  { src: Technologie, className: "bottom-[2%] right-[18%] -rotate-6 stagger-4" },
  { src: Brochure, className: "bottom-[8%] left-[2%] rotate-9 stagger-5" },
]

const NotFound = () => {
  return (
    <main className="grid min-h-dvh place-items-center px-5 py-16">
      <div className="flex w-full max-w-[26rem] flex-col items-center text-center">
        <pre
          aria-label="404"
          className="font-mono text-[0.8125rem] leading-[1.15] text-muted-foreground animate-blur-in sm:text-[0.9375rem]"
        >
          {ASCII_404}
        </pre>

        <div aria-hidden className="relative mt-10 aspect-square w-full max-w-[22rem]">
          {IMAGES.map(({ src, className }) => (
            <img
              key={src}
              src={src}
              alt=""
              decoding="async"
              className={`absolute w-[26%] aspect-[4/5] rounded-[3px] border-2 border-white object-cover shadow-md animate-blur-in ${className}`}
            />
          ))}
          <span className="folder absolute top-1/2 left-1/2 -translate-1/2 scale-[2.25] animate-blur-in">
            <span className="folder-back" />
            <span className="folder-front" />
          </span>
        </div>

        <p className="mt-10 text-[1.0625rem] leading-[1.7] text-pretty text-muted-foreground animate-blur-in stagger-5">
          Page not found. The link may be broken, or the page may have moved.
        </p>
        <Link to="/" className="text-link mt-6 inline-block text-[0.9375rem] animate-blur-in stagger-5">
          Return home
        </Link>
      </div>
    </main>
  )
}

export default NotFound
