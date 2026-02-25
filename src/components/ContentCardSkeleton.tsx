import { Skeleton } from "@/components/ui/skeleton";

export const ContentCardSkeleton = () => {
    return (
        <div className="flex items-start justify-between py-4 last:border-0 -mx-4 px-4 rounded-lg outline-1 outline-offset-2 outline-foreground/10">
            <div className="space-y-2 w-full">
                <Skeleton className="h-4 w-2/5" />
                <Skeleton className="h-4 w-11/12" />
                <div className="flex flex-wrap gap-2 pt-1">
                    <Skeleton className="h-5 w-14 rounded-md" />
                    <Skeleton className="h-5 w-16 rounded-md" />
                    <Skeleton className="h-5 w-12 rounded-md" />
                </div>
            </div>
            <Skeleton className="h-4 w-4 mt-1 shrink-0 rounded-sm transform -rotate-45" />
        </div>
    );
};
