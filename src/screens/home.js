/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {Card, Navbar, SearchInput} from '../components';

const list = [
  {
    imgSource: require('../assets/xiaomi.png'),
    cost: 244,
    currentCost: 222,
    salePercent: 9,
  },
  {
    imgSource: require('../assets/oppo.png'),
    cost: 200,
    currentCost: 150,
    salePercent: 25,
  },
  {
    imgSource: require('../assets/iphone.png'),
    cost: 749,
    currentCost: 849,
  },
];

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <View style={styles.search}>
        <SearchInput />
      </View>
      <View style={styles.list}>
        {list.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    elevation: 2,
    padding: 20,
    shadowColor: '#00000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
});
