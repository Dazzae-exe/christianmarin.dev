import { useProjects } from "@/hooks/useQueryHooks";
import { ContentListPage } from "./ContentListPage";

export const ProjectsList = () => {
    const { data: projects, isLoading, error, refetch } = useProjects();

    return (
        <ContentListPage
            title="Projects"
            noun={{ one: "project", other: "projects" }}
            isLoading={isLoading}
            error={error}
            onRetry={() => refetch()}
            items={projects?.map((project) => ({
                id: project.id,
                title: project.title,
                description: project.description,
                href: `/projects/${project.slug}`,
                date: project.created_at,
                tags: project.tags,
            }))}
        />
    );
}
