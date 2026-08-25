type CVLocale = "en" | "es";

interface CVExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

interface CVEducation {
  title: string;
  institution: string;
  detail?: string;
}

interface CVCertificationGroup {
  issuer: string;
  items: string[];
}

interface CVSkill {
  label: string;
  value: string;
}

interface CVContent {
  name: string;
  headline: string;
  contact: string[];
  sections: {
    summary: string;
    skills: string;
    experience: string;
    education: string;
    certifications: string;
  };
  summary: string;
  skills: CVSkill[];
  experience: CVExperience[];
  education: CVEducation[];
  certifications: CVCertificationGroup[];
}

export type {
  CVLocale,
  CVContent,
  CVExperience,
  CVEducation,
  CVCertificationGroup,
  CVSkill,
};
