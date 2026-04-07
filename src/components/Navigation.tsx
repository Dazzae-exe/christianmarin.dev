import { SearchCommand } from "./SearchCommand";
import { Link } from "@tanstack/react-router";

const navItems = [
  { name: "home", href: "/" },
  { name: "posts", href: "/posts" },
  { name: "projects", href: "/projects" },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-dashed bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-6 md:mx-auto flex max-w-2xl items-center justify-between border-l border-r border-dashed px-6 py-5">
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "font-mono text-sm text-foreground" }}
                activeOptions={{ exact: item.href === "/" }}
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
