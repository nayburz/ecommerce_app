import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProductCard({ product }) {
    return (
        <View>
            <Text>{product.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})