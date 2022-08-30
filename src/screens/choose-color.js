/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Modal} from '../components';

export function ChooseColorScreen({navigation}) {
  return (
    <Modal>
      <Image source={require('../assets/error.png')} />
      <Text>Select color</Text>
      <Text style={{fontSize: 10}}>
        Please select your color to add this item in your cart
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
        <Text style={styles.text}>OK</Text>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
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
