import React from "react";
import { View, StyleSheet } from "react-native";
import JobTabButton from "./JobTabButton";

interface JobTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = ["Job Description", "Company", "Review"];

const JobTabs: React.FC<JobTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <JobTabButton
          key={tab}
          label={tab}
          active={activeTab === tab}
          onPress={() => setActiveTab(tab)}
        />
      ))}
    </View>
  );
};

export default JobTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});
