import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components
import ListingsScreen from '../screens/ListingsScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{ headerShown: false }}
    />
    <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
    <Tab.Screen name="Account" component={AccountNavigator} />
  </Tab.Navigator>
);

export default AppNavigator;
