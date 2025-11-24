import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface Props {
  image: string;
  name: string;
  email: string;
  status: string;
}

const ProfileAvatar: React.FC<Props> = ({ image, name, email, status }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.avatar} />

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
};

export default ProfileAvatar;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 15,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: "#ddd",
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
  },
  email: {
    fontSize: 14,
    color: "gray",
  },
  status: {
    marginTop: 4,
    fontSize: 14,
    color: "#4A63E7",
    fontWeight: "500",
  },
});
