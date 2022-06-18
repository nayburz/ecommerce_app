import { ScrollView } from 'react-native'
import React from 'react'
import Login from '../components/Authentication/Login.js';

const LoginScreen = ({ navigation }) => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <Login navigation={navigation} />
        </ScrollView>
    )
}

export default LoginScreen