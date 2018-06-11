
/**
 * Copyright iProductive 2018
 * App 2.0
 *
 * Language: React Native
 *
 * @author Ehud Adler
 * @class Tabbar
 *
 */

 // [START imports]
 import * as React from 'react';
 import {
   View,
   Animated,
   TouchableOpacity,
   StyleSheet,
   Dimensions,
 } from 'react-native';

 import { TabView, SceneMap, TabBar} from 'react-native-tab-view';
 import { Constants } from 'expo';

 import HomeView from   './Home/HomeView'

 import ProConstants from './ProConstants';
 import { createStackNavigator } from 'react-navigation';

 // [END imports]

 /* FOR DEBUGGING */
 const FirstRoute = () => (
   <View style={[styles.container, { backgroundColor: '#EAEDEA' }]} />
 );
 const SecondRoute = () => (
   <View style={[styles.container, { backgroundColor: '#E0EBEB' }]} />
 );
 const ThirdRoute = () => (
   <View style={[styles.container, { backgroundColor: '#ECEAEC' }]} />
 );
 /* FOR DEBUGGING */

 // [START export]
 export default class HomeTabbar extends React.Component {
   // static navigationOptions ={
   //  // header:null,
   //   // cardStack: {
   //   //   gesturesEnabled: false,
   //   //   swipeEnabled: false,
   //   //
   //   // },
   //   mode: 'modal',
   //   header:null,
   // }
   state = {
     index: 0,
     routes: [
       { key: 'profile', title: 'Profile', icon: require('./assets/images/profile.png'), radius: 25 },
       { key: 'create', title: 'Create', icon: require('./assets/images/create.png'), radius: 55 },
       { key: 'menu', title: 'Menu', icon: require('./assets/images/menu.png'), radius: 25},
     ],
   }

   _handleIndexChange = index => this.setState({ index });

   _renderTabBar = props => { const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
       <View style={styles.footer}>
         {props.navigationState.routes.map((route, i) => {
           const color = props.position.interpolate({
             inputRange,
             outputRange: inputRange.map(
               inputIndex => (inputIndex === i ? '#D6356C' : '#222')
             ),
           });

           return (
              <TouchableOpacity
                style={styles.tabItem}
                onPress={() => this.setState({ index: i })}
              >
                <Animated.Image style={{width: route.radius, height: route.radius}} color={{ color }} source={route.icon}></Animated.Image>
             </TouchableOpacity>
           );
         })}
       </View>
     );
   };

   _renderScene = SceneMap({
     profile : FirstRoute,
     create: HomeView,
     menu : ThirdRoute,
   }); // _renderScene

   // [START render]
   render() {
     return (
       <TabView
         navigationState={this.state}
         renderScene={this._renderScene}
         renderTabBar={this._renderTabBar}
         onIndexChange={this._handleIndexChange}
         tabBarPosition={'bottom'}
         initialLayout={{ height: 0, width: Dimensions.get('window').width }}
       />
     );
   } // render
   // [END render]
 }
 // [END export]

 // [START stylessheet]
 const styles = StyleSheet.create({

    footer: {
     flexDirection: 'row',
     borderStyle: 'solid',
     borderTopWidth: 0.3,
     borderColor: 'rgba(0, 0, 0, 0.3)',
     paddingTop: 10,
     paddingBottom: 20,
     backgroundColor: 'rgba(0, 0, 0, 0.0)',
     bottom: 0
   }, // tabBar

   tabItem: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   }, // tabItem

 }); // styles

 // [END stylesheet]
