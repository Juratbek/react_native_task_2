/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Image, StyleSheet} from 'react-native';
import {Home, ProductDetails} from './src/screens';
import {Basket, Burger} from './src/assets/icons';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#008ACE',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
        initialRouteName="Home">
        <Stack.Screen
          options={{
            title: 'Ecommerce Store',
            headerLeft: () => <Burger />,
            headerRight: () => <Basket />,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            title: '',
            headerRight: () => (
              <View style={styles.icons}>
                <Image source={require('./src/assets/heart.png')} />
                <Basket />
              </View>
            ),
          }}
          name="ProductDetails"
          component={ProductDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    width: 75,
    justifyContent: 'space-between',
  },
});

export default App;
