
import React from 'react';
import Home from '../screens/appscreens/Home';
import Cart from '../screens/appscreens/cart';
import Scrollpage from '../screens/appscreens/scrollpage';

import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryButton from '../components/CategoryButton';
const Stack = createNativeStackNavigator();

const Route = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Cart' component={Cart} />
                <Stack.Screen name='Scrollpage' component={Scrollpage} />
            </Stack.Navigator>
            <CategoryButton />
            {/* <CartBottomView /> */}
        </NavigationContainer>

    );
};
export default Route;