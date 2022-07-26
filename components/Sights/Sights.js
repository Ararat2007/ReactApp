import * as React from 'react';
import {
  Text, View, Button, ScrollView, SafeAreaView,
  StyleSheet,
  Image
} from 'react-native';
import Ourapi from '../Api/Api';
import Product from '../Product/Product';


export default function Sights() {
  return (
    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>Sights!</Text> 
    // </View>
 <ScrollView>
    < View>

      {
        Ourapi.map((post) => {
          return (

            <Product name={post.name} desc={post.desc} place={post.place} image={post.image} key={post.id} />

          )
        })
      }
    </View>
    </ScrollView>
  );
}


