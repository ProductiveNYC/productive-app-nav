
// [START imports]

import React, { Component } from 'react';
import { AppRegistry, Dimensions, SectionList,  Image, Alert, Platform, StyleSheet, Text,
                        TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

import { Constants } from 'expo';
import { Font } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeListCell  from './HomeListCell';
import TaskObject    from '../TopView/TaskObject';
import ProConstants from '../../ProConstants';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

// [END imports]

var cell = new HomeListCell(new TaskObject("Cleaning", "TODO", "TODO", 0.0), "Hello there, my name is blah blah blah blah blah blah blah blah blah", 1234567890, "TODO", 0.0, "TODO")
var noCommentCell = new HomeListCell(new TaskObject("Cleaning", "TODO", "TODO", 0.0), "No comments", 123456890, "TODO", 0.0, "TODO")


export default class HomeListView extends Component
{

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
            'DIN Next LT Pro': require('../../assets/fonts/din-next-lt-pro.otf'),
            'DIN Next LT Pro Bold': require('../../assets/fonts/din-next-lt-pro-bold.otf'),
          });
          this.setState({ fontLoaded: true });
        } catch (error) {
          console.log(error);
        }
    }
    _didSelectRowAt(task)
    {
        Alert.alert('You tapped the button! ' + task)
    } // _onPressButton

    _didLongPressRowAt(task)
    {
         Alert.alert('You long-pressed the button! ' + task)
    } // _onLongPressButton

    _convertEpochToProperTime(epochTime)
    {
        var date = new Date(0);
        date.setUTCSeconds(epochTime);

        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    } // _convertEpochToProperTime

    render()
    {
        if (this.state.fontLoaded)
        {
            return (
                        <SectionList
                            style={styles.container}
                            sections={[
                            {title: 'Scheduled', data: [cell]},
                            {title: 'Completed', data: [cell, noCommentCell, cell]},
                        ]}
                        renderItem = {
                            ({item}) =>
                                <View>
                                    <TouchableHighlight
                                        onPress={() => this._didSelectRowAt(item)}
                                        onLongPress={() => this._didLongPressRowAt(item)} underlayColor="white">
                                        <View style ={styles.cellView}>
                                                <Image style={styles.taskImage} source = {require('../../assets/images/Cleaning.png')}></Image>
                                                <View  style={styles.centerView}>
                                                    <View style={styles.topView}>
                                                        <Text style={styles.taskName}>{item.task.name}</Text>
                                                        <Text style={styles.timeLabel}>{this._convertEpochToProperTime(item.createdDate)}</Text>
                                                        <View style={styles.moreContainer}>
                                                            <Icon name="chevron-right" size={15} style={styles.moreIcon}/>
                                                        </View>
                                                    </View>
                                                    <Text style={styles.taskComment} numberOfLines={2} >{item.comments}</Text>
                                                    <Text style={styles.tapForDetails}>{'Tap for details'}</Text>
                                                </View>
                                        </View>
                                    </TouchableHighlight>
                                    <View style={styles.seporatorView}></View>
                                </View>
                        } // renderItem
                        renderSectionHeader={
                            ({section}) =>
                                <View style={styles.sectionHeaderView}>
                                    <View style={styles.sectionShadow}>
                                        <Text style={styles.sectionHeader}>{section.title}</Text>
                                    </View>
                                </View>
                        } // renderSectionHeader
                        keyExtractor={(item, index) => index}
                    />
            ); // return
        }
        return (
            <View/>
        );
  } // render()
}

const styles = StyleSheet.create({
    container: {
     height: screenHeight - (ProConstants.TOP_VIEW_HEIGHT + (55 + 30)),
     backgroundColor: 'white',
    },
    sectionHeaderView: {
        width: '100%',
        paddingTop:    10,
        paddingBottom: 20,
        alignContent: 'center',
    },
    sectionShadow: {
        alignSelf: 'center',
        justifyContent: 'center',
        /* + Start Padding */
        paddingRight: 70,
        paddingLeft: 70,
        paddingTop: 8,
        paddingBottom: 4,
        /*  - End Padding
            + Start color */
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        /*  - End color
            + Start border */
        shadowOffset: { width: 0.5, height: 1.0 },
        shadowOpacity: 0.5,
        shadowColor: 'black',
    },
    sectionHeader: {
        alignSelf: 'center',
        justifyContent: 'center',
        /* + Start Padding */
        paddingRight: 70,
        paddingLeft: 70,
        paddingTop: 8,
        paddingBottom: 4,
        /*  - End Padding
            + Start font */
        fontSize: ProConstants.SMALL_TEXT_FONT_SIZE,
        fontFamily: ProConstants.FONT_BOLD,
        /*  - End font
            + Start color */
        backgroundColor: 'rgba(0, 0, 0, 1.0)',
        color: 'white',
        /*  - End color
            + Start border */
        borderRadius: 5,
        borderWidth: 1,
        overflow: 'hidden',
        /*  - End color */
    },
    cellView: {
        // backgroundColor: 'red',
        marginLeft: 10,
        marginRight: 10,
        flexDirection:"row",
    },

    taskImage: {
        marginTop: 'auto',
        marginBottom: 'auto',
        width:  50,
        height: 50,
    },
    taskName: {
      paddingTop: 10,
      fontSize: ProConstants.MEDIUM_FONT_SIZE,
      fontFamily: ProConstants.FONT_BOLD,
    },
    taskComment: {
        fontSize: ProConstants.SECONDARY_TEXT_FONT_SIZE,
        fontFamily: ProConstants.FONT,
        paddingTop: 5,
        paddingBottom: 5,
        color: 'gray',
    },
    timeLabel: {
        marginLeft: 'auto',
        paddingTop: 10,
        fontSize: ProConstants.SECONDARY_TEXT_FONT_SIZE,
        fontFamily: ProConstants.FONT,
        color: 'gray',
        // backgroundColor: 'purple',
    },
    topView: {
        flexDirection:  'row',
        // backgroundColor: 'green',
        flex: 0,
    },
    centerView: {
        flex: 1,
        marginLeft: 5,
        flexDirection: 'column',
        // backgroundColor: 'blue',
    },
    seporatorView: {
        marginLeft: Constants.statusBarHeight,
        height: 1.0,
        backgroundColor: 'rgba(245,245,245,1.0)',
    },
    tapForDetails: {
        fontFamily: ProConstants.FONT,
        fontSize: ProConstants.SMALL_FONT_SIZE,
        bottom: 2,
        paddingTop:    10,
        paddingBottom: 5,
        color: 'gray',
    },
    moreIcon: {
        color: "#d6d7da",
        marginTop: 'auto',
        marginBottom: 'auto',
        paddingLeft: 10,
      }
  })
