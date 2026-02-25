import type { Project } from "@/lib/types/project";

export const ProjectArticle = ({ project }: { project: Project }) => {
    return (
        <div className='mt-16 max-w-2xl mx-auto space-y-8'>
            <div>
                <h1 className='font-bold md:text-3xl text-2xl mb-4 leading-tight'>
                    {project.title}
                </h1>
                <p className='text-sm md:text-base font-semibold'>Role: {project.role}</p>
                <p className='text-sm md:text-base'>Date: {project.created_at}</p>
                <p className='text-sm md:text-base'>Status: {project.status}</p>
                {project.client && <p className='text-sm md:text-base'>Client: {project.client}</p>}
                <p className='text-sm md:text-base'>Tags: {project.tags?.join(', ')}</p>
            </div>

            <div className='text-sm md:text-base'>{project.description}</div>

            <article className=''>
                <div className='text-base md:text-lg leading-relaxed' dangerouslySetInnerHTML={{ __html: project.project_content as string }}></div>
            </article>
        </div>
    );
};
