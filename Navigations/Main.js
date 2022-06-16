import React from "react";
import HomeScreen from "../src/screens/HomeScreen";
import AuthScreen from "../src/screens/AuthScreen";
import Tabs from "./Tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProductsScreen from "../src/screens/ProductsScreen";
import WishlistScreen from "../src/screens/WishlistScreen";
import CartScreen from "../src/screens/CartScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import DrawerItems from "../src/components/Layout/DrawerItems";
import Icon from "react-native-vector-icons/Ionicons";

const Main = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: "#3BB77E",
                drawerActiveTintColor: "#fff",
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontSize: 15,
                    marginVertical: 2
                },
            }}
            drawerContent={(props) => <DrawerItems {...props} />}
        >
            <Drawer.Screen
                name="Home"
                component={Tabs}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name="home-outline" size={25} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Products"
                component={ProductsScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name="pricetags-outline" size={25} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Wishlist"
                component={WishlistScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name="heart-outline" size={25} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="My Cart"
                component={CartScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name="cart-outline" size={25} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon name="person-outline" size={25} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default Main;
