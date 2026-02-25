import type { Post } from "@/lib/types/post";
import { CreatorCard } from "./CreatorCard";
import AvatarImg from "@/assets/avatar-dazz.webp";

export const PostArticle = ({ post }: { post: Post }) => {
    return (

        <div className="min-h-screen w-full relative bg-black ">
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
                }}
            />

            <div className='pt-16 max-w-2xl mx-auto space-y-8 z-10 relative'>
                <div className="w-full flex items-center justify-center flex-col">
                    <h1 className='font-bold md:text-4xl text-2xl mb-4 leading-tight'>
                        {post.title}
                    </h1>
                    <CreatorCard name={post.created_by || 'Unknown Author'} date={post.created_at ? new Date(post.created_at) : null} avatar={AvatarImg} />
                </div>

                <div className='text-sm md:text-base text-center font-medium'>{post.description}</div>

                <article className=''>
                    <div className='md:text-base text-sm leading-relaxed' dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </article>
            </div>
        </div>
    );
};
