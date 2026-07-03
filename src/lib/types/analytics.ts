export type AnalyticsResourceType = 'page' | 'post' | 'project';

export interface PageView {
    page_path: string;
    resource_type: AnalyticsResourceType;
    resource_id?: string | null;
    visitor_id?: string | null;
    referrer?: string | null;
    user_agent?: string | null;
}
