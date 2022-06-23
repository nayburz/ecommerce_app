import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Loader = () => {
  return (
    <View>
      <LottieView
        source={require("../../../assets/splash/loader.json")}
        ref={animation}
        autoPlay
        loop
        style={styles.loader}
      />
    </View>
  );
};

export default Loader;
