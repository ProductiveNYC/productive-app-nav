import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class TaskScreen extends React.Component {
  // static navigationOptions ={
  //   header:null,
  //   gesturesEnabled: false,
  //
  // }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Task Screen</Text>
        <Button
        title="Go Back"
        onPress={() => this.props.navigation.navigate('Home')}
        //onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
