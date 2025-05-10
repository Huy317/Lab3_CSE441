import React, { useEffect, useState } from "react";
import { Card, Text } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const DetailPage = () =>{
    
    const [data, setData] = useState([]);
    const filePath = 'https://dummyjson.com/products/2';
    useEffect(
        ()=>{
            fetch(filePath).then((response)=>{
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }).then((d)=>{
                setData(d);
            }).catch((error) => {
                console.error('Error fetching data: ', error);
            })
        }
    );
    
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
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <Text style={styles.title}>Product Detail</Text>
                <Item title={data.title} imgUrl={data.thumbnail} description={data.description} price={data.price} rating={data.rating} brand={data.brand} discountPercentage={data.discountPercentage} />
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
export default DetailPage;