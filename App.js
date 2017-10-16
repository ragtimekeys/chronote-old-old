/*
  https://coolors.co/16bac5-285068-171d1c-ede6f2-5863f8
  https://coolors.co/3ec5ce-3b5f75-2c3130-b4afb8-252741
*/


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
import Title from 'components/Title.js';

export default class App extends React.Component {




  render() {


    const containerStyle = {

      flex: 1,
      backgroundColor: '#b4afb8',
      alignItems: 'center',
      justifyContent: 'center'

    };

    return (
      <View style={containerStyle}>
        <Title/>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#2c3130',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 40
  },
  clock: {
    width: 285.96,
    height: 285.96
  }
});
