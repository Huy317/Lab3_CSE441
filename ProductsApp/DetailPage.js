import React from "react";
import { Text } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const DetailPage = () =>{
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>Detail</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
export default DetailPage;