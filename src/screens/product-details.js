import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Carousel} from '../components';
import {product as productApi} from '../services';

export const ProductDetails = ({navigation}) => {
  const [product, setProduct] = useState({});
  const {attributes, relationships} = product;

  const fetchData = () => {
    productApi
      .get(1)
      .then(res => res.json())
      .then(data => setProduct(data.data))
      .catch(console.error);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ScrollView style={{marginBottom: 40}}>
          <Carousel images={relationships?.images?.data} />
          <View style={styles.detail}>
            <Text>{attributes?.name}</Text>
            <View style={styles.text}>
              <Text style={styles.bold}>{attributes?.display_price}</Text>
            </View>
          </View>
          <View style={styles.detail}>
            <Text style={styles.title}>Select Color</Text>
            <View style={styles.color}>
              <Text>Blue</Text>
            </View>
          </View>
          <View style={styles.detail}>
            <Text style={styles.title}>Description</Text>
            <Text>{attributes?.description}</Text>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate('ProductAddedModal')}>
          <Text style={{color: 'white'}}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    margin: 20,
    marginTop: 43,
    marginBottom: 10,
    flex: 1,
  },
  detail: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 18,
    paddingTop: 18,
  },
  text: {
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  bold: {
    fontWeight: 'bold',
  },
  discount: {
    color: '#00A8F3',
    marginLeft: 10,
  },
  lined: {
    color: 'lightgray',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  color: {
    backgroundColor: '#eeecec',
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    width: 50,
    height: 30,
  },
  addBtn: {
    backgroundColor: '#008ACE',
    position: 'absolute',
    bottom: 0,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 4,
  },
});
