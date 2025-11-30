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
  logo: any;
  steps: ApplicationStep[];
  status: ApplicationStatus;
  tags: string[];
  description?: string;
  requirements?: string[];
  website?: string;
}
export type ApplicationStatus = "On the way" | "Delivered" | "Canceled";


export const applicationData: JobApplicationDetails[] =[
       {
          id: "1",
          role: "Lead Product Designer",
          company: "Google LLC",
          logo: "https://logo.clearbit.com/google.com",
          salary: "8K/month",
          location: "Berlin, Germany",
          website: "www.google.com",
          status: "On the way",
          tags: ["Design", "Full Time", "In House"],
          steps: [
            { id: "1", title: "Offer letter", completed: true },
            { id: "2", title: "Team matching", date: "19/09/24", time: "02:00 PM", completed: true },
            { id: "3", title: "Final HR interview", date: "14/09/24", time: "04:00 PM", completed: true },
            { id: "4", title: "Technical interview", date: "04/09/24", time: "10:00 AM", completed: true },
            { id: "5", title: "Screening interview", date: "20/08/24", time: "10:00 AM", completed: true },
            { id: "6", title: "Reviewed by Google team", date: "05/08/24", time: "11:00 AM", completed: true },
            { id: "7", title: "Application submitted", date: "01/08/24", time: "08:00 PM", completed: true },
            ],
          description: "We are looking for a lead product designer. They say no man is an island...",
          requirements: [
            "Create UI/UX strategies",
            "Develop prototypes & wireframes",
            "Strong communication skills",
            "Ability to work with teams",
          ],
        },
        {
          id: "2",
          role: "Senior UI/UX Designer",
          company: "Microsoft",
          logo: "https://logo.clearbit.com/microsoft.com",
          salary: "6K/month",
          location: "United States",
          website: "www.microsoft.com",
          status: "Delivered",
          tags: ["Design", "Full Time", "In House"],
          steps: [
            { id: "1", title: "Offer letter", completed: true },
            { id: "2", title: "Team matching", date: "19/09/24", time: "02:00 PM", completed: true },
            { id: "3", title: "Final HR interview", date: "14/09/24", time: "04:00 PM", completed: true },
            { id: "4", title: "Technical interview", date: "04/09/24", time: "10:00 AM", completed: true },
            { id: "5", title: "Screening interview", date: "20/08/24", time: "10:00 AM", completed: true },
            { id: "6", title: "Reviewed by Google team", date: "05/08/24", time: "11:00 AM", completed: true },
            { id: "7", title: "Application submitted", date: "01/08/24", time: "08:00 PM", completed: true },
            ]  ,
          description: "We are looking for a Senior UX Designer. Someone who will work on various projects...",
          requirements: [
            "Create UI/UX strategies",
            "Develop prototypes & wireframes",
            "Strong communication skills",
            "Ability to work with teams",
          ],
        },
        {
          id: "3",
          role: "Mobile Apps Designer",
          company: "Slack",
          logo: "https://logo.clearbit.com/slack.com",
          salary: "8K/month",
          location: "United States",
          website: "www.slack.com",
          status: "Canceled",
          tags: ["Design", "Full Time", "In House"],
          steps: [
            { id: "1", title: "Offer letter", completed: true },
            { id: "2", title: "Team matching", date: "19/09/24", time: "02:00 PM", completed: true },
            { id: "3", title: "Final HR interview", date: "14/09/24", time: "04:00 PM", completed: true },
            { id: "4", title: "Technical interview", date: "04/09/24", time: "10:00 AM", completed: true },
            { id: "5", title: "Screening interview", date: "20/08/24", time: "10:00 AM", completed: true },
            { id: "6", title: "Reviewed by Google team", date: "05/08/24", time: "11:00 AM", completed: true },
            { id: "7", title: "Application submitted", date: "01/08/24", time: "08:00 PM", completed: true },
            ],
          description: "We are looking for a Mobile Apps Designer. Someone who will create stunning mobile app designs...",
          requirements: [
            "Develop mobile app designs",
            "implement user feedback",
            "Strong communication skills",
            "Ability to work with teams",
            
          ],
        },
         {
          id: "4",
          role: "Frontend Developer",
          company: "Microsoft",
          logo: "https://logo.clearbit.com/microsoft.com",
          salary: "6K/month",
          location: "United States",
          website: "www.microsoft.com",
          status: "Delivered",
          tags: ["Design", "Full Time", "In House"],
          steps: [
            { id: "1", title: "Offer letter", completed: true },
            { id: "2", title: "Team matching", date: "19/09/24", time: "02:00 PM", completed: true },
            { id: "3", title: "Final HR interview", date: "14/09/24", time: "04:00 PM", completed: true },
            { id: "4", title: "Technical interview", date: "04/09/24", time: "10:00 AM", completed: true },
            { id: "5", title: "Screening interview", date: "20/08/24", time: "10:00 AM", completed: true },
            { id: "6", title: "Reviewed by Google team", date: "05/08/24", time: "11:00 AM", completed: true },
            { id: "7", title: "Application submitted", date: "01/08/24", time: "08:00 PM", completed: true },
            ],
          description: "We are looking for a Frontend Developer. Someone who will work on various projects...",
          requirements: [
            "Create UI/UX strategies",
            "Develop prototypes & wireframes",
            "Strong communication skills",
            "Ability to work with teams",
          ],
        },
        {
            id: "5",
            role: "Backend Developer",
            company: "Google LLC",
            salary: "$8K/month",
            location: "Berlin, Germany",
            logo: "https://logo.clearbit.com/google.com",
            status: "On the way",
            website: "www.google.com",
            tags: ["Design", "Full Time", "In House"],
            steps: [
            { id: "1", title: "Offer letter", completed: false },
            { id: "2", title: "Team matching", date: "19/09/24", time: "02:00 PM", completed: true },
            { id: "3", title: "Final HR interview", date: "14/09/24", time: "04:00 PM", completed: true },
            { id: "4", title: "Technical interview", date: "04/09/24", time: "10:00 AM", completed: true },
            { id: "5", title: "Screening interview", date: "20/08/24", time: "10:00 AM", completed: true },
            { id: "6", title: "Reviewed by Google team", date: "05/08/24", time: "11:00 AM", completed: true },
            { id: "7", title: "Application submitted", date: "01/08/24", time: "08:00 PM", completed: true },
            ],
            description: "We are looking for a Backend Developer. Someone who will work on various backend projects...",
            requirements: [
            "Create backend strategies",
            "Develop APIs & databases",
            "Strong communication skills",
            "Ability to work with teams",
            ],
        }
];

export const fetchApplications = async (): Promise<JobApplicationDetails[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(applicationData);
    }, 900);
  });
}

