import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import Product from "./screens/product";
import Cart from "./screens/cart";
import RootProduct from "./screens/product/RootProduct";
import Login from "./screens/login";
const Tab = createBottomTabNavigator();
function TabNav(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#0000ff",
      }}
    >
     
      <Tab.Screen
        name="Trang chủ"
        component={RootProduct}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ tintColor }) => {
            return (
              <MaterialCommunityIcons name="home" color={tintColor} size={18} />
            );
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Giỏ hàng",
          tabBarIcon: ({ tintColor }) => {
            return (
              <MaterialCommunityIcons name="book" color={tintColor} size={18} />
            );
          },
        }}
        name="Cart"
        component={Cart}
      />
       <Tab.Screen
        options={{
          tabBarLabel: "Tài khoản",
          tabBarIcon: ({ tintColor }) => {
            return (
              <MaterialCommunityIcons name="book" color={tintColor} size={18} />
            );
          },
        }}
        name="User"
        component={Login}
      />
    </Tab.Navigator>
  );
}

TabNav.propTypes = {};

export default TabNav;
