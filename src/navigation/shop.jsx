import { Categories, ProductDetail, Products } from '../screens/index';

import { THEME } from '../constants/theme';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categories" screenOptions={{
            headerStyle: THEME.colors.white,
            headerTintColor: THEME.colors.primary,
            headerTitleStyle: {
                fontFamily: "OpenSans-Bold",
            }
        }}>
            <Stack.Screen name="Categories" component={Categories} options={{
                headerShown: false,
                title: "Categorías"
            }} />
            <Stack.Screen name="Products" component={Products}
                options={({ route }) => ({
                    title: route.params.title
                })} />
            <Stack.Screen name="ProductDetail" component={ProductDetail}
                options={({ route }) => ({
                    title: route.params.title
                })} />
        </Stack.Navigator>
    )
}

export default ShopNavigator;