import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import{ Ionicons, MaterialIcons, Feather} from "@expo/vector-icons";

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888888" />
        <TextInput
          placeholder="Search"
          value={value}
          onChangeText={onChange}
          style={styles.input}
          placeholderTextColor="#888888"
      
        />
      </View>
      {/* <Ionicons name="filter" size={20} color="#888888" /> */}
      <MaterialIcons name="tune" size={20} color="#3211e9ff" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#eeeff1ff",
    marginHorizontal: 16,
    marginVertical: 18,
    paddingHorizontal: 12,
    borderRadius: 16,
    paddingVertical: 12,
    // marginBottom: 16,
    borderWidth: 1,
    borderColor: "#cbc9c9ff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  input: {
    fontSize: 14,
    // color: "#020c19ff",
    // height: 20,
  },
});
