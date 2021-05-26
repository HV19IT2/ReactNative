import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import api from '../../api';
import config from '../../api/config';
import ItemFlower from './ItemFlower';
import { createStackNavigator } from '@react-navigation/stack';
import DetailPrd from './DetailPrd';
import Product from './index';
const Stack = createStackNavigator();

const RootProduct = () => {
    return (
     
           <Stack.Navigator>
               <Stack.Screen name="ProductHome" component={Product} />
                <Stack.Screen name="Detail" component={DetailPrd} />
            
            </Stack.Navigator>
    );
}

export default RootProduct;
