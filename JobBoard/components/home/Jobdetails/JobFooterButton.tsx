import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  onPress: () => void;
}

const JobFooterButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>Apply This Job</Text>
    </TouchableOpacity>
  );
};

export default JobFooterButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#0D6EFD",
    margin: 20,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  text: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
