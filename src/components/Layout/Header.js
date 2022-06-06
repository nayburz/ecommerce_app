import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/Ionicons";

var { width } = Dimensions.get("window");

const Header = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerFlex}>
        <TouchableOpacity>
          <Icon name="menu-outline" size={40} />
        </TouchableOpacity>
        <TextInput
          placeholder="Search for products..."
          placeholderTextColor={"#333"}
          style={styles.searchBox}
        />
        <TouchableOpacity>
          <Icon name="search-outline" size={30} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
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
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchBox: {
    width: width - 80,
    height: width / 7 - 15,
    backgroundColor: "#e5e5e5",
    marginHorizontal: 10,
    borderRadius: 10,
    fontSize: 15,
    paddingHorizontal: 10,
    position: "relative",
  },
  searchIcon: {
    position: "absolute",

    right: 15,
    bottom: -15,
  },
});
