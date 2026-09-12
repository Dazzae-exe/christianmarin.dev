import { Link } from "@tanstack/react-router"
import { Search } from "lucide-react"
import { navItems } from "@/lib/data/navigation"
import { useCommandMenu } from "./command-menu-context"

export function MobileDock() {
  const { openSearch } = useCommandMenu()

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+1rem)] z-40 flex justify-center px-4 animate-blur-in stagger-4 md:hidden"
    >
      <div className="flex items-center gap-0.5 rounded-full bg-background/80 p-1.5 shadow-[0_12px_32px_-12px_rgb(0_0_0/0.22),0_2px_6px_-2px_rgb(0_0_0/0.08)] backdrop-blur-xl backdrop-saturate-150 dark:bg-muted/80 dark:shadow-[0_12px_32px_-12px_rgb(0_0_0/0.7)]">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            activeOptions={{ exact: item.href === "/" }}
            className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground data-[status=active]:bg-foreground/[0.07] data-[status=active]:text-foreground"
          >
            {item.name}
          </Link>
        ))}
        <span aria-hidden className="mx-1 h-5 w-px bg-border" />
        <button
          type="button"
          onClick={openSearch}
          aria-label="Search"
          className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors duration-500 hover:text-foreground"
        >
          <Search className="size-4" />
        </button>
      </div>
    </nav>
  )
}
