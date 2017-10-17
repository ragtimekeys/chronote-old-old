import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ScrollView,
  Image
} from 'react-native';

import {colors} from 'utils/colors.js';

//Make this change depending on color scheme picked
let colorScheme = colors.main;

import { Constants } from 'expo';

export default class Title extends React.Component {

  render() {
    const containerStyle = {
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#b4afb8',
      alignItems: 'center',
      justifyContent: 'flex-start'
    };
    const titleTextStyle= {
      color: colorScheme.fg,
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 60
    };
    return (
      <View style={containerStyle}>

        <Text style={titleTextStyle}>Chronote</Text>


        <Clock/>



      </View>


    );
  }
}


class Clock extends React.Component {

  render() {
    const circleStyle = {

    };
    return (
      <View style={circleStyle}/>
    );
  }


}