import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import NotFound from '@/pages/NotFound'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { useTrackPageView } from '@/hooks/useTrackPageView'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound
})

function RootComponent() {
  useTrackPageView()

  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  )
}
