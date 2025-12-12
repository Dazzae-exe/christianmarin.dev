import { SearchCommand } from "./SearchCommand";
import { Link } from "@tanstack/react-router";

const navItems = [
  { name: "home", href: "/" },
  { name: "posts", href: "/posts" },
  { name: "projects", href: "/projects" },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-2xl items-center justify-between md:px-0 px-6 py-4">
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <SearchCommand />
      </nav>
    </header>
  );
}