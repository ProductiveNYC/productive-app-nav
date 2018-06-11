import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class HomeScreen extends React.Component {
  /*static navigationOptions = {
    header: {
      visible: false,
    },
  };
  */
//   static navigationOptions ={
//     header:null,
//     cardStack: {
// gesturesEnabled: false,
// },
  //}
  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            title="Home"
            onPress={() => this.props.navigation.navigate('SignIn')}
            // onPress={() => this.props.navigation.navigate({routeName: 'SignIn', transitionStyle: 'inverted'})}
        />
      </View>
    );
  }
}
