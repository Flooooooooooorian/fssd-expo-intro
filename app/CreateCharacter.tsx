import {Text, TextInput, View, StyleSheet, KeyboardAvoidingView, Platform} from "react-native";
import {useState} from "react";

export default function CreateCharacter() {

    const [value, setValue] = useState<string>();

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"}>
            <TextInput value={value}
                       onChangeText={setValue}
                       placeholder="Name"
                       style={styles.input}
                       keyboardType='numeric'
            />
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderStyle: 'solid'
    }
});
