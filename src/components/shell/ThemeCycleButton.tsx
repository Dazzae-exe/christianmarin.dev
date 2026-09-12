import { useTheme } from "@/components/ThemeProvider"
import { nextTheme, themeLabel } from "@/lib/theme"
import { cn } from "@/lib/utils"

export function ThemeCycleButton({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const upcoming = nextTheme(theme)

  return (
    <button
      type="button"
      onClick={() => setTheme(upcoming)}
      aria-label={`Theme: ${themeLabel[theme]}. Switch to ${themeLabel[upcoming]}`}
      className={cn("inline-flex items-baseline gap-1.5", className)}
    >
      Theme
      <span aria-hidden className="text-muted-foreground/60">·</span>
      <span key={theme} className="inline-block animate-blur-in">
        {themeLabel[theme]}
      </span>
    </button>
  )
}
