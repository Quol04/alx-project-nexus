export interface Category {
  id: number;
  name: string;
  icon: string; 
}

export interface SuggestedJob {
  id: number;
  company: string;
  role: string;
  salary: string;
  tags: string[];
  image: string;
}

export interface RecentJob {
  id: number;
  role: string;
  company: string;
  location: string;
  image: string;
}

export const categories: Category[] = [
  { id: 1, name: "Company", icon: "buildings" },
  { id: 2, name: "Full Time", icon: "clock" },
  { id: 3, name: "Part Time", icon: "clock" },
  { id: 4, name: "Freelance", icon: "user" },
];

export const suggestedJobs: SuggestedJob[] = [
  {
    id: 1,
    company: "Google LLC",
    role: "Sr. UX Designer",
    salary: "$195,000/Year",
    tags: ["Design", "Full Time", "In House"],
    image: "file:///mnt/data/alx-mobile-home.png"
  },
];

export const recentJobs: RecentJob[] = [
  {
    id: 1,
    role: "Sr. Product Designer",
    company: "Apple",
    location: "United States",
    image: "file:///mnt/data/alx-mobile-home.png"
  },
];
