import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
var { width } = Dimensions.get("window");

export default function ForgotPassword({ navigation }) {
  const [forgotPassword, setForgotPassword] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Write your email"
        placeholderTextColor="#333"
        style={styles.forgot}
        value={forgotPassword}
        onChangeText={(item) => setForgotPassword(item)}
      />
      <TouchableOpacity style={styles.button}>
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "600",
              fontFamily: "sans-serif",
            }}
          >
            Submit
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: width * 2,
    justifyContent: "center",
    alignItems: "center",
  },
  forgot: {
    width: width * 1 - 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#3BB77E",
    paddingLeft: 45,
    fontSize: 15,
    color: "#333",
    marginVertical: 10,
  },
  button: {
    width: "80%",
    height: 56,
    borderRadius: 8,
    backgroundColor: "#1E232C",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
