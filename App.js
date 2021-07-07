import * as React from "react";
import {View, Text, Button, Alert, TouchableOpacity} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {useEffect, useState} from "react";
import {AntDesign} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons'

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Button
                title="Play"
                onPress={() => navigation.navigate('Play')}
            />

        </View>
    );
}

function Play() {


    const [board, setBoard] = useState(["question", "question", "question", "question", "question", "question", "question", "question", "question"]);
    const [isCross, setIsCross] = useState(true);

    useEffect(() => {
        if (winGame() !== "") {
            if (isCross){
                Alert.alert("Congratulations Green");
            }else {
                Alert.alert("Congratulations Red");
            }
        }
    }, [board]);

    function drawItem(number) {
        if (board[number] === "question" && winGame() === "") {
            if (isCross) {
                const some_array = [...board]
                some_array[number] = "minuscircleo";
                setBoard(some_array);
            } else {
                const some_array = [...board]
                some_array[number] = "pluscircleo";
                setBoard(some_array);
            }
            setIsCross(!isCross);
        }
    }

    const resetGame = () => {
        setIsCross(true);
        setBoard(["question", "question", "question", "question", "question", "question", "question", "question", "question"]);
    }

    function chooseItemColor(number) {
        if (board[number] === "minuscircleo")
            return '#FF3031';
        else if (board[number] === "pluscircleo")
            return '#45CE30';

        return '#01CBC6';
    }

    let test = 0;
    const winGame = () => {
        test++;
        if (board[0] !== "question" && board[0] === board[1] && board[1] === board[2]) {
            return board[0]
        } else if (board[3] !== "question" && board[3] === board[4] && board[4] === board[5]) {
            return board[3]
        } else if (board[6] !== "question" && board[6] === board[7] && board[7] === board[8]) {
            return board[6]
        } else if (board[0] !== "question" && board[0] === board[3] && board[3] === board[6]) {
            return board[0]
        } else if (board[1] !== "question" && board[1] === board[4] && board[4] === board[7]) {
            return board[1]
        } else if (board[2] !== "question" && board[2] === board[5] && board[5] === board[8]) {
            return board[2]
        } else if (board[0] !== "question" && board[0] === board[4] && board[4] === board[8]) {
            return board[0]
        } else if (board[2] !== "question" && board[2] === board[4] && board[4] === board[6]) {
            return board[2]
        } else {
            return ""
        }
    }

    return (

        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{color: "#01CBC6", fontSize: 50}}>Tic Tac Toe</Text>

            <View style={{flexDirection: "row"}}>
                <TouchableOpacity style={{margin: 30, padding: 20}} onPress={() => drawItem(0)}>
                    <AntDesign name={board[0]} size={32} color={chooseItemColor(0)}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 30, padding: 20}} onPress={() => drawItem(1)}>
                    <AntDesign name={board[1]} size={32} color={chooseItemColor(1)}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 30, padding: 20}} onPress={() => drawItem(2)}>
                    <AntDesign name={board[2]} size={32} color={chooseItemColor(2)}/>
                </TouchableOpacity>

            </View>

            <View style={{flexDirection: "row"}}>
                <TouchableOpacity style={{margin: 30, padding: 20}} onPress={() => drawItem(3)}>
                    <AntDesign name={board[3]} size={32} color={chooseItemColor(3)}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 30, padding: 20}} onPress={() => drawItem(4)}>
                    <AntDesign name={board[4]} size={32} color={chooseItemColor(4)}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 30, padding: 20}} onPress={() => drawItem(5)}>
                    <AntDesign name={board[5]} size={32} color={chooseItemColor(5)}/>
                </TouchableOpacity>

            </View>

            <View style={{flexDirection: "row"}}>
                <TouchableOpacity style={{margin: 30, padding: 20}} onPress={() => drawItem(6)}>
                    <AntDesign name={board[6]} size={32} color={chooseItemColor(6)}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 30, padding: 20}} onPress={() => drawItem(7)}>
                    <AntDesign name={board[7]} size={32} color={chooseItemColor(7)}/>
                </TouchableOpacity>
                <TouchableOpacity style={{margin: 30, padding: 20}} onPress={() => drawItem(8)}>
                    <AntDesign name={board[8]} size={32} color={chooseItemColor(8)}/>
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={{
                margin: 30,
                flexDirection: "row",
                padding: 20,
                backgroundColor: "#01CBC6",
                width: 200,
                borderRadius: 20
            }} onPress={() => resetGame()}>
                <Entypo name="controller-jump-to-start" size={32} color="#2B2B52"/>
                <Text style={{color: "#2B2B52", fontSize: 20}}>Restart Game</Text>
            </TouchableOpacity>
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="TicTacToe" component={HomeScreen}/>
                <Stack.Screen name="Play" component={Play}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

