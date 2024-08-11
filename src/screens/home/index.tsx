import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Working In Process</Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: { display: "flex", justifyContent: "center", alignItems: "center", flex: 1 },
    text: { fontSize: 25, fontWeight: "bold" }
})

