export interface Project {
    id: string;
    user_id: string;
    title: string;
    description?: string | null;
    content: string;
    slug: string;
    cover_image?: string | null;
    github_url?: string | null;
    demo_url?: string | null;
    tags?: string[] | null;
    published: boolean;
    created_at: string;
    updated_at: string;
}
