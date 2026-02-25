import { Skeleton } from "@/components/ui/skeleton";

export const ArticleSkeleton = () => {
    return (
        <div className="min-h-screen w-full relative bg-black">
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
                }}
            />

            <div className='pt-16 max-w-2xl mx-auto space-y-8 z-10 relative'>
                <div className="w-full flex items-center justify-center flex-col space-y-4">
                    <Skeleton className='h-8 md:h-10 w-2/3' />
                    <div className="border w-fit px-4 py-2 rounded-[7px]">
                        <div className="flex items-center space-x-4">
                            <Skeleton className="w-12 h-12 rounded-full" />
                            <div className="space-y-2">
                                <Skeleton className="h-5 w-36" />
                                <Skeleton className="h-4 w-28" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='space-y-2 flex flex-col items-center'>
                    <Skeleton className='h-4 w-3/4' />
                    <Skeleton className='h-4 w-2/3' />
                </div>

                <article className='space-y-3'>
                    <Skeleton className='h-4 md:h-5 w-full' />
                    <Skeleton className='h-4 md:h-5 w-full' />
                    <Skeleton className='h-4 md:h-5 w-11/12' />
                    <Skeleton className='h-4 md:h-5 w-full' />
                    <Skeleton className='h-4 md:h-5 w-10/12' />
                    <Skeleton className='h-4 md:h-5 w-full' />
                </article>
            </div>
        </div>
    );
};
