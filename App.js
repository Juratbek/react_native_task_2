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
import {
  Home,
  ProductDetails,
  Favorites,
  Profile,
  ModalScreen,
  ProductAddedScreen,
} from './src/screens';
import {Basket, Burger} from './src/assets/icons';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const RootStack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#008ACE',
  },
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
};

const productDetailsOptions = {
  title: '',
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
        style={{marginLeft: 12}}
        onPress={() => navigation.openDrawer()}>
        <Burger />
      </TouchableHighlight>
    ),
    headerRight: () => (
      <View style={{marginRight: 12}}>
        <Basket />
      </View>
    ),
  };
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={screenOptions}
      initialRouteName="Product Details">
      <Drawer.Screen
        options={({navigation}) => homeOptions(navigation)}
        name="Home"
        component={Home}
      />

      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Favorities" component={Favorites} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" initialRouteName="Product Details">
        <RootStack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          options={{...screenOptions, ...productDetailsOptions}}
          name="Product Details"
          component={ProductDetails}
        />
        <RootStack.Screen
          name="Modal"
          options={{presentation: 'containedModal', headerShown: false}}
          component={ModalScreen}
        />
        <RootStack.Screen
          name="ProductAddedModal"
          options={{
            presentation: 'containedTransparentModal',
            headerShown: false,
          }}
          component={ProductAddedScreen}
        />
      </RootStack.Navigator>
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
