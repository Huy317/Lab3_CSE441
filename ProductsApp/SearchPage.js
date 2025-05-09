import React from "react";
import { Text } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const SearchPage = () =>{
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>Search</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default SearchPage;