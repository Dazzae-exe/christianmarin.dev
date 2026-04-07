import { Github, Linkedin } from "lucide-react";
import { ContactDialog } from "./ContactDialog";
import { ThemeSelector } from "./ThemeSelector";

const socialLinks = [
  { icon: Github, href: "https://github.com/dazzae-exe", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/christianmarindaza", label: "LinkedIn" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="border-t border-dashed w-full" />

      <div className="mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed">

        <div className="flex flex-col md:flex-row items-center md:justify-between justify-center gap-4 md:gap-6 px-4 md:px-6 py-6">

          <div className="flex flex-col gap-3 items-center md:items-start">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Connect</span>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-all duration-200 hover:text-foreground hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center md:items-end">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Get in touch</span>
            <div className="flex items-center gap-3">
              <ThemeSelector />
              <ContactDialog />
            </div>
          </div>

        </div>

        <div className="border-t border-dashed w-full" />

        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 px-4 md:px-6 py-4">
          <p className="font-mono text-xs text-muted-foreground">
            © {currentYear} Christian Marín.
          </p>
          <p className="font-mono text-xs text-muted-foreground/60">
            React 19 · Vite · TanStack · Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
}
