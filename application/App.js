/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    Platform,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Banner from './Banner';
import CustomTabs from './CustomTabs';
import Drawer from './Drawer';
import TabsInDrawer from './TabsInDrawer';
import ModalStack from './ModalStack';
import StacksInTabs from './StacksInTabs';
import StacksOverTabs from './StacksOverTabs';
import SimpleStack from './SimpleStack';
import SimpleTabs from './SimpleTabs';
import ReduxSample from './Views/ReduxSample';
import Weibo from './Weibo/index';


const ExampleRoutes = {
    ReduxSample: {
        name: 'React Redux Example',
        description: 'A Redux example',
        screen: ReduxSample,
    },

    Weibo: {
        name: 'Weibo Client',
        description: 'A Weibo client',
        screen: Weibo,
    },

    SimpleStack: {
        name: 'Stack Example',
        description: 'A card stack',
        screen: SimpleStack,
    },
    SimpleTabs: {
        name: 'Tabs Example',
        description: 'Tabs following platform conventions',
        screen: SimpleTabs,
    },
    Drawer: {
        name: 'Drawer Example',
        description: 'Android-style drawer navigation',
        screen: Drawer,
    },
    TabsInDrawer: {
        name: 'Drawer + Tabs Example',
        description: 'A drawer combined with tabs',
        screen: TabsInDrawer,
    },
    CustomTabs: {
        name: 'Custom Tabs',
        description: 'Custom tabs with tab router',
        screen: CustomTabs,
    },
    ModalStack: {
        name: Platform.OS === 'ios'
            ? 'Modal Stack Example'
            : 'Stack with Dynamic Header',
        description: Platform.OS === 'ios'
            ? 'Stack navigation with modals'
            : 'Dynamically showing and hiding the header',
        screen: ModalStack,
    },
    StacksInTabs: {
        name: 'Stacks in Tabs',
        description: 'Nested stack navigation in tabs',
        screen: StacksInTabs,
    },
    StacksOverTabs: {
        name: 'Stacks over Tabs',
        description: 'Nested stack navigation that pushes on top of tabs',
        screen: StacksOverTabs,
    },
    LinkStack: {
        name: 'Link in Stack',
        description: 'Deep linking into a route in stack',
        screen: SimpleStack,
        path: 'people/Jordan',
    },
    LinkTabs: {
        name: 'Link to Settings Tab',
        description: 'Deep linking into a route in tab',
        screen: SimpleTabs,
        path: 'settings',
    },
};


const MainScreen = ({ navigation }) => (
    <ScrollView>
        <Banner />
        {Object.keys(ExampleRoutes).map((routeName: string) => (
            <TouchableOpacity
                key={routeName}
                onPress={() => {
                    const { path, params, screen } = ExampleRoutes[routeName];
                    const { router } = screen;
                    const action = path && router.getActionForPathAndParams(path, params);
                    navigation.navigate(routeName, {}, action);
                }}
            >
                <View style={styles.item}>
                    <Text style={styles.title}>{ExampleRoutes[routeName].name}</Text>
                    <Text style={styles.description}>
                        {ExampleRoutes[routeName].description}
                    </Text>
                </View>
            </TouchableOpacity>
        ))}
    </ScrollView>
);

const AppNavigator = StackNavigator(
    {
        ...ExampleRoutes,
        Index: {
            screen: MainScreen,
        },
    },
    {
        initialRouteName: 'Index',
        headerMode: 'none',

        /*
       * Use modal on iOS because the card mode comes from the right,
       * which conflicts with the drawer example gesture
       */
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
    }
);

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ddd',
    },
    image: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginBottom: 20,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#444',
    },
    description: {
        fontSize: 13,
        color: '#999',
    },
});

export default AppNavigator;
