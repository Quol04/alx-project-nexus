import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CompanyItem {
  icon: any;
  label: string;
  value: string;
}

interface JobCompanyInfoProps {
  items: CompanyItem[];
}

const JobCompanyInfo: React.FC<JobCompanyInfoProps> = ({ items }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About this Company</Text>

      {items.map((item, idx) => (
        <View key={idx} style={styles.row}>
          <View style={styles.icon}>{item.icon}</View>
          <Text style={styles.label}>{item.label}</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
};

export default JobCompanyInfo;

const styles = StyleSheet.create({
  container: { 
    paddingHorizontal: 20
 },
  title: { 
    fontSize: 16, 
    fontWeight: "700", 
    marginBottom: 15 
},
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
  },
  icon: { 
    width: 30
 },
  label: { 
    flex: 1, 
    fontSize: 14, 
    color: "#444" 
},
  value: { 
    fontSize: 14, 
    fontWeight: "600"
   },
});
