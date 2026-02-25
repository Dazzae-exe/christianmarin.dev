import { useProjects } from "@/hooks/useQueryHooks";
import { ContentCard } from "./ContentCard";
import { ContentCardSkeleton } from "./ContentCardSkeleton";

export const ProjectsList = () => {
    const { data: projects, isLoading, error } = useProjects();

    if (isLoading) {
        return (
            <div className="mt-16">
                <h2 className="max-w-2xl font-mono text-2xl font-semibold tracking-tight md:mx-auto mx-6">Projects</h2>
                <div className='border-b border-dashed' />
                <div className="max-w-2xl my-6 md:px-0 px-6 mx-auto space-y-6">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <ContentCardSkeleton key={index} />
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="mt-16 max-w-2xl mx-auto">Error loading projects: {(error as Error).message}</div>;
    }

    if (!projects || projects.length === 0) {
        return <div className="mt-16 max-w-2xl mx-auto">No projects available.</div>;
    }

    return (
        <div className="mt-16">
            <h2 className="max-w-2xl font-mono text-2xl font-semibold tracking-tight md:mx-auto mx-6">Projects</h2>
            <div className='border-b border-dashed' />
            <div className="max-w-2xl my-6 md:px-0 px-6 mx-auto space-y-6">
                {projects.map((project) => (
                    <ContentCard key={project.id} title={project.title} href={`/projects/${project.slug}`} description={project.description || ''} tags={[]} />
                ))}
            </div>
        </div>
    );
}