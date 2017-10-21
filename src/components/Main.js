import React from 'react';

import { Constants } from 'expo';

import { TabNavigator } from 'react-navigation';

import { connect } from "react-redux";


//reducers
import {colorReducer} from 'reducers/colorReducer';

//actions
import {setColorScheme} from 'actions/colorActions';

import Title from 'components/Title.js';
import Settings from 'components/Settings.js';



@connect((store) => {
  console.log("the store thing",store);
  return {
    colorScheme: store.colors.colorScheme
  };
})
export default class Main extends React.Component {

  render() {

    this.props.dispatch(setColorScheme("main"));
    console.log("this.props",this.props);
    const SimpleApp = TabNavigator({
      Title: {screen: Title},
      Settings: {screen: Settings},
      Frequency: {screen: Title },
      Sound: {screen: Title}
    }, {
      animationEnabled: true,
      tabBarOptions: {
        activeTintColor: this.props.colorScheme.dt
      }
    });

    return (
      <SimpleApp/>
    );
  }
}
