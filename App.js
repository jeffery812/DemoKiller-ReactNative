import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './application/Store';
import AppNavigator from './application/App'


export default class App extends React.Component {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
