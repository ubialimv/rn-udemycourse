import React from "react";
import { 
  TouchableOpacity,
  TouchableNativeFeedback,
  Text, 
  View, 
  StyleSheet,
  Platform
} from "react-native";

const buttonWitdhBackground = props => {

  const content = (
    <View style={[styles.button, {backgroundColor: props.color}]}>
    {/* <View style={[styles.button, props.style]}> */}
      <Text style={styles.textButton}>{props.children.toUpperCase()}</Text>
    </View>
  );

  if(Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    );
  }
  
  return (
    <TouchableOpacity onPress={props.onPress}>
    {content}
    </TouchableOpacity>
  );
  
};

const styles = StyleSheet.create({
  button:{
    padding: 10,
    margin: 5,
    borderRadius: 3
  },
  textButton:{
    fontWeight: "bold",
    color: "white"
  }
})
export default buttonWitdhBackground;