import supabase from "@/lib/supabase/supabase";
import type { AnalyticsResourceType } from "@/lib/types/analytics";

const VISITOR_ID_KEY = "portfolio-visitor-id";
const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const getVisitorId = (): string => {
  let visitorId = localStorage.getItem(VISITOR_ID_KEY);

  if (!visitorId) {
    visitorId = crypto.randomUUID();
    localStorage.setItem(VISITOR_ID_KEY, visitorId);
  }

  return visitorId;
};

const resolveResource = async (
  pathname: string,
): Promise<{ resource_type: AnalyticsResourceType; resource_id: string | null }> => {
  const postMatch = pathname.match(/^\/posts\/([^/]+)\/?$/);
  if (postMatch) {
    const segment = decodeURIComponent(postMatch[1]);
    if (UUID_REGEX.test(segment)) {
      return { resource_type: "post", resource_id: segment };
    }
    return { resource_type: "page", resource_id: null };
  }

  const projectMatch = pathname.match(/^\/projects\/([^/]+)\/?$/);
  if (projectMatch) {
    const slug = decodeURIComponent(projectMatch[1]);
    const { data } = await supabase
      .from("projects")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();

    if (data?.id) {
      return { resource_type: "project", resource_id: data.id };
    }
    return { resource_type: "page", resource_id: null };
  }

  return { resource_type: "page", resource_id: null };
};

const trackPageView = async (pathname: string): Promise<void> => {
  const { resource_type, resource_id } = await resolveResource(pathname);

  const { error } = await supabase.rpc("track_view", {
    p_page_path: pathname,
    p_resource_type: resource_type,
    p_resource_id: resource_id,
    p_visitor_id: getVisitorId(),
    p_referrer: document.referrer || null,
    p_user_agent: navigator.userAgent,
  });

  if (error) {
    console.error("Failed to track page view:", error.message);
  }
};

export { trackPageView };
