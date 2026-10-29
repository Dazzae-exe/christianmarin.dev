import { useEffect, useMemo, useState, type ReactNode } from "react"
import { SearchCommand } from "@/components/SearchCommand"
import { CommandMenuContext } from "./command-menu-context"

export function CommandMenuProvider({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setSearchOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  const menu = useMemo(() => ({ openSearch: () => setSearchOpen(true) }), [])

  return (
    <CommandMenuContext value={menu}>
      {children}
      <SearchCommand open={searchOpen} onOpenChange={setSearchOpen} />
    </CommandMenuContext>
  )
}
