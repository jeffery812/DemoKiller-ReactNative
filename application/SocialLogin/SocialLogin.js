import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

class SocialLogin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Google login</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        ...Platform.select({
            ios: { paddingTop: 30}
        })
    },
});


export default SocialLogin;