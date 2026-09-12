import { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
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

type DialogCVProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export const DialogCV = ({ open, onOpenChange }: DialogCVProps) => {
    const [locale, setLocale] = useState<CVLocale | null>(null);

    const handleOpenChange = (nextOpen: boolean) => {
        onOpenChange(nextOpen);
        if (!nextOpen) {
            // Reset back to the language picker for the next visit.
            setTimeout(() => setLocale(null), 200);
        }
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
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
                            <DialogTitle className="text-xl font-normal tracking-[-0.02em]">
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
                                    className="group h-auto w-full justify-start gap-4 rounded-xl px-4 py-4 text-left shadow-none hover:border-foreground/25"
                                >
                                    <span
                                        aria-hidden
                                        className="text-xl leading-none transition-transform duration-500 group-hover:scale-110"
                                    >
                                        {option.flag}
                                    </span>
                                    <span className="flex flex-1 flex-col gap-0.5 overflow-hidden">
                                        <span className="text-sm font-medium">
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
                            <DialogTitle className="text-lg font-normal tracking-[-0.02em]">
                                Christian Marín — CV
                            </DialogTitle>
                            <DialogDescription>{COPY[locale].viewing}</DialogDescription>
                        </DialogHeader>

                        <div className="flex flex-wrap items-center gap-2 px-6 pb-4">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setLocale(null)}
                                className="text-xs"
                            >
                                <ArrowLeft />
                                {COPY[locale].back}
                            </Button>

                            <Separator orientation="vertical" className="mx-1 !h-5" />

                            <div className="flex items-center gap-1 rounded-full bg-muted p-1">
                                {LOCALE_OPTIONS.map((option) => (
                                    <Button
                                        key={option.value}
                                        variant={locale === option.value ? "secondary" : "ghost"}
                                        size="sm"
                                        onClick={() => setLocale(option.value)}
                                        aria-pressed={locale === option.value}
                                        className={cn(
                                            "h-7 rounded-full text-xs",
                                            locale === option.value && "bg-background hover:bg-background",
                                        )}
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
