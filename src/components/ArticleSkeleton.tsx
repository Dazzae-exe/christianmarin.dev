import { Skeleton } from "@/components/ui/skeleton";

export const ArticleSkeleton = () => {
    return (
        <div className="relative min-h-screen w-full bg-black">
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
                }}
            />

            <div className="relative z-10 mx-auto max-w-3xl space-y-8 px-4 pt-12 sm:space-y-10 sm:px-6 sm:pt-16 lg:pt-20">
                <div className="flex w-full flex-col items-center justify-center space-y-4">
                    <Skeleton className="h-8 w-2/3 max-w-2xl md:h-10" />
                    <div className="w-fit rounded-[7px] border px-4 py-2">
                        <div className="flex items-center space-x-4">
                            <Skeleton className="h-12 w-12 rounded-full" />
                            <div className="space-y-2">
                                <Skeleton className="h-5 w-36" />
                                <Skeleton className="h-4 w-28" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto flex max-w-2xl flex-col items-center space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-2/3" />
                </div>

                <article className="pb-12 sm:pb-16">
                    <div className="space-y-3">
                        <Skeleton className="h-4 w-full md:h-5" />
                        <Skeleton className="h-4 w-full md:h-5" />
                        <Skeleton className="h-4 w-11/12 md:h-5" />
                        <Skeleton className="h-4 w-full md:h-5" />
                        <Skeleton className="h-4 w-10/12 md:h-5" />
                        <Skeleton className="h-4 w-full md:h-5" />
                    </div>
                </article>
            </div>
        </div>
    );
};
