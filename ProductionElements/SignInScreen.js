import React from 'react';
import ProConstants from './ProConstants';
import { StyleSheet, TouchableHighlight, Dimensions, Text, View, ImageBackground, Image, TextInput, Button } from 'react-native';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
import { Constants, Font } from 'expo';
import { createStackNavigator } from 'react-navigation';

export default class SignInScreen extends React.Component {

  // static navigationOptions ={
  // //  header:null,
  //   // cardStack: {
  //   //   gesturesEnabled: false,
  //   // },
  // //  swipeEnabled: false,
  //   mode: 'card',
  //   header:null,
  // }

  constructor(props)
  {
      super(props);
      this.state = { fontLoaded: false };
  }

  async componentDidMount()
  {
      try
      {
        await Font.loadAsync({
          'DIN Next LT Pro': require('./assets/fonts/din-next-lt-pro.otf'),
          'DIN Next LT Pro Bold': require('./assets/fonts/din-next-lt-pro-bold.otf'),
        });
        this.setState({ fontLoaded: true });
      } catch (error) {
        console.log(error);
      }
  }

  onPressSignUp = () => {



  }

  onPressSignIn = () => {

  }

  render() {
    if (this.state.fontLoaded)
    {
      return (
          <View>
            <ImageBackground style = {styles.backgroundImage} source = {require('./assets/backgroundImages/Skyline.jpg')}>
              <View style = {styles.shadedOverlay}>
                <Image style = {styles.logoImage} source = { require('./assets/logos/PRONYC_WhiteLogo.png')}/>
                <View style={styles.inputSection}>

                  <Text style = {styles.header}>Sign-In Screen</Text>
                  <TextInput

                  underlineColorAndroid='transparent'
                  style={styles.input}
                  placeholder = {'username'}
                  placeholderTextColor = 'rgba(255, 255, 255, 0.5)'
                  onChangeText={(text) => {this.setState({text})}}
                  value={this.state.text}
                  clearButtonMode = {'while-editing'}
                  clearButton
                  keyboardType = {'email-address'}
                  />
                  <TextInput
                  underlineColorAndroid='transparent'
                  style={styles.input}
                  placeholder = {'password'}
                  placeholderTextColor = 'rgba(255, 255, 255, 0.5)'
                  onChangeText={(password) => this.setState({password}) }
                  value={this.state.password}
                  secureTextEntry={true}
                  clearButtonMode = {'while-editing'}
                  />
                  <Button
                      title="Log In"
                      style={styles.submitButtonText}
                      onPress={() => this.props.navigation.navigate('HomeTabBar')}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
      );
    }
    else
    {
      return (
        <View/>
      );
    }
  }
}

const styles = StyleSheet.create({
  header: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: screenWidth/10,
    color: 'white',
    paddingBottom: 10
  },
  inputSection: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
     marginLeft: 'auto',
     marginRight: 'auto',
     width: screenWidth/2,
     height: 40,
     borderColor: 'white',
     color: 'white',
     //borderWidth: 0.3,
     //borderRadius: 10,
     borderBottomWidth: 1,
     padding:8,
  },
  shadedOverlay: {
    height:screenHeight,
    width: screenWidth,
    backgroundColor: 'rgba(20, 20, 20, 0.6)'
  },
  submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     color: 'white'
  },
  backgroundImage: {
    width: screenWidth,
    height: screenHeight,
  },
  logoImage: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    marginTop: 40,
    width: screenWidth / 1.2,
    height: (screenWidth / 1.2) / 4,
    resizeMode: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 20,
    marginLeft:   20,
    marginRight:  20,
  },
  buttonText:{
    color: 'white',
    fontSize: ProConstants.MEDIUM_FONT_SIZE,
    fontFamily: ProConstants.FONT_BOLD,
  },
  signUpButton: {
    width: 145,
    height: 45,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0)',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ProConstants.PRO_AQUA_COLOR,
    paddingTop: 5,
  },
  signInButton: {
    width: 145,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    marginLeft: 'auto',
  },
});
