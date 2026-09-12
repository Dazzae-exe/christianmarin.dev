import { ProjectArticle } from '@/components/ProjectArticle';
import { ArticleSkeleton } from '@/components/ArticleSkeleton';
import { StatusMessage } from '@/components/StatusMessage';
import { useProject } from '@/hooks/useQueryHooks';
import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/$projectId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { projectId } = Route.useParams();
  const { data: project, isLoading, error, refetch } = useProject(projectId);

  if (isLoading) return <ArticleSkeleton />;

  if (error) return (
    <StatusMessage
      title="Couldn't load this project"
      description="Check your connection and try again."
      action={
        <>
          <button type="button" onClick={() => refetch()} className="text-link">Try again</button>
          <Link to="/projects" className="text-muted-foreground transition-colors duration-500 hover:text-foreground">Back to projects</Link>
        </>
      }
    />
  );

  if (!project) return (
    <StatusMessage
      title="Project not found"
      description="It may have been moved or unpublished."
      action={<Link to="/projects" className="text-link">Back to projects</Link>}
    />
  );

  return <ProjectArticle project={project} />;
}
