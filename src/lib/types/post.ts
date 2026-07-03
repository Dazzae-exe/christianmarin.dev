export interface Post {
    id: string;
    user_id: string;
    title: string;
    content: string;
    excerpt?: string | null;
    slug?: string | null;
    cover_image?: string | null;
    published: boolean;
    featured: boolean;
    created_at: string;
    updated_at: string;
}
