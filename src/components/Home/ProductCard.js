import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

var { width } = Dimensions.get("window");

export default function ProductCard({ product }) {
  const [click, setClick] = useState(false);
  return (
    <View style={styles.ProductCard}>
      <Image source={{ uri: product.images[0].url }} style={styles.image} />
      <View>
        <Text
          style={{
            color: "#333",
            paddingVertical: 5,
            textAlign: "center",
          }}
        >
          {product.name}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            color: "#333",
            paddingHorizontal: 10,
            fontSize: 16,
          }}
        >
          $ {product.price}
        </Text>
        <Text
          style={{
            color: "#555",
            fontSize: 14,
            textDecorationLine: "line-through",
            marginLeft: -5,
            marginTop: -5,
          }}
        >
          $ {product.offerPrice}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        {click ? (
          <TouchableOpacity>
            <Icon
              name="heart"
              size={25}
              style={{ marginRight: 10, color: "crimson" }}
              onPress={() => setClick(!click)}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Icon
              name="heart-outline"
              size={25}
              style={{ marginRight: 10, color: "#333" }}
              onPress={() => setClick(!click)}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity>
          <Icon
            name="cart-outline"
            size={25}
            style={{ marginRight: 10, color: "#333" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ProductCard: {
    width: width / 2 - 30,
    height: width / 1.7,
    borderRadius: 10,
    elevation: 8,
    backgroundColor: "#e5e5e5",
    flexWrap: "wrap",
    margin: 10,
  },
  image: {
    width: "100%",
    height: width / 2 - 60,
    resizeMode: "cover",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  outOfStock: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderRadius: 50,
    position: "absolute",
    top: -10,
    left: -10,
    alignItems: "center",
    justifyContent: "center",
  },
});