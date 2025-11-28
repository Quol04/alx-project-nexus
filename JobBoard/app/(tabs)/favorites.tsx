import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SavedJobCard from "@/components/favorite/SavedJobsCard";
import EmptySavedScreen from "@/components/favorite/EmptySavedScreen";
import { fetchSavedJobs, SavedJob } from "@/services/savedJobsApi";
import { Ionicons } from "@expo/vector-icons";

const SavedJobsScreen = ({ navigation }: any) => {
  const [jobs, setJobs] = useState<SavedJob[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadJobs = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    const newJobs = await fetchSavedJobs(page);

    if (newJobs.length === 0) {
      setHasMore(false);
    } else {
      setJobs((prev) => [...prev, ...newJobs]);
      setPage((prev) => prev + 1);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#9CA3AF" />
        <TextInput placeholder="Search" style={styles.input} />
      </View>

      {/* Job List */}
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={!loading ? <EmptySavedScreen /> : null}
        renderItem={({ item }) => (
          <SavedJobCard
            {...item}
            onPress={() =>
              navigation.navigate("JobDetails", { jobId: item.id })
            }
          />
        )}
        onEndReached={loadJobs}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="small" style={{ margin: 20 }} /> : null
        }
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    
    </SafeAreaView>
  );
};

export default SavedJobsScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#F9FAFB", 
    padding: 20 
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e2e3e6ff",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 15,
  },
  input: { 
    flex: 1, 
    marginLeft: 10, 
    fontSize: 14 },
});
