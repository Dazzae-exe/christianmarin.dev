import type { ReactNode } from "react"
import { Toaster } from "@/components/ui/sonner"
import { CommandMenuProvider } from "./CommandMenuProvider"
import { MobileDock } from "./MobileDock"
import { SiteAside } from "./SiteAside"

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <CommandMenuProvider>
      <div className="grid min-h-dvh w-full px-5 sm:px-8 md:grid-cols-[9.5rem_minmax(0,1fr)] md:gap-x-16 md:pl-8 lg:gap-x-24">
        <SiteAside />
        <main className="min-w-0 pt-16 pb-40 md:pt-24 md:pb-32">
          <div className="mx-auto w-full max-w-[40rem]">{children}</div>
        </main>
      </div>
      <MobileDock />
      <Toaster position="top-center" />
    </CommandMenuProvider>
  )
}
