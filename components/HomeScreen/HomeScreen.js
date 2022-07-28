import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

const image = {
  uri:
    "https://i.pinimg.com/564x/dc/68/08/dc6808b363c667a77f62798dcafc87f2.jpg",
};

export default function HomeScreen() {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
    },

    welcome: {
      fontSize: 45,
      marginTop: 30,
      marginBottom: 60,
      textAlign: "center",
      color: "white",
    },
    harcer: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 5,
      color: "white",
    },

    patasxan: {
      fontSize: 15,
      marginBottom: 15,
      textAlign: "center",
      color: "white",
    },

    image: {
      width: "100%",
      height: 800,
    },
    all: {
      backgroundColor: "rgba(100,107,70, 0.4)",
      width: "100%",
      height: "100%",
    },
    text5: {
      margin: 15,
    },
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.all}>
            <View style={styles.text5}>
              <Text style={styles.welcome}>Welcome!</Text>
              <Text style={styles.harcer}>What can you find here?</Text>
              <Text style={styles.patasxan}>
                We offer you the best well-known and incredible places in
                Armenia where you can visit and enjoy Armenian indescribable
                nature.
              </Text>
              <Text style={styles.harcer}>
                Do you give some information about places?
              </Text>
              <Text style={styles.patasxan}>
                Definitely yes. First of all we tell you about this or that
                place shortly, then where it is situated and how long it takes
                to reach that place from Yerevan.
              </Text>
              <Text style={styles.harcer}>
                {" "}Do you organise some mini trips?
              </Text>
              <Text style={styles.patasxan}>
                Yes, we do. We have severel services. For more you can go to
                --..
              </Text>
              <Text style={styles.harcer}>Why is this app for?</Text>
              <Text style={styles.patasxan}>
                In the latest years Armenia has became the most favourite
                country to visit for tourists. They like to spend here their
                vacation. There are only a few sources available to be aware of
                the most beautiful places here. So our company decided to help
                our lovely tourists. We want tourists to go back from our
                country with a great pleasure and with unforgettable memories.
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
