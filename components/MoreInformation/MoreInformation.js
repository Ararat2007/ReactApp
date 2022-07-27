import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Ourapi from '../Api/Api';
import ShowImage from '../MoreInformation/ShowImage'
let deviceHeight = Dimensions.get('window').height
let deviceWidth = Dimensions.get('window').width
const MoreInformation = (props) => {
  return (
    <ScrollView>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >{
        Ourapi.map((post) => (
          <TouchableOpacity key={post.id} onPress={
            () => 
              props.navigation.navigate('ShowImage')
              
            
          }   >
            <Image source={post.image} style={{ height: deviceHeight / 3, width: deviceWidth / 3 - 6, borderRadius: 10, margin: 2 }} />
          </TouchableOpacity>
        ))
      }
      </View>
    </ScrollView>
  )
}
export default MoreInformation