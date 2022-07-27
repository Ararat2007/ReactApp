import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Sights from './components/Sights/Sights'
import AboutUs from './components/AboutUs/AboutUs';
import ShowImage from './components/MoreInformation/ShowImage' 
import MoreInformation from './components/MoreInformation/MoreInformation';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
const Tab = createBottomTabNavigator();
const GalleryStack = createStackNavigator();
function GalleryStackScreen() {
 return (
   <GalleryStack.Navigator>
    <GalleryStack.Screen name="Gallery"  component={MoreInformation}   />
    <GalleryStack.Screen name="ShowImage" component={ShowImage} options={{
          title: 'Back',
        }} />
   </GalleryStack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          title: 'Home',
          tabBarIcon: () => {
            return (
              <AntDesign name="home" size={24} color="black" />
            );
          }
        }} />
        <Tab.Screen name="Sights" component={Sights} options={{
          title: 'Sights',
          tabBarIcon: () => {
            return (
              <Feather name="map-pin" size={24} color="black" />
            );
          }
          
        }} />
        <Tab.Screen name="Gallery." component={GalleryStackScreen} options={{
          headerShown: false,
          title: 'Gallery',
          tabBarIcon: () => {
            return (
              <FontAwesome name="photo" size={24} color="black" />
            );
          }
        }} screenOptions={{
          headerShown: false
        }}/>
        <Tab.Screen name="About Us" component={AboutUs} options={{
          title: 'About Us',
          tabBarIcon: () => {
            return (
              <Ionicons name="body-outline" size={24} color="black" />
            );
          }
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}






