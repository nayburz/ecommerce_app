import { StyleSheet, Dimensions, View } from "react-native";

import Banner from '../components/Home/Banner'
import HomeProduct from '../components/Home/HomeProduct'
import Header from '../components/Layout/Header'
import { getProduct } from '../../Redux/Actions/ProductAction';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';




var { width } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
    const dispatch = useDispatch();
    const { products, error } = useSelector(state => state.products);

    useEffect(() => {
        if (error) {
            alert(error);
        }
        dispatch(getProduct());
    }, [dispatch, error]);

    return (
        <View>
            <Header navigation={navigation} />
            <Banner />
            <HomeProduct products={products} />
        </View>
    );
}

const styles = StyleSheet.create({

});
