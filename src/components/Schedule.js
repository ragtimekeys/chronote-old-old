import React from 'react';

import ModalDropdown from 'react-native-modal-dropdown';

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
export default class Schedule extends React.Component {

  static navigationOptions = {
    title: 'Schedule',
  };

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

    const dropdownStyle = {
      width: 100,
      height: 100,
      borderStyle: "solid",
      backgroundColor: this.props.colorScheme.sdt,
      borderColor: this.props.colorScheme.fg
    };

    return (
      <View style={containerStyle}>
        <ModalDropdown style={dropdownStyle} options={['option 1', 'option 2']}/>
        <Text style={settingsTextStyle}>Schedule</Text>
      </View>
    );
  }
}
