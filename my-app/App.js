// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <HomeScreen />
    </>
  );
}
