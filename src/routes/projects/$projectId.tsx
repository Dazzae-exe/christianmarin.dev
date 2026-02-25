import { ProjectArticle } from '@/components/ProjectArticle';
import { ArticleSkeleton } from '@/components/ArticleSkeleton';
import { useProject } from '@/hooks/useQueryHooks';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/$projectId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { projectId } = Route.useParams();
  const { data: project, isLoading, error } = useProject(projectId);

  if (isLoading) return <ArticleSkeleton />;

  if (error) return <div className='mt-16 max-w-2xl mx-auto space-y-8'>Error loading project.</div>;

  if (!project) return <div className='mt-16 max-w-2xl mx-auto space-y-8'>Project not found.</div>;

  return <ProjectArticle project={project} />;
}
