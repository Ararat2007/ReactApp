import React from 'react';
import { Text, View, Image, Button, StyleSheet, ScrollView, SafeAreaView, } from 'react-native';
import { useState } from 'react';

function Product({ name, desc, image, place }) {
  const [shouldShow, setShouldShow] = useState(true);
  const styles = StyleSheet.create({
    name: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 24,
      marginTop: 10,
      marginBottom: 15,
    },
    desc: {
      display: 'block',
    },
    container: {
      arginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    container1: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      margin: 10,
      backgroundColor: 'transparent',
      textDecoration: 'none',
    },
  })
  return (
    <View style={styles.container} >
      <Image style={{
        height: 150,
        width: 300, marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto'
      }} source={{ uri: image }} />
      <Text style={styles.name}>{name}</Text>
      <Text> Գտնվում է {place}ում</Text>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container1}>
          {!shouldShow ? (
            <Text>{desc}</Text>
          ) : null}
          <Button
            title="Hide/Show Description"
            onPress={() => setShouldShow(!shouldShow)}
          />
        </View>
      </SafeAreaView>


    </View>

  );
}
export default Product;

