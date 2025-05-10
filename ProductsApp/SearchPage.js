import React, { use, useState } from "react";
import { FlatList, View } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const SearchPage = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    let filePath = "https://dummyjson.com/products";
    function search() {
        if (value != '') {
            filePath = 'https://dummyjson.com/products/search?q=' + value;
        }
        fetch(filePath).then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then((d) => {
            setData(d.products);
        }).catch((error) => {
            console.error('Error fetching data: ', error);
        })
    }


    const Item = ({ imgUrl, title, description, price, rating, brand, discountPercentage }) => (
            <Card>
                <Card.Cover source={{ uri: imgUrl }} />
                <Card.Content>
                    <Text variant="titleLarge" style={styles.title}>{title}</Text>
                    <Text variant="bodySmall">Description: {description}</Text>
                    <Text variant="bodySmall">Price: {price}</Text>
                    <Text variant="bodySmall">Rating: {rating}</Text>
                    <Text variant="bodySmall">Brand: {brand}</Text>
                    <Text variant="bodySmall">Discount: {discountPercentage}</Text>
                </Card.Content>
            </Card>
    );
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Search Products</Text>
                <TextInput label={'Search'} style={{ margin: 10 }} onChangeText={(text) => setValue(text)} />
                <Button mode='contained' onPress={search}>SEARCH</Button>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Item title={item.title} imgUrl={item.thumbnail} description={item.description} price={item.price} rating={item.rating} brand={item.brand} discountPercentage={item.discountPercentage} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = {
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'grey'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
}
export default SearchPage;