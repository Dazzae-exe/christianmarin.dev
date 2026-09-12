import { Outlet, createRootRoute } from '@tanstack/react-router'
import NotFound from '@/pages/NotFound'
import { AppShell } from '@/components/shell/AppShell'
import { useTrackPageView } from '@/hooks/useTrackPageView'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound
})

function RootComponent() {
  useTrackPageView()

  return (
    <AppShell>
      <Outlet />
    </AppShell>
  )
}
