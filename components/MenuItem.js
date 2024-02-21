import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
const MenuItem = ({
  item,
  handleAddItem = () => {},
  handleIncrement = () => {},
  handleDecrement = () => {},
}) => {
  const [showQuantity, setShowQuantity] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleAddClick = () => {
    setShowQuantity(true);
    setQuantity(1);
    handleAddItem(item);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      handleDecrement(item, item.name, item.price, newQuantity);
      if (newQuantity === 0) {
        setShowQuantity(false);
      }
    }
  };

  const handleIncrease = () => {
    const count = quantity + 1;
    setQuantity(count);
    handleIncrement(item, item.name, item.price, count);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.dishName}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.rowContainer}>
          {showQuantity ? (
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.quantityButtonMinus}
                onPress={handleDecrease}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <View style={styles.quantityBox}>
                <Text style={styles.quantityText}>{quantity}</Text>
              </View>
              <TouchableOpacity
                style={styles.quantityButtonPlus}
                onPress={handleIncrease}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity style={styles.addButton} onPress={handleAddClick}>
              <Text style={styles.addButtonText}>+ Add</Text>
            </TouchableOpacity>
          )}
          <View style={styles.priceRatingContainer}>
            <Text style={styles.price}>₹{item.price}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>
                {' '}
                {'\u2B50'} {item.rating}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  leftContainer: {
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  addButton: {
    borderWidth: 1,
    borderColor: '#F56826',
    borderRadius: 5,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginRight: 11,
    marginLeft: 5,
    marginTop: 2,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: '#F56826',
    fontWeight: 'bold',
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  quantityButtonMinus: {
    backgroundColor: '#F56826',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: 'absolute',
    left: 2,
    marginLeft: 2,
  },
  quantityButtonPlus: {
    backgroundColor: '#F56826',
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 3,
    position: 'absolute',
    left: 68,
  },
  quantityButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  quantityBox: {
    borderWidth: 1,
    borderColor: '#F56826',
    paddingHorizontal: 15,
    width: 65,
    alignItems: 'center',
    paddingVertical: 5,
    marginLeft: 15,
  },
  quantityText: {
    color: '#F56826',
    fontWeight: 'bold',
    fontSize: 18,
  },
  priceRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 18,
    color: 'red',
    marginRight: 10,
  },
  ratingContainer: {
    backgroundColor: '#f56826',
    paddingHorizontal: 0,
    paddingVertical: 5,
    borderRadius: 10,
    width: 53,
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    color: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});

export default MenuItem;
