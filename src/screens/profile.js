import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

export const Profile = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Modal')}>
        <Text>Open Modal</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
