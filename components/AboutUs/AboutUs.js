import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import female from "../../assets/female.jpeg";
import male1 from "../../assets/male1.jpg";
import male2 from "../../assets/male2.jpeg";
export default function AboutUs() {
  const styles1 = StyleSheet.create({
    title: {
      fontSize: 30,
    },
    textBlock: {
      flex: 1,
      alignItems: "center",
      margin: 20,
      marginTop: 35,
    },
    img: {
      height: 295,
      width: 150,
    },
    imgBlock: {},
    each: {
      flexDirection: "row",
      margin: 20,
    },
    textView: {
      flex: 1,
      marginLeft: 15,
    },
    textView2: {
      flex: 1,
    },
    imgBlock2: {
      marginLeft: 5,
    },
    boxes: {
      marginTop: 25,
    },
    all: {
      backgroundColor: "#E0E0E0",
    },
  });
  return (
    <ScrollView>
      <View style={styles1.all}>
        <View style={styles1.textBlock}>
          <Text style={styles1.title}>Do you want to know</Text>
          <Text style={styles1.title}>about creators?</Text>
        </View>
        <View style={styles1.boxes}>
          <View style={styles1.each}>
            <View style={styles1.imgBlock}>
              <Image source={male2} style={styles1.img} />
            </View>
            <View style={styles1.textView}>
              <Text>
                I'm Ararat MArkosyan, one of the creators of this app. I am 15
                years old. I am interested in programming and website
                development.I have been going to Tumo for 3 years. Tumo has
                become my second home and besides studying here I have made many
                friends․ Participating in this workshop gave me the opportunity
                to meet new people and gain many skills.
              </Text>
            </View>
          </View>
          <View style={styles1.each}>
            <View style={styles1.textView2}>
              <Text>
                I'm Meri Muradyan, one of the creators of this app. I'm
                interested in programming, graphic design. I'm attending TUMO,
                which gives me a very good experience, friends and so on. I am
                always energetic and eager to learn new skills. I am always
                highly enthused about my work and tasks ahead. Really enjoyed
                making such a good app with my team, which is a very needed app
                in my country for none-natives
              </Text>
            </View>

            <View style={styles1.imgBlock2}>
              <Image source={female} style={styles1.img} />
            </View>
          </View>
          <View style={styles1.each}>
            <View style={styles1.imgBlock}>
              <Image source={male1} style={styles1.img} />
            </View>
            <View style={styles1.textView}>
              <Text>
                I'm Meri Muradyan, one of the creators of this app. I'm
                interested in programming, graphic design. I'm attending TUMO,
                which gives me a very good experience, friends and so on. I am
                always energetic and eager to learn new skills. I am always
                highly enthused about my work and tasks ahead. Really enjoyed
                making such a good app with my team, which is a very needed app
                in my country for none-natives
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
