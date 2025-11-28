import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const EmptySavedScreen = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="bookmark-outline" size={80} color="#9CA3AF" />
      <Text style={styles.title}>No Saved Jobs Yet</Text>
      <Text style={styles.subtitle}>
        Browse jobs and tap the bookmark icon to save them for later.
      </Text>
    </View>
  );
};

export default EmptySavedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: { 
    fontSize: 20, 
    fontWeight: "600", 
    marginTop: 15 
},
  subtitle: {
    textAlign: "center",
    marginTop: 8,
    color: "#6b7280",
    fontSize: 14,
  },
});
