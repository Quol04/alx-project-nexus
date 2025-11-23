import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F6",
    marginHorizontal: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  input: {
    fontSize: 14,
    color: "#374151",
  },
});
