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
import Settings from 'components/Settings.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      screen: "title",
    };
  }





  render() {

    let currentScreen;
    switch (this.state.screen) {
    case "title":
      currentScreen = <Title/>;
      break;
    case "settings":
      currentScreen = <Settings/>;
      break;
    default:
      currentScreen = <Title/>;
      break;
    }



    const containerStyle = {

      flex: 1,
      backgroundColor: '#b4afb8',
      alignItems: 'center',
      justifyContent: 'center'

    };

    return (
      <View style={containerStyle}>
        {currentScreen}
      </View>


    );
  }
}
