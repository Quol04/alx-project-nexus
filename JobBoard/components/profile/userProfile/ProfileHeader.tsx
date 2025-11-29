import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  title: string;
  onBack?: () => void;
  onOptions?: () => void;
}

const ProfileHeader: React.FC<Props> = ({ title, onBack, onOptions }) => {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={onBack}>
        <Ionicons name="chevron-back" size={26} />
      </TouchableOpacity> */}

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onOptions}>
        <Ionicons name="ellipsis-vertical" size={22} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
});
