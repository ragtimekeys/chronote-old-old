import React from 'react';
import {StatusBar, View} from 'react-native';

import { Constants } from 'expo';

import { TabNavigator } from 'react-navigation';
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

//reducers
import {colorReducer} from 'reducers/colorReducer';

import Main from 'components/Main.js';
import {colors} from 'utils/colors.js';

const reducers = combineReducers({
  colors: colorReducer,
  schedule: scheduleReducer,
});
const store = createStore(reducers);

export default class App extends React.Component {

  render() {

    return (
      <Provider store={store}>

          <Main/>

      </Provider>
    );
  }
}
