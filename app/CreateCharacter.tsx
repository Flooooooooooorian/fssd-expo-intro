import {Text, TextInput, Image, StyleSheet, KeyboardAvoidingView, Platform, Pressable} from "react-native";
import {useContext, useEffect, useState} from "react";
import * as ImagePicker from "expo-image-picker";
import {AuthContext} from "../AuthContext";
import * as Location from 'expo-location';

export default function CreateCharacter() {

    const {login} = useContext(AuthContext);
    const [lcoation, setLocation] = useState<Location.LocationObject>();
    const [locationPermissions, requestPermissions] = Location.useForegroundPermissions()

    const [value, setValue] = useState<string>();
    const [image, setImage] = useState<string>();
    const cameraPermissions = ImagePicker.useCameraPermissions();


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

    console.log(locationPermissions)

    useEffect(() => {


        Location.hasServicesEnabledAsync().then((result) => {
                console.log(result)

            })


        Location.requestForegroundPermissionsAsync()
            .then((permission) => {
                console.log(permission)
                if (permission.granted) {
                    Location.getCurrentPositionAsync()
                        .then((location) => {
                            console.log(location)
                        })
                }
            });


        // const permissionResult = await Location.requestForegroundPermissionsAsync();
        // if (permissionResult) {
        //         const location = await Location.getCurrentPositionAsync();
        //
        //         console.log(location)
        // }

    }, []);

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
            <Image source={{uri: image}}
                   style={{height: 100, width: 100}}/>
            <Pressable onPress={() => {
                login("Florian")
            }}>
                <Text>Login</Text>
            </Pressable>
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
