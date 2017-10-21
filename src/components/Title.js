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
export default class Title extends React.Component {

  static navigationOptions = {
    title: 'Clock'
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
      paddingTop: 30,
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



    return (
      <View style={containerStyle}>
        <Text style={titleTextStyle}>Chronote</Text>
        <Button title="Goto Settings" onPress={this.gotoSettings}/>
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
