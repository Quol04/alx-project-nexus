import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface JobTabButtonProps {
  label: string;
  active: boolean;
  onPress: () => void;
}

const JobTabButton: React.FC<JobTabButtonProps> = ({ label, active, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.tab, active && styles.activeTab]}
      onPress={onPress}
    >
      <Text style={[styles.label, active && styles.activeLabel]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default JobTabButton;

const styles = StyleSheet.create({
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#F7F7F7",
    borderRadius: 20,
    marginRight: 12,
  },
  activeTab: { backgroundColor: "#0D6EFD" },
  label: { fontSize: 14, fontWeight: "600", color: "#555" },
  activeLabel: { color: "#fff" },
});
