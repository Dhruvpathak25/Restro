import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import MenuScreen from './screens/MenuScreen';
import CartScreen from './screens/CartScreen';
import React from 'react';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Restaurants"
          component={RestaurantsScreen}
          options={{title: 'Restaurants'}}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{title: 'Cart'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
