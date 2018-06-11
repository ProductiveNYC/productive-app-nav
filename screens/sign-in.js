import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry, TextInput, Dimensions} from 'react-native';
import { createStackNavigator } from 'react-navigation';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class SignInScreen extends React.Component {
  /*static navigationOptions = {
    header: {
      visible: false,
    },
  };
  */
  static navigationOptions = ({ navigation }) => {
   const params = navigation.state.params || {};


 };
  constructor(props) {
    super(props);
    this.state = { text: 'Username' };
    this.state = {password: ''}
  }
  // static navigationOptions ={
  //   header:null,
  //   cardStack: {
  //     gesturesEnabled: false,
  //   },
  }
  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sign-In Screen</Text>
        <TextInput
        underlineColorAndroid='transparent'
        style={styles.input}
        onChangeText={(text) => {this.setState({text})}}
        value={this.state.text}
        />
        <TextInput
        underlineColorAndroid='transparent'
        style={styles.input}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
        secureTextEntry={true}
        />
        <Button
            title="Log In"
            // onPress={() => console.log('hello')}
            onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
   input: {
      margin: 15,
      width: screenWidth/2,
      height: 40,
      borderColor: 'black',
      borderWidth: 0.3,
      borderRadius: 10,
      borderWidth: 1,
      padding:8
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})
