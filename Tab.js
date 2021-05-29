import React from "react";
// import PropTypes from "prop-types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import Cart from "./screens/cart/Cart";
import RootProduct from "./screens/product/RootProduct";
import RootAuth from "./screens/login/RootAuth";

const Tab = createBottomTabNavigator();
function TabNav(props) {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {

        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
          
        } else if (route.name === 'Cart') {
          iconName = focused 
          ? 'cart' 
          : 'cart-outline';
        }else{
          iconName = focused 
          ? 'account-circle' 
          : 'account-circle-outline';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={30} color={color} type="material-community" />;
      },
    })}

      tabBarOptions={{
        activeTintColor: "#4e9f65",
        inactiveTintColor: "#ddd",
        style:{
          // width:"100%",
          paddingTop:7
        }
      }}
    >
     
      <Tab.Screen
        name="Home"
        component={RootProduct}
        options={{
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "",
          
        }}
        name="Cart"
        component={Cart}
      />
       <Tab.Screen
        options={{
          tabBarLabel: "",
        
        }}
        name="User"
        component={RootAuth}
      />
    </Tab.Navigator>
  );
}

// TabNav.propTypes = {};

export default TabNav;
