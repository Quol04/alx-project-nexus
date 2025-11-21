import React from "react";
import { StyleSheet, Text, View , Image} from "react-native";
// import colors from "@/styles/colors";
import NotificationIcon from "./NotificationIcon";

const Header = ({ name }: { name: string }) => (
  <View style={styles.header}>
    <View style={styles.profileContainer}>
      <Image source={require("@/assets/images/Image.png")} style={styles.profileImage} />
      <View>
        <Text style={styles.greeting}>Welcome back!</Text>
        <Text style={styles.nameStyles}>Hello! {name}</Text>
      </View>
    </View>
    <NotificationIcon notifications={[]} />
  </View>
);

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: 20,
    marginTop: 30,
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  greeting: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4,
  },
  nameStyles: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
 profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});
