import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, Text} from 'react-native';
import {useContext, useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Character} from "../Character";
import CharacterCard from "../CharacterCard";
import {Link} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStorage from 'expo-secure-store';
import {AuthContext} from "../AuthContext";

export default function Index() {

    const [data, setData] = useState<Character[]>([]);
    const context = useContext(AuthContext)

    console.log("context:", context.user)


    useEffect(() => {
        AsyncStorage.getItem("characters")
            .then(value => {
                console.log("AsyncStorage", value)
            })
    }, []);

    useEffect(() => {
        console.log("Render")

        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(json => {
                setData(json.results);
                AsyncStorage.setItem("characters", JSON.stringify(json.results))
            })
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.myTest}>Open up App.tsx to start working on your app!</Text>
            <Link href="/character/1">
                <Text>Character Details</Text>
            </Link>
            <FlatList
                data={data}
                ListHeaderComponent={<Text style={styles.myTest}>Header</Text>}
                keyExtractor={(item) => item.id}
                renderItem={(element) => <
                    CharacterCard character={element.item}/>}
            />
            {/*<ScrollView>*/}
            {/*    {*/}
            {/*        data.map(character => <CharacterCard key={character.id}*/}
            {/*                                             character={character}/>)*/}
            {/*    }*/}
            {/*</ScrollView>*/}
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
    },
    myTest: {
        color: 'red',
    },
});
