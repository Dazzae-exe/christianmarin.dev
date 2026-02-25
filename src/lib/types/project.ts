export interface Project {
    id: number;
    created_at?: string;
    title: string;
    description?: string;
    slug: string;
    project_content?: string;
    client?: string;
    status: 'active' | 'completed' | 'paused';
    tags?: string[];
    role: string;
}