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

  if (error) return (
    <div>
      <div className="border-t border-dashed w-full" />
      <div className="mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed px-6 py-6 text-muted-foreground">
        Error loading project.
      </div>
    </div>
  );

  if (!project) return (
    <div>
      <div className="border-t border-dashed w-full" />
      <div className="mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed px-6 py-6 text-muted-foreground">
        Project not found.
      </div>
    </div>
  );

  return <ProjectArticle project={project} />;
}
