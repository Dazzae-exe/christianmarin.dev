import Expo from "@/assets/hero-page/pinterest-motion-graphique-expo-universelle-visualisation.jpg"
import Conference from "@/assets/hero-page/pinterest-blue-ui-conference-branding-arabic-design-x.jpg"

export function ProjectsFolder() {
  return (
    <span aria-hidden className="folder">
      <span className="folder-back" />
      <img src={Expo} alt="" decoding="async" className="folder-file" />
      <img src={Conference} alt="" decoding="async" className="folder-file" />
      <span className="folder-front" />
    </span>
  )
}
