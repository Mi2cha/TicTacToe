import * as React from "react";
import {View, Text, Button, Alert, TouchableOpacity} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {useEffect, useState} from "react";
import {AntDesign} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons'
import PlayScreen from "./Screens/PlayScreen";
import HomeScreen from "./Screens/HomeScreen";



const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TicTacToe" component={HomeScreen}/>
                <Stack.Screen name="Play" component={PlayScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

