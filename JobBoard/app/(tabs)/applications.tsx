import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import ApplicationCard from "@/components/applications/ApplicationsCard";
import {
  fetchApplications,
  JobApplicationDetails,
} from "@/constants/applicationData";

import EmptyApplications from "@/components/applications/EmptyApplication";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";


const ApplicationsScreen = () => {
  const navigation: any = useNavigation();
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState<JobApplicationDetails[]>([]);


  useEffect(() => {
    const load = async () => {
      const data = await fetchApplications();
      setApplications(data);
      setLoading(false);
    };

    load();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#3657F7" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Your Applications</Text>

      {applications.length === 0 ? (
        <EmptyApplications />
      ) : (
        applications.map((item) => (
          <ApplicationCard
            key={item.id}
            item={item}
            onPress={() => 

              navigation.navigate("ApplicationDetails", { item })
            }
          />
        ))
      )}
    </ScrollView>
    </SafeAreaView>
  );
};

export default ApplicationsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F7F7F9",
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
    marginTop: 12,
  },
});
