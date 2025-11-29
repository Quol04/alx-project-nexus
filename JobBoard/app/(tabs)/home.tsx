import CategoryItem from "@/components/home/homescreen/CategoryItem";
import Header from "@/components/home/homescreen/Header";
import RecentJobCard from "@/components/home/homescreen/RecentJobCard";
import SearchBar from "@/components/home/homescreen/SearchBar";
import SectionHeader from "@/components/home/homescreen/SectionHeader";
import SuggestedJobCard from "@/components/home/homescreen/SuggestedJobCard";
import JobDetailsSlot from "@/components/home/Jobdetails/JobDetailsSlot";
import { categories, recentJobs, suggestedJobs } from "@/constants/homeData";
import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import CallToAction from "@/components/home/homescreen/CallToAction";


const HomeScreen: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [showJobSlot, setShowJobSlot] = useState(false);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header name="Smith" />

          <SearchBar value={search} onChange={setSearch} />
          <CallToAction onPress={() => console.log("Learn More pressed")} />

          {/* CATEGORIES */}
          <SectionHeader title="Browse By Category" />

          <FlatList
            data={categories}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingLeft: 16 }}
            renderItem={({ item }) => (
              <CategoryItem
                name={item.name}
                icon={item.icon}
                selected={selectedCategory === item.id}
                onPress={() => setSelectedCategory(item.id)}
              />
            )}
            showsHorizontalScrollIndicator={false}
          />

          {/* SUGGESTED JOBS */}
          <SectionHeader title="Suggested Jobs" text="See All" />

          <FlatList
            horizontal
            data={suggestedJobs}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <SuggestedJobCard
                company={item.company}
                role={item.role}
                salary={item.salary}
                tags={item.tags}
                image={item.image}
                onApply={() => setShowJobSlot(true)}
              />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 16 }}
          />
          {showJobSlot && <JobDetailsSlot visible={showJobSlot} onClose={() => setShowJobSlot(false)} />}
      

          {/* RECENT JOBS */}
          <SectionHeader title="Recent Jobs" text="See All" />

          <View style={{ marginBottom: 40 }}>
            {recentJobs.map((job) => (
              <RecentJobCard
                key={job.id}
                role={job.role}
                company={job.company}
                location={job.location}
                image={job.image}
              />
            ))}
          </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles= StyleSheet.create({
  container: {
    flex: 1,
    // marginVertical: SPACING.small,
    // marginHorizontal: SPACING.small,
  },
});