import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const OrderConfirmationBox = ({quantity, totalPrice}) => {
  if (quantity === 1) {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.continueText}>Continue</Text>
          <Text>{`${quantity} Item${quantity > 1 ? 's' : ''}`}</Text>
          <Text>{`\u20B9${totalPrice}`}</Text>
        </View>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 10,
  },
  box: {
    width: '80%',
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  continueText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default OrderConfirmationBox;
