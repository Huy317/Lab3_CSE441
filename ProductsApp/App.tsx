import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet } from 'react-native';
import {
  Text,
  View,
} from 'react-native';
import { BottomNavigation, Button } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ProductList from './ProductList';


function App(): React.JSX.Element {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'ProductList', title: 'Products', icon: 'home'},
    {key: 'ProductAdd', title: 'Add', icon: 'plus'},
    {key: 'ProductSearch', title: 'Search', icon: 'magnify'},
    {key: 'ProductDetail', title: 'Detail', icon: 'format-list-bulleted'},
  ]);
  const renderScene = BottomNavigation.SceneMap({
    ProductList: ProductList,
    ProductAdd: ProductList,
    ProductSearch: ProductList,
    ProductDetail: ProductList,
  })
  return(
      <SafeAreaProvider>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </SafeAreaProvider>

    
  );
}



export default App;
