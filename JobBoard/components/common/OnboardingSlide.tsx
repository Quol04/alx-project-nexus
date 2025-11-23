import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface SlideProps {
  title: string;
  subtitle: string;
  image: any;
}

const OnboardingSlide: React.FC<SlideProps> = ({ title, subtitle, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default OnboardingSlide;

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: "center",
    paddingHorizontal: 25,
  },
  image: {
    width: "80%",
    height: 260,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
    color: "#1F1F1F",
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    color: "#6E6E6E",
  },
});
