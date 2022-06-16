import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Layout/Header'
import React from 'react'

export default function WishlistScreen({ navigation }) {
    return (
        <View>
            <Header navigation={navigation} />
            <Text>WishlistScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({})