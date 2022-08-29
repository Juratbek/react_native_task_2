/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {Card, Navbar, SearchInput} from '../components';
import {product} from '../services';

export const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    product
      .get()
      .then(res => res.json())
      .then(data => setProducts(data.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <View style={styles.search}>
        <SearchInput />
      </View>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({item}) => <Card {...item} />}
        scrollEnabled={true}
        contentContainerStyle={styles.list}
      />
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
