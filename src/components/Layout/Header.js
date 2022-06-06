import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/Ionicons";

var { width } = Dimensions.get("window");

const Header = () => {
  return (
    <View style={styles.headerMain}>
      <Icon name="menu-outline" size={40} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerMain: {
    width: width,
    height: width / 4 - 35,
    backgroundColor: "#fff",
    elevation: 8,
  },
});
