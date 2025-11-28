// SIMULATED BACKEND DATA
export type ApplicationStatus = "On the way" | "Delivered" | "Canceled";

export interface JobApplication {
  id: string;
  title: string;
  company: string;
  logo: string;
  salary: string;
  location: string;
  status: ApplicationStatus;
}

export const fetchApplications = async (): Promise<JobApplication[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          title: "Lead Product Designer",
          company: "Google LLC",
          logo: "https://logo.clearbit.com/google.com",
          salary: "8K/month",
          location: "Berlin, Germany",
          status: "On the way",
        },
        {
          id: "2",
          title: "Senior UI/UX Designer",
          company: "Microsoft",
          logo: "https://logo.clearbit.com/microsoft.com",
          salary: "6K/month",
          location: "United States",
          status: "Delivered",
        },
        {
          id: "3",
          title: "Mobile Apps Designer",
          company: "Slack",
          logo: "https://logo.clearbit.com/slack.com",
          salary: "8K/month",
          location: "United States",
          status: "Canceled",
        },
         {
          id: "4",
          title: "Senior UI/UX Designer",
          company: "Microsoft",
          logo: "https://logo.clearbit.com/microsoft.com",
          salary: "6K/month",
          location: "United States",
          status: "Delivered",
        },
      ]);
    }, 900);
  });
};
