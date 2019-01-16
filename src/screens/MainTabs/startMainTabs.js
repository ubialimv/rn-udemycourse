import { Navigation } from "react-native-navigation";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors";

const startMainTabs = () => {
  Promise
    .all([
      Icon.getImageSource(Platform.OS === 'android' ? "md-map"   : "ios-map"   , 30),
      Icon.getImageSource(Platform.OS === 'android' ? "md-share" : "ios-share" , 30),
      Icon.getImageSource(Platform.OS === 'android' ? "md-menu"  : "ios-menu"  , 30)
    ])
    .then( sourceIcons => {
      Navigation.startTabBasedApp({
        tabs: [
          {
            screen: "udemy-course.FindPlaceScreen",
            label: "Places",
            title: "Places",
            icon: sourceIcons[0],
            navigatorButtons: {
              leftButtons: [
                {
                  icon: sourceIcons[2],
                  title: "Menu",
                  id: "sideDrawerToggle"
                }
              ]
            }
          },
          {
            screen: "udemy-course.SharePlaceScreen",
            label: "Share",
            title: "Share",
            icon: sourceIcons[1],
            navigatorButtons: {
              leftButtons: [
                {
                  icon: sourceIcons[2],
                  title: "Menu",
                  id: "sideDrawerToggle"
                }
              ]
            }
          }
        ],
        tabsStyle: {
          tabBarSelectedButtonColor: colors.tabBarSelectedButtonColorDefault
        },
        drawer: {
          left: {
            screen: "udemy-course.SideDrawerScreen"
          }
        },
        appStyle: {
          tabBarBackgroundColor: colors.tabBarBackgroundColor,
          tabBarButtonColor: colors.tabBarButtonColor,
          tabBarSelectedButtonColor: colors.tabBarSelectedButtonColor,
          screenBackgroundColor: colors.screenBackgroundColor,
          navBarButtonColor: colors.navBarButtonColor,
          navBarBackgroundColor: colors.navBarBackgroundColor
        }
      });
    })
};

export default startMainTabs;