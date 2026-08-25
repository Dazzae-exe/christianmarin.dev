import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import { trackPageView } from "@/services/analytics/analyticsMutation";

const useTrackPageView = () => {
    const pathname = useRouterState({ select: (state) => state.location.pathname });
    const lastTracked = useRef<string | null>(null);

    useEffect(() => {
        if (lastTracked.current === pathname) return;
        lastTracked.current = pathname;

        void trackPageView(pathname);
    }, [pathname]);
};

export { useTrackPageView };
