import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
//import Ourapi from '../Api/Api';
import Images from '../Image/Image' 
//import ShowImage from '../MoreInformation/ShowImage'
let deviceHeight = Dimensions.get('window').height
let deviceWidth = Dimensions.get('window').width
const MoreInformation = (props) => {
  return (
    <ScrollView>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' , backgroundColor:'#E0E0E0'}} >{
        Images.map((images , index) => (
          <TouchableOpacity key={index} onPress={
            () => props.navigation.navigate('ShowImage', {url: images.url})  
          }   >
            <Image source={{ uri: images.url }} style={{ height: deviceHeight / 3, width: deviceWidth / 3 - 6, borderRadius: 10, margin: 2 }} />
          </TouchableOpacity>
        ))
      }
      
      </View>
    </ScrollView>
  )
}
export default MoreInformation