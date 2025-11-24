import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  icon: string;
  label: string;
  onPress?: () => void;
}

const ProfileMenuItem: React.FC<Props> = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <Ionicons name={icon as any} size={22} color="#fff" />
        <Text style={styles.text}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#fff" />
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#715AFF",
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "500",
  },
});
