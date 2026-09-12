import { Skeleton } from "@/components/ui/skeleton";

export const ContentCardSkeleton = () => {
    return (
        <div className="grid gap-x-10 gap-y-3 py-7 sm:grid-cols-[minmax(0,1fr)_auto]">
            <div className="space-y-3">
                <Skeleton className="h-5 w-2/5" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-3/5" />
            </div>
            <Skeleton className="order-first h-3.5 w-20 sm:order-none sm:mt-1.5" />
        </div>
    );
};
