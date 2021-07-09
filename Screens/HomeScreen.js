import {View, Text, Share, Vibration, Alert, StyleSheet} from "react-native";
import * as React from 'react';
import {useEffect, useState} from "react";
import {getFirebase, setGames, setGreen, setRed} from "../DB/firebaseService";
import {
    ArrowUpIcon,
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Icon,
    IconButton,
    NativeBaseProvider,
    SimpleGrid, Spacer
} from "native-base"
import {Entypo} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';


export default function HomeScreen({navigation}) {

    const [games, setGames] = useState(0);
    const [green, setGreen] = useState(0);
    const [red, setRed] = useState(0);

    useEffect(() => {
        getFirebase().database().ref('users/1').on('value', (snapshot) => {
            setGames(snapshot.val().games);
        });
        getFirebase().database().ref('users/1').on('value', (snapshot) => {
            setGreen(snapshot.val().green);
        });
        getFirebase().database().ref('users/1').on('value', (snapshot) => {
            setRed(snapshot.val().red);
        });
    }, []);

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: "I've played " + games + " games of Tic Tac Toe.\nGreen won " + green + " times and red did it " + red + " times.",
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
        <NativeBaseProvider>
            <View style={{flex: 1}}>
                <IconButton
                    top={"95%"}
                    variant="unstyled"
                    icon={<Icon size="lg" as={<Ionicons name="play"/>} color="#164e63"/>}
                    size="lg"  mt="24px"
                    onPress={() => navigation.navigate('Play')}
                >
                </IconButton>
                <Center top={"20%"}>
                    <Heading
                        style={{color: "#01CBC6"}}

                    >
                        Games played: {games}
                    </Heading>
                    <Heading
                        style={{color: "#166534"}}

                    >
                        Green: {green}
                    </Heading>
                    <Heading
                        style={{color: "#991b1b"}}

                    >
                        Red: {red}
                    </Heading>
                </Center>
                <View style={styles.bottomContainer}>
                    <IconButton
                        top={"117%"}
                        variant="unstyled"
                        icon={<Icon size="lg" as={<Entypo name="share"/>} color="#164e63"/>}
                        size="lg" mt="24px"
                        onPress={() => onShare()}
                    >
                    </IconButton>
                </View>


            </View>
        </NativeBaseProvider>

    );
}
const styles = StyleSheet.create({
    bottomContainer: {
        position: 'absolute',
        width: "100%",
    },
});
