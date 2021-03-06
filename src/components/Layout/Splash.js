import { StyleSheet, Image, View, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";

var { width } = Dimensions.get("window");

var height = Dimensions.get("window").height;

export default function Splash() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../../assets/splash/splash.png")}
          style={styles.img}
        />
        <LottieView
          source={require("../../../assets/splash/loader.json")}
          ref={animation}
          autoPlay
          loop
          style={styles.loader}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    // objectFit: "contain",
    width: width * 1 - 150,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  loader: {
    position: "absolute",
    bottom: -175,
    left: 10,
  },
});
