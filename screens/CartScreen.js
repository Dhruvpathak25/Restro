import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const CartScreen = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <View>
      {cartItems.map(item => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Text>Quantity: {item.quantity}</Text>
          <Text>Total Price: {item.price * item.quantity}</Text>
        </View>
      ))}
    </View>
  );
};

export default CartScreen;
