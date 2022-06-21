import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

var { width } = Dimensions.get("window");

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.loginHeader}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "700",
            fontFamily: "Roboto",
            color: "#333",
          }}
        >
          {" "}
          Welcome,
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            fontFamily: "sans-serif",
            color: "#555",
          }}
        >
          Create an account!
        </Text>
      </View>
      <View style={styles.loginBox}>
        <View style={styles.relative}>
          <Icon name="person-circle-outline" size={25} style={styles.icon} />
          <TextInput
            placeholder="Write your name"
            placeholderTextColor="#333"
            style={styles.inputBox}
            typeContentType="name"
          />
        </View>
        <View style={styles.relative}>
          <Icon name="mail-open-outline" size={25} style={styles.icon} />
          <TextInput
            placeholder="Write your email"
            placeholderTextColor="#333"
            style={styles.inputBox}
            typeContentType="emailAddress"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.relative}>
          <Icon name="lock-closed-outline" size={25} style={styles.icon} />
          <TextInput
            placeholder="Write your password..."
            placeholderTextColor="#333"
            style={styles.inputBox}
            typeContentType="password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.relative}>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://mern-nest-ecommerce.herokuapp.com/profile.png",
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 80,
                resizeMode: "contain",
                borderWidth: 1,
                borderColor: "#999",
              }}
            />
            <TouchableOpacity>
              <View
                style={{
                  marginLeft: 10,
                  height: 50,
                  width: width * 1 - 100,
                  backgroundColor: "#f5f5f5",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "#333", fontSize: 18 }}>
                  Choose Photo
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={{ color: "#fff", fontSize: 18 }}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: width / 6 - 20,
          justifyContent: "flex-end",
        }}
      >
        <Text style={{ color: "#333", fontSize: 15, paddingRight: 10 }}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontSize: 15, color: "#3BB77E", paddingRight: 15 }}>
            {" "}
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    padding: 20,
    backgroundColor: "#e5e5e5",
    height: width * 2,
  },
  loginHeader: {
    width: width * 1,
    paddingTop: width / 5,
    paddingLeft: 10,
  },
  inputBox: {
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
  relative: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 10,
    color: "#3BB77E",
  },
  loginBox: {
    marginTop: width / 4,
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#3BB77E",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
