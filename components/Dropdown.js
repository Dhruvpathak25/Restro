import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Dropdown = ({options, onSelect}) => {
  return (
    <View style={styles.dropdownContainer}>
      {options.map(option => (
        <TouchableOpacity
          key={option}
          style={styles.optionButton}
          onPress={() => onSelect(option)}>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    position: 'absolute',
    top: 80, // Adjust this value as needed
    right: 10, // Adjust this value as needed
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
    zIndex: 1,
  },
  optionButton: {
    padding: 10,
  },
  optionText: {
    fontSize: 16,
  },
});

export default Dropdown;
