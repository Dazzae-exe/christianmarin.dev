import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

export function LanguageSelector() {
    const [language, setLanguage] = React.useState<'en' | 'es'>('en');
  return (
    <Select value={language} onValueChange={(value: 'en' | 'es') => setLanguage(value)}>
      <SelectTrigger className="w-[120px] h-8 text-xs font-mono border-border/50 bg-background">
        <Globe className="h-3.5 w-3.5 mr-1.5" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-background border-border">
        <SelectItem value="en" className="text-xs font-mono">
            English
        </SelectItem>
        <SelectItem value="es" className="text-xs font-mono">
            Spanish
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
