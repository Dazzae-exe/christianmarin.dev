import { Skeleton } from "@/components/ui/skeleton";

export const ArticleSkeleton = () => {
    return (
        <div aria-busy="true" className="max-w-[40rem]">
            <Skeleton className="h-4 w-16" />

            <div className="mt-10 space-y-3">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-2/3" />
            </div>

            <div className="mt-6 flex items-center gap-2.5">
                <Skeleton className="size-6 rounded-full" />
                <Skeleton className="h-4 w-44" />
            </div>

            <div className="mt-10 space-y-2.5">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-4/5" />
            </div>

            <div className="my-12 h-px bg-border" />

            <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-10/12" />
                <Skeleton className="h-4 w-3/4" />
            </div>
        </div>
    );
};
