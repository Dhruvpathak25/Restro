// Restaurant1MenuScreen.js
import React from 'react';
import MenuScreen from './MenuScreen';

const restaurantData = {
  id: 'restaurant1',
  name: 'Restaurant 1',
  image: 'restaurant1_image_url',
  cookingTime: '20 mins',
  distance: '2 miles',
  categories: {
    'Main Course': [
      {
        id: 'dish1',
        name: 'Dish 1',
        description: 'Description for Dish 1',
        price: 10,
        image: 'dish1_image_url',
      },
      {
        id: 'dish2',
        name: 'Dish 2',
        description: 'Description for Dish 2',
        price: 15,
        image: 'dish2_image_url',
      },
      // Add more dishes for Main Course category
    ],
    Snacks: [
      {
        id: 'dish3',
        name: 'Dish 3',
        description: 'Description for Dish 3',
        price: 8,
        image: 'dish3_image_url',
      },
      {
        id: 'dish4',
        name: 'Dish 4',
        description: 'Description for Dish 4',
        price: 12,
        image: 'dish4_image_url',
      },
      // Add more dishes for Snacks category
    ],
    // Add more categories...
  },
};

const Restaurant1MenuScreen = () => {
  return <MenuScreen route={{params: {restaurant: restaurantData}}} />;
};

export default Restaurant1MenuScreen;
