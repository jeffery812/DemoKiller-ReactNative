import React from 'react';


import {
    StyleSheet,
    View,
    Image,
    Text,
    KeyboardAvoidingView,
} from 'react-native';
import LoginForm from "./LoginForm";


class LoginScreen extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('./images/Octocat.png')}
                     />
                    <Text style={styles.title}>
                        An App made for github using React Native
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm/>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 200,
        textAlign:'center',
        opacity: 0.8,
    },
    formContainer: {

    }
});


export default LoginScreen;