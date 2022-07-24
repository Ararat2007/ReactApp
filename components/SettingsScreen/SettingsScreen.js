import * as React from 'react';
import { Text, View } from 'react-native';
// import ourapi from '.Api/Api'
// import Product from '.product/product';



export default   function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sights!</Text>
    </View>
    // < View> 
    //   {
    //     ourapi.map((post) => {
    //       return (
    //         <Product name={post.name} desc={post.desc} place={post.place} image={post.image} key={post.id}/>
    //       )
    //     })
    //   }
  
    // </View>
    );
  }