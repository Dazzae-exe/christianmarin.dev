import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Avatar } from "./Avatar";
import { Reveal } from "./Reveal";
import AvatarDazz from "@/assets/avatar-dazz.webp";
import { formatDate } from "@/lib/format";

type ArticleProps = {
    title: string;
    html: string;
    lede?: string | null;
    date?: string | null;
    back: { to: "/posts" | "/projects"; label: string };
};

export function Article({ title, html, lede, date, back }: ArticleProps) {
    return (
        <article className="max-w-[40rem]">
            <header>
                <Link
                    to={back.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground animate-blur-in"
                >
                    <ArrowLeft className="size-3.5 transition-transform duration-500 group-hover:-translate-x-0.5" />
                    {back.label}
                </Link>

                <h1 className="mt-10 text-[2.25rem] leading-[1.08] tracking-[-0.03em] text-balance animate-blur-in stagger-1 md:text-[2.875rem]">
                    {title}
                </h1>

                <div className="mt-6 flex items-center gap-2.5 text-sm text-muted-foreground animate-blur-in stagger-2">
                    <Avatar src={AvatarDazz} alt="" className="size-6" />
                    <span className="text-foreground">Christian Marín</span>
                    {date ? (
                        <>
                            <span aria-hidden className="text-muted-foreground/60">·</span>
                            <time dateTime={date} className="font-mono text-xs tabular-nums">
                                {formatDate(date)}
                            </time>
                        </>
                    ) : null}
                </div>

                {lede ? (
                    <p className="mt-10 text-[1.1875rem] leading-[1.6] text-pretty text-muted-foreground animate-blur-in stagger-3">
                        {lede}
                    </p>
                ) : null}
            </header>

            <div aria-hidden className="my-12 h-px bg-border animate-blur-in stagger-3" />

            <Reveal className="article-prose stagger-4" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
    );
}
