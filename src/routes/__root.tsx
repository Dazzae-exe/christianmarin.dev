import { Outlet, createRootRoute, rootRouteId, useRouterState } from '@tanstack/react-router'
import NotFound from '@/pages/NotFound'
import { AppShell } from '@/components/shell/AppShell'
import { useTrackPageView } from '@/hooks/useTrackPageView'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound
})

function RootComponent() {
  useTrackPageView()
  const isNotFound = useRouterState({ select: (s) => s.matches.at(-1)?.routeId === rootRouteId })

  if (isNotFound) return <Outlet />

  return (
    <AppShell>
      <Outlet />
    </AppShell>
  )
}
