import React from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  company: string;
  location: string;
  salary: string;
  tags: string[];
  logo: any;
  onPress: () => void;
  onTap: () => void;
};

const SavedJobCard = ({
  title, company, location, salary, tags, logo, onPress, onTap
}: Props) => {

  return (
    <View style={styles.card}>
    
      <View style={styles.row}>
        <Image source={logo} style={styles.logo} />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.company}>{company}</Text>
        </View>
        <TouchableOpacity style={styles.bookmark} onPress={onTap}>
           <Ionicons name="bookmark" size={22} color="#3B82F6" />
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />
    
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.salary}>{salary}</Text>

        <View style={styles.tagsRow}>
            {tags.map((tag) => (
            <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
            </View>
            ))}
        </View>
      </TouchableOpacity>
    
    </View>
  );
};

export default SavedJobCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  row: { 
    flexDirection: "row", 
    alignItems: "center" 
},
  logo: {
    width: 55,
    height: 55,
    borderRadius: 12,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  company: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 3,
  },
  bookmark: {
    // padding: 8,

    backgroundColor: "#f0eff4ff",
    color: "#7C66FF",
    // borderRadius: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 12,
  },
  location: {
    fontSize: 14,
    color: "#6b7280",
  },
  salary: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: "600",
    color: "#3B82F6",
  },
  tagsRow: {
    flexDirection: "row",
    marginTop: 12,
    flexWrap: "wrap",
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 6,
  },
  tagText: {
     fontSize: 12, 
     color: "#4B5563"
},
});
