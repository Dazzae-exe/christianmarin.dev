import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog"
import { PdfCV } from "@/components/PdfCV.tsx";

export const DialogCV = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>
                View CV
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-h-[90vh] p-5 overflow-y-scroll list">
                    <PdfCV />
                </DialogContent>
            </Dialog>
        </>
    )
}