import React from "react";
import {
  Image,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Images from "../ImagesApi/ImagesApi";
let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;
const Gallery = props => {
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: "#E0E0E0",
        }}
      >
        {Images.map((img, index) =>
          <TouchableOpacity
            key={index}
            onPress={() =>
              props.navigation.navigate("ShowImage", { url: img.url })}
          >
            <Image
              source={{ uri: img.url }}
              style={{
                height: deviceHeight / 3,
                width: deviceWidth / 3 - 6,
                borderRadius: 10,
                margin: 2,
              }}
            />
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};
export default Gallery;
