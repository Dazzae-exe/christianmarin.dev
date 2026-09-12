import { PostArticle } from '@/components/PostArticle'
import { ArticleSkeleton } from '@/components/ArticleSkeleton';
import { StatusMessage } from '@/components/StatusMessage';
import { usePost } from '@/hooks/useQueryHooks';
import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = Route.useParams();
  const { data: post, isLoading, error, refetch } = usePost(postId);

  if (isLoading) return <ArticleSkeleton />;

  if (error) return (
    <StatusMessage
      title="Couldn't load this post"
      description="Check your connection and try again."
      action={
        <>
          <button type="button" onClick={() => refetch()} className="text-link">Try again</button>
          <Link to="/posts" className="text-muted-foreground transition-colors duration-500 hover:text-foreground">Back to posts</Link>
        </>
      }
    />
  );

  if (!post) return (
    <StatusMessage
      title="Post not found"
      description="It may have been moved or unpublished."
      action={<Link to="/posts" className="text-link">Back to posts</Link>}
    />
  );

  return <PostArticle post={post} />;
}
