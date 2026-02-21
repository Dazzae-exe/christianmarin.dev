import { PostsList } from '@/components/PostsList'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/')({
  component: PostsRoute,
})

function PostsRoute() {
  return <PostsList />
}
