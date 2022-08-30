import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Success} from '../assets/icons';

const Modal = ({navigation}) => (
  <View style={styles.modal}>
    <Success />
    <Text>Product has been added to your cart</Text>
    <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
      <Text style={styles.text}>OK</Text>
    </TouchableOpacity>
  </View>
);

export function ProductAddedScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Modal navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modal: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 335,
    height: 225,
    borderRadius: 5,
  },
  btn: {
    marginTop: 25,
    backgroundColor: 'blue',
    borderRadius: 4,
    width: 125,
    height: 40,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
