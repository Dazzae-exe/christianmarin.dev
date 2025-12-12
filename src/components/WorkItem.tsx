import { ExternalLink } from "./ExternalLink";

interface WorkItemProps {
  company: string;
  role: string;
  period: string;
  href: string;
}

export function WorkItem({ company, role, period, href }: WorkItemProps) {
  return (
    <div className="group">
      <ExternalLink href={href} className="text-sm font-medium">
        {company}
      </ExternalLink>
      <p className="text-sm text-muted-foreground">
        {role} ({period})
      </p>
    </div>
  );
}
