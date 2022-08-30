import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export function ModalScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is a modal!</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Dismiss</Text>
      </TouchableOpacity>
    </View>
  );
}
