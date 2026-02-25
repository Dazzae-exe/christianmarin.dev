export interface Post {
    id: number;
    created_at?: string | Date;
    title: string;
    content: string;
    description?: string;
    created_by?: string;
    duration_time?: number;
}