import React from 'react';
import {TabNavigator, DrawerNavigator, TabBarTop, TabBarBottom} from 'react-navigation'
import Instrument from 'components/Instrument.js'
import Meaning from 'components/Meaning.js'

import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ScrollView,
  Image,
  Button
} from 'react-native';

import { connect } from "react-redux";

//Actions
import {setColorScheme} from 'actions/colorActions.js';

import {colors} from 'utils/colors.js';
import { Constants } from 'expo';



@connect((store) => {
  return {
    colorScheme: store.colors.colorScheme
  };
})
export default class Sounds extends React.Component {

  static navigationOptions = {
    title: 'Sounds'
  };
  constructor(props) {
    super();
  }


  gotoSettings = () => {
    //just a test
    this.props.navigation.navigate('Settings');
    this.props.dispatch(setColorScheme("oldBlue"));
  }

  render() {
    const containerStyle = {
      flex: 1,
      paddingTop: 0,
      backgroundColor: this.props.colorScheme.bg,
      alignItems: 'center',
      justifyContent: 'flex-start'
    };
    const titleTextStyle= {
      color: this.props.colorScheme.fg,
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 60
    };

    const allSoundsScreens = {
      Instrument: {screen: Instrument},
      Meaning: {screen: Meaning},
    };

    let SoundsTabNavigation = TabNavigator(allSoundsScreens, {
      tabBarComponent: TabBarTop,
      animationEnabled: true,
      tabBarPosition: "top",
      swipeEnabled: true,
      activeTintColor: this.props.colorScheme.lt,
      //lazyLoad: false,
      //
      activeBackgroundColor: this.props.colorScheme.lt,
      tabBarOptions: {
        inactiveTintColor: this.props.colorScheme.bg,
        activeTintColor: this.props.colorScheme.lt,
        upperCaseLabel: false,
        //showIcon: false,
        labelStyle: {
          fontSize: 15,
          //textAlign: "center"
        },
        tabStyle: {
          //width: "50%",
          //height: 20,
          //paddingTop: 0,
          //paddingBottom: 50,
          //top: 0

        },
        indicatorStyle: {
          backgroundColor: this.props.colorScheme.lt
        },
        style: {
          backgroundColor: this.props.colorScheme.bd,
          //top: 0
          height: 50,
          borderColor: "white"
        }
      }
    });




    return (
      <View style={containerStyle}>
        <SoundsTabNavigation/>
      </View>


    );
  }
}
