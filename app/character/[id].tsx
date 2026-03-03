import {View, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useLocalSearchParams} from "expo-router";

export default function CharacterDetails() {
    const { id } = useLocalSearchParams();

    return (
        <SafeAreaView>
            <Text>Character Details: {id}</Text>
        </SafeAreaView>
    )
}
