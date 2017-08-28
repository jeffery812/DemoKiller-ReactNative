'use strict';

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class StatusBarBackground extends Component {
    render() {
        return (
            <View style={[styles.statusBarBackground, this.props.style]}/>
        )
    }
}

const styles = StyleSheet.create({
    statusBarBackground: {
        height: 20,
        backgroundColor: "white",
    }
});

export default StatusBarBackground;