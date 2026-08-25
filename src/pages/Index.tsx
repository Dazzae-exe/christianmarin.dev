import { Avatar } from "@/components/Avatar";
import { WorkItem } from "@/components/WorkItem";
import { ContentCard } from "@/components/ContentCard";
import AvatarDazz from "@/assets/avatar-dazz.webp";
import { DialogCV } from "@/components/DialogCV.tsx";
import { usePosts } from "@/hooks/useQueryHooks.tsx";
import type { Post } from "@/lib/types/post.ts";
import { workExperience, projects } from "@/lib/data/homeData.ts";

const Index = () => {
  const { data: posts } = usePosts();

  return (
    <div className="min-h-screen bg-background">

      <div className="mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed py-6">
        <section className="space-y-6 px-6">
          <Avatar
            src={AvatarDazz}
            alt="Profile"
            className="h-20 w-20"
          />

          <div className="space-y-4">
            <h1 className="font-mono text-3xl font-semibold tracking-tight">
              Hey, I'm Christian Marín @ <br/>Software Engineer.
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              As a dedicated software engineer, I specialize in crafting high-quality products where sleek design meets rock-solid engineering. I thrive at the intersection of aesthetics and functionality, delivering visually captivating interfaces backed by scalable, performant code.
            </p>
          </div>

          <DialogCV />
        </section>
      </div>

      <div className="border-t border-dashed w-full" />

      <div className="mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed">
        <section className="py-6">
          <h2 className="font-mono text-2xl font-semibold tracking-tight px-6 pb-4">Work</h2>
          <div className="px-6 pb-6">
            <div className="space-y-4">
              {workExperience.map((work) => (
                <WorkItem
                  key={work.company}
                  company={work.company}
                  role={work.role}
                  period={work.period}
                  href={work.href}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-dashed w-full" />

      <div className="mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed">
        <section className="py-6">
          <h2 className="font-mono text-2xl font-semibold tracking-tight px-6 pb-4">Projects</h2>
          <div className="px-6 pb-6 space-y-4">
            {projects.map((project) => (
              <ContentCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                href={project.href}
              />
            ))}
          </div>
        </section>
      </div>

      <div className="border-t border-dashed w-full" />

      <div className="mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed">
        <section className="py-6">
          <h2 className="font-mono text-2xl font-semibold tracking-tight px-6 pb-4">Posts</h2>
          <div className="px-6 pb-6">
            {posts?.map((post: Post) => (
              <ContentCard
                key={post.id}
                title={post.title}
                description={post.excerpt || ""}
                href={`/posts/${post.id}`}
                tags={[]}
              />
            ))}
          </div>
        </section>
      </div>

    </div>
  );
};

export { Index as HomePage };
