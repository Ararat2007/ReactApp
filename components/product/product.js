import React from "react";
import {
  Text,
  View,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useState } from "react";

function product({ name, desc, image, place }) {
  const [shouldShow, setShouldShow] = useState(true);
  const styles = StyleSheet.create({
    name: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 24,
      marginTop: 10,
      marginBottom: 15,
    },
    container: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 10,
      marginBottom: "auto",
    },
    container1: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      margin: 10,
      backgroundColor: "transparent",
      textDecoration: "none",
    },
    place: {
      fontSize: 15,
      textAlign: "center",
    },
    desc: {
      textAlign: "center",
      marginBottom: 15,
    },
    all: {
      backgroundColor: "#E0E0E0",
    },
  });

  return (
    <View style={styles.all}>
      <View style={styles.container}>
        <Image
          style={{
            height: 150,
            width: 300,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "auto",
            marginBottom: "auto",
          }}
          source={{ uri: image }}
        />
        <Text style={styles.name}>
          {name}
        </Text>
        <Text style={styles.place}>
          {" "}Situated in {place}
        </Text>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container1}>
            {!shouldShow
              ? <Text style={styles.desc}>
                  {desc}
                </Text>
              : null}
            <Button
              title="Description"
              color="#47700A"
              onPress={() => setShouldShow(!shouldShow)}
            />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}
export default product;
