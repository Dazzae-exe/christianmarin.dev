export type Theme = "light" | "dark" | "system"

const themeOrder: Theme[] = ["light", "dark", "system"]

export const themeLabel: Record<Theme, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
}

export const nextTheme = (theme: Theme): Theme =>
  themeOrder[(themeOrder.indexOf(theme) + 1) % themeOrder.length]
