import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {

    const name: string = "Florian";

    return (
        <View style={styles.container}>
            <Text style={styles.myTest}>Open up App.tsx to start working on your app!</Text>
            <Text>{name}</Text>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    myTest: {
        color: 'red',
    }
});
