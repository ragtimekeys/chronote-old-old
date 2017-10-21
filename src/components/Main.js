import React from 'react';
import {TabNavigator} from 'react-navigation'
import {connect} from 'react-redux'

import Title from 'components/Title.js'
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
      Settings: {screen: Settings},
      Frequency: {screen: Title },
      Sound: {screen: Title}
    }, {
      animationEnabled: true,
      tabBarOptions: {
        activeTintColor: this.props.colorScheme.lt
      }
    });

    return (
      <SimpleApp/>
    );
  }
}
