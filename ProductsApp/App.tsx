import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet } from 'react-native';
import {
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ProductList from './ProductList';


function App(): React.JSX.Element {
  return(
      <ProductList />
  );
}



export default App;
