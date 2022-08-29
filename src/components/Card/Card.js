import React from 'react';
import {View, Image, Text} from 'react-native';
import {IMG_BASE_URL} from '../../services/constants';
import {styles} from './Card.style';

export const Card = ({attributes, relationships}) => {
  const {name, display_price} = attributes;
  const {
    images: {data},
  } = relationships;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
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
      </View>
    </View>
  );
};
