import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet } from 'react-native';
import {
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type itemProps = {
  imgUrl: string,
  title: string,
  description: string,
  price: string,
  rating: string,
  brand: string,
  discountPercentage: string
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
  const Item = ({ imgUrl, title, description, price, rating, brand,discountPercentage }: itemProps) => (
    // <View style={{ marginVertical: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 }}>
    //   <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
    //   <Text style={{ fontSize: 16 }}>Price: ${price}</Text>
    //   <Text numberOfLines={2}>{description}</Text>
    //   <Text>Rating: {rating}</Text>
    //   <Text>Brand: {brand}</Text>
    // </View>
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ backgroundColor: '#efe', flexDirection: 'row', padding: 10 }}>
        <View style={{ flex: 1, alignItems: 'center'}}>
          <Image
            source={{ uri: imgUrl }}
            style={{ width: 100, height: 100, borderRadius: 10 }}
          />
        </View>
        <View style={{ flex: 3 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
          <Text style={{ fontSize: 16 }}>Price: ${price}</Text>
          <Text style={{fontSize: 16, color: 'green'}}>Discount: {discountPercentage}%</Text>
          <Text>Description: {description}</Text>
          <Text>Rating: {rating}</Text>
          <Text>Brand: {brand}</Text>
          <View style={{flexDirection: 'row'}}>
              <Button>Detail</Button>
              <Button>Add</Button>
              <Button>Delete</Button>
          </View>
        </View>
      </View>
    </View>

  );
  return (

    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.bigText}>Product list</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item title={item.title} imgUrl={item.thumbnail} description={item.description} price={item.price} rating={item.rating} brand={item.brand} discountPercentage={item.discountPercentage} />}
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
  },

});

export default App;
