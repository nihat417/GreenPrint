import React, { useState, useEffect } from 'react';
import {SafeAreaView, StatusBar,} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthNavigation from './src/screens/navigation/AuthNavigation';
import MainNavTab from './src/screens/navigation/mainNavTab';
import { useStorage } from './src/hooks/useStorage';

const App = () => {
  const [authorized, setAuthorized] = useStorage('authorized', false);

  const handleAuthorization = (status) => {
    setAuthorized(status);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView  style={{ flex: 1}}>
          {authorized ? <MainNavTab/> : <AuthNavigation/>}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;