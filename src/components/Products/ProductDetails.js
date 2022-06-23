import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ProductDetails({ route, navigation }) {
  console.log(route);
  return (
    <View>
      <Text>{route.params?.item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
