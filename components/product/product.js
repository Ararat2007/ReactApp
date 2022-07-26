import React from 'react';
import { Text, View, Image, Button, StyleSheet } from 'react-native';
import SinglePage from '../SinglePage/SinglePage'

//import { text } from 'stream/consumers';
function Product({ name, desc, image, place }) {
  const styles = StyleSheet.create({
    name: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 24,
      marginTop: 10,
      marginBottom: 15,
    },
    // desc:{
    //   display: 'block',
    // },
    container:{
      arginLeft: 'auto',
       marginRight: 'auto',
        marginTop: 'auto', 
        marginBottom: 'auto',
    },
  })
  return (
    <View style={styles.container} > 
       <Image style={{
        height: 150,
        width: 300, marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto'
      }} source={{ uri: image }}

      />
      <Text style={styles.name}>{name}</Text>
       <Text tyle={styles.desc}>{desc}</Text>
      <Text> Գտնվում է {place}ի մարզւմ</Text> 

    

    </View>

  );
}
export default Product;


