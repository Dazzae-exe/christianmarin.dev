import Expo from "@/assets/hero-page/pinterest-motion-graphique-expo-universelle-visualisation.webp"
import Conference from "@/assets/hero-page/pinterest-blue-ui-conference-branding-arabic-design-x.webp"

export function ProjectsFolder() {
  return (
    <span aria-hidden className="peek folder">
      <span className="folder-back" />
      <img src={Expo} alt="" decoding="async" fetchPriority="low" className="folder-file" />
      <img src={Conference} alt="" decoding="async" fetchPriority="low" className="folder-file" />
      <span className="folder-front" />
    </span>
  )
}
