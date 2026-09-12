import { Suspense, lazy, useEffect, useMemo, useState, type ReactNode } from "react"
import { SearchCommand } from "@/components/SearchCommand"
import { ContactDialog } from "@/components/ContactDialog"
import { CommandMenuContext } from "./command-menu-context"

const DialogCV = lazy(() =>
  import("@/components/DialogCV").then((module) => ({ default: module.DialogCV })),
)

type ActiveDialog = "search" | "contact" | "cv" | null

export function CommandMenuProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<ActiveDialog>(null)
  const [cvRequested, setCvRequested] = useState(false)

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
      openCV: () => {
        setCvRequested(true)
        setActive("cv")
      },
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
        onCV={menu.openCV}
      />
      <ContactDialog open={active === "contact"} onOpenChange={handleOpenChange} />
      {cvRequested ? (
        <Suspense fallback={null}>
          <DialogCV open={active === "cv"} onOpenChange={handleOpenChange} />
        </Suspense>
      ) : null}
    </CommandMenuContext>
  )
}
