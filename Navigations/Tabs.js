import React from "react";
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../src/screens/HomeScreen";
import ProductsScreen from "../src/screens/ProductsScreen";
import WishlistScreen from "../src/screens/WishlistScreen";
import CartScreen from "../src/screens/CartScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import { Text, View, Image } from "react-native";
import Loader from "../src/components/Layout/Loader";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "../src/components/Products/ProductDetails.js";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const { user, loading } = useSelector((state) => state.user);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarHideOnKeyboard: true,
            }}
            initialRouteName="Home2"
          >
            <Tab.Screen
              name="Home2"
              component={simpleScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/BottomTab/home.png")}
                      style={{
                        width: 25,
                        height: 25,
                        resizeMode: "contain",
                        marginTop: 5,
                        tintColor: focused ? "crimson" : "black",
                      }}
                    />
                    <Text style={{ color: focused ? "crimson" : "black" }}>
                      Home
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="ProductsTab"
              component={ProductsScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/BottomTab/shop.png")}
                      style={{
                        width: 25,
                        height: 25,
                        resizeMode: "contain",
                        marginTop: 5,
                        tintColor: focused ? "crimson" : "black",
                      }}
                    />
                    <Text style={{ color: focused ? "crimson" : "black" }}>
                      Products
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="wishlist"
              component={WishlistScreen}
              options={{
                tabBarBadge: 2,
                tabBarIcon: ({ focused }) => (
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/BottomTab/heart.png")}
                      style={{
                        width: 25,
                        height: 25,
                        resizeMode: "contain",
                        marginTop: 5,
                        tintColor: focused ? "crimson" : "black",
                      }}
                    />
                    <Text style={{ color: focused ? "crimson" : "black" }}>
                      Wishlist
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="cartscreen"
              component={CartScreen}
              options={{
                tabBarBadge: 1,
                tabBarIcon: ({ focused }) => (
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/BottomTab/cart.png")}
                      style={{
                        width: 25,
                        height: 25,
                        resizeMode: "contain",
                        marginTop: 5,
                        tintColor: focused ? "crimson" : "black",
                      }}
                    />
                    <Text style={{ color: focused ? "crimson" : "black" }}>
                      Cart
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="profilescreen"
              component={ProfileScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={{ uri: user.avatar.url }}
                      style={{
                        width: 30,
                        height: 30,
                        resizeMode: "contain",
                        marginTop: 5,
                        borderRadius: 60,
                      }}
                    />
                    <Text style={{ color: focused ? "crimson" : "black" }}>
                      Profile
                    </Text>
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        </>
      )}
    </>
  );
}

const simpleScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerShown: "false",
        }
      }
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};
