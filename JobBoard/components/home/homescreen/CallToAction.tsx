import React from "react";
import { Image, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import NotificationIcon from "./NotificationIcon";

interface CallToActionProps {
  onPress: () => void;
}


const callToAction = ({onPress}: CallToActionProps) => (
  <View style={styles.header}>
    <View style={styles.ctaContainer}>
      <View>
        <Text style={styles.greeting}>Let's find a new job suitable for you</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.ctaText}>Learn More</Text>
      </TouchableOpacity>
    </View>
    <View >
        <Image 
            source={require("@/assets/images/Image.png")} 
            style={styles.profileImage} 
            resizeMode="contain"
        />
    </View>

    {/* <NotificationIcon notifications={[]} /> */}
  </View>
);

export default callToAction;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#55e69eff",
    borderRadius: 12,
    // padding: 16,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 16,
  },
  ctaContainer: {
    // marginRight: 30,
    width: 150,
    marginLeft: 10,
  },
    ctaText: {
    marginTop: 8,
    color: "#f3f3f6ff",
    fontSize: 16,
    fontWeight: "600",
    backgroundColor: "#000000aa",
    // paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    textAlign: "center",
    
  },
  greeting: {
    fontSize: 16,
    color: "#f8ffff",
    marginBottom: 4,
    fontWeight: "500",
  },
 profileImage: {
    width: 150,
    height: 150,
    marginRight: 10,
    marginBottom: -20,
  },
});
