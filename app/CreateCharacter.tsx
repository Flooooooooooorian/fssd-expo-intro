import {Text, TextInput, Image, StyleSheet, KeyboardAvoidingView, Platform, Pressable} from "react-native";
import {useEffect, useState} from "react";
import * as ImagePicker from "expo-image-picker";

export default function CreateCharacter() {

    const [value, setValue] = useState<string>();
    const [image, setImage] = useState<string>();
    const permissions = ImagePicker.useCameraPermissions();


    const handleImagePicker = async () => {
        const cameraPermissions = await ImagePicker.getCameraPermissionsAsync()
        if (cameraPermissions.granted === false) {
            const requestResult = await ImagePicker.requestCameraPermissionsAsync()
            if (requestResult.granted === false) {
                return
            }
        }


        const result = await ImagePicker.launchCameraAsync();
        console.log(result)
        if (result.canceled === false) {
            setImage(result.assets[0].uri)
        }
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : "height"}>
            <TextInput value={value}
                       onChangeText={setValue}
                       placeholder="Name"
                       style={styles.input}
                       keyboardType='numeric'
            />
            <Pressable onPress={handleImagePicker}>
                <Text>
                    Image
                </Text>
            </Pressable>
            <Image source={{uri: image}} style={{height: 100, width: 100}}/>
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
