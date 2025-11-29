import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  date?: string;
  time?: string;
  completed: boolean;
  isLast: boolean;
}

const TimelineItem: React.FC<Props> = ({ title, date, time, completed, isLast }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <View style={[styles.circle, completed ? styles.completedCircle : styles.pendingCircle]} />
        {/* {!isLast && <View style={styles.line} />} */}
        <View style={styles.line} />
        
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>

        {date ? (
          <Text style={styles.date}>
            {date} • {time}
          </Text>
        ) : (
          <Text style={styles.pending}>Not yet</Text>
        )}
      </View>
    </View>
    );
};

export default TimelineItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 24,
  },
  leftColumn: {
    alignItems: "center",
    width: 40,

  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
  },
  completedCircle: {
    backgroundColor: "#2ecc71",
    borderColor: "#2ecc71",
  },
  pendingCircle: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
  },
  line: {
    width: 2,
    // height: "100%",
    flex: 1,
    height: 30,
    backgroundColor: "#2ecc71",
    marginTop: 4,
  },
  content: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  date: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },
  pending: {
    fontSize: 14,
    marginTop: 4,
    color: "#b4b4b4",
    fontStyle: "italic",
  },
});
