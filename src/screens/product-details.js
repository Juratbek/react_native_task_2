import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Back, Basket} from '../assets/icons';
import {Carousel} from '../components';

export const ProductDetails = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.navbar}>
        <Back />
        <View style={styles.icons}>
          <Image source={require('../assets/heart.png')} />
          <Basket />
        </View>
      </View>
      <View style={styles.container}>
        <ScrollView style={{marginBottom: 40}}>
          <Carousel />
          <View style={styles.detail}>
            <Text>Xiaomi Mi A3</Text>
            <View style={styles.text}>
              <Text style={styles.bold}>$222</Text>
              <Text style={{...styles.lined, ...styles.bold}}>$244</Text>
              <Text style={{...styles.discount, ...styles.bold}}>9% Off</Text>
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
            <Text>
              The phone features a 6.088 inch HD+ (1560 x 720 pixel) resolution,
              283ppi Super AMOLED display, a glass and plastic body, with
              Corning Gorilla Glass 5 protection on its front as well as its
              back. It is powered by a Qualcomm Snapdragon 665 SoC. It also has
              a 2.0, Type-C 1.0 reversible connector.
            </Text>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.addBtn}>
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
  navbar: {
    width: '100%',
    height: 55,
    flexDirection: 'row',
    backgroundColor: '#008ACE',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  icons: {
    flexDirection: 'row',
    width: 75,
    justifyContent: 'space-between',
  },
});
