import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ScrollView,
  Image
} from 'react-native';


import { Constants } from 'expo';

export default class Title extends React.Component {
  render() {
    const containerStyle = {
      flex: 1,
      backgroundColor: '#b4afb8',
      alignItems: 'center',
      justifyContent: 'center'
    };
    const titleTextStyle= {
      color: '#2c3130',
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 60
    };
    return (
      <View style={containerStyle}>

        <Text style={titleTextStyle}>Chronote</Text>





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
