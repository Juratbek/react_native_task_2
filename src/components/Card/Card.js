import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './Card.style';

export const Card = ({imgSource, cost, currentCost, salePercent}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imgBlock}>
          <Image style={styles.image} source={imgSource} />
        </View>
        <View>
          <Text>OPPO K3</Text>
          <View style={styles.text}>
            <Text style={styles.bold}>${currentCost}</Text>
            <Text style={{...styles.lined, ...styles.bold}}>${cost}</Text>
            {salePercent && (
              <Text style={{...styles.discount, ...styles.bold}}>
                {salePercent}% Off
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
