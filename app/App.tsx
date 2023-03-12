/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { connectToDevTools } from "react-devtools-core";
import Routes from './navigation/Routes';
import Instabug, { InvocationEvent } from 'instabug-reactnative';

LogBox.ignoreAllLogs();

Instabug.init({
  token: 'a08ec29d67e4516bb6d5a4839e03f59b',
  invocationEvents: [InvocationEvent.shake, InvocationEvent.floatingButton, InvocationEvent.screenshot],
});

if (__DEV__) {
  connectToDevTools({
    host: "localhost",
    port: 8097,
  });
}

function App(): JSX.Element {
  useEffect(() => {
    // Instabug.start('a08ec29d67e4516bb6d5a4839e03f59b', [Instabug.invocationEvent.shake, Instabug.invocationEvent.screenshot]);
  }, []);

  return (
    <Routes />
  );
}

export default App;
