import type { ReactNode } from "react";

type StatusMessageProps = {
  title: string;
  description?: ReactNode;
  action?: ReactNode;
};

export function StatusMessage({ title, description, action }: StatusMessageProps) {
  return (
    <div role="status" className="max-w-[36rem] border-t pt-8 animate-blur-in">
      <p className="text-[1.0625rem] text-foreground">{title}</p>
      {description ? (
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-pretty text-muted-foreground">
          {description}
        </p>
      ) : null}
      {action ? (
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.9375rem]">
          {action}
        </div>
      ) : null}
    </div>
  );
}
