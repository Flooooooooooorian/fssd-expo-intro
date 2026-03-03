import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";

export default function Layout() {


    return (
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
            <Tabs.Screen
                name="CreateCharacter"
                options={{
                    title: 'Add',
                    tabBarIcon: ({color, size}) => <Ionicons name='add'
                                                             size={size}
                                                             color={color}/>

                }}
            />
        </Tabs>
    )
}
