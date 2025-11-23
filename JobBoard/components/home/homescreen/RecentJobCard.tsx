import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  role: string;
  company: string;
  location: string;
  image: string;
}

const RecentJobCard: React.FC<Props> = ({
  role,
  company,
  location,
  image,
}) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.logo} />

      <View style={{ flex: 1 }}>
        <Text style={styles.role}>{role}</Text>
        <Text style={styles.meta}>{company} • {location}</Text>
      </View>

      {/* <Text style={styles.menu}>⋮</Text> */}
      <TouchableOpacity >
         <Ionicons name="ellipsis-vertical" size={24} color="#6B7280" />
      </TouchableOpacity>
    </View>
  );
};

export default RecentJobCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 10,
    marginRight: 12,
  },
  role: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },
  meta: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
});
