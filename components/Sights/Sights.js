import * as React from "react";
import { View, ScrollView } from "react-native";
import Ourapi from "../Api/Api";
import Product from "../Product/Product";

export default function Sights() {
  return (
    <ScrollView>
      <View>
        {Ourapi.map(post => {
          return (
            <Product
              name={post.name}
              desc={post.desc}
              place={post.place}
              image={post.image}
              key={post.id}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
