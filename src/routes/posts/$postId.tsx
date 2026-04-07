import { PostArticle } from '@/components/PostArticle'
import { ArticleSkeleton } from '@/components/ArticleSkeleton';
import { usePost } from '@/hooks/useQueryHooks';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = Route.useParams();
  const { data: post, isLoading, error } = usePost(postId);

  if (isLoading) return <ArticleSkeleton />;

  if (error) return (
    <div>
      <div className="border-t border-dashed w-full" />
      <div className="mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed px-6 py-6 text-muted-foreground">
        Error loading post.
      </div>
    </div>
  );

  if (!post) return (
    <div>
      <div className="border-t border-dashed w-full" />
      <div className="mx-6 md:mx-auto max-w-2xl border-l border-r border-dashed px-6 py-6 text-muted-foreground">
        Post not found.
      </div>
    </div>
  );
  
  return <PostArticle post={post} />;
}
