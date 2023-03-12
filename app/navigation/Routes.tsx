import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import List from '../screens/List';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import { stacks } from './stacks';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={stacks.main.home} component={Home}/>
                <Stack.Screen name={stacks.main.list} component={List}/>
                <Stack.Screen name={stacks.main.screen1} component={Screen1}/>
                <Stack.Screen name={stacks.main.screen2} component={Screen2}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
