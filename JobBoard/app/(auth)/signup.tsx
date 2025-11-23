import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/common/InputField";
import PrimaryButton from "@/components/common/PrimaryButton";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";

const SigninScreen: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [secure, setSecure] = useState<boolean>(true);
  const [confirmSecure, setConfirmSecure] = useState<boolean>(true);
  const [remember, setRemember] = useState<boolean>(false);

    const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 , width: "100%"}}
            >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
          <View style={{ flex: 1 }}>
            {/* Back Button */}
            <TouchableOpacity style={styles.backBtn}>
              <Ionicons name="arrow-back-outline" size={24} color="#000" />
            </TouchableOpacity>

            <Text style={styles.title}>Sign Up</Text>

            {/* Logo Row */}
            <View style={styles.logoRow}>
              <Image
                source={require("@/assets/images/Image.png")}
                style={styles.logo}
              />
              <Text style={styles.logoText}>Jobko</Text>
            </View>

            <Text style={styles.subtitle}>
              Give credential to sign in your account
            </Text>
             {/* Name */}
            <InputField
              label="Full Name"
              placeholder="Type your full name"
              icon="person-outline"
              value={name}
              onChangeText={setName}
            />

            {/* Email */}
            <InputField
              label="Email"
              placeholder="Type your email"
              icon="mail-outline"
              value={email}
              onChangeText={setEmail}
            />

            {/* Password */}
            <InputField
              label="Password"
              placeholder="Type your password"
              icon="lock-closed-outline"
              value={password}
              secureTextEntry={secure}
              onChangeText={setPassword}
              toggleSecure={() => setSecure((prev) => !prev)}
            />
               {/* Confirm Password */}
            <InputField
              label="Confirm Password"
              placeholder="Type your password again"
              icon="lock-closed-outline"
              value={confirmPassword}
              secureTextEntry={confirmSecure}
              onChangeText={setConfirmPassword}
              toggleSecure={() => setConfirmSecure((prev) => !prev)}
            />

            {/* Remember Me + Forgot Password */}
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.rememberRow}
                onPress={() => setRemember((prev) => !prev)}
              >
                {/* <Checkbox value={remember} onValueChange={setRemember} /> */}
                <Text style={styles.rememberText}>Remember Me</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            {/* Sign In Button */}
            <PrimaryButton title="Sign Up" onPress={() => {}} />

            {/* Divider */}
            <View style={styles.dividerRow}>
              <View style={styles.divider} />
              <Text style={styles.orText}>or continue with</Text>
              <View style={styles.divider} />
            </View>

            {/* Social Buttons */}
            <View style={styles.socialRow}>
              <TouchableOpacity style={styles.socialBtn}>
                <FontAwesome name="facebook" size={24} color="#1877F2" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialBtn}>
                <AntDesign name="google" size={24} color="#DB4437" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.socialBtn}>
                <AntDesign name="apple" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            {/* Sign Up Row */}
            <Text style={styles.signupText}>
              Don’t have an account?{" "}
              <Text style={styles.signupLink} onPress={()=> router.push("/(auth)/login")}>Sign In</Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
</SafeAreaView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  
  },
  backBtn: {
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    alignSelf: "center",
    marginBottom: 20,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "700",
  },
  subtitle: {
    color: "#7B7B7B",
    marginTop: 8,
    marginBottom: 25,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginTop: -10,
    marginBottom: 15,
  },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberText: {
    marginLeft: 6,
    color: "#7B7B7B",
  },
  forgot: {
    color: "#1F7CFF",
    fontWeight: "500",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#7B7B7B",
  },
  orText: {
    marginHorizontal: 10,
    color: "#7B7B7B",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 25,
  },
  socialBtn: {
    width: 55,
    height: 55,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  signupText: {
    textAlign: "center",
    color: "#7B7B7B",
  },
  signupLink: {
    color: "#1F7CFF",
    fontWeight: "600",
  },
});
