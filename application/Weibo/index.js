/**
 * @flow
 */

import React from 'react';
import { Button, Platform, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import { TabNavigator } from 'react-navigation';
import SampleText from '../SampleText';
import MineScreen from './Mine/MineScreen';

const MyNavScreen = ({ navigation, banner }) => (
    <ScrollView style={styles.container}>
        <SampleText>{banner}</SampleText>
        <Button
            onPress={() => navigation.navigate('Home')}
            title="Go to home tab"
        />
        <Button
            onPress={() => navigation.navigate('Settings')}
            title="Go to settings tab"
        />
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
    <MyNavScreen banner="Home Tab" navigation={navigation} />
);

MyHomeScreen.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor, focused }) => (
        <Image source={ focused ? require('../../assets/image/home_selected.png') : require('../../assets/image/home.png')} style={styles.iconStyle}/>
    ),
};

const MyPeopleScreen = ({ navigation }) => (
    <MyNavScreen banner="People Tab" navigation={navigation} />
);

MyPeopleScreen.navigationOptions = {
    tabBarLabel: 'People',
    tabBarIcon: ({ tintColor, focused }) => (
        <Image source={ focused ? require('../../assets/image/message_selcted.png') : require('../../assets/image/message.png')} style={styles.iconStyle}/>
    ),
};

const DiscoveryScreen = ({ navigation }) => (
    <MyNavScreen banner="Discovery Tab" navigation={navigation} />
);

DiscoveryScreen.navigationOptions = {
    tabBarLabel: 'Discovery',
    tabBarIcon: ({ tintColor, focused }) => (
        <Image source={ focused ? require('../../assets/image/find_selected.png') : require('../../assets/image/find.png')} style={styles.iconStyle}/>
    ),
};

const MySettingsScreen = ({ navigation }) => (
    <MyNavScreen banner="Settings Tab" navigation={navigation} />
);

MySettingsScreen.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ tintColor, focused }) => (
        <Image source={ focused ? require('../../assets/image/mine_selected.png') : require('../../assets/image/mine.png')} style={styles.iconStyle}/>
    ),
};

const Weibo = TabNavigator(
    {
        Home: {
            screen: MyHomeScreen,
            path: '',
        },
        People: {
            screen: MyPeopleScreen,
            path: 'cart',
        },
        Discovery: {
            screen: DiscoveryScreen,
            path: 'chat',
        },
        Settings: {
            screen: MineScreen,
            path: 'settings',
        },
    },
    {
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
        },
    }
);

var {width,height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        height: Platform.OS === 'ios' ? height : height-20 ,
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
    newStyle: {
        position: 'absolute',
        marginLeft: width / 2 - 25,
        width: 50,
        height: 40,
        bottom:2,
        borderRadius: 5
    },
    selectedTitleStyle: {
        color: 'red'
    },
});

export default Weibo;
