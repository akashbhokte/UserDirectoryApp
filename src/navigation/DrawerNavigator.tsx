import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import About from '../screens/About/About';
import List from '../screens/List/List';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="List">
      <Drawer.Screen name="List" component={List} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
