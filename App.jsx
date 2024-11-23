import React, { useState, useEffect } from 'react';
import {SafeAreaView, StatusBar,} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthNavigation from './src/screens/navigation/AuthNavigation';
// import MainNavTab from './src/screens/navigation/mainNavigation/mainNavTab';


const App = () => {
  const [authorized,setAuthorized] = useState(true);

  return (
    <SafeAreaProvider>
      <SafeAreaView  style={{ flex: 1}}>
          {/* {authorized ? <MainNavTab/> : <AuthNavigation/>} */}
          <AuthNavigation/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;