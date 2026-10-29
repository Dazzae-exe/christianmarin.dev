import { FolderGit2, Github, House, Linkedin } from "lucide-react"

export const navItems = [
  { name: "Home", href: "/", icon: House },
  { name: "Projects", href: "/projects", icon: FolderGit2 },
] as const

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/dazzae-exe", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/christianmarindaza", icon: Linkedin },
] as const

export const contactHref = "mailto:chrismarin0607@gmail.com"
