import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import ProfileHeader from "../userProfile/ProfileHeader";
import { useNavigation } from "@react-navigation/native";
import { getUserProfile, updateUserProfile, UserProfile } from "@/services/userService";

const EditProfileScreen = () => {
  const navigation: any = useNavigation();
  const [loading, setLoading] = useState(false);
   const [form, setForm] = useState<UserProfile | null>(null);
  

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [bio, setBio] = useState("");

  // PROFILE IMAGE
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Fetch profile from API
  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const data = await getUserProfile();
    setForm(data);
  };

  // ---- PICK IMAGE ----
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
      await uploadImage(result.assets[0].uri); // upload to backend
    }
  };

  // ---- UPLOAD IMAGE TO BACKEND ----
  const uploadImage = async (uri: string) => {
    const formData = new FormData();

    formData.append("file", {
      uri,
      type: "image/jpeg",
      name: "profile.jpg",
    } as any);

    try {
      const res = await fetch("https://api.yourapp.com/upload/profile/123", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      const data = await res.json();
      setProfileImage(data.url); // URL returned by backend
    } catch (err) {
      Alert.alert("Upload Error", "Could not upload profile image");
    }
  };

  // ---- SAVE PROFILE ----
  const handleSave = async () => {
    if (!form) return;
    await updateUserProfile(form);
    navigation.goBack();
  };

  if (!form) return null;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <ProfileHeader title="Edit Profile" onBack={() => navigation.goBack()} />

      <View style={styles.container}>
        {/* PROFILE IMAGE */}
        <TouchableOpacity onPress={pickImage} style={styles.imageWrapper}>
          <Image
            source={
              profileImage
                ? { uri: profileImage }
                : require("../../../assets/default-avatar.png")
            }
            style={styles.profileImage}
          />
          <View style={styles.changePhotoBadge}>
            <Text style={styles.changePhotoText}>Edit</Text>
          </View>
        </TouchableOpacity>

        {/* FORM FIELDS */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Status</Text>
        <TextInput style={styles.input} value={status} onChangeText={setStatus} />

        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          textAlignVertical="top"
          multiline
          value={bio}
          onChangeText={setBio}
        />

        {/* SAVE BUTTON */}
        <TouchableOpacity
          style={styles.saveBtn}
          onPress={handleSave}
          disabled={loading}
        >
          <Text style={styles.saveText}>
            {loading ? "Saving..." : "Save Changes"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    marginTop: 20,
  },
  imageWrapper: {
    alignSelf: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  changePhotoBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#4A63E7",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  changePhotoText: {
    color: "white",
    fontSize: 12,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 6,
    marginTop: 14,
  },
  input: {
    backgroundColor: "#F5F5F7",
    padding: 14,
    borderRadius: 10,
    fontSize: 15,
  },
  saveBtn: {
    backgroundColor: "#4A63E7",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
  },
  saveText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
