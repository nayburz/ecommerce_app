import { StyleSheet, Dimensions, View } from "react-native";

import Banner from '../components/Home/Banner'
import HomeProduct from '../components/Home/HomeProduct'
import Header from '../components/Layout/Header'

var { width } = Dimensions.get("window");

export default function HomeScreen() {
    return (
        <View>
            <Header />
            <Banner />
            <HomeProduct />
        </View>
    );
}

const styles = StyleSheet.create({

});
