import { ProjectsList } from '@/components/ProjectsList'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/')({
  component: ProjectsRoute,
})

function ProjectsRoute() {
  return <ProjectsList />;
}
