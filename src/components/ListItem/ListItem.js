import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image } from "react-native";

const listItem = props => (
  <TouchableHighlight 
    onPress={props.onItemPressed} 
    underlayColor="white"
  >
    <View style={styles.listItem}>
      <Image 
        source={props.placeImage}
        style={styles.placeImage}
        resizeMode="cover"
      />
      <Text style={styles.label}>{props.placeName}</Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  },
  label: {
    color: "black",
    fontSize: 15
  }
});

export default listItem;