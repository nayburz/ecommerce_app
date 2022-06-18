import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../Redux/Actions/UserActions";


var { width } = Dimensions.get("window");

export default function Login({ navigation }) {

    const dispatch = useDispatch();

    const { error, loading, isAuthenticated } = useSelector(
        (state) => state.user
    );

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const loginSubmit = () => {
        dispatch(userLogin(email, password))
    }

    useEffect(() => {
        if (error) {
            alert(error);

        }

        if (isAuthenticated) {
            console.log("you logined")

        }
    }, [dispatch, error, alert, isAuthenticated])


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
                    Sign In To continue!
                </Text>
            </View>
            <View style={styles.loginBox}>
                <View style={styles.relative}>
                    <Icon name="mail-open-outline" size={25} style={styles.icon} />
                    <TextInput
                        placeholder="Write your email..."
                        placeholderTextColor="#333"
                        style={styles.inputBox}
                        typeContentType="emailAddress"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
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
                        value={password}
                        onChangeText={setPassword}
                    />
                    <Text
                        style={{
                            color: "#333",
                            fontSize: 15,
                            textAlign: "right",
                        }}
                    >
                        Forgot Password
                    </Text>
                    <TouchableOpacity
                        onPress={loginSubmit}
                    >
                        <View style={styles.button}>
                            <Text style={{ color: "#fff", fontSize: 18 }}>Login</Text>
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
                <Text style={{ color: "#333", fontSize: 15, paddingRight: 10 }}>I'm a new user.</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text style={{ fontSize: 15, color: "#3BB77E", paddingRight: 15 }}> Sign Up</Text>
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
