import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface JobHeaderProps {
  logo: any;
  title: string;
  location: string;
  tags: string[];
}

const JobHeader: React.FC<JobHeaderProps> = ({ logo, title, location, tags }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerCard}>
        <Image source={logo} style={styles.logo} />

        <View style={styles.texts}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.location}>{location}</Text>

          <View style={styles.tagRow}>
            {tags.map((tag, idx) => (
              <View key={idx} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default JobHeader;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  headerCard: {
    backgroundColor: "#6C63FF",
    padding: 20,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 15,
  },
  texts: { flex: 1 },
  title: { fontSize: 18, fontWeight: "700", color: "#fff" },
  location: { fontSize: 14, color: "#EEE", marginVertical: 5 },
  tagRow: { flexDirection: "row", marginTop: 10 },
  tag: {
    backgroundColor: "#ffffff33",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginRight: 10,
  },
  tagText: { color: "#fff", fontWeight: "600" },
});
