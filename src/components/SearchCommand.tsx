import { ArrowUpRight, FileText, Laptop, Mail, Moon, Sun } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useTheme } from "@/components/ThemeProvider";
import { navItems, socialLinks } from "@/lib/data/navigation";
import { nextTheme, themeLabel } from "@/lib/theme";

const themeIcon = { light: Sun, dark: Moon, system: Laptop };

type SearchCommandProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContact: () => void;
  onCV: () => void;
};

export function SearchCommand({ open, onOpenChange, onContact, onCV }: SearchCommandProps) {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const upcomingTheme = nextTheme(theme);
  const ThemeIcon = themeIcon[upcomingTheme];

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Search"
      description="Jump to a page or run an action"
    >
      <CommandInput placeholder="Search pages and actions…" />
      <CommandList>
        <CommandEmpty>Nothing matches that search.</CommandEmpty>

        <CommandGroup heading="Pages">
          {navItems.map((item) => (
            <CommandItem
              key={item.href}
              value={item.name}
              onSelect={() => {
                onOpenChange(false);
                navigate({ to: item.href });
              }}
            >
              <item.icon />
              {item.name}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Actions">
          <CommandItem value="theme toggle appearance" onSelect={() => setTheme(upcomingTheme)}>
            <ThemeIcon />
            Switch to {themeLabel[upcomingTheme].toLowerCase()} theme
          </CommandItem>
          <CommandItem value="contact message email" onSelect={onContact}>
            <Mail />
            Contact me
          </CommandItem>
          <CommandItem value="cv resume" onSelect={onCV}>
            <FileText />
            View CV
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Links">
          {socialLinks.map((link) => (
            <CommandItem
              key={link.href}
              value={link.name}
              onSelect={() => {
                window.open(link.href, "_blank", "noopener,noreferrer");
                onOpenChange(false);
              }}
            >
              <link.icon />
              {link.name}
              <ArrowUpRight className="ml-auto text-muted-foreground" />
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
