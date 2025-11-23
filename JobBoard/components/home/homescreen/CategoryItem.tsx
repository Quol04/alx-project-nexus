import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

interface Props {
  name: string;
  icon: string;
  selected: boolean;
  onPress: () => void;
}

const CategoryItem: React.FC<Props> = ({ name, icon, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, selected && styles.selected]}>
      <View style={styles.iconCircle}>
        <Text>{icon === "clock" ? <Ionicons name="time" size={24} color="#7C66ff" /> : icon === "user" ? <Ionicons name="person" size={24} color="#7C66ff" /> : <Ionicons name="business" size={24} color="#7C66ff" />}</Text>
      </View>
      <Text style={[styles.text, selected && styles.textSelected]}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  card: {
    width: 85,
    padding: 12,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    marginRight: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  selected: {
    borderColor: "#2563EB",
    backgroundColor: "#EFF6FF",
  },
  iconCircle: {
    padding: 12,
    backgroundColor: "#F3F4F6",
    borderRadius: 50,
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  textSelected: {
    color: "#2563EB",
    // fontWeight: "700",
  },
});
