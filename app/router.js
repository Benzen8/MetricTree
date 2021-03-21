import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginController from './Login';
import DashBoardController from './DashBoard';

const Stack = createStackNavigator();
function Router() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginController}
        options={{headerShown: false}}
        />
      <Stack.Screen name="DashBoard" component={DashBoardController} />
    </Stack.Navigator>
  );
}

export default Router;
