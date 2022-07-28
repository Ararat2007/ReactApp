import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Sights from "./components/Sights/Sights";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery";
import ShowImage from "./components/ShowImage/ShowImage";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
const Tab = createBottomTabNavigator();
const GalleryStack = createStackNavigator();
function GalleryStackScreen() {
  return (
    <GalleryStack.Navigator>
      <GalleryStack.Screen name="Gallery" component={Gallery} />
      <GalleryStack.Screen
        name="ShowImage"
        component={ShowImage}
        options={{
          title: "Back",
        }}
      />
    </GalleryStack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            tabBarActiveTintColor: "#47700A",
            tabBarInactiveTintColor: "black",
            tabBarIcon: () => {
              return <AntDesign name="home" size={24} color="#47700A" />;
            },
          }}
        />
        <Tab.Screen
          name="Sights"
          component={Sights}
          options={{
            title: "Sights",
            tabBarActiveTintColor: "#47700A",
            tabBarInactiveTintColor: "black",
            tabBarIcon: () => {
              return <Feather name="map-pin" size={24} color="#47700A" />;
            },
          }}
        />
        <Tab.Screen
          name="Gallery."
          component={GalleryStackScreen}
          options={{
            headerShown: false,
            title: "Gallery",
            tabBarActiveTintColor: "#47700A",
            tabBarInactiveTintColor: "black",
            tabBarIcon: () => {
              return <FontAwesome name="photo" size={24} color="#47700A" />;
            },
          }}
          screenOptions={{
            tabBarActiveTintColor: "#47700A",
            tabBarInactiveTintColor: "black",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="About Us"
          component={AboutUs}
          options={{
            title: "About Us",
            tabBarActiveTintColor: "#47700A",
            tabBarInactiveTintColor: "black",
            tabBarIcon: () => {
              return <Ionicons name="body-outline" size={24} color="#47700A" />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
