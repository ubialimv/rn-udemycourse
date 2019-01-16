import React, { Component } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { connect } from "react-redux";
import colors from "../../styles/colors";

import ButtonWitdhBackground from "../../components/UI/buttonWitdhBackground/buttonWitdhBackground";
import PlaceList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {

  // static navigatorStyle = {
  //   navBarButtonColor: colors.navBarButtonColorDefault
  //   // ,
  //   // navigationBarColor: "red",
  //   // navBarBackgroundColor: "#00BFA5"
  // };

  state = {
    placesLoaded: false,
    buttonAnimation: new Animated.Value(1),
    listAnimation: new Animated.Value(0)
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

    // if (event.type === "ScreenChangedEvent"){
    //   if(event.id === "willAppear" && this.state.placesLoaded ){
    //     this.loadPlacesHandler();
    //   }
    // }
  };

  itemSelectedHandler = key => {
    const selPlace = this.props.places.find( place => {
      return place.key === key;
    });

    this.props.navigator.push({
      screen: "udemy-course.PlaceDetailScreen",
      title: selPlace.name,
      passProps: {
        selectedPlace: selPlace
      }
    });
  };

  loadPlacesHandler = () => {
    Animated.timing(this.state.listAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  };

  searchPlacesHandler = () => {
    Animated.timing(this.state.buttonAnimation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      this.setState({
        placesLoaded: true
      });
      this.loadPlacesHandler();
    });
  };

  render() {

    let content = (
      <Animated.View
        style={{
          opacity: this.state.buttonAnimation,
          transform: [
            {
              scale: this.state.buttonAnimation.interpolate({
                inputRange: [0,1],
                outputRange: [12,1]
              })
            }
          ]
        }}  
      >
        <View>
          <ButtonWitdhBackground 
            color={colors.buttonColorDefault}
            onPress={this.searchPlacesHandler}
          >
            See Places!</ButtonWitdhBackground>
        </View>
      </Animated.View>
    );

    if (this.state.placesLoaded) {
      content = (
        <Animated.View 
          style={{
            opacity: this.state.listAnimation
          }}
        >
          <PlaceList 
              places={this.props.places} 
              onItemSelected={this.itemSelectedHandler}
            />
        </Animated.View>
      );
    }

    return (
      <View style={this.state.placesLoaded ? null : styles.buttonContainer}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

export default connect(mapStateToProps)(FindPlaceScreen);