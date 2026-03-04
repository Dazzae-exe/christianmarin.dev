import type { Post } from "@/lib/types/post";
import { CreatorCard } from "./CreatorCard";
import AvatarImg from "@/assets/avatar-dazz.webp";

export const PostArticle = ({ post }: { post: Post }) => {
    return (
        <div className="relative min-h-screen w-full bg-black">
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
                }}
            />

            <div className="relative z-10 mx-auto max-w-3xl space-y-8 px-4 pt-12 sm:space-y-10 sm:px-6 sm:pt-16 lg:pt-20">
                <div className="flex w-full flex-col items-center justify-center">
                    <h1 className="mb-4 max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                        {post.title}
                    </h1>
                    <CreatorCard
                        name={post.created_by || "Unknown Author"}
                        date={post.created_at ? new Date(post.created_at) : null}
                        avatar={AvatarImg}
                    />
                </div>

                <div className="mx-auto max-w-2xl text-center text-sm font-medium leading-relaxed sm:text-base md:text-lg">
                    {post.description}
                </div>

                <article className="pb-12 sm:pb-16">
                    <div
                        className="text-sm leading-relaxed sm:text-base sm:leading-7 md:leading-8 [&>*+*]:mt-4 sm:[&>*+*]:mt-5 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold sm:[&_h2]:text-2xl [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold sm:[&_h3]:text-xl [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-2 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-slate-300 [&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-slate-600 [&_blockquote]:pl-4 [&_blockquote]:italic [&_code]:rounded [&_code]:bg-slate-800/70 [&_code]:px-1 [&_code]:py-0.5 [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-slate-900 [&_pre]:p-4"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    ></div>
                </article>
            </div>
        </div>
    );
};
