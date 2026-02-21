import type { Post } from "@/lib/types/post";

export const PostArticle = ({ post }: { post: Post }) => {
    return (
        <div className='mt-16 max-w-2xl mx-auto space-y-8'>
            <div>
                <h1 className='font-bold md:text-3xl text-2xl mb-4 leading-tight'>
                    {post.title}
                </h1>
                <p className='text-sm md:text-base font-semibold'>Created By: {post.created_by}</p>
                <p className='text-sm md:text-base'>Date: {post.created_at}</p>
                <p className='text-sm md:text-base'>Duration: {post.duration_time}</p>
            </div>

            <div className='text-sm md:text-base'>{post.description}</div>

            <article className=''>
                <div className='text-base md:text-lg leading-relaxed' dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </article>
        </div>
    );
}