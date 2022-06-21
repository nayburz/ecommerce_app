import { StyleSheet, Text, View, Dimensions } from "react-native";
import ProductCard from "../Home/ProductCard";

var { width } = Dimensions.get("window");

export default function HomeProduct({ products }) {
  return (
    <View style={stylesr.container}>
      <Text
        style={{
          fontSize: 25,
          color: "#333",
          textAlign: "center",
        }}
      >
        Best Selling!
      </Text>
      <View style={styles.productCard}>
        {products &&
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    padding: 10,
    marginVertical: 10,
    marginBottom: width / 6 - 5,
  },
  productCard: {
    width: width * 1 - 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
