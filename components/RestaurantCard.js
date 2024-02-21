import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const RestaurantCard = ({restaurant}) => {
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();

  const toggleLike = () => {
    setLiked(!liked);
  };

  const getStarRating = () => {
    const stars = [];
    for (let i = 0; i < Math.floor(restaurant.rating); i++) {
      stars.push(
        <Text key={i} style={styles.star}>
          ⭐️
        </Text>,
      );
    }
    if (restaurant.rating % 1 !== 0) {
      stars.push(
        <Text key="half" style={styles.halfStar}>
          ⭐️
        </Text>,
      );
    }
    return stars;
  };

  const handleCardPress = () => {
    navigation.navigate('Menu', {restaurant});
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleCardPress}>
      <Image source={{uri: restaurant.image}} style={styles.image} />
      <TouchableOpacity onPress={toggleLike} style={styles.likeButton}>
        <Text style={liked ? styles.likeTextActive : styles.likeText}>❤️</Text>
      </TouchableOpacity>
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>{restaurant.cookingTime}</Text>
        <Text style={styles.overlayText}>{restaurant.distance}</Text>
      </View>
      <View style={styles.restaurantInfo}>
        <View style={styles.nameAndRating}>
          <Text style={styles.name}>{restaurant.name}</Text>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>
              {getStarRating()} {restaurant.rating}
            </Text>
          </View>
        </View>
        <Text style={styles.foodType}>{restaurant.foodType}</Text>
        <Text style={styles.price}>₹{restaurant.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  likeText: {
    fontSize: 24,
  },
  likeTextActive: {
    fontSize: 24,
    color: 'red',
  },
  overlay: {
    position: 'absolute',
    bottom: 110,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 5,
  },
  overlayText: {
    fontSize: 12,
  },
  restaurantInfo: {
    padding: 10,
  },
  nameAndRating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    color: 'white',
  },
  star: {
    fontSize: 16,
  },
  halfStar: {
    fontSize: 16,
    position: 'relative',
    top: -2,
  },
  foodType: {
    fontSize: 16,
    marginTop: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default RestaurantCard;
