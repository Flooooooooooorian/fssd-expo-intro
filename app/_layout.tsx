import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import AuthProvider, {AuthContext} from "../AuthContext";
import {useContext} from "react";

export default function Layout() {

    const {user} = useContext(AuthContext)
    console.log("protected", user)

    return (
        <AuthProvider>
            <Tabs>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Rick & Morty Characters',
                        tabBarIcon: ({color, size}) => <Ionicons name='home'
                                                                 size={size}
                                                                 color={color}/>
                    }}
                />
                <Tabs.Screen
                    name="character/[id]"
                    options={{
                        title: 'Character Details',
                        tabBarIcon: ({color, size}) => <Ionicons name='shield'
                                                                 size={size}
                                                                 color={color}/>

                    }}
                />
                <Tabs.Protected guard={true}>
                    <Tabs.Screen
                        name="CreateCharacter"
                        options={{
                            title: 'Add',
                            tabBarIcon: ({color, size}) => <Ionicons name='add'
                                                                     size={size}
                                                                     color={color}/>

                        }}
                    />
                </Tabs.Protected>

                <Tabs.Screen
                    name="login"
                    options={{
                        title: 'Login',
                    }
                    }
                />
            </Tabs>
        </AuthProvider>
    )
}
