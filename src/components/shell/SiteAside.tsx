import { Link } from "@tanstack/react-router"
import { Avatar } from "@/components/Avatar"
import { Kbd } from "@/components/ui/kbd"
import AvatarDazz from "@/assets/avatar-dazz.webp"
import { navItems, socialLinks } from "@/lib/data/navigation"
import { ThemeCycleButton } from "./ThemeCycleButton"
import { useCommandMenu } from "./command-menu-context"

const itemClass =
  "text-[0.9375rem] leading-7 text-muted-foreground transition-colors duration-500 hover:text-foreground"

export function SiteAside() {
  const { openSearch, openContact } = useCommandMenu()
  const year = new Date().getFullYear()

  return (
    <aside className="sticky top-24 hidden h-[calc(100dvh-9rem)] flex-col justify-between self-start md:flex">
      <div>
        <Link to="/" className="flex flex-col items-start gap-3 animate-blur-in">
          <Avatar src={AvatarDazz} alt="" className="size-6" />
          <span className="text-[0.9375rem] leading-7 font-medium text-foreground">
            Christian Marín
          </span>
        </Link>

        <nav aria-label="Primary" className="animate-blur-in stagger-1">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  activeOptions={{ exact: item.href === "/" }}
                  className={`${itemClass} data-[status=active]:text-foreground`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div aria-hidden className="my-3 h-px w-10 bg-border animate-blur-in stagger-2" />

        <ul className="animate-blur-in stagger-2">
          <li>
            <button
              type="button"
              onClick={openSearch}
              className={`${itemClass} inline-flex items-center gap-2`}
            >
              Search
              <Kbd className="h-5 bg-foreground/[0.06] px-1.5 font-mono text-[0.6875rem] text-muted-foreground">
                ⌘K
              </Kbd>
            </button>
          </li>
          <li>
            <ThemeCycleButton className={itemClass} />
          </li>
          <li>
            <button type="button" onClick={openContact} className={itemClass}>
              Contact
            </button>
          </li>
        </ul>
      </div>

      <div className="space-y-1 text-[0.8125rem] text-muted-foreground animate-blur-in stagger-3">
        <ul className="flex gap-3">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-500 hover:text-foreground"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <p className="tabular-nums">© {year} Christian Marín</p>
      </div>
    </aside>
  )
}
