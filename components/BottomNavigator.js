import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import StartPage from '../screens/StartPage';
import ScreenBoard from '../screens/ScreenBoard';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="StartPage" component={StartPage} />
      <Tab.Screen name="ScreenBoard" component={ScreenBoard} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
export default BottomNavigator;