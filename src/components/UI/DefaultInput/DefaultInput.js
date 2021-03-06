import React from "react";
import { TextInput, StyleSheet } from "react-native";

const defaultInput = props => (
  <TextInput 
    underlineColorAndroid="transparent"
    {...props}
    style={[styles.input, props.style]}
  />
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    // borderWidth: 2,
    // borderColor: "#eee",
    backgroundColor: "white",
    padding: 5,
    marginTop: 5,
    marginBottom: 5
  }
});

export default defaultInput;