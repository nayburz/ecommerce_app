import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";

var { width } = Dimensions.get("window");
var height = Dimensions.get("window").height;

export default function ProductDetails({ route, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.productDetailsTop}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" color="#333" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.swiper}>
        <Swiper showsButtons={true} autoplay={true} autoplayTimeout={4}>
          {route.params?.item.images.map((i) => (
            <Image source={{ uri: i.url }} style={styles.banner} key={i._id} />
          ))}
        </Swiper>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 1,
  },
  productDetailsTop: {
    width: width * 1,
    flexDirection: "row",
    alignItems: "center",
    height: width / 6 - 20,
    paddingHorizontal: 10,
    elevation: 8,
    backgroundColor: "#f5f5f5",
  },
  banner: {
    width: width * 1,
    height: width / 2 - 20,
    resizeMode: "contain",
    marginVertical: 10,
  },
  swiper: {
    width: width * 1,
    height: width / 2,
    backgroundColor: "#e5e5e5",
  },
});

// <Text>{route.params?.item.name}</Text>
