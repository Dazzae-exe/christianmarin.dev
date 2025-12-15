import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger className="w-[120px] h-8 text-xs font-mono border-border/50 bg-background">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-background border-border">
        <SelectItem value="light" className="text-xs font-mono">
            <div className="flex items-center gap-2">
                <Sun className="h-3.5 w-3.5" />
                <span>Light</span>
            </div>
        </SelectItem>
        <SelectItem value="dark" className="text-xs font-mono">
            <div className="flex items-center gap-2">
                <Moon className="h-3.5 w-3.5" />
                <span>Dark</span>
            </div>
        </SelectItem>
        <SelectItem value="system" className="text-xs font-mono">
            <div className="flex items-center gap-2">
                <Laptop className="h-3.5 w-3.5" />
                <span>System</span>
            </div>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}
