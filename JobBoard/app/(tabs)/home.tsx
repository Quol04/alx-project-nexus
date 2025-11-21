import React from "react";
import { Text, View , StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/home/Header";
import { TYPOGRAPHY,SPACING } from "@/styles/themes";


const Home = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <Header name="Smith"/>
      <View >
          <Text style={styles.browseText}>Browse By Category</Text>
      </View>

        
     </SafeAreaView>
  );
}   

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: SPACING.small,
    marginHorizontal: SPACING.large,
  },
  browseText: {
    fontSize: TYPOGRAPHY.sizes.title,
    // fontWeight: TYPOGRAPHY.weights.regular,
    color: "#000000",
    marginBottom: SPACING.medium,
    fontWeight: "600",
  },
});