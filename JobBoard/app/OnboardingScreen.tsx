import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import OnboardingSlide from "@/components/common/OnboardingSlide";
import { onboardingData}  from "@/constants/onboardingData";

const { width } = Dimensions.get("window");

const OnboardingScreen = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

    const router = useRouter();

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const goNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const skipToEnd = () => {
    flatListRef.current?.scrollToIndex({ index: onboardingData.length - 1 });
  };

  const isLastScreen = currentIndex === onboardingData.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      {/* Slides */}
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <OnboardingSlide
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
          />
        )}
      />

      {/* Pagination */}
      <View style={styles.pagination}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>

      {/* Buttons */}
      {isLastScreen ? (
        <TouchableOpacity style={styles.getStartedBtn} onPress={() => {
            // console.log("Get Started Pressed");
            router.replace("/(auth)/login");
        }}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity style={styles.nextBtn} onPress={goNext}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.skipBtn} onPress={skipToEnd}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 40,
    marginTop: 20,
  },

  pagination: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 25,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 6,
    backgroundColor: "#D7D7D7",
    marginHorizontal: 4,
  },

  activeDot: {
    width: 18,
    backgroundColor: "#4D4DFF",
  },

  nextBtn: {
    backgroundColor: "#1F7CFF",
    paddingVertical: 15,
    borderRadius: 12,
    width: "85%",
    alignSelf: "center",
    marginBottom: 12,
    alignItems: "center",
  },

  nextText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  skipBtn: {
    backgroundColor: "#E9F0FF",
    paddingVertical: 15,
    borderRadius: 12,
    width: "85%",
    alignSelf: "center",
    alignItems: "center",
  },

  skipText: {
    color: "#1F7CFF",
    fontSize: 16,
    fontWeight: "600",
  },

  getStartedBtn: {
    backgroundColor: "#1F7CFF",
    paddingVertical: 16,
    borderRadius: 15,
    width: "85%",
    alignSelf: "center",
    alignItems: "center",
  },

  getStartedText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
});
