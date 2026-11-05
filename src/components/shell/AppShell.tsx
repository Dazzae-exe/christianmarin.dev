import type { ReactNode } from "react"
import { Toaster } from "@/components/ui/sonner"
import { CommandMenuProvider } from "./CommandMenuProvider"
import { MobileDock } from "./MobileDock"
import { SiteAside } from "./SiteAside"

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <CommandMenuProvider>
      <div className="grid min-h-dvh w-full grid-cols-[minmax(0,40rem)] justify-center px-5 sm:px-8 lg:grid-cols-[minmax(9.5rem,1fr)_minmax(0,40rem)_minmax(9.5rem,1fr)] lg:gap-x-12">
        <SiteAside />
        <main className="min-w-0 pt-16 pb-40 md:pt-24 lg:col-start-2 lg:pb-32">{children}</main>
      </div>
      <MobileDock />
      <Toaster position="top-center" />
    </CommandMenuProvider>
  )
}
