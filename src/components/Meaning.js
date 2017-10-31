import React from 'react';

import {
  Text,
  View,
} from 'react-native';

import {connect} from "react-redux";

@connect((store) => {
  return {
    colorScheme: store.colors.colorScheme
  };
})
export default class Meaning extends React.Component {

  static navigationOptions = {
    title: 'Meaning',
  };

  render() {
    const containerStyle = {
      flex: 1,
      paddingTop: 30,
      backgroundColor: this.props.colorScheme.bg,
      alignItems: 'center',
      justifyContent: 'center'
    };
    const instrumentTextStyle= {
      color: this.props.colorScheme.fg,
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 20
    };
    return (
      <View style={containerStyle}>
        <Text style={instrumentTextStyle}>Meaning</Text>
      </View>
    );
  }
}
