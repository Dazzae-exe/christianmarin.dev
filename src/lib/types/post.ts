export interface Post {
    id: number;
    created_at?: string;
    title: string;
    content: string;
    description?: string;
    created_by?: string;
    duration_time?: number;
}