type PageHeaderProps = {
  title: string;
  meta?: string;
};

export function PageHeader({ title, meta }: PageHeaderProps) {
  return (
    <header>
      <h1 className="text-[2.5rem] leading-[1.05] tracking-[-0.03em] text-balance animate-blur-in md:text-[3.25rem]">
        {title}
      </h1>
      <p className="mt-5 h-4 font-mono text-xs tabular-nums text-muted-foreground animate-blur-in stagger-1">
        {meta}
      </p>
    </header>
  );
}
