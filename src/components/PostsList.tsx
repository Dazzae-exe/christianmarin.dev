import { ProjectCard } from './ProjectCard';
import { usePosts } from '@/hooks/useQueryHooks';

export const PostsList = () => {
    const { data: posts, error, isLoading } = usePosts();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading posts: {(error as Error).message}</div>;
    }

    if (!posts || posts.length === 0) {
        return <div>No posts available.</div>;
    }

    return (
        <div className='mt-16'>
            <h2 className="max-w-2xl font-mono text-2xl font-semibold tracking-tight md:mx-auto mx-6">Posts</h2>
            <div className='border-b border-dashed' />
            <div className="max-w-2xl my-6 md:px-0 px-6 mx-auto space-y-6">
                {posts.map((post) => (
                    <ProjectCard key={post.id} title={post.title} href={`/posts`} description={post.description || ''} tags={[]} />
                ))}
            </div>
        </div>
    );
}