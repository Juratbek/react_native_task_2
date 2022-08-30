import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Modal = ({children}) => (
  <View style={styles.container}>
    <View style={styles.modal}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modal: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 335,
    padding: 20,
    borderRadius: 5,
  },
});
