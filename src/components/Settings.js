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
export default class Settings extends React.Component {

  render() {
    const containerStyle = {
      flex: 1,
      paddingTop: 30,
      backgroundColor: this.props.colorScheme.bg,
      alignItems: 'center',
      justifyContent: 'center'
    };
    const settingsTextStyle= {
      color: this.props.colorScheme.fg,
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
