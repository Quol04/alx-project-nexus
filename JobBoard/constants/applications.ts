// types/Application.ts
export interface ApplicationStep {
  id: string;
  title: string;
  date?: string;
  time?: string;
  completed: boolean;
}

export interface JobApplicationDetails {
  id: string;
  role: string;
  company: string;
  salary: string;
  location: string;
  logo: string;
  steps: ApplicationStep[];
}
