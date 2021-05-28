import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailPrd from './DetailPrd';
import Product from './index';
// import rating from './rating';
const Stack = createStackNavigator();

const RootProduct = () => {
    return (
           <Stack.Navigator>
                <Stack.Screen 
                    options={{headerShown: false}}
                    name="Home" 
                    component={Product} />
                <Stack.Screen
                    options={{headerShown: false}}
                    name="Detail" 
                    component={DetailPrd} />
            
            </Stack.Navigator>
    );
}

export default RootProduct;
