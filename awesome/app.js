import React from 'react';
import { View, Text } from 'react-native';
import Home from './app/index';
import Layout from './app/_layout';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Layout />
      <Home />
    </View>
  );
};

export default App;
