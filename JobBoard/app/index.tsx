import React, { useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import  {useRouter}  from "expo-router";

export default function Index() {

  const router = useRouter();
  useEffect(() => {
    // Simulate a loading process or check for authentication status
    const timer = setTimeout(() => {
      // Navigate to the Onboarding screen after 2 seconds
      router.replace("/OnboardingScreen");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>Jobko</Text>
      </View>
      <View>
        <ActivityIndicator size="large" color="#fff" style={{ marginBottom: 50 }} />
      {/* <Text style={{color: "#fff", textAlign: "center", marginBottom: 20}}>Loading...</Text> */}

      </View>
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7C66FF",
    },
  logo: {
    justifyContent: "center",
    alignSelf: "center",
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",

  },
  logoText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",

  },
});
