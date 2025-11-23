import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  title: string;
  text?: string;
  onPress?: () => void;
}

const SectionHeader: React.FC<Props> = ({ title, onPress, text }) => (
  <View style={styles.row}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity>
        <Text style={styles.seeAll}>{text}</Text>
    </TouchableOpacity>
    {/* {onPress && <TouchableOpacity onPress={onPress}>
        <Text style={styles.seeAll}>See All</Text></TouchableOpacity>} */}
  </View>
);

export default SectionHeader;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  title: { 
    fontWeight: "700", 
    fontSize: 16, 
    color: "#111827" },
  seeAll: { 
    color: "#2563EB", 
    fontWeight: "600" },
});
