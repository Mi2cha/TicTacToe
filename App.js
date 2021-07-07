import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
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

