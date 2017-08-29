'use strict'


//import React, { Component } from 'react';
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

/**
 * https://www.youtube.com/watch?v=r5OPRhelEIU
 * Introduction to React Native - Building a React Native app from scratch
 */
class HelloWorld extends Component {

    render() {
        return (
            <AppNavigator/>
        )
    }
}

const styles = StyleSheet.create({
    navigatorStyles: {

    }
})

export default HelloWorld;
