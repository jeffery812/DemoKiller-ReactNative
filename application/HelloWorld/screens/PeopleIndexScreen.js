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

import ViewContainer from "../Components/ViewContainer";
import StatusBarBackground from "../Components/StatusBarBackground";
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

const people = [
    {firstName: "zhihui", lastName: "Tang", roomNumber: 323},
    {firstName: "max", lastName: "Tang", roomNumber: 320},
    {firstName: "will", lastName: "piers", roomNumber: 33},
    {firstName: "berkeley", lastName: "wanner", roomNumber: 8},
];

/**
 * https://www.youtube.com/watch?v=r5OPRhelEIU
 * Introduction to React Native - Building a React Native app from scratch
 */
class PeopleIndexScreen extends Component {
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            peopleDataSource: ds.cloneWithRows(people)
        };
        this.renderPersonRow = this.renderPersonRow.bind(this);
        this.navigateToPersonShow = this.navigateToPersonShow.bind(this);
    }

    navigateToPersonShow(person) {
        this.props.navigator.push({
            indent: 'PersonShow',
            person,
        })

    }
    renderPersonRow(person) {
        return (
            <TouchableOpacity style={styles.personRow} onPress={(event) => this.navigateToPersonShow(person)}>
                <Text style={styles.personName}>{_.capitalize(person.firstName)} {_.capitalize(person.lastName)}</Text>
                <View style={{flex:1}}/>
                <Icon name="chevron-right" size={20} style={styles.personMoreIcon}/>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ViewContainer >
                <StatusBarBackground style={{backgroundColor:"skyblue"}}/>
                <Text style={{backgroundColor:"coral"}}>Hello world</Text>
                <ListView style={{marginTop:50, backgroundColor:"mistyrose"}}
                          dataSource={this.state.peopleDataSource}
                          renderRow={(person) => { return this.renderPersonRow(person)}}
                />
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

export default PeopleIndexScreen;
