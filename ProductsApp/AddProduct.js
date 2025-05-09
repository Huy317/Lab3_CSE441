import React, { use, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const AddProductPage = () => {
    // title, description, price, rating, brand, discountPercentage
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0.0);
    const [brand, setBrand] = useState("");
    const [discount, setDiscount] = useState(0);
    
    function handleSubmit(){
        
    }
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <Text style={styles.title}>Add a Product</Text>
                <TextInput label='Title' value={title} onChangeText={text => setTitle(text)} style={styles.input}/>
                <TextInput label='Description' value={description} onChangeText={text => setDescription(text) } style={styles.input}/>
                <TextInput label='Price' value={price} onChangeText={text => setPrice(text)} style={styles.input}/>
                <TextInput label='Discount Percentage' value={discount} onChangeText={text => setDiscount(text)} style={styles.input}/>
                <TextInput label='Rating' value={rating} onChangeText={text => setRating(text)} style={styles.input}/>
                <TextInput label='Brand' value={brand} onChangeText={text => setBrand(text)} style={styles.input}/>
                <Button mode="contained" onPress={handleSubmit}>Submit</Button>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    title:{
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold'
    },
    label: {
        color: 'gray',
        fontWeight: 'bold'
    },
    input: {
        marginVertical: 10,
        padding: 5
    }
})
export default AddProductPage;