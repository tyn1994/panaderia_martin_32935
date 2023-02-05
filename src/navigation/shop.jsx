import { Categories, ProductDetail, Products } from '../screens/index';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen name="Categories" component={Categories} options={{
                headerShown: false,
                title: "Categorías"
            }} />
            <Stack.Screen name="Products" component={Products} options={{
                title: "Productos",
            }} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={{
                title: "Detalle del prod.",
            }} />
        </Stack.Navigator>
    )
}

export default ShopNavigator;