import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import {
  Text,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type itemProps = {
  imgUrl: string,
  title: string,
  description: string,
  price: string,
  rating: string,
  brand: string
};



function App(): React.JSX.Element {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products';
  useEffect(() => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((d) => {
        setData(d.products);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  });
  const Item = ({ imgUrl, title, description, price, rating, brand }: itemProps) => (
    <View style={{ marginVertical: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
      <Text style={{ fontSize: 16 }}>Price: ${price}</Text>
      <Text numberOfLines={2}>{description}</Text>
      <Text>Rating: {rating}</Text>
      <Text>Brand: {brand}</Text>
    </View>
  );
  return (

    <SafeAreaProvider>

      <SafeAreaView style={styles.container}>
        <Text style={styles.bigText}>Product list</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item title={item.title} imgUrl={item.thumbnail} description={item.description} price={item.price} rating={item.rating} brand={item.brand} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  bigText: {
    fontSize: 30,
    color: '#aaa',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default App;
