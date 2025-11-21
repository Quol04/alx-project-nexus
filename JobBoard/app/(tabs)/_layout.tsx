import { Tabs } from "expo-router";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";


const HomeRootLayout= () => {
  return (
    <Tabs screenOptions={{
       tabBarActiveTintColor:"#2869FE",
       headerShown: false,
    }}> 
      <Tabs.Screen name="home" 
      options={{ 
        title: "Home",
        headerShown: false,
        tabBarIcon:({color})=>
          <Ionicons name="home" size={24} color={color} />
         }} />
      <Tabs.Screen name="applications" options={{
        title: "Applications",
        headerShown: false,
        tabBarIcon : ({color}) =>
          <Ionicons name="briefcase" size={24} color={color} />
      }} />
      <Tabs.Screen name="favorites" options={{ 
        title: "Favorites",
        headerShown: false,
        tabBarIcon : ({color}) =>
          <Ionicons name="heart" size={24} color={color} />
      }} />
      <Tabs.Screen name="profile" options={{ 
        title: "Profile",
        headerShown: false,
        tabBarIcon:({color})=>
          <Ionicons name="person" size={24} color={color} />
       }} />
    </Tabs>
  
  );
}

export default HomeRootLayout;