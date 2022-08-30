/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Image, StyleSheet} from 'react-native';
import {Home, ProductDetails} from './src/screens';
import {Basket, Burger} from './src/assets/icons';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Favorites} from './src/screens/favorite';
import {Profile} from './src/screens/profile';

const Drawer = createDrawerNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#008ACE',
  },
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
};

const productDetailsOptions = {
  // title: '',
  headerRight: () => (
    <View style={styles.icons}>
      <Image source={require('./src/assets/heart.png')} />
      <Basket />
    </View>
  ),
};

const homeOptions = navigation => {
  return {
    title: 'Ecommerce Store',
    headerLeft: () => (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => navigation.openDrawer()}>
        <Burger />
      </TouchableHighlight>
    ),
    headerRight: () => <Basket />,
  };
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={screenOptions} initialRouteName="Home">
        <Drawer.Screen
          options={({navigation}) => homeOptions(navigation)}
          name="Home"
          component={Home}
        />
        <Drawer.Screen
          options={productDetailsOptions}
          name="Product Details"
          component={ProductDetails}
        />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Favorities" component={Favorites} />
      </Drawer.Navigator>
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
