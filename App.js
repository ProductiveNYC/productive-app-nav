import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SignInScreen from './ProductionElements/SignInScreen'
import TaskScreen from './screens/task'
import HomeScreen from './screens/home'
import HomeTabbar from './ProductionElements/HomeTabbar'
import LandingScreen from './ProductionElements/LandingScreen'

//imports and virable for firebase
 import {db} from './firebase';
  import * as firebase from 'firebase';
  const ref = firebase.app().database().ref();
  const auth = firebase.auth();
  var email= 'waleedakhan00@gmail.com';
  var password = 'iamyou';

export default class App extends React.Component {
  // static navigationOptions ={
  //   header:null,
  //   // cardStack: {
  //   //   gesturesEnabled: false,
  //   // },
  //   mode: 'modal',
  //   header: null,
  // }
  render() {
    // ref.once('value')
    //   .then(function(snap)
    //   {
    console.log("Attempting authentication");
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error)
    {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Error!"+"\n");
      console.log("Error Code: "+ error.code+"\n");
      console.log("Error Message: "+ errorMessage+"\n");
    });

    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("Signed in!");
      user = firebase.auth().currentUser;
    } else {
      console.log("Signed Out!");
      // No user is signed in.
    }
    });

    var user = firebase.auth().currentUser;
    if (user){
      console.log("I think you may be signed in!");
    }
    else{
      console.log("I don't think you have signed in");
      console.log("\nYour info: "+user);
    }


    firebase.auth().signOut();
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("Error!"+"\n");
      console.log("Error Code: "+ error.code+"\n");
      console.log("Error Message: "+ errorMessage+"\n");
    });

    firebase.auth().onAuthStateChanged(function(){
      user = firebase.auth().currentUser;
      if (user){
        console.log("I see you are signed in!");
        console.log("\nYour info:\n");
        console.log(user);
      }
      else{
        console.log("Not Signed in yet\n");
        console.log("Profile: "+user);
      }
    });



    const a = ref.once.snap;
        console.log(a);
        //val=snap.val().Landlord;

      // });

    // navigationOptions ={
    //   headerTitle:'hello'
    // }

    return (

      // <View style={styles.container}>
      //   <Text>Hello World!</Text>
      // </View>
      <RootStack/>
    );
  }
}

/*
const RootStack = createStackNavigator(
  {
  Home: HomeScreen,
  SignIn: SignInScreen,
  Task: TaskScreen,
  TabBar: HomeTabbar,
  LandingScreen: LandingScreen,
  }
  navigationOptions: ({navigation}) => ({
      header: false,
      gesturesEnabled: false,
      swipeEnabled: false,
      mode: 'modal',
      header: null,

  }),
  {
    initialRouteName: 'LandingScreen',
  // },
  { header: null },
  { mode: 'modal' }
);

*/
const LoginStack = createStackNavigator(
  {
    Home: {
      screen: LandingScreen,
    },
    SignIn: {
      screen: SignInScreen,
    },
      // Task: {
      //   screen: TaskScreen,
      // },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

        mode: 'card',
        header:null,
        gesturesEnabled: true,
        swipeEnabled: true,
    },
  }
);

const MenuStack  = createStackNavigator(
  {
    HomeTabBar: {
      screen: HomeTabbar,
    },
  },
  {
    // initialRouteName: 'HomeTabBar',
    navigationOptions: {
      // headerStyle: {
      //   backgroundColor: '#f4511e',
      // },
      // headerTintColor: '#fff',
      // headerTitleStyle: {
      //   fontWeight: 'bold',
      // },
      mode:'modal',
      header: null,
      // mode:'modal',
      swipeEnabled: true,
      gesturesEnabled: true,
    }


  },
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: LoginStack,
    },
    ModalScreen: {
      screen: MenuStack,
    },
  },
  {
    // mode: 'modal',
    headerMode: 'none',
  }
);

// const RootStack = createStackNavigator({
//   main:
//   {
//     screen: createStackNavigator
//     (
//       {
//       Home: {screen: LandingScreen},
//       SignIn: {screen: SignInScreen},
//       Task: {screen: TaskScreen},
//       //TabBar: {screen: HomeTabbar},
//       //LandingScreen: {screen: LandingScreen},
//       // mode:'modal',
//
//       },
//       {
//         navigationOptions: ({navigation}) => ({
//           mode:'card',
//           // cardStack:{
//           //   gesturesEnabled: true, swipeEnabled: true
//           // },
//           header: null,
//           //headerMode:'none',
//
//           gesturesEnabled: true,
//           swipeEnabled: true,
//
//
//         })
//       }
//     ),
//     navigationOptions: ({navigation}) => ({
//       mode:'card',
//       header: null,
//       // headerMode:'none',
//       gesturesEnabled: true,
//       swipeEnabled: true,
//
//     })
//   },
//   second:
//   {
//     screen: createStackNavigator
//     (
//       {
//       // Home: LandingScreen,
//       // SignIn: {screen: SignInScreen
//       TabBar: {screen: HomeTabbar}
//       },
//       {
//         navigationOptions: ({navigation}) => ({
//           mode:'modal',
//           header: null,
//           // mode:'modal',
//           swipeEnabled: true,
//           gesturesEnabled: true,
//
//
//         })
//       }
//       // Task: TaskScreen,
//       // TabBar: HomeTabbar,
//       // LandingScreen: LandingScreen,
//     ),
//     navigationOptions: ({navigation}) => ({
//       mode:'modal',
//       header: null,
//       // mode:'modal',
//       gesturesEnabled: true,
//
//
//     })
//   }
//     // {
//     // navigationOptions: ({navigation}) => ({
//     //     header: false,
//     //     gesturesEnabled: false,
//     //     swipeEnabled: false,
//     //     mode: 'modal',
//     //     header: null,
//     //     initialRouteName: 'LandingScreen',
//     //
//     // })
//     // },
//     // {
//     //   initialRouteName: 'LandingScreen',
//     // },
//
//
// });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
