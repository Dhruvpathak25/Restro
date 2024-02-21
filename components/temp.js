import {StyleSheet, Text, View} from 'react-native';

const Orangebox = props => {
  const {item} = props;

  let totalQuantity = tempArr.reduce((total, item) => total + item.count, 0);
  console.log('🚀 ~ Orangebox ~ totalQuantity:', totalQuantity);
  let totalPrice = tempArr.reduce((total, item) => total + item.price, 0);
  console.log('🚀 ~ Orangebox ~ totalPrice:', totalPrice);

  if (count > 0) {
    return (
      <View style={styles.totalBox}>
        <View style={styles.continueContainer}>
          <Text style={styles.continue}>Continue</Text>
        </View>
        <View style={styles.quantityPriceContainer}>
          <Text style={styles.quantity}>{count} item</Text>
          <Text style={styles.price}>₹{price}</Text>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  totalBox: {
    position: 'absolute',
    bottom: 25,
    backgroundColor: '#F56826',
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#F56826',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  continueContainer: {flex: 1},
  continue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityPriceContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Orangebox;
