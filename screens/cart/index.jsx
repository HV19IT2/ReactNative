import React from 'react';
import { Text, View } from 'react-native';
import { Button, Header } from 'react-native-elements';

const Cart = () => {
    return (
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'CART', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                />
        </View>
    );
}

export default Cart;
