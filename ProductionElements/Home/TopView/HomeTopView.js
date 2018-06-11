/**
 * Copyright iProductive 2018
 * App 2.0
 *
 * Language: React Native
 *
 * @author Ehud Adler
 * @class HomeTopView
 *
 */

 // [START imports]

import React, { Component } from 'react';
import { AppRegistry, SectionList,  Image, Alert, Platform, StyleSheet, Text, Dimensions,
                        TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

import { Constants, Font } from 'expo';

import ProConstants from '../../ProConstants';
import Calendar from './calendar/Calendar';
import type Moment from 'moment';

const { width: screenWidth } = Dimensions.get('window');

// [END imports]

// [START export]

export default class HomeTopView extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { fontLoaded: false };
    }

    onSelectDate = (date: Moment) => {
        

    };


    async componentDidMount()
    {
        try
        {
          await Font.loadAsync({
            'DIN Next LT Pro': require('../../assets/fonts/din-next-lt-pro.otf'),
            'DIN Next LT Pro Bold': require('../../assets/fonts/din-next-lt-pro-bold.otf'),
          });
          this.setState({ fontLoaded: true });
          console.log('fonts are loaded');
        } catch (error) {
          console.log(error);
        }
    }
    render()
    {
        if (this.state.fontLoaded)
        {
            return (
                <View style={styles.topView}>
                    <View style={styles.contentView}>
                        <View style={styles.addressView}>
                            <Text style={styles.address}>123 Productive Lane. Apt 12</Text>
                            <Text style={styles.slash}> / </Text>
                        </View>
                        <Calendar 
                            showDaysAfterCurrent = {ProConstants.SHOW_DAYS_AFTER_CURRENT} 
                            showDaysBeforeCurrent = {ProConstants.SHOW_DAYS_BEFORE_CURRENT} 
                            onSelectDate = {this.onSelectDate}
                            style = {styles.calendar}
                        />
                    </View>
                </View>
            );
        }
        return (
            <View/>
        );
    }
}
// [END export]

// [START stylesheet]

const styles = StyleSheet.create({
    topView: {
      flexDirection:"column",
      height: ProConstants.TOP_VIEW_HEIGHT,
      backgroundColor: ProConstants.LIGHT_THEMED_COLOR,
      borderStyle: 'solid',
      borderBottomWidth: 0.5,
      borderColor: 'rgba(0, 0, 0, 0.3)',
    },
    contentView: {
        flexDirection:"column",
        marginTop: 'auto',
        paddingBottom: 2,
    },
    addressView: {
        flexDirection:"row",
        alignItems: 'center',
        paddingLeft: 20,
        paddingBottom: 2,
    },
    address: {
        textAlignVertical: 'center',
        fontSize: ProConstants.SMALL_FONT_SIZE + 2,
        fontFamily: ProConstants.FONT_BOLD,
    },
    slash: {
        textAlignVertical: 'center',
        fontSize: ProConstants.MEDIUM_FONT_SIZE,
        fontFamily: ProConstants.FONT_BOLD,
        color: ProConstants.PRO_AQUA_COLOR
    },
    monthLabel: {
      textAlign: 'left',
      fontSize: ProConstants.LARGE_FONT_SIZE,
      fontFamily: ProConstants.FONT_BOLD,
      paddingBottom: 5,
    },
})
// [END stylesheet]
