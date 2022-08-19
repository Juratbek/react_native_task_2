/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Card, Navbar, SearchInput} from '../components';
import {product} from '../services';

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    product
      .get()
      .then(res => res.json())
      .then(data => setProducts(data.data));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <View style={styles.search}>
        <SearchInput />
      </View>
      <ScrollView>
        <View style={styles.list}>
          {products.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </View>
      </ScrollView>
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
