import { Github, Linkedin } from "lucide-react";
import { ContactDialog } from "./ContactDialog";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeSelector } from "./ThemeSelector";

const socialLinks = [
  { icon: Github, href: "https://github.com/dazzae-exe", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/christianmarindaza", label: "LinkedIn" }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 mt-24">
      <div className="max-w-2xl mx-auto py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          <div className="flex items-center md:items-start flex-col gap-4 h-20">
            <h3 className="mr-0 md:mr-4 font-semibold underline underline-offset-2 md:text-left text-center">Social Links</h3>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end gap-4 h-20">
            <ContactDialog />
            <div className="flex gap-4">
              <LanguageSelector />
              <ThemeSelector />
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            © {currentYear} Christian Marín. 
          </p>
        </div>
      </div>
    </footer>
  );
}
