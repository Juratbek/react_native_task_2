/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {Warning} from '../assets/icons';
import {Modal} from '../components';

export function LoginModal({navigation}) {
  return (
    <Modal>
      <Warning />
      <Text>Login To Continue</Text>
      <Text style={{fontSize: 10}}>
        Please login to add product in your cart
      </Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.text}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
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
