import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Sights from './components/Sights/Sights'
import AboutUs from './components/AboutUs/AboutUs';
import SinglePage from './components/SinglePage/SinglePage'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//import ourapi from './components/Api/Api'
//import Product from './components/Product/Product'

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        title:'Home',
        tabBarIcon:()=>{
          return(
            <Entypo name="home" size={24} color="black" />
          );
        }
      }}/>
      <Tab.Screen name="Sights" component={Sights} options={{
        title:'Sights',
        tabBarIcon:()=>{
          return(
            <Feather name="map-pin" size={24} color="black" />
          );
        }
      }} />
       <Tab.Screen name="About Us" component={AboutUs} options={{
        title:'About Us',
        tabBarIcon:()=>{
          return(
            <Ionicons name="body" size={24} color="black" />
          );
        }
      }}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}




 
