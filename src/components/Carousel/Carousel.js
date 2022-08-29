import React from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {IMG_BASE_URL} from '../../services/constants';

const getStyle = (...styles) => {
  return styles.reduce((res, style) => ({...res, ...style}), {});
};

export const Carousel = ({images = []}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/prev.png')} />
      </View>
      <View style={styles.images}>
        <ScrollView horizontal>
          {images.map((image, index) => (
            <View key={index} style={styles.carouselItem}>
              <Image
                style={styles.image}
                source={{uri: `${IMG_BASE_URL}/${image.id}`}}
              />
            </View>
          ))}
        </ScrollView>
        <View style={styles.dots}>
          {images.map((_, index) => (
            <View
              style={getStyle(styles.dot, index === 0 && styles.active)}
              key={index}
            />
          ))}
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
  images: {
    alignItems: 'center',
    flex: 1,
  },
  carouselItem: {
    paddingLeft: 20,
    paddingRight: 20,
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
