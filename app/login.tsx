import {SafeAreaView} from "react-native-safe-area-context";
import {Pressable, Text, TextInput} from "react-native";
import {AuthContext} from "../AuthContext";
import {useContext} from "react";

export default function Login() {

    const {login} = useContext(AuthContext);

    return (
        <SafeAreaView>
            <TextInput  placeholder="username"/>
            <TextInput  placeholder="password"/>
            <Pressable onPress={() => {login("Florian")}}>
                <Text>Login</Text>
            </Pressable>
        </SafeAreaView>
    )
}
