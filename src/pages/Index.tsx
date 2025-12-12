import { Avatar } from "@/components/Avatar";
import { WorkItem } from "@/components/WorkItem";
import { ProjectCard } from "@/components/ProjectCard";

const workExperience = [
  {
    company: "Chicks Gold Inc.",
    role: "Software Engineer",
    period: "Nov. 2024 - current",
    href: "https://chicksgold.com/",
  },
  {
    company: "Importa Max",
    role: "Full Stack Engineer",
    period: "Aug. 2025 - Nov. 2025",
    href: "https://importa-max.com/",
  },
  {
    company: "Arsport Nutrition Store",
    role: "Full Stack Engineer",
    period: "July. 2024 - Nov. 2024",
    href: "https://arsportnutrition.com",
  },
  {
    company: "Vedia Games",
    role: "Front-end Engineer",
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

const projects = [
  {
    title: "pharos market",
    description: "Pharos Market is a marketplace for every kind business to sell their products online using our easy platform which implements very useful tools for their business and reach more customers.",
    tags: ["Nextjs", "Tailwindcss", "Shadcn/ui", "React"],
    href: "https://github.com/example/hookcn",
  },
  {
    title: "notes.md for MacOS notes app",
    description: "WYSIWYG with markdown using Shadcn/ui and WYSIWYG editor using markdown behind that saves your notes and convert them to macos notes app format file.",
    tags: ["Nextjs", "Shadcn/ui", "TypeScript"],
    href: "https://github.com/example/shadcn-form-builder",
  },
  {
    title: "android mobile devices management system",
    description: "A web application to manage android mobile devices remotely from a dashboard. It allows administrators to monitor, control, and secure android devices within an organization.",
    tags: ["React", "TypeScript", "NodeJS", "Express", "Firebase", "Android Management API"],
    href: "https://github.com/example/react-email-templates",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-12">
        {/* Hero Section */}
        <section className="space-y-6 md:mx-auto mx-6 max-w-2xl">
            <Avatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              alt="Profile"
              className="h-20 w-20"
            />
            
            <div className="space-y-4">
              <h1 className="font-mono text-3xl font-semibold tracking-tight">
                Hey, I'm Christian Marín @ <br/>Software Engineer.
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground">
                As a dedicated software engineer, I specialize in crafting high-quality products where sleek design meets rock-solid engineering. I thrive at the intersection of aesthetics and functionality, delivering visually captivating interfaces backed by scalable, performant code.
              </p>
            </div>
        </section>

        {/* Work Section */}
        <section className="mt-16">
          <h2 className="max-w-2xl font-mono text-2xl font-semibold tracking-tight md:mx-auto mx-6">Work</h2>
          <hr />
          <div className="mx-auto max-w-2xl my-6 md:px-0 px-6">
            <div className="space-y-4">
              {workExperience.map((work) => (
                <WorkItem
                  key={work.company}
                  company={work.company}
                  role={work.role}
                  period={work.period}
                  href={work.href}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-16">
          <h2 className="max-w-2xl font-mono text-2xl font-semibold tracking-tight md:mx-auto mx-6">Projects</h2>
          <hr />
          <div className="max-w-2xl my-6 space-y-4 md:px-0 px-6 mx-auto">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                href={project.href}
              />
            ))}
          </div>
        </section>

        {/* Posts Section */}
        <section className="mt-16">
          <h2 className="max-w-2xl font-mono text-2xl font-semibold tracking-tight md:mx-auto mx-6">Posts</h2>
          <hr />
          <div className="max-w-2xl my-6 md:px-0 px-6 mx-auto">
            <p className="text-sm text-muted-foreground">Coming soon...</p>
          </div>
        </section>
    </div>
  );
};

export { Index as HomePage };
