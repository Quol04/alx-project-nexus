// services/savedJobsApi.ts

export type SavedJob = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  tags: string[];
  logo: any;
};

const JOBS: SavedJob[] = [
  {
    id: "1",
    title: "UI & UX Researcher",
    company: "Dribbble Inc.",
    salary: "$5,000 - $15,000 /month",
    location: "Paris, France",
    tags: ["Part Time", "Onsite"],
    logo: require("@/assets/images/Image.png"),
  },
  {
    id: "2",
    title: "Web Developer",
    company: "Pinterest",
    salary: "$5,000 - $12,000 /month",
    location: "Chicago, United States",
    tags: ["Freelance", "Remote"],
    logo: require("@/assets/images/Image.png"),
  },
  {
    id: "3",
    title: "Product Designer",
    company: "Reddit Company",
    salary: "$7,000 - $16,000 /month",
    location: "Canberra, Australia",
    tags: ["Full Time", "Remote"],
    logo: require("@/assets/images/Image.png"),
  },
    {
   id: "4",
    title: "Product Designer",
    company: "Reddit Company",
    salary: "$7,000 - $16,000 /month",
    location: "Canberra, Australia",
    tags: ["Full Time", "Remote"],
    logo: require("@/assets/images/Image.png"),
  },
     {
   id: "5",
    title: "Product Designer",
    company: "Reddit Company",
    salary: "$7,000 - $16,000 /month",
    location: "Canberra, Australia",
    tags: ["Full Time", "Remote"],
    logo: require("@/assets/images/Image.png"),
  },
     {
   id: "6",
    title: "Product Designer",
    company: "Reddit Company",
    salary: "$7,000 - $16,000 /month",
    location: "Canberra, Australia",
    tags: ["Full Time", "Remote"],
    logo: require("@/assets/images/Image.png"),
  },
     {
   id: "7",
    title: "Product Designer",
    company: "Reddit Company",
    salary: "$7,000 - $16,000 /month",
    location: "Canberra, Australia",
    tags: ["Full Time", "Remote"],
    logo: require("@/assets/images/Image.png"),
  },
     {
   id: "8",
    title: "Product Designer",
    company: "Reddit Company",
    salary: "$7,000 - $16,000 /month",
    location: "Canberra, Australia",
    tags: ["Full Time", "Remote"],
    logo: require("@/assets/images/Image.png"),
  },
];

// Fake backend with pagination
export const fetchSavedJobs = (
  page: number,
  limit: number = 6
): Promise<SavedJob[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * limit;
      const end = start + limit;
      resolve(JOBS.slice(start, end));
    }, 800);
  });
};
