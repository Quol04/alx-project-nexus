import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const EmptyApplications = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/Image.png")}
        style={styles.image}
      />
      <Text style={styles.title}>No Applications Yet</Text>
      <Text style={styles.subtitle}>
        Your applied jobs will appear here. Start exploring jobs!
      </Text>
    </View>
  );
};

export default EmptyApplications;

const styles = StyleSheet.create({
  container: {
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    opacity: 0.6,
  },
});
