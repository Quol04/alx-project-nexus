import React, { useState } from "react";
import { View, ScrollView, Modal, StyleSheet } from "react-native";
import JobHeader from "./JobDetailHeader";
import JobTabs from "./JobTabs";
import JobDescription from "./JobDescription";
import JobCompanyInfo from "./JobCompanyInfo";
import JobFooterButton from "./JobFooterButton";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

interface JobDetailsSlotProps {
  visible: boolean;
  onClose: () => void;
}

const JobDetailsSlot: React.FC<JobDetailsSlotProps> = ({ visible, onClose }) => {
  const [activeTab, setActiveTab] = useState("Job Description");

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <JobHeader
              logo={require("@/assets/images/Image.png")}
              title="Senior UX Designer"
              location="Berlin, Germany"
              tags={["Design", "Full Time", "In House"]}
            />

            <JobTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === "Job Description" && (
              <JobDescription
                description="We are looking for a Senior UX Designer. They say no man is an island..."
                requirements={[
                  "Create UI/UX strategies",
                  "Develop prototypes & wireframes",
                  "Strong communication skills",
                  "Ability to work with teams",
                ]}
              />
            )}

            {activeTab === "Company" && (
              <JobCompanyInfo
                items={[
                  { icon: <Ionicons name="globe" size={20} />, label: "Website", value: "www.google.com" },
                  { icon: <Ionicons name="location" size={20} />, label: "Headquarters", value: "California, USA" },
                  { icon: <FontAwesome5 name="calendar" size={18} />, label: "Founded", value: "Sept 4, 1998" },
                  { icon: <FontAwesome5 name="users" size={18} />, label: "Size", value: "100,000 employees" },
                  { icon: <FontAwesome5 name="dollar-sign" size={18} />, label: "Revenue", value: "$25B" },
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




