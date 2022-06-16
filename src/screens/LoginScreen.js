import { ScrollView } from 'react-native'
import React from 'react'
import Login from '../components/Authentication/Login.js';

const LoginScreen = () => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <Login />
        </ScrollView>
    )
}

export default LoginScreen