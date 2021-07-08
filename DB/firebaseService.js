import React, {useEffect, useState} from 'react';
import firebase from 'firebase';
import {Alert, Text, Vibration, View} from "react-native";


let myFirebase=null;

const firebaseConfig = {
    apiKey: "AIzaSyDcHtecWCTn8Neegk0wXKtVD5MAr2qNM6Q",
    authDomain: "",
    databaseURL: "https://tictactoe-523cd-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "tictactoe-523cd",
    storageBucket: ""
};

if (!firebase.apps.length) {
    myFirebase=firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

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

export function getFirebase(){
    return myFirebase;
}

export const remove = () => {
    firebase.database().ref('users/1').remove();
}

