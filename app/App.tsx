/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { LogBox } from 'react-native';
import { connectToDevTools } from "react-devtools-core";
import Routes from './navigation/Routes';

LogBox.ignoreAllLogs();

if (__DEV__) {
  connectToDevTools({
    host: "localhost",
    port: 8097,
  });
}

function App(): JSX.Element {
  return (
    <Routes />
  );
}

export default App;
