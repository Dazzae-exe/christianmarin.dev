import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { ContactDialog } from "./ContactDialog";
import { LanguageSelector } from "./LanguageSelector";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 mt-24">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social Links */}
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

          {/* Contact & Language */}
          <div className="flex items-center gap-4">
            <ContactDialog />
            <LanguageSelector />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            © {currentYear} Christian Marín. 
          </p>
        </div>
      </div>
    </footer>
  );
}
