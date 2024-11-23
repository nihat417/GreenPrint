import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Login from '../auth/login';
import Register from '../auth/register';
import { StatusBar } from 'react-native';

const AuthStack = createNativeStackNavigator();


const AuthNavigation = () => {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor='#fff' barStyle={'dark-content'}/>
          <AuthStack.Navigator initialRouteName="LoginPage" screenOptions={{headerShown:false}}>
              <AuthStack.Screen name='LoginPage' component={Login}/>
              <AuthStack.Screen name='RegisterPage' component={Register}/>
          </AuthStack.Navigator>
      </NavigationContainer>
    )
  }
  
  export default AuthNavigation;