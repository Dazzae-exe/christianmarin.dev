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

  if (error) return <div className='mt-16 max-w-2xl mx-auto space-y-8'>Error loading post.</div>;

  if (!post) return <div className='mt-16 max-w-2xl mx-auto space-y-8'>Post not found.</div>;
  
  return <PostArticle post={post} />;
}
