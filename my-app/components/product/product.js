import React from 'react';
import { Text, View,Image } from 'react-native';
function  Product({name, desc, image, place}) {
    
   return (
     <View >
         <Text>{name}</Text>
         <Text>{desc}</Text>
         <Text>{place}</Text>
         <Image source={image} />
     </View>
   );
}
export default Product