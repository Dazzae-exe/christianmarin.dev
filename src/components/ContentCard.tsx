import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";

interface ContentCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export function ContentCard({ title, description, tags, href }: ContentCardProps) {
  return (
    <Link
      to={href}
      className="group flex items-start justify-between py-4 last:border-0 hover:bg-accent/50 -mx-4 px-4 rounded-lg hover:outline outline-1 outline-offset-2 outline-transparent hover:outline-foreground/10 transition-all duration-200 ease-in-out border-l border-dashed pl-4"
    >
      <div className="space-y-2">
        <h3 className="font-mono text-sm font-medium text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <Badge className="rounded-md" key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
      <ArrowRight className="transform -rotate-45 h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors mt-1 shrink-0" />
    </Link>
  );
}
