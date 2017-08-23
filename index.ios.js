/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './application/Store';
import {
  AppRegistry,
} from 'react-native';

import AppNavigator from './application/App';

class DemoKiller extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Provider store={store}>
          <AppNavigator />
        </Provider>
    )
  }
}

AppRegistry.registerComponent('DemoKiller', () => DemoKiller);
