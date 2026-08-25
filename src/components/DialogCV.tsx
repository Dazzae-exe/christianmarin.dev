import { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { ArrowLeft, Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { PdfCV } from "@/components/PdfCV.tsx";
import type { CVLocale } from "@/lib/types/cv.ts";
import { cn } from "@/lib/utils";

const LOCALE_OPTIONS: {
    value: CVLocale;
    nativeLabel: string;
    description: string;
    flag: string;
}[] = [
    {
        value: "en",
        nativeLabel: "English",
        description: "International version of my resume.",
        flag: "🇺🇸",
    },
    {
        value: "es",
        nativeLabel: "Español",
        description: "Versión en español de mi currículum.",
        flag: "🇪🇸",
    },
];

const COPY: Record<CVLocale, { viewing: string; back: string }> = {
    en: {
        viewing: "Viewing the English version",
        back: "Change language",
    },
    es: {
        viewing: "Viendo la versión en español",
        back: "Cambiar idioma",
    },
};

export const DialogCV = () => {
    const [open, setOpen] = useState(false);
    const [locale, setLocale] = useState<CVLocale | null>(null);

    const handleOpenChange = (nextOpen: boolean) => {
        setOpen(nextOpen);
        if (!nextOpen) {
            // Reset back to the language picker for the next visit.
            setTimeout(() => setLocale(null), 200);
        }
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button className="font-mono">
                    <FileText />
                    View CV
                </Button>
            </DialogTrigger>

            <DialogContent
                showCloseButton
                className={cn(
                    "gap-0 overflow-hidden p-0",
                    locale ? "sm:max-w-3xl" : "sm:max-w-lg",
                )}
            >
                {locale === null ? (
                    <div className="p-6">
                        <DialogHeader className="space-y-2">
                            <DialogTitle className="font-mono text-xl tracking-tight">
                                Choose a language
                            </DialogTitle>
                            <DialogDescription>
                                Which version of my CV would you like to read?
                                <br />
                                <span className="text-muted-foreground/80">
                                    ¿Qué versión de mi CV te gustaría leer?
                                </span>
                            </DialogDescription>
                        </DialogHeader>

                        <div className="mt-6 grid gap-3">
                            {LOCALE_OPTIONS.map((option) => (
                                <Button
                                    key={option.value}
                                    variant="outline"
                                    onClick={() => setLocale(option.value)}
                                    className="group h-auto w-full justify-start gap-4 rounded-lg px-4 py-4 text-left hover:border-primary/40"
                                >
                                    <span
                                        aria-hidden
                                        className="text-xl leading-none transition-transform group-hover:scale-110"
                                    >
                                        {option.flag}
                                    </span>
                                    <span className="flex flex-1 flex-col gap-0.5 overflow-hidden">
                                        <span className="font-mono text-sm font-semibold">
                                            {option.nativeLabel}
                                        </span>
                                        <span className="truncate text-xs font-normal text-muted-foreground">
                                            {option.description}
                                        </span>
                                    </span>
                                </Button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex max-h-[85vh] flex-col">
                        <DialogHeader className="space-y-1 px-6 pt-6 pb-4 text-left">
                            <DialogTitle className="font-mono text-lg tracking-tight">
                                Christian Marín — CV
                            </DialogTitle>
                            <DialogDescription>{COPY[locale].viewing}</DialogDescription>
                        </DialogHeader>

                        <div className="flex flex-wrap items-center gap-2 px-6 pb-4">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setLocale(null)}
                                className="font-mono text-xs"
                            >
                                <ArrowLeft />
                                {COPY[locale].back}
                            </Button>

                            <Separator orientation="vertical" className="mx-1 !h-5" />

                            <div className="flex items-center gap-1 rounded-md border border-border/60 bg-muted/40 p-1">
                                {LOCALE_OPTIONS.map((option) => (
                                    <Button
                                        key={option.value}
                                        variant={locale === option.value ? "secondary" : "ghost"}
                                        size="sm"
                                        onClick={() => setLocale(option.value)}
                                        aria-pressed={locale === option.value}
                                        className="h-7 font-mono text-xs"
                                    >
                                        {locale === option.value ? <Check /> : null}
                                        {option.nativeLabel}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="min-h-0 flex-1 border-t bg-muted/30">
                            <PDFViewer
                                key={locale}
                                showToolbar={false}
                                className="h-[65vh] w-full border-0"
                            >
                                <PdfCV locale={locale} />
                            </PDFViewer>
                        </div>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};
