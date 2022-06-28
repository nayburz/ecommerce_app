import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";

var { width } = Dimensions.get("window");
var height = Dimensions.get("window").height;

export default function ProductDetails({ route, navigation }) {
  const [click, setClick] = useState(false);
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.productDetailsTop}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" color="#333" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.swiper}>
        <Swiper showsButtons={false} autoplay={true} autoplayTimeout={4}>
          {route.params?.item.images.map((i) => (
            <Image source={{ uri: i.url }} style={styles.banner} key={i._id} />
          ))}
        </Swiper>
        {click ? (
          <TouchableOpacity>
            <Icon
              name="heart"
              size={30}
              style={{
                marginRight: 10,
                color: "crimson",
                position: "absolute",
                bottom: width / 1.9 - 5,
                right: 0,
              }}
              onPress={() => setClick(!click)}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Icon
              name="heart-outline"
              size={30}
              style={{
                marginRight: 10,
                color: "#333",
                position: "absolute",
                bottom: width / 1.9 - 5,
                right: 0,
              }}
              onPress={() => setClick(!click)}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.details_box}>
        <View style={styles.details}>
          <View>
            <Text
              style={{
                color: "#333",
                fontSize: 20,
                fontWeight: "600",
              }}
            >
              {route.params?.item.name}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: "#555",
                fontSize: 15,
                fontWeight: "600",
                textDecorationLine: "line-through",
                marginRight: 10,
                marginBottom: 15,
              }}
            >
              ${route.params?.item.offerPrice}
            </Text>
            <Text
              style={{
                color: "#333",
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              ${route.params?.item.price}
            </Text>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={{ color: "#333", fontSize: 18, fontWeight: "600" }}>
            Description
          </Text>
          <Text
            style={{
              color: "#333",
              fontSize: 15,
              fontWeight: "500",
              lineHeight: 20,
              paddingTop: 10,
            }}
          >
            {route.params?.item.description}
          </Text>
        </View>
        <View style={styles.quantity}>
          <View style={styles.quantityBox}>
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontWeight: "800",
              }}
            >
              -
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#333", fontSize: 16 }}>1</Text>
          </View>
          <View style={styles.quantityBox}>
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontWeight: "800",
              }}
            >
              +
            </Text>
          </View>
        </View>
        <View
          style={{
            // justifyContent: "center",
            width: width * 1 - 20,
            alignItems: "center",
          }}
        >
          <View style={styles.button}>
            <Text
              style={{
                fontSize: 18,
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Add To Cart
            </Text>
          </View>
          <View style={styles.reviews}>
            <Text
              style={{
                fontSize: 18,
                color: "#333",
                fontWeight: "600",
              }}
            >
              Reviews:
            </Text>
            {route.params?.item.reviews.length === 0 ? (
              <Text
                style={{
                  textAlign: "center",
                  paddingTop: 5,
                }}
              >
                No Reviews yet...
              </Text>
            ) : (
              <View>
                {route.params?.item.reviews.map((i) => (
                  <View
                    key={i._id}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingVertical: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        color: "#333",
                        fontWeight: "700",
                      }}
                    >
                      {i.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: "#555",
                        fontWeight: "600",
                        paddingHorizontal: 10,
                      }}
                    >
                      {i.comment}
                    </Text>
                    <Icon name="star" color="#C68600" size={18} />
                    <Text style={{ paddingLeft: 5 }}>({i.rating})</Text>
                  </View>
                ))}
              </View>
            )}
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#555",
                  fontWeight: "600",
                  paddingRight: 10,
                }}
              >
                Your Ratings*
              </Text>
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{ marginHorizontal: 2 }}
              />
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{ marginHorizontal: 2 }}
              />
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{ marginHorizontal: 2 }}
              />
              <Icon
                name="star-outline"
                color="#C68600"
                size={18}
                style={{ marginHorizontal: 2 }}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                height: 100,
              }}
            >
              <TextInput
                keyboardType="default"
                placeholder="Add your review..."
                placeholderTextColor="#333"
                textAlignVertical="top"
                style={{
                  borderWidth: 1,
                  height: 150,
                  paddingLeft: 5,
                  color: "#333",
                  borderRadius: 5,
                  borderColor: "#0000002b",
                  height: "100%",
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 1,
    backgroundColor: "#fff",
  },
  productDetailsTop: {
    width: width * 1,
    flexDirection: "row",
    alignItems: "center",
    height: width / 6 - 20,
    paddingHorizontal: 10,
    elevation: 8,
    backgroundColor: "#fff",
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
    backgroundColor: "#fff",
    position: "relative",
  },
  details_box: {
    backgroundColor: "#e5e5e5",
    elevation: 8,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    marginVertical: 20,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  description: {
    flexDirection: "column",
    paddingVertical: 10,
  },
  quantity: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  quantityBox: {
    width: 50,
    height: 50,
    backgroundColor: "#3BB77E",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
  },
  button: {
    width: "70%",
    backgroundColor: "#3BB77E",
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  reviews: {
    marginTop: 10,
    width: width * 1,
    padding: 20,
  },
});

// <Text>{route.params?.item.name}</Text>
