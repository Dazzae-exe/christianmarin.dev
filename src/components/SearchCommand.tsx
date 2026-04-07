import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Kbd } from "@/components/ui/kbd";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Link } from "@tanstack/react-router";

const pages = [
  { name: "Home", href: "/" },
  { name: "Posts", href: "/posts" },
  { name: "Projects", href: "/projects" }
];

export function SearchCommand() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-md border border-dashed border-border bg-transparent px-3 py-1.5 font-mono text-xs text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline-block">Search pages...</span>
        <div className="hidden sm:flex items-center gap-1 ml-2">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </div>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search pages..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {pages.map((page) => (
              <CommandItem
                key={page.href}
                asChild
              >
                <Link to={page.href} onClick={() => setOpen(false)}>
                  {page.name}
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}