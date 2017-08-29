import React from 'react';


import {
    View,
    Text,
} from 'react-native';
import {
    Router,
    Scene,
} from 'react-native-router-flux';
import {
    Platform
} from 'react-native';
import Home from './components/Home';
import Chat from "./components/Chat";


class ChatApp extends React.Component {
    render() {
        let title = Platform.OS === 'ios' ? "Hello Apple" : "Hello Android";
        return (
            <Router>
                <Scene key='root' style={{paddingTop: Platform.OS == 'ios' ? 64 : 54}}>
                    <Scene key='home' component={Home} title= {title}/>
                    <Scene key='chat' component={Chat} title= {title}/>
                </Scene>
            </Router>
        )
    }
}

export default ChatApp;