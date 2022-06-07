import { StyleSheet, Dimensions, } from "react-native";

import Banner from '../components/Home/Banner'

var { width } = Dimensions.get("window");

export default function HomeScreen() {
    return (
        <Banner />
    );
}

const styles = StyleSheet.create({

});
