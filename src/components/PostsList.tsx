import { ContentCard } from './ContentCard';
import { ContentCardSkeleton } from './ContentCardSkeleton';
import { usePosts } from '@/hooks/useQueryHooks';

export const PostsList = () => {
    const { data: posts, error, isLoading } = usePosts();

    if (isLoading) {
        return (
            <div className="min-h-screen mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed">
                <div className="border-t border-dashed w-full" />
                <h2 className="font-mono text-2xl font-semibold tracking-tight px-6 py-4">Posts</h2>
                <div className="border-t border-dashed w-full" />
                <div className="px-6 py-6 space-y-6">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <ContentCardSkeleton key={index} />
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed">
                <div className="border-t border-dashed w-full" />
                <div className="px-6 py-6 text-muted-foreground font-mono text-sm">
                    Error loading posts: {(error as Error).message}
                </div>
            </div>
        );
    }

    if (!posts || posts.length === 0) {
        return (
            <div className="min-h-screen mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed">
                <div className="border-t border-dashed w-full" />
                <div className="px-6 py-6 text-muted-foreground font-mono text-sm">
                    No posts available.
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed">
            <section>
                <h2 className="font-mono text-2xl font-semibold tracking-tight px-6 py-4">Posts</h2>
                <div className="border-t border-dashed w-full" />
                <div className="px-6 py-6 space-y-6">
                    {posts.map((post) => (
                        <ContentCard key={post.id} title={post.title} href={`/posts/${post.id}`} description={post.excerpt || ''} tags={[]} />
                    ))}
                </div>
            </section>
        </div>
    );
}
