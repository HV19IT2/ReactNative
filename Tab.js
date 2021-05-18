import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { Iconc } from 'react-native-elements';
import Product from "./screens/product";
import Cart from "./screens/cart/Cart";
import RootProduct from "./screens/product/RootProduct";
import RootAuth from "./screens/login/RootAuth";

const Tab = createBottomTabNavigator();
function TabNav(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#38c930",
        inactiveTintColor: "#78c930",
        backgroundColor:"#969696",
      }}
    >
     
      <Tab.Screen
        name="Home"
        component={RootProduct}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ tintColor }) => {
            return (
              <MaterialCommunityIcons name="home" color={tintColor} size={25} />
            );
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ tintColor }) => {
            return (
              <MaterialCommunityIcons name="book" color={tintColor} size={25} />
            );
          },
        }}
        name="Cart"
        component={Cart}
      />
       <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ tintColor }) => {
            return (
              <MaterialCommunityIcons name="account" color={tintColor} size={25} />
            );
          },
        }}
        name="User"
        component={RootAuth}
      />
    </Tab.Navigator>
  );
}

TabNav.propTypes = {};

export default TabNav;
