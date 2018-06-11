import {Platform, 
    StyleSheet,
    View,
    Dimensions,
} from 'react-native';

import React, { Component } from 'react';
import { Constants, Font } from 'expo';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const ProConstants = {
    FONT: 'DIN Next LT Pro',
    FONT_BOLD: 'DIN Next LT Pro Bold',
    LIGHT_THEMED_COLOR: 'rgba(245, 245, 245, 1.0)',
    //PRO_AQUA_COLOR: 'rgba(87, 201, 231, 1.0)',
    PRO_AQUA_COLOR: 'rgba(84, 199, 252, 1.0)',
    SMALL_FONT_SIZE:  12,
    SECONDARY_TEXT_FONT_SIZE:  16,
    MEDIUM_FONT_SIZE: 25,
    LARGE_FONT_SIZE:  40,
    SHOW_DAYS_BEFORE_CURRENT: 7 * 10,
    SHOW_DAYS_AFTER_CURRENT: 7,
    TOP_VIEW_HEIGHT: Constants.statusBarHeight + 40 + 2 * ((screenWidth / 9) + 12),
}
export default ProConstants
