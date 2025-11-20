import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  // const router = useRouter();
  // const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = Dimensions.get("window");

  return (
    <SafeAreaView style={styles.container}>

      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.subtitle}>
          All-round Nutritional and Wellness Tracker
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  textContainer: {
    alignItems: "center",
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    fontWeight: "500",
  },
});
