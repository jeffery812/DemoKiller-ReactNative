import React from 'react';


import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';


class Home extends React.Component {
    state = {
        name: 'anonymous',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Enter your name :
                </Text>
                <TextInput
                    style={styles.input}
                    placeHolder='John Snow'
                    onChangeText={(text) => {
                        this.setState({
                            name: text,
                        });
                    }}
                    value={this.state.name}
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                        Actions.chat({
                            userName: this.state.name,
                        });
                    }}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    title: {
        color: '#FFF',
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
    },
    nameInput: {
        padding: 5,
        height: 40,
        borderWidth: 1,
        borderColor: 'blue',
        margin: 20,
    },

    input: {
        height: 40,
        margin: 20,
        backgroundColor: 'rgba(255,255,255, 0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
    },

    buttonContainer: {
        margin: 20,
        backgroundColor: '#2980b9',
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
    }

});

export default Home;