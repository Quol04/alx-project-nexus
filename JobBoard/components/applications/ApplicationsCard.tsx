import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { JobApplication } from "@/api/application";
import { useNavigation } from "@react-navigation/native";

interface Props {
  item: JobApplication;
  onPress: () => void;
}

const statusColors = {
  "On the way": "#C9E8FF",
  Delivered: "#D8FFD8",
  Canceled: "#FFD6D6",
};

const ApplicationCard = ({ item, onPress }: Props) => {
  
  
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: item.logo }} style={styles.logo} />

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.company}>{item.company}</Text>

          <Text style={styles.meta}>
            {item.salary} • {item.location}
          </Text>

          <View
            style={[
              styles.statusBadge,
              { backgroundColor: statusColors[item.status] },
            ]}
          >
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.btnText}>View Application</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ApplicationCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    marginBottom: 14,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 10,
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  company: {
    fontSize: 14,
    opacity: 0.6,
  },
  meta: {
    marginTop: 4,
    color: "#666",
  },
  statusBadge: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
    borderRadius: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
  button: {
    marginTop: 12,
    backgroundColor: "#E8EEFF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    color: "#3657F7",
    fontSize: 14,
    fontWeight: "600",
  },
});
