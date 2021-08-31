/** @format */

import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { COLOR_ORANGE } from './src/styles/colors';
import Navigation from './src/navigation';

export default function App() {
  return (
    <PaperProvider>
      <StatusBar barStyle="light-content" backgroundColor={COLOR_ORANGE} />
      <Navigation />
    </PaperProvider>
  );
}
