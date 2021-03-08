import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";


        
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import Login from "./components/Login";
import StartPage from "./screens/StartPage";
import BottomNavigator from "./components/BottomNavigator";

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;