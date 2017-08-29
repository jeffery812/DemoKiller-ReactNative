'use strict'


import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import PeopleIndexScreen from '../screens/PeopleIndexScreen';

// Navigator is deprecated
import { Navigator } from 'react-native-deprecated-custom-components';
import PersonShow from "../screens/PersonShowScreen";


/**
 * https://www.youtube.com/watch?v=r5OPRhelEIU
 * Introduction to React Native - Building a React Native app from scratch
 */
class AppNavigator extends Component {

    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
    }

    renderScene( route, navigator ) {
        let globalNavigatorProps = { navigator };
        switch( route.indent) {
            case "PeopleIndex":
                return (
                    <PeopleIndexScreen {...globalNavigatorProps} />
                );

            case "PersonShow":
                return (
                    <PersonShow {...globalNavigatorProps} person={route.person}/>
                );
            default:
                return (
                    <Text>{'You fucked something up ${route.indent}'}</Text>
                );
        }
    }
    render() {
        return (
            <Navigator
                initialRoute={{indent: "PeopleIndex"}}
                ref="appNavigator"
                style={styles.navigatorStyles}
                renderScene={this.renderScene}
            />
        )
    }
}

const styles = StyleSheet.create({
    navigatorStyles: {

    }
})

export default AppNavigator;
