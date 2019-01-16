import React, { Component } from "react";
import {View, Image, StyleSheet} from "react-native";

import ButtonWitdhBackground from "../../components/UI/buttonWitdhBackground/buttonWitdhBackground";
import imagePlaceHolder from "../../assets/background.jpg";
import colors from "../../styles/colors";

class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={imagePlaceHolder} style={styles.previewImage}/>        
        </View>
        <ButtonWitdhBackground 
          color={colors.buttonColorDefault}
          onPress={() => alert('Pick Image!')}
        >
          Pick Image
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
    width: "80%",
    height: 150,
    margin: 5
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
})

export default PickImage;