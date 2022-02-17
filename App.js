/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import SearchResultScreen from './src/screens/SearchResults';

const App: () => Node = () => {
  return (
    <SafeAreaView >
      <SearchResultScreen />
    </SafeAreaView>
  );
};


export default App;
