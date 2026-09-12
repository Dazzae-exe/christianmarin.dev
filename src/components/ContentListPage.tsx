import { ContentCard, type ContentCardProps } from "./ContentCard";
import { ContentCardSkeleton } from "./ContentCardSkeleton";
import { PageHeader } from "./PageHeader";
import { Reveal } from "./Reveal";
import { StatusMessage } from "./StatusMessage";

type ContentListPageProps = {
    title: string;
    noun: { one: string; other: string };
    items: (ContentCardProps & { id: string })[] | undefined;
    isLoading: boolean;
    error: Error | null;
    onRetry: () => void;
};

export function ContentListPage({ title, noun, items, isLoading, error, onRetry }: ContentListPageProps) {
    const count = items?.length ?? 0;
    const meta = isLoading || error ? undefined : `${count} ${count === 1 ? noun.one : noun.other}`;

    return (
        <div className="max-w-[40rem]">
            <PageHeader title={title} meta={meta} />

            <div className="mt-14 md:mt-20">
                {isLoading ? (
                    <ul aria-busy="true" className="divide-y border-y">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <li key={index}>
                                <ContentCardSkeleton />
                            </li>
                        ))}
                    </ul>
                ) : error ? (
                    <StatusMessage
                        title={`Couldn't load ${noun.other}`}
                        description={error.message}
                        action={
                            <button type="button" onClick={onRetry} className="text-link">
                                Try again
                            </button>
                        }
                    />
                ) : count === 0 ? (
                    <StatusMessage
                        title={`No ${noun.other} yet`}
                        description="New entries will show up here once they're published."
                    />
                ) : (
                    <Reveal className="stagger-2">
                        <ul className="divide-y border-y">
                            {items?.map(({ id, ...item }) => (
                                <li key={id}>
                                    <ContentCard {...item} />
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                )}
            </div>
        </div>
    );
}
