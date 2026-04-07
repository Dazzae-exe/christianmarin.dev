import type { Project } from "@/lib/types/project";
import { CreatorCard } from "./CreatorCard";
import AvatarImg from "@/assets/avatar-dazz.webp";

export const ProjectArticle = ({ project }: { project: Project }) => {
    return (
        <div className="relative min-h-screen w-full bg-black">
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
                }}
            />

            <div className="relative z-10 min-h-screen mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed">
                <section className="px-6 py-10 flex flex-col items-center gap-4">
                    <h1 className="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                        {project.title}
                    </h1>
                    <CreatorCard
                        name={project.client || "Unknown Author"}
                        date={project.created_at ? new Date(project.created_at) : null}
                        avatar={AvatarImg}
                    />
                </section>

                <div className="border-t border-dashed w-full" />

                <div className="px-6 py-4 text-center text-sm font-medium leading-relaxed sm:text-base md:text-lg text-muted-foreground">
                    {project.description}
                </div>

                <div className="border-t border-dashed w-full" />

                <article className="px-6 py-10 pb-16">
                    <div
                        className="text-sm leading-relaxed sm:text-base sm:leading-7 md:text-lg md:leading-8 [&>*+*]:mt-4 sm:[&>*+*]:mt-5 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold sm:[&_h2]:text-2xl [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold sm:[&_h3]:text-xl [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-2 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-slate-300 [&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-slate-600 [&_blockquote]:pl-4 [&_blockquote]:italic [&_code]:rounded [&_code]:bg-slate-800/70 [&_code]:px-1 [&_code]:py-0.5 [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-slate-900 [&_pre]:p-4"
                        dangerouslySetInnerHTML={{ __html: project.project_content as string }}
                    ></div>
                </article>
            </div>
        </div>
    );
};
