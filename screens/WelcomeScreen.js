import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Order your food from <Text style={styles.Restro}>Restro!</Text>
      </Text>
      <Image
        source={require('../assets/restaurant.png')}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Restaurants')}
        style={[
          styles.button,
          {
            backgroundColor: 'brown',
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

WelcomeScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DACABD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 40,
    paddingHorizontal: 120,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 200,
    marginBottom: 40,
    shadowColor: 'grey',
    shadowOpacity: 3,
  },
  Restro: {fontSize: 57},
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
