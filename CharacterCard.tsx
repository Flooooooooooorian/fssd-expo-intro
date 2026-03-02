import {Image, StyleSheet, Text, View} from "react-native";
import {Character} from "./Character";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard({character}: CharacterCardProps) {

    return (
        <View key={character.id} style={styles.characterCard}>
            <Text style={styles.characterName}>{character.name}</Text>
            <Text>{character.id}</Text>
            <Image style={styles.image} src={character.image}/>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },
    characterCard: {
        margin: 20,
        backgroundColor: 'lightgray',
    },
    characterName: {
        fontSize: 20,
    }
});
