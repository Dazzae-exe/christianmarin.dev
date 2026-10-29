import { Layers } from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { Reveal } from "@/components/Reveal";
import AvatarDazz from "@/assets/avatar-dazz.webp";

const Index = () => {
  return (
    <div className="max-w-[36rem]">
      <header>
        <div className="flex flex-col items-start gap-3 animate-blur-in">
          <Avatar src={AvatarDazz} alt="" className="size-16" />
          <p className="text-[0.9375rem] text-foreground">Christian Marín</p>
        </div>

        <div className="mt-12 flex flex-col items-start gap-6">
          <h1 className="text-[2.5rem] leading-[1.05] tracking-[-0.03em] text-balance animate-blur-in stagger-1 md:text-[3.25rem]">
            Software{" "}
            <span className="whitespace-nowrap">
              engineer{" "}
              <Layers
                aria-hidden
                strokeWidth={1.5}
                className="inline-block size-[0.82em] align-[-0.1em]"
              />
            </span>{" "}
            crafting design &amp; code
          </h1>
        </div>
      </header>

      <Reveal className="mt-20 space-y-5 text-[1.0625rem] leading-[1.7] text-pretty text-muted-foreground stagger-3">
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
