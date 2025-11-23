import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";


interface Props {
  company: string;
  role: string;
  salary: string;
  tags: string[];
  image: string;
  onApply: () => void;
}

const SuggestedJobCard: React.FC<Props> = ({
  company,
  role,
  salary,
  tags,
  image,
  onApply,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: image }} style={styles.logo} />
        <View>
          <Text style={styles.company}>{company}</Text>
          <Text style={styles.role}>{role}</Text>
        </View>
        {/* <Text style={styles.applyIcon}></Text> */}
        <Ionicons style={styles.applyIcon} name="bookmark" size={20} color="#fff" />
      </View>

      <View style={styles.tagsRow}>
        {tags.map((t, i) => (
          <View key={i} style={styles.tag}>
            <Text style={styles.tagText}>{t}</Text>
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.salary}>{salary}</Text>
        <TouchableOpacity style={styles.applyBtn} onPress={onApply}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuggestedJobCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#8B5CF6",
    padding: 20,
    borderRadius: 20,
    marginRight: 16,
    width: 260,
  },
  row: { 
    flexDirection: "row", 
    alignItems: "center",
    padding:10
 },
  logo: { 
    width: 40, 
    height: 40, 
    borderRadius: 8, 
    marginRight: 12 
  },
  company: { 
    color: "#EDE9FE", 
    fontSize: 12
 },
  role: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "700"
 },
  applyIcon: {
     marginLeft: "auto", 
     fontSize: 20, 
     color: "#fff", 
     borderRadius: 18,
     backgroundColor: "#A78BFA",
     padding: 6,
     
 },
  tagsRow: { 
    flexDirection: "row", 
    marginTop: 8,
 },
  tag: {
    backgroundColor: "#A78BFA",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
  },
  tagText: { 
    color: "#fff", 
    fontSize: 10 
},
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
  },
  salary: { 
    color: "#fff", 
    fontWeight: "700" 
},
  applyBtn: {
    backgroundColor: "#6D28D9",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  applyText: { 
    color: "#fff", 
    fontWeight: "700", 
    fontSize: 12 
},
});
