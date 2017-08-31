import React from 'react';
import {
    Router,
    Stack,
    Scene,
} from 'react-native-router-flux';
import {
    Platform
} from 'react-native';
import Home from './components/Home';
import Chat from "./components/Chat";


class ChatApp extends React.Component {
    render() {
        return (
            <Router>
                <Scene key='root' style={{paddingTop: Platform.OS == 'ios' ? 64 : 54}}>
                    <Scene key='chat' component={Chat} title= 'Chat'
                           navigationBarStyle={{backgroundColor:'#3498db',borderBottomWidth:0}}
                    />
                    <Scene key='home' component={Home} title= 'Login'
                           initial/>
                </Scene>
            </Router>
        )
    }
}

export default ChatApp;