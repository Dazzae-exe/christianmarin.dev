import { posts } from '@/lib/api/postsEndpoint';
import { ProjectCard } from './ProjectCard';

export const PostsList = () => {
    return (
        <div className='mt-16'>
            <h2 className="max-w-2xl font-mono text-2xl font-semibold tracking-tight md:mx-auto mx-6">Posts</h2>
            <hr />
            <div className="max-w-2xl my-6 md:px-0 px-6 mx-auto space-y-6">
                {posts.map((post) => (
                    <ProjectCard key={post.id as number} title={post.title} href={`/posts`} description={post.content} tags={[]} />
                ))}
            </div>
        </div>
    );
}