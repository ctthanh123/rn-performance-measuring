import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import List from '../screens/List';
import { stacks } from './stacks';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={stacks.main.home} component={Home}/>
                <Stack.Screen name={stacks.main.list} component={List}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
