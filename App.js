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
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';

const App: () => Node = () => {
  return (
    <SafeAreaView >
      {/* <SearchResultScreen /> */}
      {/* <DestinationSearchScreen /> */}
      <GuestsScreen />
    </SafeAreaView>
  );
};


export default App;
