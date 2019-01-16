import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import configureStore from './src/store/configureStore';
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawerScreen from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "udemy-course.AuthScreen", 
  () => AuthScreen, 
  store, 
  Provider
);

Navigation.registerComponent(
  "udemy-course.SharePlaceScreen", 
  () => SharePlaceScreen, 
  store, 
  Provider
);

Navigation.registerComponent(
  "udemy-course.FindPlaceScreen", 
  () => FindPlaceScreen, 
  store, 
  Provider
);

Navigation.registerComponent(
  "udemy-course.PlaceDetailScreen", 
  () => PlaceDetailScreen, 
  store, 
  Provider
);

Navigation.registerComponent(
  "udemy-course.SideDrawerScreen", 
  () => SideDrawerScreen
);

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: "udemy-course.AuthScreen",
    title: "Login",
    navigatorStyle: {
      navBarBackgroundColor: "#00BFA5"
    }
  }
});