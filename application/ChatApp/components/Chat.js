import React from 'react';


import {
    View,
    Text,
} from 'react-native';


class Chat extends React.Component {
    render() {
        return (
            <View>
                <Text>Hello {this.props.userName}</Text>
            </View>
        )
    }
}

export default Chat;