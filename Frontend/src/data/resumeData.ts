
export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  qualification: string;
  location: string;
  completionDate: string;
  description?: string;
}

export interface Certification {
  name: string;
  organization: string;
  date: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}
