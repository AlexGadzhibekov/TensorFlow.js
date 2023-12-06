// TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Mobilenet from '../screens/Mobilenet';
import Cocossd from '../screens/Cocossd';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Mobilenet" component={Mobilenet} />
      <Tab.Screen name="Cocossd" component={Cocossd} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
