import type { Project } from "../types/projects.ts";
import type { WorkExperience } from "../types/work.ts";

const workExperience: WorkExperience[] = [
  {
    company: "Chicks Gold",
    role: "Software Engineer",
    period: "Nov. 2024 - current",
    href: "https://chicksgold.com/",
  },
  {
    company: "ChicksX",
    role: "Software Engineer",
    period: "Nov. 2024 - current",
    href: "https://chicksx.com/",
  },
  {
    company: "Vedia Games",
    role: "Front-end Engineer - Freelancer",
    period: "Jan. 2023 - Apr. 2023",
    href: "https://vediagames.com",
  },
  {
    company: "TBet Football Betting App (Website closed)",
    role: "Jr. Front-end Developer",
    period: "Sep. 2021 - Oct. 2022",
    href: "https://tbet.co.tz/",
  },
];

const projects: Project[] = [
  {
    title: "Psycloud",
    description: "A web application for psychologists to manage their clients and appointments. Also, it has tools for clients to manage their appointments and clinical history.",
    tags: ["React", "Tailwindcss", "Shadcn/ui", "TypeScript", "Supabase", "Astro"],
    href: "https://psycloud.online/",
  }
];

export { workExperience, projects };
