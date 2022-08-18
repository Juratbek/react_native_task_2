import React from 'react';
import {View} from 'react-native';
import {SearchIcon} from '../../assets/icons';
import {styles} from './SearchInput.style';

export const SearchInput = () => {
  return (
    <View style={styles.container}>
      <SearchIcon />
    </View>
  );
};
