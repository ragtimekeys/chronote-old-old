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

export default class Settings extends React.Component {

  render() {
    const containerStyle = {
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#b4afb8',
      alignItems: 'center',
      justifyContent: 'center'
    };
    const settingsTextStyle= {
      color: colorScheme.fg,
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 20
    };
    return (
      <View style={containerStyle}>

        <Text style={settingsTextStyle}>Settings Options Menu</Text>



      </View>


    );
  }
}
