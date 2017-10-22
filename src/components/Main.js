import React from 'react';
import {TabNavigator, TabBarTop} from 'react-navigation'
import {connect} from 'react-redux'
import {View, Platform, StatusBar} from 'react-native'

import {Constants,Expo} from 'expo';

import Title from 'components/Title.js'
import Schedule from 'components/Schedule.js'
import Quiz from 'components/Quiz.js'
import Sounds from 'components/Sounds.js'
import Settings from 'components/Settings.js'


@connect((store) => {
  return {
    colorScheme: store.colors.colorScheme
  };
})
export default class Main extends React.Component {

  render() {

    const SimpleApp = TabNavigator({
      Title: {screen: Title},
      Schedule: {screen: Schedule},
      Sounds: {screen: Sounds},
      Quiz: {screen: Quiz},
      Settings: {screen: Settings}
    }, {
      tabBarComponent: TabBarTop,
      animationEnabled: true,
      tabBarPosition: "top",
      swipeEnabled: true,
      tabBarOptions: {
        activeTintColor: this.props.colorScheme.lt,
        labelStyle: {
          fontSize: 9
        },
        tabStyle: {
          width: 75,
          height: 80,
          paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        },
        style: {
          backgroundColor: this.props.colorScheme.bd
        }
      }
    });


    return (
      <SimpleApp/>

    );
  }
}
