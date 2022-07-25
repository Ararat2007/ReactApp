import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import SinglePage from '../SinglePage/SinglePage'

//import { text } from 'stream/consumers';
function Product({ name, desc, image, place }) {

  return (
    <View >
      <Text>{name}</Text>
      <Text>{desc}</Text>
      <Text>{place}</Text>

      <Image  style={{
          height: 100,
          width: 200
        }} source={image} 
         onClick={() =>
          {
            console.log('asd');
            
            navigation.navigate(SinglePage)
          }
        }/>
        
    </View>
  );
}
export default Product;




