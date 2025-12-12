import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

export function ExternalLink({ href, children, className, showArrow = true }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-0.5 font-mono text-foreground focus:decoration-foreground focus:underline hover:underline decoration-link-underline underline-offset-4 hover:decoration-foreground transition-colors",
        className
      )}
    >
      {children}
      {showArrow && <ArrowUpRight className="h-3.5 w-3.5" />}
    </a>
  );
}
