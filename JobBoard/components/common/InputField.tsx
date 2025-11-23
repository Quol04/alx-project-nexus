import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: keyof typeof Ionicons.glyphMap;
  secureTextEntry?: boolean;
  toggleSecure?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  icon,
  secureTextEntry,
  toggleSecure,
  ...inputProps
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputWrapper}>
        {icon && <Ionicons name={icon} size={20} color="#A8A8A8" />}

        <TextInput
          style={styles.input}
          placeholderTextColor="#A8A8A8"
          secureTextEntry={secureTextEntry}
          {...inputProps}
        />

        {toggleSecure && (
          <TouchableOpacity onPress={toggleSecure}>
            <Ionicons
              name={secureTextEntry ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#A8A8A8"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    // marginTop: 8,

  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 6,
    color: "#1F1F1F",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 10,
    height: 52,
    borderColor: "#E0E0E0",
    backgroundColor: "#FAFAFA",
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: "#000",
  },
});
