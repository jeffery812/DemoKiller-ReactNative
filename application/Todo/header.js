import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={this.props.onToggleAllComplete}>
                    <Text style={styles.toggleIcon}>{String.fromCharCode(10003)}</Text>
                </TouchableOpacity>

                <TextInput
                    value={this.props.value}
                    placeholder='What needs to be done?'
                    onChangeText={this.props.onChange}
                    onSubmitEditing={this.props.onAddItem}
                    blurOnSubmit={false}
                    returnKeyType='done'
                    style={styles.input}
                />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {

    },

    toggleIcon: {
        fontSize: 30,
        color: '#CCC',
    },

    header: {
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    input: {
        flex: 1,
        marginLeft: 16,
        height: 50,
    }
});


export default Header;