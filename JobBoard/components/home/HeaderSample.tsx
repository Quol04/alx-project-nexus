import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface Props {
  name: string;
}

const HomeHeader: React.FC<Props> = ({ name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={{ uri: "file:///mnt/data/alx-mobile-home.png" }} 
          style={styles.avatar}
        />
        <View>
          <Text style={styles.welcome}>Welcome back!</Text>
          <Text style={styles.name}>Hello! {name} 👋</Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <Text style={styles.bell}>🔔</Text>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    alignItems: "center",
  },
  row: { flexDirection: "row", alignItems: "center" },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  welcome: {
    fontSize: 12,
    color: "#6B7280",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  iconContainer: {
    backgroundColor: "#F3F4F6",
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  bell: { fontSize: 20 },
});
