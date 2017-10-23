import React from 'react';
import {TabNavigator, StackNavigator, DrawerNavigator, TabBarTop, TabBarBottom} from 'react-navigation'
import {connect} from 'react-redux'
import {View, Platform, StatusBar} from 'react-native'

import {Constants,Expo} from 'expo';

import Title from 'components/Title.js'
import Schedule from 'components/Schedule.js'
import Quiz from 'components/Quiz.js'

import Sounds from 'components/Sounds.js'
//import Instrument from 'components/Instrument.js'
//import Style from 'components/Style.js'

import Settings from 'components/Settings.js'


@connect((store) => {
  return {
    colorScheme: store.colors.colorScheme
  };
})
export default class Main extends React.Component {

  render() {

    const TitleStack = StackNavigator({
      Title: {screen: Title}
    });
    const ScheduleStack = StackNavigator({
      Schedule: {screen: Schedule}
    });
    const SoundsStack = StackNavigator({
      Sounds: {screen: Sounds}
    });
    const QuizStack = StackNavigator({
      Quiz: {screen: Quiz}
    });
    const SettingsStack = StackNavigator({
      Settings: {screen: Settings}
    });

    let SimpleApp;

    const allScreens = {
        Title: {screen: TitleStack},
        Schedule: {screen: ScheduleStack},
        Sounds: {screen: SoundsStack},
        Quiz: {screen: QuizStack},
        Settings: {screen: SettingsStack}
    };


    if (Platform.OS === 'ios') {
      SimpleApp = TabNavigator(allScreens, {
        //tabBarComponent: TabBarTop,
        animationEnabled: true,
        //tabBarPosition: "top",
        swipeEnabled: true,
        tabBarOptions: {
          inactiveTintColor: this.props.colorScheme.bg,
          activeTintColor: this.props.colorScheme.lt,
          labelStyle: {
            fontSize: 9,
          },
          tabStyle: {
            width: 80,
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
          },
          style: {
            backgroundColor: this.props.colorScheme.bd
          }
        }
      });
    } else {
      SimpleApp = DrawerNavigator(allScreens);
    }


    return (
      <SimpleApp/>

    );
  }
}
