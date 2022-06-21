import { View, Text } from 'react-native'
import React from 'react'
import SignUp from "../components/Authentication/SignUp.js"

const SignUpScreen = ({ navigation }) => {
    return (
        <View>
            <SignUp navigation={navigation} />
        </View>
    )
}

export default SignUpScreen