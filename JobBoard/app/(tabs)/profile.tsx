import React, { useEffect, useState } from "react";
import { View, ScrollView,ActivityIndicator } from "react-native";
import ProfileHeader from "@/components/profile/userProfile/ProfileHeader";
import ProfileAvatar from "@/components/profile/userProfile/ProfileAvatar";
import ProfileStats from "@/components/profile/userProfile/ProfileStats";
import ProfileMenuItem from "@/components/profile/userProfile/ProfileMenuItem";
import ProfileCard from "@/components/profile/userProfile/ProfileCard";
import { getUserProfile, UserProfile } from "@/services/userService";

const Profile = () => {
  const [profile, setProfile] = useState<any>(null);
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const data = await getUserProfile();
    setUser(data);
  };

  if (!user) {
    return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  }

  // Simulate API call
  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const response = await fetch("https://api.yourapp.com/profile/123");
  //     const data = await response.json();
  //     setProfile(data);
  //   };

  //   fetchProfile();
  // }, []);

  // if (!profile) return null;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <ProfileHeader title="Profile" />

      <ProfileAvatar
        image={user.avatar}
        name={user.name}
        email={user.email}
        status={user.status}
      />

      <ProfileStats
        stats={[
          { label: "Applied", value: user.applied, color: "#EEE0FF" },
          { label: "Reviewed", value: user.reviewed, color: "#FFE0F1" },
          { label: "Contacted", value: user.contacted, color: "#E0FFF3" },
        ]}
      />

      <ProfileCard>
        <ProfileMenuItem icon="person" label="Personal Information" />
        <ProfileMenuItem icon="briefcase" label="Work Experience" />
        <ProfileMenuItem icon="school" label="Education" />
        <ProfileMenuItem icon="trophy" label="Awards" />
        <ProfileMenuItem icon="log-out" label="Log out" />
      </ProfileCard>
    </ScrollView>
  );
};

export default Profile;
