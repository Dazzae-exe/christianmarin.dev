import { ContentListPage } from './ContentListPage';
import { usePosts } from '@/hooks/useQueryHooks';

export const PostsList = () => {
    const { data: posts, error, isLoading, refetch } = usePosts();

    return (
        <ContentListPage
            title="Blog"
            noun={{ one: 'post', other: 'posts' }}
            isLoading={isLoading}
            error={error}
            onRetry={() => refetch()}
            items={posts?.map((post) => ({
                id: post.id,
                title: post.title,
                description: post.excerpt,
                href: `/posts/${post.id}`,
                date: post.created_at,
            }))}
        />
    );
}
