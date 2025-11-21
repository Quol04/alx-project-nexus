import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1">   
        <View className="flex-1 justify-center items-center">
            <Text className="text-blue-500 text-2xl font-semibold">Profile</Text>
        </View>
    </SafeAreaView>
  );
}   

export default Profile;