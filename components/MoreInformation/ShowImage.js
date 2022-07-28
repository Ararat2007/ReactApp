import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Ourapi from '../Api/Api';


let deviceHeight = Dimensions.get('window').height
let deviceWidth = Dimensions.get('window').width

const ShowImage = (props) => {
    return (
     
            <View>
                <ImageBackground source={ { uri: props.route.params.url} } style={{ height: deviceHeight, width: deviceWidth }} />
            </View>
     
    )
}
//props.route.params.image
export default ShowImage