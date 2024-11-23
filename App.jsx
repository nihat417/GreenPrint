import React, { useState, useEffect } from 'react';
// import {SafeAreaView, StatusBar,} from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/screens/auth/login';
// import AuthNavigation from './src/screens/navigation/authNavigation';
// import MainNavTab from './src/screens/navigation/mainNavigation/mainNavTab';


const App = () => {
  const [authorized,setAuthorized] = useState(true);

  return (
    // <SafeAreaProvider>
    //   <SafeAreaView  style={{ flex: 1}}>
    //       {authorized ? <MainNavTab/> : <AuthNavigation/>}
    //   </SafeAreaView>
    // </SafeAreaProvider>
    <>
      <Login/>
    </>
  );
}

export default App;