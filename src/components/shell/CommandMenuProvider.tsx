import { useEffect, useMemo, useState, type ReactNode } from "react"
import { SearchCommand } from "@/components/SearchCommand"
import { ContactDialog } from "@/components/ContactDialog"
import { CommandMenuContext } from "./command-menu-context"

type ActiveDialog = "search" | "contact" | null

export function CommandMenuProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<ActiveDialog>(null)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setActive((current) => (current === "search" ? null : "search"))
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  const menu = useMemo(
    () => ({
      openSearch: () => setActive("search"),
      openContact: () => setActive("contact"),
    }),
    [],
  )

  const handleOpenChange = (open: boolean) => {
    if (!open) setActive(null)
  }

  return (
    <CommandMenuContext value={menu}>
      {children}
      <SearchCommand
        open={active === "search"}
        onOpenChange={handleOpenChange}
        onContact={menu.openContact}
      />
      <ContactDialog open={active === "contact"} onOpenChange={handleOpenChange} />
    </CommandMenuContext>
  )
}
