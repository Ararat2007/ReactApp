import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen/HomeScreen';
import SettingsScreen from './components/SettingsScreen/SettingsScreen'
import { Entypo } from '@expo/vector-icons';
import ourapi from './components/Api/Api'
import Product from './components/product/product'

const Tab = createBottomTabNavigator();

export default function App() {

  return (

       < View> 
      {
        ourapi.map((post) => {
          return (
            <Product name={post.name} desc={post.desc} place={post.place} image={post.image} key={post.id}/>
          )
        })
      }
  
    </View>
  );
}




 {/* <NavigationContainer>
      <Tab.Navigator>
        {/* <Entypo name="home" size={24} color="black" /> */}
        {/* <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator> */}
    {/* </NavigationContainer> */} 

