import { applicationData } from "./applicationData";

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

// export interface JobApplicationDetails {
//   id: string;
//   role: string;
//   company: string;
//   salary: string;
//   location: string;
//   logo: string;
//   steps: ApplicationStep[];
//   status: ApplicationStatus;
// }

// export const suggestedJobs: SuggestedJob[] = [ 
  // {
  //   id: 1,
  //   company: "Google LLC",
  //   role: "Sr. UX Designer",
  //   salary: "$195,000/Year",
  //   tags: ["Design", "Full Time", "In House"],
  //   image: "file:///mnt/data/alx-mobile-home.png"
  // },
  //  {
  //   id: 2,
  //   company: "Microsoft",
  //   role: "Lead Product Designer",
  //   salary: "$190,000/Year",
  //   tags: ["Design", "Full Time", "In House"],
  //   image: "file:///mnt/data/alx-mobile-home.png"
  // },
  //     {
  //   id: 3,
  //   company: "Adobe",
  //   role: "Software Engineer",
  //   salary: "$198,000/Year",
  //   tags: ["Design", "Full Time", "In House"],
  //   image: "file:///mnt/data/alx-mobile-home.png"
  // },
// ];

export const recentJobs: RecentJob[] = [
  {
    id: 1,
    role: "Sr. Product Designer",
    company: "Apple",
    location: "United States",
    image: "file:///mnt/data/alx-mobile-home.png"
  },
    {
    id: 2,
    role: "Sr. UI/UX Designer",
    company: "Amplitude",
    location: "Singapore",
    image: "file:///mnt/data/alx-mobile-home.png"
  },
   {
    id: 3,
    role: "Software Engineer",
    company: "Adobe",
    location: "New York, USA",
    image: "file:///mnt/data/alx-mobile-home.png"
  },
   {
    id: 4,
    role: "Lead Digital Marketer",
    company: "Wings",
    location: "Anywhere, Remote",
    image: "file:///mnt/data/alx-mobile-home.png"
  },
   {
    id: 5,
    role: "Full Stack Developer",
    company: "Airbnb",
    location: "United Kingdom",
    image: "file:///mnt/data/alx-mobile-home.png"
  },
];
