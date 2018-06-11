import React, { PureComponent } from 'react';
import {
  Dimensions,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import type Moment from 'moment';

import { Constants, Font } from 'expo';
import ProConstants from '../../../ProConstants';

const { width: screenWidth } = Dimensions.get('window');

export default class Date extends PureComponent {

  props: {
    // Date to render
    date: Moment,
    // Index for `onPress` and `onRender` callbacks
    index: number,
    // Whether it's the currently selected date or no
    isActive: boolean,
    // Called when user taps a date
    onPress: (index: number) => void,
    // Called after date is rendered to pass its width up to the parent component
    onRender: (index: number, width: number) => void,
  };

  // Style helper functions that merge active date styles with the default ones
  // when rendering a date that was selected by user or was set active by default

  getContainerStyle = () => ({
    ...styles.container,
    ...(this.props.isActive ? styles.containerActive : {})
  });

  getDayStyle = () => ({
    ...styles.text,
    ...styles.day,
    ...(this.props.isActive ? styles.textActive : {})
  });

  getDateStyle = () => ({
    ...styles.text,
    ...styles.date,
    ...(this.props.isActive ? styles.textActive : {})
  });

  // Call `onRender` and pass component's with when rendered
  onLayout = (event: { nativeEvent: { layout: { x: number, y: number, width: number, height: number } } }) => {
    const {
      index,
      onRender,
    } = this.props;
    const { nativeEvent: { layout: { width } } } = event;
    onRender(index, width);
  };

  // Call `onPress` passed from the parent component when date is pressed
  onPress = () => {
    const { index, onPress } = this.props;
    onPress(index);
  };

  render() {
    const { date } = this.props;
    return (
      <TouchableOpacity
        style={this.getContainerStyle()}
        onLayout={this.onLayout}
        onPress={this.onPress}
      >
          <Text style={this.getDayStyle()}>{date.format('ddd').toUpperCase()}</Text>
          <Text style={this.getDateStyle()}>{date.format('D')}</Text>
      </TouchableOpacity>
    );
  }

}

const styles = {
  container: {
    width: screenWidth / 9,
    borderRadius: 6,
    backgroundColor: 'white',
    shadowOffset:{  width: 0.5,  height: 0.8,  },
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOpacity: 0.1,
    flexDirection: 'column',
    flex: 0.90,
    marginRight: (2 * screenWidth / 9) / 7 / 2,
    marginLeft: (2 * screenWidth / 9) / 7 / 2,
  },
  containerActive: {
    backgroundColor: ProConstants.PRO_AQUA_COLOR,
    width: screenWidth / 9,
    borderRadius: 6,
    shadowOffset:{  width: 0.5,  height: 0.8,  },
    shadowColor: 'black',
    shadowOpacity: 0.15,
    flexDirection: 'column',
    flex: 0.90,
    marginRight: (2 * screenWidth / 9) / 7 / 2,
    marginLeft: (2 * screenWidth / 9) / 7 / 2,
  },
  day: {
    fontSize: 8,
    fontFamily: ProConstants.FONT_BOLD,
    flex: 0.3,
    paddingTop: 6
  },
  date: {
    fontSize: ProConstants.MEDIUM_FONT_SIZE,
    fontFamily: ProConstants.FONT_BOLD,
    flex: 0.6
  },
  text: {
    color: ProConstants.PRO_AQUA_COLOR,
    textAlign: 'center',
  },
  textActive: {
    color: 'white',
  },
};