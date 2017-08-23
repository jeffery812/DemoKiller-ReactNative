
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import * as actionCreators from '../Actions/actionCreators';

import {
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';


class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Redux Example',
    }
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress(){
        console.log("Check props", this.props);
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome} onPress={this.onPress}>
                    Value: {this.props.defaultNum}
                </Text>
                <Text style={styles.instructions} onPress={this.props.addOne}>
                    Bump +
                </Text>
                <Text style={styles.instructions} onPress={this.props.decreaseOne}>
                    Bump -
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>

                <Button onPress={() => this.props.navigation.goBack(null)} title="Go back" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

function mapStateToProps(state) {
    return {defaultNum: state.defaultNum };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const ReduxSample = StackNavigator({
    Home: {
        screen: connect(mapStateToProps, mapDispatchToProps)(HomeScreen),
    }
});

export default ReduxSample;