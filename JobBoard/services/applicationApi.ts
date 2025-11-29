// services/applicationApi.ts
// import { JobApplicationDetails } from "@/constants/applications";
import {applicationData,JobApplicationDetails} from "@/constants/applicationData";

export const getApplicationDetails = async (id: string): Promise<JobApplicationDetails> => {
  await new Promise((res) => setTimeout(res, 600)); // simulate delay

  return {
    ...applicationData.find(app => app.id === id) || applicationData[0],
    
   // Simulated detailed data
  
}
};
