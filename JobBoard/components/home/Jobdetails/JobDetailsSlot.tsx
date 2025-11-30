import React, { useEffect, useState } from "react";
import { Modal, ScrollView, StyleSheet, View } from "react-native";
// import JobHeader from "./JobDetailHeader";
import { JobApplicationDetails } from "@/constants/applicationData";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import JobCompanyInfo from "./JobCompanyInfo";
import JobDescription from "./JobDescription";
import JobDetailHeader from "./JobDetailHeader";
import JobFooterButton from "./JobFooterButton";
import JobTabs from "./JobTabs";

interface JobDetailsSlotProps {
  visible: boolean;
  onClose: () => void;
  job?: JobApplicationDetails | null;
}

const JobDetailsSlot: React.FC<JobDetailsSlotProps> = ({ visible, onClose, job = null }) => {
  const [applications, setApplications] = useState<JobApplicationDetails[]>([]);
  const [activeTab, setActiveTab] = useState("Job Description");

  useEffect(() => {
    // Fetch or set application data here if needed
  }, []);

  const description = job?.description ?? "";

  const requirements: string[] = job?.requirements ?? ([] as string[]);


  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <JobDetailHeader
              logo={job?.logo ? { uri: job.logo } : require("@/assets/images/Image.png")}
              role={job?.role ?? "Job Title"}
              location={job?.location ?? ""}
              tags={job?.tags ?? []}
            />

            <JobTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === "Job Description" && (
              <JobDescription description={description} requirements={requirements} />
            )}

            {activeTab === "Company" && (
              <JobCompanyInfo
                items={[
                  {
                    icon: <Ionicons name="globe" size={20} />,
                    label: "Website",
                    value: job?.website ?? "",
                  },
                  {
                    icon: <Ionicons name="location" size={20} />,
                    label: "Headquarters",
                    value: job?.location ?? "",
                  },
                  {
                    icon: <FontAwesome5 name="calendar" size={18} />,
                    label: "Founded",
                    value: "",
                  },
                  {
                    icon: <FontAwesome5 name="users" size={18} />,
                    label: "Size",
                    value: "",
                  },
                  {
                    icon: <FontAwesome5 name="dollar-sign" size={18} />,
                    label: "Revenue",
                    value: "",
                  },
                ]}
              />
            )}
          </ScrollView>

          <JobFooterButton onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default JobDetailsSlot;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "flex-end",
  },
  container: {
    maxHeight: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 10,
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
});




