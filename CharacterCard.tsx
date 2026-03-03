import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {Character} from "./Character";
import {Link, useRouter} from "expo-router";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard({character}: CharacterCardProps) {

    const router = useRouter();

    const handlePress = () => {
        console.log("Press")
        router.push("/character/" + character.id);
    }

    return (
            <Pressable onPress={handlePress}>
                <View key={character.id} style={styles.characterCard}>
                    <Text style={styles.characterName}>{character.name}</Text>
                    <Text>{character.id}</Text>
                    <Image style={styles.image} src={character.image}/>
                </View>
            </Pressable>
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
