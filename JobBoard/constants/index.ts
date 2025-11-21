// types 
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
}
export interface Application {
  id: string;
  jobId: string;
  applicantName: string;
  applicantEmail: string;
  resumeUrl: string;
}
export interface Notification {
  id: string;
  title: string;
  description: string;
  read: boolean;
}
// constants
export const JOB_TYPES = ["Full-time", "Part-time", "Contract", "Internship"];
export const LOCATIONS = [
  "New York, NY",
  "San Francisco, CA",
    "Remote",
    "Austin, TX",
    "Seattle, WA",
    "Chicago, IL",
];
export const COMPANIES = [
  "Google",
  "Apple",
    "Microsoft",
    "Amazon",
    "Facebook",
    "Netflix",
];
