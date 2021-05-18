import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CartDetail from './CartDetail';
import Payment from './Payment';
const Stack = createStackNavigator();

const Cart = (props) => {
    return (
     
           <Stack.Navigator>
               <Stack.Screen name="Cart" component={CartDetail} />
                <Stack.Screen name="Payment" component={Payment} />           
            </Stack.Navigator>
    );
}
export default Cart;

