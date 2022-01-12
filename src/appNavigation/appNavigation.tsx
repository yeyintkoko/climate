import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../features/weather/Dashboard/dashboard';
const Stack = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Dashboard} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
