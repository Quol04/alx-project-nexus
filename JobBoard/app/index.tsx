import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
// import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Index() {
  // const router = useRouter();
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const { width } = Dimensions.get("window");

  return (
    <SafeAreaView className="flex-1">
      <View >
        <Text className="text-red-300 text-xl font-bold">
          Welcome to Nativewind!
        </Text>
        <Link href="/(tabs)/home">
          <Text className="text-blue-500 text-lg mt-4">Go to Home Tab</Text>
        </Link>
      </View>
      
    </SafeAreaView>
  );
}



