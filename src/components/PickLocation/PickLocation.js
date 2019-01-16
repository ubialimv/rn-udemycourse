import React, { Component } from "react";
import {View, StyleSheet, Text} from "react-native";

import ButtonWitdhBackground from "../../components/UI/buttonWitdhBackground/buttonWitdhBackground";
import colors from "../../styles/colors";

class PickLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Map</Text>          
        </View>
        <ButtonWitdhBackground 
          color={colors.buttonColorDefault}
          onPress={() => alert('Pick Location!')}
        >
          Locate Me
        </ButtonWitdhBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeholder:{
    // borderWidth: 1,
    // borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150,
    margin: 5
  }
})

export default PickLocation;