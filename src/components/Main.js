import React from 'react';
import {TabNavigator, StackNavigator, DrawerNavigator, TabBarTop, TabBarBottom} from 'react-navigation'
import {connect} from 'react-redux'
import {View, Platform, StatusBar} from 'react-native'

import {Constants,Expo} from 'expo';

import Clock from 'components/Clock.js'
import Schedule from 'components/Schedule.js'
import Quiz from 'components/Quiz.js'

import MaterialIcons from 'react-native-vector-icons/FontAwesome';

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

    let cardObj = {

      cardStyle: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        backgroundColor: this.props.colorScheme.bd,
        //color: this.props.colorScheme.lt
      },
      navigationOptions: {
        headerStyle: {
          backgroundColor: this.props.colorScheme.bd
        },
        headerTintColor: this.props.colorScheme.lt
      }
    }

    const ClockStack = StackNavigator(
      {
        Clock: {screen: Clock},
      }, cardObj
    );
    const ScheduleStack = StackNavigator(
      {
        Schedule: {screen: Schedule}
      },cardObj
    );
    const SoundsStack = StackNavigator(
      {
        Sounds: {screen: Sounds}
      },cardObj
    );
    const QuizStack = StackNavigator(
      {
        Quiz: {screen: Quiz}
      },cardObj
    );
    const SettingsStack = StackNavigator(

      {
        Settings: {screen: Settings}
      },cardObj
    );

    let SimpleApp;

    const allScreens = {
        Clock: {screen: ClockStack},
        Schedule: {screen: ScheduleStack},
        Sounds: {screen: SoundsStack},
        Quiz: {screen: QuizStack},
        Settings: {screen: SettingsStack}
    };


    if (/*Platform.OS === 'ios'*/true) {
      SimpleApp = TabNavigator(allScreens, {
        //tabBarComponent: TabBarBottom,
        animationEnabled: true,
        tabBarPosition: "bottom",
        swipeEnabled: false,
        //lazyLoad: false,
        tabBarOptions: {
          inactiveTintColor: this.props.colorScheme.bg,
          activeTintColor: this.props.colorScheme.lt,
          labelStyle: {
            fontSize: 9,
          },
          tabStyle: {
            width: 80,
            //paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
          },
          style: {
            backgroundColor: this.props.colorScheme.bd
          }
        }
      });
    }
    /*
    else {
      SimpleApp = DrawerNavigator(allScreens, {
        contentOptions: {
          inactiveTintColor: this.props.colorScheme.bg,
          activeTintColor: this.props.colorScheme.lt,
          labelStyle: {
            fontSize: 9,
          },
        }

      });
    }
    */

    return (

      <SimpleApp>
        <StatusBar barStyle="light-content"/>
      </SimpleApp>
    );
  }
}
