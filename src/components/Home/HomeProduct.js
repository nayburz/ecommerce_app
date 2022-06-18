import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../../Redux/Actions/ProductAction';
import ProductCard from "../Home/ProductCard"



var { width } = Dimensions.get("window");

export default function HomeProduct({ products }) {

    const { isAuthenticated, user } = useSelector((state) => state.user)


    return (
        <View style={styles.container}>
            <Text
                style={{
                    fontSize: 25,
                    color: "#333",
                    textAlign: "center",
                }}>
                {isAuthenticated ? "okay" : "not"}
            </Text>

            <View style={styles.productCard}>
                {products &&
                    products.map(product => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        />
                    ))}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        padding: 10,
        marginVertical: 10,
        marginBottom: width / 6 - 5,
    },
    productCard: {
        width: width * 1 - 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },

})