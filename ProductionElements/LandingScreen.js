import React from 'react';
import ProConstants from './ProConstants';
import { StyleSheet, TouchableHighlight, Dimensions, Text, View, ImageBackground, Image } from 'react-native';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
import { Constants, Font } from 'expo';
import { createStackNavigator } from 'react-navigation';


export default class LandingScreen extends React.Component {
  //  static navigationOptions ={
  // //   //header:null,
  // //   // cardStack: {
  // //   //   gesturesEnabled: false,
  // //   // },
  // //   swipeEnabled: false,
  //    mode: 'card',
  //    header:null,
  //  }

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
    this.props.navigation.navigate('SignIn');
  }

  render() {
    if (this.state.fontLoaded)
    {
      return (
          <View>
            <ImageBackground style = {styles.backgroundImage} source = {require('./assets/backgroundImages/Skyline.jpg')}>
                <Image style = {styles.logoImage} source = { require('./assets/logos/PRONYC_WhiteLogo.png')}/>
                <View style = {styles.buttonView}>
                  <TouchableHighlight
                      style={styles.signUpButton}
                      onPress={this.onPressSignUp}
                      activeOpacity = {0}
                      underlayColor = {ProConstants.PRO_AQUA_COLOR}
                  >
                    <Text style = {styles.buttonText}> Sign Up </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                      style={styles.signInButton}
                      onPress={this.onPressSignIn}
                      activeOpacity = {0}
                      underlayColor = {'transparent'}
                  >
                    <Text style = {styles.buttonText}> Sign In </Text>
                  </TouchableHighlight>
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
