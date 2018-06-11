import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const images = {
    tabbar: {
        profile: require('../../assets/profile.png'),
        create: require('../../assets/create.png'),
        menu: require('../../assets/menu.png'),
    },
  };


export default class Icons extends React.Component {
    render() {
        return (
          <View style={styles.tabBarBackgroundView}>
             <Image
              source={images.tabbar.profile}
             />
          </View>
        );
      }
}


const styles = StyleSheet.create({

  tabBarBackgroundView:{
    width: '100%',
    height: 120,
    borderTopWidth :0.5,
    borderTopColor: '#EDEDED',
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },

});
