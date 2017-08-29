'use strict'


import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import StatusBarBackground from "../Components/StatusBarBackground";
import ViewContainer from "../Components/ViewContainer";
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

class PersonShowScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let person = this.props.person;
        return (
            <ViewContainer style={{backgroundColor: "aliceblue"}}>
                <StatusBarBackground/>
                <TouchableOpacity onPress={() => this.props.navigator.pop()}>
                    <Icon name="times" size={30} />
                </TouchableOpacity>

                <Text style={{marginTop: 100, fontSize: 20}}>Person Show Screen</Text>
                <Text style={styles.personName}>{_.capitalize(person.firstName)} {_.capitalize(person.lastName)}</Text>
            </ViewContainer>
        )
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    personRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        height: 50,
    },
    personName: {
        marginLeft: 25,
    },
    personMoreIcon: {
        color: "green",
        height: 20,
        width: 20,
        marginRight: 25,
    },

});

export default PersonShowScreen;
