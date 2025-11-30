import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface JobDescriptionProps {
  description: string;
  requirements: string[];
}

const JobDescription: React.FC<JobDescriptionProps> = ({
  description,
  requirements,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>About The Role</Text>
      <Text style={styles.description}>{description}</Text>

      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
        Requirements
      </Text>

      {requirements.map((item, index) => (
        <View key={index} style={styles.bulletRow}>
          <View style={styles.dot} />
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default JobDescription;

const styles = StyleSheet.create({
  container: { 
    paddingHorizontal: 20 
  },
  sectionTitle: { 
    fontSize: 16, 
    fontWeight: "700", 
    marginBottom: 8 
  },
  description: { 
    lineHeight: 22, 
    fontSize: 14, 
    color: "#444"
   },
  bulletRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginVertical: 6 
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: "#3DDC84",
    borderRadius: 50,
    marginRight: 10,
  },
  bulletText: { 
    fontSize: 14, 
    color: "#555",
    flex: 1 },
});
