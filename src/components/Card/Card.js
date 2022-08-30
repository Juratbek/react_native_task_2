import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {IMG_BASE_URL} from '../../services/constants';
import {styles} from './Card.style';

export const Card = ({attributes, relationships, navigation}) => {
  const {name, display_price} = attributes;
  const {
    images: {data},
  } = relationships;

  const clickHandler = () => {
    navigation.navigate('Product Details');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={clickHandler}>
        <View style={styles.imgBlock}>
          <Image
            style={styles.image}
            source={{uri: `${IMG_BASE_URL}/${data[0].id}`}}
          />
        </View>
        <View>
          <Text>{name}</Text>
          <View style={styles.text}>
            <Text style={styles.bold}>{display_price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
