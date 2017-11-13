import React from 'react';

import ModalDropdown from 'react-native-modal-dropdown';

import {
  Text,
  View,
  Picker,
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
      display: "flex",
      flexDirection: "column",
      paddingTop: 30,
      backgroundColor: this.props.colorScheme.bg,
      alignItems: 'center',
      justifyContent: 'center',
    };
    const settingsTextStyle= {
      color: this.props.colorScheme.fg,
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 20
    };

    const dropdownStyle = {
      //width: 70,
      //height: 20,
      //left: 30,
      //top: 30,
      //borderStyle: "solid",
      //borderWidth: 3,
      backgroundColor: this.props.colorScheme.bg,
      //borderColor: this.props.colorScheme.fg
    };

    return (
      <View style={containerStyle}>
        <Picker
  selectedValue={"java"}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
      </View>
    );
  }
}
