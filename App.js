import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Image,Platform } from 'react-native';

import {Dimensions} from 'react-native';
const { width } = Dimensions.get('window');

import { createStackNavigator } from 'react-navigation-stack';
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'


const headerBackground = require('./assets/topBarBg.jpg');

import SampleScreen from './src/Sample1';
import LandingScreen from './src/Landing';
import ForgotPasswordScreen from './src/ForgotPassword';
import SignUpScreen from './src/SignUp';
import SplashScreen from './src/SplashScreen';
import QuestionScreen from './src/Question';

import Section1A from './src/Section1A'
import Section1B from './src/Section1B'

import Section2A from './src/Section2A'
import Section2B from './src/Section2B'
import Section2C from './src/Section2C'
import Section2D from './src/Section2D'

import Section3A from './src/Section3A';
import Section3B from './src/Section3B';
import Section3C from './src/Section3C';
import Section3D from './src/Section3D';
import Section3E from './src/Section3E';

import Section3I from './src/Section3I';
import Section3ISector2 from './src/Section3ISector2';
import Section3ISector3 from './src/Section3ISector3';
import Section3ISector4 from './src/Section3ISector4';
import Section3ISector5 from './src/Section3ISector5';

import Section3JSector1 from './src/Section3JSector1';
import Section3JSector2 from './src/Section3JSector2';
import Section3JSector3 from './src/Section3JSector3';
import Section3JSector4 from './src/Section3JSector4';
import Section3JSector5 from './src/Section3JSector5';

import Section3KSector1 from './src/Section3KSector1';
import Section3KSector2 from './src/Section3KSector2';
import Section3KSector3 from './src/Section3KSector3';
import Section3KSector4 from './src/Section3KSector4';
import Section3KSector5 from './src/Section3KSector5';

import Section4 from './src/Section4';

import Section5A from './src/Section5A'
import Section5C1 from './src/Section5C1'
import Section5C2 from './src/Section5C2'
import Section5C3 from './src/Section5C3'

import Section5F from './src/Section5F'
import Section5G from './src/Section5G'
import Section5I1 from './src/Section5I1'
import Section5I2 from './src/Section5I2'

import Section5K from './src/Section5K'
import Section5L from './src/Section5L'
import Section5M from './src/Section5M'
import Section5N from './src/Section5N'




class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={styles.iconRow}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.toggleDrawer.bind(this)}>
        <MaterialIconsIcon name="dehaze" style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

const Home_StackNavigator = createStackNavigator({
  First: {
    screen: QuestionScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'SANKALP -Shillong',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#006699',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Section1_StackNavigator = createStackNavigator({
  First: {
    screen: Section1A,
    navigationOptions: ({ navigation }) => ({
      title: 'Section 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#006699',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Section2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Section2A,
    navigationOptions: ({ navigation }) => ({
      title: 'Section 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#006699',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Section3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Section3A,
    navigationOptions: ({ navigation }) => ({
      title: 'Section 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#006699',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Section4_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Fourth: {
    screen: Section4,
    navigationOptions: ({ navigation }) => ({
      title: 'Section 4',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#006699',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Section5_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Fifth: {
    screen: Section5A,
    navigationOptions: ({ navigation }) => ({
      title: 'Section 4',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#006699',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Logout_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Sixth: {
    screen: LandingScreen,
    navigationOptions: ({ navigation }) => ({
      header:null,
    }),
  },
});


const DrawerNavigatorE = createDrawerNavigator({

  Screen0: {
    //Title
    screen: Home_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Screen1: {
    //Title
    screen: Section1_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Section 1',
    },
  },
  Screen2: {
    //Title
    screen: Section2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Section 2',
    },
  },
  Screen3: {
    //Title
    screen: Section3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Section 3',
    },
  },
  Screen4: {
    //Title
    screen: Section4_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Section 4',
    },
  },

  Screen5: {
    //Title
    screen: Section5_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Planning',
    },
  },

  Screen6: {
    //Title
    screen: Logout_StackNavigator,
    navigationOptions: {
      drawerLabel: 'LogOut',
    },
  },

});




const stackNavigator = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: () => ({
        title: "SANKALP - Shillong",
        header: null,
      }),
    },
    Question: {
      screen: QuestionScreen,
      navigationOptions: () => ({
        title: "SANKALP - Shillong",
        header: null,
      }),
    },
    Sample: {
      screen: SampleScreen,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Landing: {
      screen: LandingScreen,
      navigationOptions: () => ({
        title: "SANKALP - Shillong",
        header: null,
      }),
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: () => ({
        title: "SANKALP - Shillong",
        header: null,
      }),
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
      navigationOptions: () => ({
        title: "SANKALP - Shillong",
        header: null,
      }),
    },
    Section1A: {
      screen: Section1A,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Question:{screen: DrawerNavigatorE,navigationOptions: {
      header: null,
      },
    },

    Section1B: {
      screen: Section1B,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section2A: {
      screen: Section2A,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section2B: {
      screen: Section2B,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section2C: {
      screen: Section2C,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section2D: {
      screen: Section2D,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },



    Section3A: {
      screen: Section3A,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },

        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section3B: {
      screen: Section3B,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section3C: {
      screen: Section3C,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section3D: {
      screen: Section3D,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section3E: {
      screen: Section3E,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section3I: {
      screen: Section3I,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section3ISector2: {
      screen: Section3ISector2,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section3ISector3: {
      screen: Section3ISector3,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },


    Section3ISector4: {
      screen: Section3ISector4,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section3ISector5: {
      screen: Section3ISector5,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },


    Section3JSector1: {
      screen: Section3JSector1,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section3JSector2: {
      screen: Section3JSector2,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Section3JSector3: {
      screen: Section3JSector3,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Section3JSector4: {
      screen: Section3JSector4,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Section3JSector5: {
      screen: Section3JSector5,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },



    Section3KSector1: {
      screen: Section3KSector1,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section3KSector2: {
      screen: Section3KSector2,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },
    Section3KSector3: {
      screen: Section3KSector3,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section3KSector4: {
      screen: Section3KSector4,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section3KSector5: {
      screen: Section3KSector5,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section4: {
      screen: Section4,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section5A: {
      screen: Section5A,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section5C1: {
      screen: Section5C1,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
          headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section5C2: {
      screen: Section5C2,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
          headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section5C3: {
      screen: Section5C3,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
          headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section5F: {
      screen: Section5F,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
          headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section5G: {
      screen: Section5G,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
          headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section5I1: {
      screen: Section5I1,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
          headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section5I2: {
      screen: Section5I2,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
          headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section5K: {
      screen: Section5K,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
          headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section5L: {
      screen: Section5L,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
          headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section5M: {
      screen: Section5M,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
    },

    Section5N: {
      screen: Section5N,
      navigationOptions: () => ({
        title: 'SANKALP - Shillong',
        headerTintColor: '#ffffff',
        headerTitleStyle: {
        },
        headerLeft:null,
        headerBackground: (
          <Image
            style={{
              flex: 1,
              width,
            }}
            source={headerBackground}
            resizeMode="cover"
          />
        ),
      }),
  
    },

},

);

export default createAppContainer(stackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    width: 18,
    height: 25,
    marginBottom:10
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 0,
    marginBottom:5,
  },
  iconRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginTop: 15
  },
  icon2: {
    color: "rgba(250,250,250,1)",
    fontSize: 25
  }
});
