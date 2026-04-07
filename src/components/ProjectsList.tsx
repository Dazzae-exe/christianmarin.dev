import { useProjects } from "@/hooks/useQueryHooks";
import { ContentCard } from "./ContentCard";
import { ContentCardSkeleton } from "./ContentCardSkeleton";

export const ProjectsList = () => {
    const { data: projects, isLoading, error } = useProjects();

    if (isLoading) {
        return (
            <div className="min-h-screen mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed">
                <div className="border-t border-dashed w-full" />
                <h2 className="font-mono text-2xl font-semibold tracking-tight px-6 py-4">Projects</h2>
                <div className="border-t border-dashed w-full" />
                <div className="px-6 py-6 space-y-6">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <ContentCardSkeleton key={index} />
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed">
                <div className="border-t border-dashed w-full" />
                <div className="px-6 py-6 text-muted-foreground font-mono text-sm">
                    Error loading projects: {(error as Error).message}
                </div>
            </div>
        );
    }

    if (!projects || projects.length === 0) {
        return (
            <div className="min-h-screen mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed">
                <div className="border-t border-dashed w-full" />
                <div className="px-6 py-6 text-muted-foreground font-mono text-sm">
                    No projects available.
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed">
            <section>
                <h2 className="font-mono text-2xl font-semibold tracking-tight px-6 py-4">Projects</h2>
                <div className="border-t border-dashed w-full" />
                <div className="px-6 py-6 space-y-6">
                    {projects.map((project) => (
                        <ContentCard key={project.id} title={project.title} href={`/projects/${project.slug}`} description={project.description || ''} tags={[]} />
                    ))}
                </div>
            </section>
        </div>
    );
}
