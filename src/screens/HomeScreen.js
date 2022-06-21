<<<<<<< HEAD
import { View, Dimensions, ScrollView, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Redux/Actions/ProductAction";
import Banner from "../components/Home/Banner";
import HomeProduct from "../components/Home/HomeProduct";
import Header from "../components/Layout/Header";

var { width } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
    const dispatch = useDispatch();
    const { products, error, loading } = useSelector((state) => state.products);

    useEffect(() => {
        if (error) {
            alert(error);
        }
        dispatch(getProduct());
    }, [dispatch, error]);

    return (
        <>
            {loading ? (
                <Text>Loading</Text>
            ) : (
                <View>
                    <Header navigation={navigation} />
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <Banner />
                        <HomeProduct products={products} />
                    </ScrollView>
                </View>
            )}
        </>
    );
=======
import { StyleSheet, View, ScrollView } from "react-native";
import Banner from "../components/Home/Banner";
import HomeProduct from "../components/Home/HomeProduct";
import Header from "../components/Layout/Header";
import { getProduct } from "../../Redux/Actions/ProductAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const { products, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert(error);
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <View>
      <Header navigation={navigation} />
      <ScrollView>
        <Banner />
        <HomeProduct products={products} />
      </ScrollView>
    </View>
  );
>>>>>>> auth
}
