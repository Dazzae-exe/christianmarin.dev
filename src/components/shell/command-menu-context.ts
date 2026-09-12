import { createContext, use } from "react"

type CommandMenu = {
  openSearch: () => void
  openContact: () => void
  openCV: () => void
}

export const CommandMenuContext = createContext<CommandMenu | null>(null)

export function useCommandMenu() {
  const context = use(CommandMenuContext)

  if (!context) throw new Error("useCommandMenu must be used within CommandMenuProvider")

  return context
}
