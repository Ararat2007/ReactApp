import { readFileSync } from "fs";

import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions ,ImageBackground} from 'react-native';



let deviceHeight = Dimensions.get('window').height
let deviceWidth = Dimensions.get('window').width 

const ShowImage = (props )=>{
    return(
        <View>
        <ImageBackground  source={props.route.params.image} style={{height:deviceHeight, width:deviceWidth}}/>
        </View>
    )
}
export default ShowImage