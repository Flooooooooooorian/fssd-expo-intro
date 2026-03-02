import {StatusBar} from 'expo-status-bar';
import {FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from "react";
import {Character} from "./Character";
import {SafeAreaView} from "react-native-safe-area-context";
import CharacterCard from "./CharacterCard";

export default function App() {

    const [data, setData] = useState<Character[]>([]);
    // console.log(data)

    useEffect(() => {
        console.log("Render")

        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(json => {
                setData(json.results);
            })
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.myTest}>Open up App.tsx to start working on your app!</Text>
            <FlatList
                data={data}
                ListHeaderComponent={<Text style={styles.myTest}>Header</Text>}
                keyExtractor={(item) => item.id}
                renderItem={(element) => <CharacterCard character={element.item}/>}
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
