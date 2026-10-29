import { Avatar } from "@/components/Avatar";
import { Reveal } from "@/components/Reveal";
import AvatarDazz from "@/assets/avatar-dazz.webp";
import Globe from "@/assets/hero-page/sphere-halftone-gif.jpeg";
import Poster from "@/assets/hero-page/pinterest-technologie-welt-computer-enact.jpg";
import Sculptor from "@/assets/hero-page/pinterest-blue-ui-conference-branding-arabic-design-x.jpg";

const year = String(new Date().getFullYear());

const HeroImage = ({ src, className }: { src: string; className: string }) => (
  <img
    src={src}
    alt=""
    decoding="async"
    className={`h-[1.84em] shrink-0 object-cover shadow-[0_0.04em_0.12em_rgb(0_0_0/0.12)] ${className}`}
  />
);

const Index = () => {
  return (
    <div className="max-w-[42rem] @container">
      <header>
        <h1 className="flex flex-col gap-[0.32em] text-[clamp(2.5rem,13cqi,5rem)] leading-[0.92] tracking-[-0.035em]">
          <span className="flex items-center justify-between gap-[0.3em] animate-blur-in stagger-1">
            <span>
              Software
              <br />
              engineer
            </span>
            <HeroImage src={Globe} className="aspect-[3/2]" />
          </span>

          <span className="flex items-center justify-between gap-[0.3em] animate-blur-in stagger-2">
            <HeroImage src={Poster} className="aspect-[4/5]" />
            <span className="text-right">
              crafting
              <br />
              design
            </span>
          </span>

          <span className="flex items-center justify-between gap-[0.3em] animate-blur-in stagger-3">
            <span>
              &amp;
              <br />
              code.
            </span>
            <span className="flex items-center gap-[0.3em]">
              <HeroImage src={Sculptor} className="aspect-[2/3]" />
              <span
                aria-hidden
                className="flex flex-col text-[0.15em] leading-none font-normal tracking-normal tabular-nums"
              >
                {["", year.slice(0, 2), year.slice(2), ""].map((digits, i) => (
                  <span
                    key={i}
                    className="-mt-px grid size-[2.6em] place-items-center rounded-full border border-foreground first:mt-0"
                  >
                    {digits}
                  </span>
                ))}
              </span>
            </span>
          </span>
        </h1>
      </header>

      <Reveal className="mt-20 max-w-[36rem] space-y-5 text-[1.0625rem] leading-[1.7] text-pretty text-muted-foreground stagger-4">
        <div className="flex flex-col items-start gap-3 pb-3">
          <Avatar src={AvatarDazz} alt="" className="size-16" />
          <p className="text-[0.9375rem] text-foreground">Christian Marín</p>
        </div>
        <p className="text-foreground">
          Hi there <span role="img" aria-label="waving hand">👋</span>
        </p>
        <p>
          As a dedicated software engineer, I specialize in crafting high-quality products where sleek design meets rock-solid engineering.
        </p>
        <p>
          I thrive at the intersection of aesthetics and functionality, delivering visually captivating interfaces backed by scalable, performant code.
        </p>
      </Reveal>
    </div>
  );
};

export { Index as HomePage };
