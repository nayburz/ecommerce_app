import { Text, View, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

export default function DrawerItems(props) {
  const { user } = useSelector((state) => state.user);
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 20,
        margin: 0,
      }}
    >
      <Image
        source={{ uri: user.avatar.url }}
        style={{
          width: 60,
          height: 60,
          borderRadius: 120,
          marginLeft: 10,
        }}
      />
      <Text style={{ color: "#333", fontSize: 16, paddingLeft: 10 }}>
        {user.name}
      </Text>

      <DrawerContentScrollView {...props}>
        <View
          style={{
            paddingTop: 10,
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 15,
          marginBottom: 15,
        }}
      >
        <Icon name="log-out-outline" size={30} />
        <Text style={{ color: "#333", fontSize: 16, paddingLeft: 10 }}>
          Log Out
        </Text>
      </View>
    </View>
  );
}
