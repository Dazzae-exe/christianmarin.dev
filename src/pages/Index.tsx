import { FileText, Layers } from "lucide-react";
import { Avatar } from "@/components/Avatar";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { useCommandMenu } from "@/components/shell/command-menu-context";
import AvatarDazz from "@/assets/avatar-dazz.webp";

const Index = () => {
  const { openCV } = useCommandMenu();

  return (
    <div className="max-w-[36rem]">
      <header>
        <Avatar
          src={AvatarDazz}
          alt="Christian Marín"
          className="size-16 animate-blur-in"
        />

        <p className="mt-5 text-[0.9375rem] text-foreground animate-blur-in stagger-1">
          Christian Marín
        </p>

        <h1 className="mt-3 text-[2.5rem] leading-[1.05] tracking-[-0.03em] text-balance animate-blur-in stagger-2 md:text-[3.25rem]">
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

        <Button
          variant="outline"
          size="sm"
          onClick={openCV}
          className="mt-8 rounded-full bg-transparent px-4 shadow-none animate-blur-in stagger-3 hover:bg-foreground/[0.04] dark:bg-transparent"
        >
          <FileText strokeWidth={1.75} />
          View CV
        </Button>
      </header>

      <Reveal className="mt-20 space-y-5 text-[1.0625rem] leading-[1.7] text-pretty text-muted-foreground stagger-4">
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
