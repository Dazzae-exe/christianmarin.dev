import { Skeleton } from "@/components/ui/skeleton";

export const ContentCardSkeleton = () => {
    return (
        <div className="flex items-start justify-between py-4 -mx-4 px-4 rounded-lg">
            <div className="space-y-2 w-full">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <div className="flex flex-wrap gap-2 pt-1">
                    <Skeleton className="h-5 w-14 rounded-md" />
                    <Skeleton className="h-5 w-16 rounded-md" />
                </div>
            </div>
            <Skeleton className="h-4 w-4 mt-1 shrink-0 rounded-sm" />
        </div>
    );
};
