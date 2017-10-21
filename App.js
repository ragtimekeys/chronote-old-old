import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ScrollView,
  Image,
  Button
} from 'react-native';

import { Constants } from 'expo';
import Title from 'components/Title.js';
import Settings from 'components/Settings.js';
import { TabNavigator } from 'react-navigation';


const SimpleApp = TabNavigator({
  title: { screen: Title },
  settings: { screen: Settings },
});

export default class App extends React.Component {




  callbackChange = () => {
    this.setState({screen: "settings"});
  }



  render() {



    const containerStyle = {

      flex: 1,
      backgroundColor: '#b4afb8',
      alignItems: 'center',
      justifyContent: 'center'

    };

    return (
      <SimpleApp/>




    );
  }
}
