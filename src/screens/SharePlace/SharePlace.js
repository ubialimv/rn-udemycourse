import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";

import { addPlace } from "../../store/actions/actionIndex";
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import ButtonWitdhBackground from "../../components/UI/buttonWitdhBackground/buttonWitdhBackground";
// import MainText from "../../components/UI/MainText/MainText";
// import HeadingText from  "../../components/UI/HeadingText/HeadingText";
import PickImage from "../../components/PickImage/PickImage";
import PickLocation from "../../components/PickLocation/PickLocation";
import colors from "../../styles/colors";

class SharePlaceScreen extends Component {

  // static navigatorStyle = {
  //   navBarButtonColor: colors.navBarButtonColorDefault
  // };

  state = {
    placeName: ""
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  };

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  };

  placeAddedHandler = () => {
    if(this.state.placeName.trim() !== "") {
      this.props.onAddPlace(this.state.placeName);
    }    
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <MainText>
            <HeadingText>Share a Place with us!</HeadingText>
          </MainText> */}
          <PickImage />
          <PickLocation />
          <View style={styles.placeInputContainer}>
            <PlaceInput 
              placeName={this.state.placeName}
              onChangeText={this.placeNameChangedHandler}
            />
          </View>
          <ButtonWitdhBackground 
            color={colors.buttonColorDefault}
            onPress={this.placeAddedHandler}
          >
            Share the Place!
          </ButtonWitdhBackground>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeInputContainer: {
    width: "90%"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  }
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);