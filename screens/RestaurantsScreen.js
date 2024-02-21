import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import RestaurantCard from '../components/RestaurantCard';

const RestaurantsScreen = () => {
  const restaurants = [
    {
      id: 1,
      name: 'Restaurant 1',
      image:
        'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800',
      cookingTime: '30 mins',
      distance: '1.5 km',
      rating: 4.5,
      foodType: 'Italian',
      price: 200,
    },
    {
      id: 2,
      name: 'Restaurant 2',
      image:
        'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800',
      cookingTime: '20 mins',
      distance: '2 km',
      rating: 4,
      foodType: 'Chinese',
      price: 250,
    },
    {
      id: 3,
      name: 'Restaurant 3',
      image:
        'https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=800',
      cookingTime: '25 mins',
      distance: '3 km',
      rating: 4.7,
      foodType: 'Indian',
      price: 150,
    },
    {
      id: 4,
      name: 'Restaurant 4',
      image:
        'https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?auto=compress&cs=tinysrgb&w=800',
      cookingTime: '40 mins',
      distance: '5 km',
      rating: 4.2,
      foodType: 'Mexican',
      price: 180,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default RestaurantsScreen;
