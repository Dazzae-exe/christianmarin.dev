import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { formatDate } from "@/lib/format";

export interface ContentCardProps {
  title: string;
  href: string;
  description?: string | null;
  date?: string | null;
  tags?: string[] | null;
}

export function ContentCard({ title, href, description, date, tags }: ContentCardProps) {
  return (
    <Link
      to={href}
      className="group grid gap-x-10 gap-y-2 py-7 sm:grid-cols-[minmax(0,1fr)_auto]"
    >
      <div className="min-w-0">
        <h2 className="text-[1.1875rem] leading-snug tracking-[-0.01em] text-balance text-foreground">
          {title}
          <ArrowUpRight
            aria-hidden
            className="ml-1.5 inline-block size-4 translate-y-0.5 align-baseline text-muted-foreground opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100"
          />
        </h2>
        {description ? (
          <p className="mt-2 line-clamp-2 text-[0.9375rem] leading-relaxed text-pretty text-muted-foreground transition-colors duration-700 group-hover:text-foreground/80">
            {description}
          </p>
        ) : null}
        {tags?.length ? (
          <p className="mt-3 text-[0.8125rem] text-muted-foreground">{tags.join(" · ")}</p>
        ) : null}
      </div>
      {date ? (
        <time
          dateTime={date}
          className="order-first font-mono text-xs tabular-nums text-muted-foreground sm:order-none sm:pt-1.5"
        >
          {formatDate(date)}
        </time>
      ) : null}
    </Link>
  );
}
