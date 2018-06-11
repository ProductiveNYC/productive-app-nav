import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Constants } from 'expo';

import HomeTopView from    './TopView/HomeTopView'
import HomeListView from   './HomeList/HomeListView'
import ProConstants from   '../ProConstants';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default class HomeView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeTopView/>
        <HomeListView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});