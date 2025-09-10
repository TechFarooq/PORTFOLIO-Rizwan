export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  type: 'education' | 'internship' | 'achievement' | 'project';
}

export interface ChatMessage {
  id: string;
  message: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface AnalyticsData {
  totalVisits: number;
  mostViewedProject: string;
  contactSubmissions: number;
  topSkills: string[];
}