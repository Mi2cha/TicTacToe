import React, {useEffect, useState} from 'react';
import firebase from 'firebase';
import {Alert} from "react-native";


const firebaseConfig = {
    apiKey: "AIzaSyDcHtecWCTn8Neegk0wXKtVD5MAr2qNM6Q",
    authDomain: "",
    databaseURL: "https://tictactoe-523cd-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "tictactoe-523cd",
    storageBucket: ""
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const [games, setGames] = useState();
const [green, setGreen] = useState();
const [red, setRed] = useState();


export function setGames() {
    let valGames = 0;
    firebase.database().ref('users/1').once('value', (snapshot) => {
        valGames = snapshot.val().games;
        valGames++;
        firebase.database().ref('users/1/games').set(valGames)
    });
}

export function setGreen() {
    let valGreen = 0;
    firebase.database().ref('users/1').once('value', (snapshot) => {
        valGreen = snapshot.val().green;
        valGreen++;
        firebase.database().ref('users/1/green').set(valGreen)
    });
}

export function setRed() {
    let valRed = 0;
    firebase.database().ref('users/1').once('value', (snapshot) => {
        valRed = snapshot.val().red;
        valRed++;
        firebase.database().ref('users/1/red').set(valRed)
    });
}

export function reset() {
    firebase.database().ref('users/1/').set({
        games: 0,
        green: 0,
        red: 0
    });
}

export function getGames() {
    firebase.database().ref('users/1').on('value', (snapshot) => {
        let games = snapshot.val().games;
        console.log("games vorher: "+games)
        games=1;
        console.log("games: "+games)
        return games;
    });
}
export function getGreen() {
    firebase.database().ref('users/1').on('value', (snapshot) => {
        const green = snapshot.val().green;
        console.log(green+"gre")
        return green;
    });
}
export function getRed () {
    firebase.database().ref('users/1').on('value', (snapshot) => {
        const red = snapshot.val().red;
        console.log(red+"re")
        return red;
    });
}

export const remove = () => {
    firebase.database().ref('users/1').remove();
}

