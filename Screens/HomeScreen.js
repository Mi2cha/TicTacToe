import {Button, View} from "react-native";
import * as React from 'react';


export default function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Button
                title="Play"
                onPress={() => navigation.navigate('Play')}
            />

        </View>
    );
}