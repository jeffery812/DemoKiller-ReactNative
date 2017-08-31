import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';


import {
    View,
    Text,
} from 'react-native';
import Backend from "./Backend";


class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };
        this.onSend = this.onSend.bind(this);
    }
    onSend(message){
//        alert(message[0].text);
        Backend.sendMessage(message);
    }

    componentWillMount() {

    }

    componentDidMount() {
        Backend.loadMessages((message) => {
            this.setState((previousState) => {
                return {
                    messages: GiftedChat.append(previousState.messages, message)
                };
            });
        });
    }

    componentWillUnmount() {
        Backend.closeChat();
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(message)=>{this.onSend(message)}}
                user={{
                    _id: Backend.getUid(),
                    name: this.props.userName,
                    avatar: 'https://facebook.github.io/react/img/logo_og.png',
                }}
            />
        )
    }
}

Chat.defaultProps = {
    userName: 'unknown',
};
Chat.proptypes = {
    userName: React.PropTypes.string,
};

export default Chat;