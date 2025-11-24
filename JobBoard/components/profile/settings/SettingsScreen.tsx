import React from "react";
import { ScrollView } from "react-native";
import ProfileHeader from "../userProfile/ProfileHeader";
import ProfileCard from "../userProfile/ProfileCard";
import ProfileMenuItem from "../userProfile/ProfileMenuItem";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const navigation: any = useNavigation();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <ProfileHeader title="Settings" />

      <ProfileCard>
        <ProfileMenuItem
          icon="person-circle"
          label="Edit Profile"
          onPress={() => navigation.navigate("EditProfile")}
        />
        <ProfileMenuItem icon="lock-closed" label="Security" />
        <ProfileMenuItem icon="notifications" label="Notifications" />
        <ProfileMenuItem icon="help-circle" label="Help & Support" />
        <ProfileMenuItem icon="log-out" label="Log out" />
      </ProfileCard>
    </ScrollView>
  );
};

export default SettingsScreen;
