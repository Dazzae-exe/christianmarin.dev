import type { Project } from "@/lib/types/project";
import { Article } from "./Article";

export const ProjectArticle = ({ project }: { project: Project }) => {
    return (
        <Article
            title={project.title}
            lede={project.description}
            date={project.created_at}
            html={project.content}
            back={{ to: "/projects", label: "Projects" }}
        />
    );
};
