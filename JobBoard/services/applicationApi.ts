// services/applicationApi.ts
import { JobApplicationDetails } from "@/constants/applications";

export const getApplicationDetails = async (id: string): Promise<JobApplicationDetails> => {
  await new Promise((res) => setTimeout(res, 600)); // simulate delay

  return {
    id,
    role: "Lead Product Designer",
    company: "Google LLC",
    salary: "$8K/month",
    location: "Berlin, Germany",
    logo: "https://logo.clearbit.com/google.com",
    steps: [
      { id: "1", title: "Offer letter", completed: false },
      { id: "2", title: "Team matching", date: "19/09/22", time: "02:00 PM", completed: true },
      { id: "3", title: "Final HR interview", date: "14/09/22", time: "04:00 PM", completed: true },
      { id: "4", title: "Technical interview", date: "04/09/22", time: "10:00 AM", completed: true },
      { id: "5", title: "Screening interview", date: "20/08/22", time: "10:00 AM", completed: true },
      { id: "6", title: "Reviewed by Google team", date: "05/08/22", time: "11:00 AM", completed: true },
      { id: "7", title: "Application submitted", date: "01/08/22", time: "08:00 PM", completed: true },
    ]
  };
};
