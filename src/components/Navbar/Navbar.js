import React from 'react';
import {View, Text} from 'react-native';
import {Burger, Basket} from '../../assets/icons';
import {styles} from './Navbar.style';

export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Burger />
      <Text style={styles.title}>Ecommerce Store</Text>
      <Basket />
    </View>
  );
};
