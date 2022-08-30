import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Success} from '../assets/icons';
import {Modal} from '../components';

export function ProductAddedScreen({navigation}) {
  return (
    <Modal>
      <Success />
      <Text>Product has been added to your cart</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
        <Text style={styles.text}>OK</Text>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
