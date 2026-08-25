import type { CVContent, CVLocale } from "../types/cv.ts";

const cvEn: CVContent = {
  name: "Christian Alejandro Marín Daza",
  headline: "Full-Stack Software Engineer",
  contact: ["chrismarin0607@gmail.com", "christianmarin.vercel.app"],
  sections: {
    summary: "Professional Summary",
    skills: "Technical Skills",
    experience: "Work Experience",
    education: "Education",
    certifications: "Certifications & Annexes",
  },
  summary:
    "Full-stack software engineer with 5+ years of experience building high-performance web applications across gaming marketplaces, crypto exchanges, sports betting applications, and e-commerce. Specialized in React and TypeScript on the frontend, with solid experience in Node.js, PostgreSQL, and REST architectures on the backend. Proven track record optimizing systems at scale, integrating third-party APIs, and leading architecture initiatives that improve both user experience and product performance.",
  skills: [
    {
      label: "Languages",
      value: "JavaScript (ES6+), TypeScript, HTML5, CSS3 / SCSS, SQL",
    },
    {
      label: "Frameworks & Libraries",
      value: "React, Tailwind CSS, Storybook",
    },
    {
      label: "Databases & Backend",
      value: "PostgreSQL, Supabase, Express.js, RESTful API Design",
    },
    {
      label: "Cloud & Tools",
      value: "Git, GitHub, GitHub CI/CD, Generative AI Integration",
    },
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "Chicks Gold",
      location: "Canada · Remote",
      period: "Jan 2024 – Present",
      bullets: [
        "Rearchitected the codebase into a modular, multi-platform system, improving search engine indexability and organic traffic across all company products.",
        "Optimized custom REST endpoints by reducing payload overhead and improving API response times, resulting in a faster and more responsive user experience.",
        "Led Generative AI integration within internal APIs to automate image and text generation, eliminating manual content creation workflows across all platforms.",
        "Built an automated image optimization pipeline using AWS S3, reducing storage costs and decreasing global latency for end users.",
        "Created and led the company's first centralized UI library using Storybook, standardizing components across core applications and reducing feature development time.",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "Freelance",
      location: "Global · Remote",
      period: "2022 – 2024",
      bullets: [
        "Architected and deployed custom e-commerce solutions for local businesses, facilitating their transition to digital-first sales models and expanding their market reach.",
        "Developed automated purchasing funnels by integrating WhatsApp Business API with custom dashboards, streamlining the lead-to-sale conversion process for multiple clients.",
        "Collaborated on the VediaGames platform (via Upwork) optimizing frontend layouts and engineering reusable components, improving interface performance and user engagement.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Katavi Gaming Limited (TBet)",
      location: "Tanzania · Remote",
      period: "2021 – 2022",
      bullets: [
        "Enhanced frontend-to-API communication logic, significantly reducing product load times and improving the overall end-user experience for high-traffic gaming products.",
        "Designed and developed interactive mini-games for promotional campaigns, generating a measurable increase in new user registrations and platform retention.",
        "Led a comprehensive UI overhaul implementing responsive layouts and intuitive form components, optimizing the user journey and overall application usability.",
      ],
    },
  ],
  education: [
    {
      title: "Full-Stack JavaScript & Web Architecture Specialization",
      institution: "Udemy | 2021 – 2022",
      detail:
        "End-to-end development with MERN Stack · RESTful APIs · TypeScript · OOP · Advanced CSS",
    },
    {
      title: "Front-end Development Specialization",
      institution: "Platzi | 2023",
      detail:
        "React · Component-Based Architecture · UI/UX · Web Performance",
    },
    {
      title: "Software Engineering",
      institution: "I.U.P. Santiago Mariño",
    },
  ],
  certifications: [
    {
      issuer: "Anthropic — 2026",
      items: [
        "Claude 101 — Aug 2026",
        "Claude Code 101 — Aug 2026",
        "Introduction to Subagents — Aug 2026",
        "Introduction to Agent Skills — Aug 2026",
      ],
    },
    {
      issuer: "Platzi — 2023",
      items: [
        "Frontend Developer — Mar 2023",
        "Frontend Developer – Practical — Mar 2023",
        "React.js – Practical — Apr 2023",
        "Git & GitHub – Professional — Mar 2023",
        "Asynchronous JavaScript — Mar 2023",
        "JavaScript – Fundamentals — Mar 2023",
        "JavaScript – Practical — Mar 2023",
        "ECMAScript: History & Versions of JavaScript — Mar 2023",
        "NPM: Package & Dependency Management — Mar 2023",
        "Webpack — Apr 2023",
        "Terminal & Command Line — Mar 2023",
        "Logical Thinking: Algorithms & Flowcharts — Feb 2023",
        "Logical Thinking: Data Structures & Functions — Feb 2023",
        "Logical Thinking: Programming Languages — Feb 2023",
      ],
    },
    {
      issuer: "Udemy — 2021",
      items: [
        "Master JavaScript: JS, jQuery, Angular, NodeJS — Sep 2021",
        "Master CSS: Responsive, SASS, Flexbox, Grid & Bootstrap — May 2021",
      ],
    },
  ],
};

const cvEs: CVContent = {
  name: "Christian Alejandro Marín Daza",
  headline: "Ingeniero de Software Full-Stack",
  contact: ["chrismarin0607@gmail.com", "christianmarin.vercel.app"],
  sections: {
    summary: "Perfil Profesional",
    skills: "Habilidades Técnicas",
    experience: "Experiencia Laboral",
    education: "Formación Académica",
    certifications: "Certificaciones y Anexos",
  },
  summary:
    "Ingeniero de software full-stack con más de 5 años de experiencia construyendo aplicaciones web de alto rendimiento en marketplaces de gaming, exchanges de criptomonedas, aplicaciones de apuestas deportivas y comercio electrónico. Especializado en React y TypeScript en el frontend, con sólida experiencia en Node.js, PostgreSQL y arquitecturas REST en el backend. Trayectoria comprobada optimizando sistemas a escala, integrando APIs de terceros y liderando iniciativas de arquitectura que mejoran tanto la experiencia de usuario como el rendimiento del producto.",
  skills: [
    {
      label: "Lenguajes",
      value: "JavaScript (ES6+), TypeScript, HTML5, CSS3 / SCSS, SQL",
    },
    {
      label: "Frameworks y Librerías",
      value: "React, Tailwind CSS, Storybook",
    },
    {
      label: "Bases de Datos y Backend",
      value: "PostgreSQL, Supabase, Express.js, Diseño de APIs RESTful",
    },
    {
      label: "Cloud y Herramientas",
      value: "Git, GitHub, GitHub CI/CD, Integración de IA Generativa",
    },
  ],
  experience: [
    {
      role: "Ingeniero de Software",
      company: "Chicks Gold",
      location: "Canadá · Remoto",
      period: "Ene 2024 – Actualidad",
      bullets: [
        "Rearquitecté el código base hacia un sistema modular y multiplataforma, mejorando la indexación en buscadores y el tráfico orgánico de todos los productos de la empresa.",
        "Optimicé endpoints REST personalizados reduciendo la carga de datos y mejorando los tiempos de respuesta de la API, logrando una experiencia de usuario más rápida y fluida.",
        "Lideré la integración de IA Generativa dentro de las APIs internas para automatizar la generación de imágenes y texto, eliminando los flujos manuales de creación de contenido en todas las plataformas.",
        "Construí un pipeline automatizado de optimización de imágenes con AWS S3, reduciendo costos de almacenamiento y disminuyendo la latencia global para los usuarios finales.",
        "Creé y lideré la primera librería de UI centralizada de la empresa con Storybook, estandarizando componentes entre las aplicaciones principales y reduciendo el tiempo de desarrollo de nuevas funcionalidades.",
      ],
    },
    {
      role: "Desarrollador Full-Stack",
      company: "Freelance",
      location: "Global · Remoto",
      period: "2022 – 2024",
      bullets: [
        "Diseñé y desplegué soluciones de comercio electrónico a medida para negocios locales, facilitando su transición a modelos de venta digitales y ampliando su alcance de mercado.",
        "Desarrollé embudos de compra automatizados integrando la API de WhatsApp Business con dashboards personalizados, agilizando el proceso de conversión de prospecto a venta para múltiples clientes.",
        "Colaboré en la plataforma VediaGames (vía Upwork) optimizando layouts de frontend y desarrollando componentes reutilizables, mejorando el rendimiento de la interfaz y la interacción del usuario.",
      ],
    },
    {
      role: "Desarrollador Frontend",
      company: "Katavi Gaming Limited (TBet)",
      location: "Tanzania · Remoto",
      period: "2021 – 2022",
      bullets: [
        "Mejoré la lógica de comunicación entre el frontend y las APIs, reduciendo significativamente los tiempos de carga y mejorando la experiencia general del usuario en productos de gaming de alto tráfico.",
        "Diseñé y desarrollé minijuegos interactivos para campañas promocionales, generando un aumento medible en el registro de nuevos usuarios y en la retención de la plataforma.",
        "Lideré una renovación integral de la UI implementando layouts responsivos y componentes de formulario intuitivos, optimizando el recorrido del usuario y la usabilidad general de la aplicación.",
      ],
    },
  ],
  education: [
    {
      title: "Especialización en JavaScript Full-Stack y Arquitectura Web",
      institution: "Udemy | 2021 – 2022",
      detail:
        "Desarrollo end-to-end con MERN Stack · APIs RESTful · TypeScript · POO · CSS Avanzado",
    },
    {
      title: "Especialización en Desarrollo Front-end",
      institution: "Platzi | 2023",
      detail:
        "React · Arquitectura basada en componentes · UI/UX · Rendimiento web",
    },
    {
      title: "Ingeniería de Software",
      institution: "I.U.P. Santiago Mariño",
    },
  ],
  certifications: [
    {
      issuer: "Anthropic — 2026",
      items: [
        "Claude 101 — Ago 2026",
        "Claude Code 101 — Ago 2026",
        "Introducción a Subagentes — Ago 2026",
        "Introducción a Agent Skills — Ago 2026",
      ],
    },
    {
      issuer: "Platzi — 2023",
      items: [
        "Desarrollador Frontend — Mar 2023",
        "Desarrollador Frontend – Práctico — Mar 2023",
        "React.js – Práctico — Abr 2023",
        "Git y GitHub – Profesional — Mar 2023",
        "JavaScript Asíncrono — Mar 2023",
        "JavaScript – Fundamentos — Mar 2023",
        "JavaScript – Práctico — Mar 2023",
        "ECMAScript: Historia y Versiones de JavaScript — Mar 2023",
        "NPM: Gestión de Paquetes y Dependencias — Mar 2023",
        "Webpack — Abr 2023",
        "Terminal y Línea de Comandos — Mar 2023",
        "Pensamiento Lógico: Algoritmos y Diagramas de Flujo — Feb 2023",
        "Pensamiento Lógico: Estructuras de Datos y Funciones — Feb 2023",
        "Pensamiento Lógico: Lenguajes de Programación — Feb 2023",
      ],
    },
    {
      issuer: "Udemy — 2021",
      items: [
        "Master en JavaScript: JS, jQuery, Angular, NodeJS — Sep 2021",
        "Master en CSS: Responsive, SASS, Flexbox, Grid y Bootstrap — May 2021",
      ],
    },
  ],
};

const cvByLocale: Record<CVLocale, CVContent> = {
  en: cvEn,
  es: cvEs,
};

export { cvEn, cvEs, cvByLocale };
