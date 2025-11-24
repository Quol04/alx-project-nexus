import React from "react";
import { View, StyleSheet } from "react-native";

const ProfileCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default ProfileCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#7D5FFF",
    marginTop: 30,
    paddingVertical: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
