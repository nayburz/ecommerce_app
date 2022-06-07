import { StyleSheet, Dimensions, View } from "react-native";

import Banner from '../components/Home/Banner'
import HomeProduct from '../components/Home/HomeProduct'

var { width } = Dimensions.get("window");

export default function HomeScreen() {
    return (
        <View>
            <Banner />
            <HomeProduct />
        </View>
    );
}

const styles = StyleSheet.create({

});
