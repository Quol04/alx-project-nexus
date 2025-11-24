import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface StatItem {
  label: string;
  value: number;
  color: string;
}

interface Props {
  stats: StatItem[];
}

const ProfileStats: React.FC<Props> = ({ stats }) => {
  return (
    <View style={styles.row}>
      {stats.map((item, index) => (
        <View
          key={index}
          style={[styles.card, { backgroundColor: item.color }]}>
          <Text style={styles.value}>{item.value}</Text>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default ProfileStats;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  card: {
    width: 95,
    height: 70,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    fontSize: 22,
    fontWeight: "700",
  },
  label: {
    marginTop: 4,
    fontSize: 13,
    color: "gray",
  },
});
