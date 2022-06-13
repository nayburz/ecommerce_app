import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../../Redux/Actions/ProductAction';
import ProductCard from "../Home/ProductCard"



var { width } = Dimensions.get("window");

export default function HomeProduct() {

    const dispatch = useDispatch();

    const { products, error, loading } = useSelector(state => state.products);

    useEffect(() => {
        if (error) {
            alert(error)
        }
        dispatch(getProduct());

    }, [dispatch, error]);


    return (
        <>
            {loading ? (
                <Text>Loading</Text>
            ) :
                (<ScrollView style={styles.container}>
                    <Text
                        style={{ fontSize: 25, color: "#333", textAlign: "center", }}
                    >Best Selling!
                    </Text>
                    <View>
                        {products &&
                            products.map(product => (
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                />
                            ))}
                    </View>
                </ScrollView>
                )}
        </>
    );
}

const styles = StyleSheet.create({
    container: { width: width, padding: 10, marginVertical: 10 }

})