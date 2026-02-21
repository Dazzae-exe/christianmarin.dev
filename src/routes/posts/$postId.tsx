import { PostArticle } from '@/components/PostArticle'
import { usePost } from '@/hooks/useQueryHooks';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { postId } = Route.useParams();
  const { data: post, isLoading, error } = usePost(postId);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error loading post.</div>;

  if (!post) return <div>Post not found.</div>;
  
  return <PostArticle post={post} />;
}
