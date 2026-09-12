import type { Post } from "@/lib/types/post";
import { Article } from "./Article";

export const PostArticle = ({ post }: { post: Post }) => {
    return (
        <Article
            title={post.title}
            lede={post.excerpt}
            date={post.created_at}
            html={post.content}
            back={{ to: "/posts", label: "Posts" }}
        />
    );
};
