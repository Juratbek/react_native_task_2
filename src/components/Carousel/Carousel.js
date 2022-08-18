import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export const Carousel = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/prev.png')} />
      </View>
      <View style={styles.carouselItem}>
        <Image
          style={styles.image}
          source={require('../../assets/xiaomi-big.png')}
        />
        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={{...styles.dot, ...styles.active}} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
      <View>
        <Image source={require('../../assets/next.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 290,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  carouselItem: {
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  dots: {
    marginTop: 30,
    width: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 20,
    backgroundColor: '#C3C3C3',
  },
  active: {
    backgroundColor: '#008ACE',
  },
});
