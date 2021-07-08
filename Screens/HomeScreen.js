import {Button, View, StyleSheet, Text, Share} from "react-native";
import * as React from 'react';
import {getGames, getGreen, getRed} from "../DB/firebase";
import {useEffect, useState} from "react";


export default function HomeScreen({navigation}) {

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'HI',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                } else {
                }
            } else if (result.action === Share.dismissedAction) {
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Button
                title="Play"
                onPress={() => navigation.navigate('Play')}
            />
            <View>
                <Text>
                   Games: {games}
                </Text>
                <Text>
                   Green: {green}
                </Text>
                <Text>
                   Red: {red}
                </Text>
            </View>
            <View style={{ marginTop: 50 }}>
                <Button onPress={onShare} title="Share" />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 15,
    },
    games:{

    }
});