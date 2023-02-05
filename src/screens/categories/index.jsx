import { Button, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const Categories = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <Text>Categories</Text>
            <Button title="Ir a Products" onPress={ () => navigation.navigate('Products')} color="#000" />
        </View>
    )
}

export default Categories;