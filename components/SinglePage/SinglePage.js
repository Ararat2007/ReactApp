import * as React from 'react';
import { Text, View, Button ,ScrollView  } from 'react-native';
import Ourapi from '../Api/Api';
import Product from '../Product/Product';


export default function SinglePage() {
  return (
   
 <ScrollView>
    < View>
    
      {
        Ourapi.map((post) => {
          return (
            <Product name={post.name} desc={post.desc}  key={post.id} />
          )
        })
      }
    </View>
    </ScrollView>
  );
}