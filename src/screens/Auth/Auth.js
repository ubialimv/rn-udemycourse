import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions
} from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import backGroundImage from "../../assets/background.jpg";
import ButtonWitdhBackground from "../../components/UI/buttonWitdhBackground/buttonWitdhBackground";
import colors from "../../styles/colors";
// import stylesDefault from "../../styles/styles";
import validate from "../../utility/utility";

class AuthScreen extends Component {

  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        }
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        }
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: 'password'
        }
      }
    }
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateRespStyles)
  };

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateRespStyles);
  };

  updateRespStyles = (dmis) => {
    this.setState({
      viewMode: dmis.window.height > 500 ? "portrait" : "landscape"
    });
  };

  loginHandler = () => {
    startMainTabs();
  };

  updateInputState = (key, value) => {
    let connectedValue = {};

    if (this.state.controls[key].validationRules.equalTo) {

      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;

      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }

    if (key === "password") {

      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }

    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid: 
              key === "password"
                ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls.confirmPassword.validationRules,
                    connectedValue
                  )
                : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(value, prevState.controls[key].validationRules, connectedValue)
          }
        }
      };
    });
  };

  render() {
    let headingText = null;

    if (this.state.viewMode /*=== "portrait"*/) {
      headingText = (
        <MainText>
          <HeadingText>Awesome Places</HeadingText>
        </MainText>
      );
    }

    return (
      <ImageBackground
        source={backGroundImage}
        style={styles.backGroundImage}
      >
        <View style={styles.container}>
          {headingText}
          {/* <ButtonWitdhBackground style={stylesDefault.buttonColorDefault}>Switch to Login</ButtonWitdhBackground> */}
          <ButtonWitdhBackground color={colors.buttonColorDefault}>Switch to Login</ButtonWitdhBackground>
          <View style={styles.inputContainer}>
            <DefaultInput 
              placeholder="Your e-mail address" 
              style={styles.input} 
              value={this.state.controls.email.value}
              onChangeText={val => this.updateInputState('email', val)}
            />
            <View 
              style={
                this.state.viewMode === "portrait" 
                ? styles.portraitPasswordContainer 
                : styles.landscapePasswordContainer
              }
            >
              <View 
                style={
                  this.state.viewMode === "portrait" 
                  ? styles.portraitPasswordWrapper 
                  : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput 
                  placeholder="Password" 
                  style={styles.input}
                  value={this.state.controls.password.value}
                  onChangeText={val => this.updateInputState('password', val)}
                />
              </View>
              <View 
                style={
                  this.state.viewMode === "portrait" 
                  ? styles.portraitPasswordWrapper 
                  : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput 
                  placeholder="Confirm password" 
                  style={styles.input} 
                  value={this.state.controls.confirmPassword.value}
                  onChangeText={val => this.updateInputState('confirmPassword', val)}
                />
              </View>
            </View>
          </View>
          <ButtonWitdhBackground color={colors.buttonColorDefault} onPress={this.loginHandler}>
            Submit
          </ButtonWitdhBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backGroundImage: {
    width: "100%",
    flex: 1
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    // backgroundColor: "#eee",
    // borderColor: "#bbb"
  },
  landscapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  landscapePasswordWrapper: {
    width: "45%"
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  portraitPasswordWrapper: {
    width: "100%"
  }
});

export default AuthScreen;