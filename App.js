// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import LoginScreen from './src/pages/Login';
import CadastroScreen from './src/pages/Cadastro';
import ForgotPasswordScreen from './src/pages/ForgotPassword';
import HomeScreen from './src/pages/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
          options={{headerShown: false}}
        />

        <Stack.Screen 
        name="Cadastro" 
        component={CadastroScreen} />

        <Stack.Screen 
        name="ForgotPassword" 
        component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}