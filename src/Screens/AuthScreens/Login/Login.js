//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import actions from '../../../redux/actions';

// create a component
const Login = () => {
    const onLogin = () =>{
        alert("login")
        actions.loginAction()
    }
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title='login to account' onPress={() => onLogin()}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Login;
