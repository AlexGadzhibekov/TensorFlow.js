import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TabNavigator from './TabNavigation';
import Mobilenet from '../screens/Mobilenet';
import Cocossd from '../screens/Cocossd';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName="TabNavigator" headerMode="none">
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Mobilenet" component={Mobilenet} />
        <Stack.Screen name="Cocossd" component={Cocossd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
