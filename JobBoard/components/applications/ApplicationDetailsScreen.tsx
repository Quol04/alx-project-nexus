import { getApplicationDetails } from "@/services/applicationApi";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import { JobApplicationDetails } from "@/constants/applications";
import { JobApplicationDetails } from "@/constants/applicationData";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import TimelineItem from "./TimeLineItem";

const ApplicationDetailsScreen = ({ route }: any) => {
  const { id } = route.params;

  const [details, setDetails] = useState<JobApplicationDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation: any = useNavigation();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getApplicationDetails(id);
    setDetails(res);
    setLoading(false);
  };

  if (loading || !details) {
    return (
      <View style={styles.loaderWrapper}>
        <ActivityIndicator size="large" color="#6C63FF" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView >
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Image source={{ uri: details.logo }} style={styles.logo} />
              <View>
                <Text style={styles.role}>{details.role}</Text>
                <Text style={styles.company}>{details.company}</Text>
                <Text style={styles.meta}>
                  {details.salary} • {details.location}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.timelineBox}>
            <Text style={styles.title}>Track Application</Text>

            {details.steps.map((step, index) => (
              <TimelineItem
                key={step.id}
                title={step.title}
                date={step.date}
                time={step.time}
                completed={step.completed}
                isLast={index === details.steps.length - 1}
              />
            ))}
          </View>
          
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}
            accessibilityRole="button"
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default ApplicationDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#F7F9FC",
  },
  loaderWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#6C63FF",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 52,
    height: 52,
    borderRadius: 10,
    marginRight: 14,
  },
  role: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
  company: {
    color: "#eee",
    marginTop: 4,
  },
  meta: {
    color: "#f2f2f2",
    marginTop: 4,
    fontSize: 13,
  },
  timelineBox: {
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 20,
    borderRadius: 14,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 18,
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  closeButton: {
    backgroundColor: "#6C63FF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
