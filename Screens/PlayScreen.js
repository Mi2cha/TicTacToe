import {Alert, Text, TouchableOpacity, View, Vibration} from "react-native";
import {AntDesign, Entypo} from "@expo/vector-icons";
import * as React from "react";
import {useEffect, useState} from "react";
import {reset, setGreen, setRed, setGames} from "../DB/firebase";
import * as Haptics from 'expo-haptics';


export default function Play() {

    const [board, setBoard] = useState(["question", "question", "question", "question", "question", "question", "question", "question", "question"]);
    const [isCross, setIsCross] = useState(true);
    const [draw, setDraw] = useState(0);
    const PATTERN = [1000, 1000, 2000]

    useEffect(() => {
        if (draw===9){
            setGames();
        }
        if (winGame() !== "") {
            Vibration.vibrate(PATTERN)
            setGames();
            if (isCross) {
                Alert.alert("Congratulations Green", "You won the Game!");
                setGreen();
            } else {
                Alert.alert("Congratulations Red", "You won the Game!");
                setRed();
            }

        }
    }, [board]);

    function drawItem(number) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
       setDraw(draw+1);
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
        reset();
        setIsCross(true);
        setDraw(0);
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