import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../theme/appTheme';
import { RegistroScreen } from '../screens/RegistroScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown: false,
            cardStyle:{
                backgroundColor: PRIMARY_COLOR
            }
        }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegistroScreen} />
    </Stack.Navigator>
  );
}